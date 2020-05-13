/**
 * @file DOM helper functions.
 * @author Andrey Glotov
 */

const matches =
    Element.prototype.matches || 
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector ||
    Element.prototype.webkitMatchesSelector;

/**
 * Starting with the element itself, and traversing up through its ancestors,
 * find the first element that matches the provided selector.
 * 
 * @param {HTMLElement} element The element to start testing.
 * @param {string} selector String containing a selector list.
 * @return {HTMLElement|null} The first matching element, or null if no such
 *  element exists.
 */
export function closest(element, selector) {
    if (Element.prototype.closest) {
        return element.closest(selector);
    } else {
        while (element != null) {
            if (matches.call(element, selector)) {
                return element;
            }

            element = element.parentElement;
        }
        return null;
    }
}

/**
 * Force a reflow.
 * 
 * @param {HTMLElement} el The element whose styles have been changed.
 */
export function forceReflow(el) {
    void(el.offsetHeight);
}

/**
 * Get transition duration for the specified element.
 * 
 * @param {HTMLElement} el The element to compute transition duration on.
 * @return {number} transition duration in milliseconds.
 */
export function getTransitionDuration(el) {
    const style = getComputedStyle(el);
    
    const duration = style.transitionDuration || '';
    const delay = style.transitionDelay || '';
    
    if (!duration && !delay) {
        return 0;
    }
    
    const floatDuration = parseFloat(duration);
    const floatDelay = parseFloat(delay);
    
    const msDuration = (floatDuration + floatDelay) * 1000;
    return isNaN(msDuration) ? 0 : msDuration;
}

/**
 * Detect the end of CSS transition.
 * 
 * @param {HTMLElement} el The element to detect transition end on.
 * @return {Promise} Promise that resolves when CSS transition ends.
 */
export function detectTransitionEnd(el) {
    const duration = getTransitionDuration(el);
    
    let handleTransitionEnd;
    
    return new Promise(function(resolve) {
        handleTransitionEnd = (e) => {
            if (e.target === el) {
                resolve();
            }
        };
        el.addEventListener('transitionend', handleTransitionEnd, false);
      
        // In case the 'transitionend' event is not supported, or is somehow
        // lost, or there is no transition property defined, setup a timer to 
        // resolve the promise after the given duration.
        setTimeout(resolve, duration);
    }).then(() => {
        el.removeEventListener('transitionend', handleTransitionEnd, false);
    });
}

/**
 * Generic animation function.
 * 
 * @param {function} cb The callback to invoke for each animation step.
 * @param {number} duration Animation duration in milliseconds.
 */
export function animate(cb, duration) {
    const startTime = ('now' in window.performance)
        ? window.performance.now()
        : new Date().getTime();

    requestAnimationFrame(function step(currentTime) {
        const deltaTime = currentTime - startTime;
        if (deltaTime >= duration) {
            cb(1);
        } else {
            const progress = deltaTime / duration;
            cb(progress);

            requestAnimationFrame(step);
        }
    });
}

/**
 * Scroll smoothly to a given element.
 * 
 * @param {HTMLElement} target The element to scroll to.
 * @param {number} duration A number of milliseconds determining how long 
 *  the scrolling animation will run.
 * @return {Promise} A promise that resolves when the animation completes.
 */
export function scrollTo(target, duration) {
    const startOffset = window.pageYOffset;
    const leftOffset = window.pageXOffset;

    const documentHeight = document.body.clientHeight;
    const windowHeight = window.innerHeight;

    let targetOffset;
    if ((documentHeight - target.offsetTop) < windowHeight) {
        targetOffset = documentHeight - windowHeight;
    } else {
        targetOffset = target.offsetTop;
    }

    return new Promise(function(resolve) {
        animate(function onStep(progress) {
            if (progress === 1) {
                window.scroll(leftOffset, targetOffset);
                resolve();
            } else {
                window.scroll(
                    leftOffset,
                    startOffset + progress * (targetOffset - startOffset)
                );
            }
        }, duration);
    });
}

/**
 * Determine the size of 1 em for the given element.
 * 
 * @param {HTMLElement} elem The element whose em size is to be computed.
 * @return {number} The size of 1 em in pixels.
 */
export function getEmSize(elem) {
    return +getComputedStyle(elem).fontSize.match(/\d*\.?\d*/)[0];
}
