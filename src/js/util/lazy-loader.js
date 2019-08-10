/**
 * @file Lazy loader for images
 */

// -------------------------- BEGIN MODULE VARIABLES --------------------------

const BUFFER_HEIGHT = 50;
const LAZY_CLASS = 'lazy';

let images = [];

// --------------------------- END MODULE VARIABLES ---------------------------

// -------------------------- BEGIN UTILITY FUNCTIONS -------------------------

/**
 * Check if <tt>elem</tt> is in the browser's viewport.
 * 
 * @param {HTMLElement} element The element to check
 * @return {boolean} <tt>true</tt> if the element is in the viewport,
 *      <tt>false</tt> otherwise
 */
export function isInViewport(element) {
    const elementTop = element.getBoundingClientRect().top;
    return (elementTop <= window.innerHeight + BUFFER_HEIGHT);
}

// --------------------------- END UTILITY FUNCTIONS --------------------------

// ----------------------------- BEGIN DOM METHODS ----------------------------

/**
 * Lazy-load the given <tt>img</tt> element.
 * 
 * @param {HTMLImageElement} img The image element
 */
function loadImage(img) {
    const parentElement = img.parentElement;
    if (parentElement.tagName === 'PICTURE') {
        const sources = parent.querySelectorAll('source');
        for (let i = 0; i < sources.length; i++) {
            const source = sources[i];

            source.setAttribute('srcset', source.getAttribute('data-srcset'));
            source.removeAttribute('data-srcset');
        }
    }

    img.setAttribute('src', img.getAttribute('data-src'));
    img.setAttribute('srcset', img.getAttribute('data-srcset'));
    img.removeAttribute('data-srcset');
    img.classList.remove(LAZY_CLASS);
}

// ------------------------------ END DOM METHODS -----------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------

/**
 * Initialize the lazy image loader
 */
export function init() {
    images = [].slice.call(document.querySelectorAll(`img.${LAZY_CLASS}`));
}

/**
 * Load all images that have been scrolled into the viewport for the first time
 * 
 * @return {number} The number of images not yet scheduled for loading
 */
export function scanImages() {
    if (images.length > 0) {
        images = images.filter((img) => {
            if (isInViewport(img)) {
                loadImage(img);
                return false;
            }
            return true;
        });
    }

    return images.length;
}

/**
 * Add new image to be lazy-loaded
 * 
 * @param {HTMLImageElement} img The image element to be added
 */
export function addImage(img) {
    images.push(img);
}

// ---------------------------- END PUBLIC METHODS ----------------------------
