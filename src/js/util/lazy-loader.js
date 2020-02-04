/**
 * @file Lazy loader for images.
 * @author Andrey Glotov
 */

import { throttle } from './helpers';

// -------------------------- BEGIN MODULE VARIABLES --------------------------

// Scroll event throttling interval
const SCROLL_INTERVAL = 200; 

// Vertical offset allowing the image to start loading before we scroll to it
const BUFFER_HEIGHT = 50;       

// Class applied to all images that have to be lazy-loaded
const LAZY_CLASS = 'lazy';      

// The list of all images 
let images = [];

// Throttle the window scroll event handler
const handleWindowScroll = throttle(scanImages, SCROLL_INTERVAL);

// --------------------------- END MODULE VARIABLES ---------------------------

// -------------------------- BEGIN UTILITY FUNCTIONS -------------------------

/**
 * Check if <tt>elem</tt> is in the browser's viewport.
 * 
 * @param {HTMLElement} element The element to check
 * @return {boolean} <tt>true</tt> if the element is in the viewport,
 *      <tt>false</tt> otherwise
 */
function isInViewport(element) {
    const elementTop = element.getBoundingClientRect().top;
    return (elementTop <= window.innerHeight + BUFFER_HEIGHT);
}

// --------------------------- END UTILITY FUNCTIONS --------------------------

// ----------------------------- BEGIN DOM METHODS ----------------------------

/**
 * Lazy-load the given <tt>img</tt> element.
 * 
 * @param {HTMLImageElement} img The image element to be loaded.
 */
function loadImage(img) {
    const parentElement = img.parentElement;
    if (parentElement.tagName === 'PICTURE') {
        const sources = parentElement.querySelectorAll('source');
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
 * Load all images that have been scrolled into the viewport for the first time.
 * 
 * @return {number} The number of images not yet scheduled for loading.
 */
export function scanImages() {
    if (images.length > 0) {
        images = images.filter(function(img) {
            if (isInViewport(img)) {
                loadImage(img);
                return false;
            }
            return true;
        });

        if (images.length === 0) {
            window.removeEventListener('scroll', handleWindowScroll);
        }
    }

    return images.length;
}

/**
 * Add new image to be lazy-loaded.
 * 
 * @param {HTMLImageElement} img The image element to be added.
 */
export function addImage(img) {
    images.push(img);

    if (images.length === 1) {
        window.addEventListener('scroll', handleWindowScroll);
    }
}

/**
 * Initialize the lazy loader.
 */
export function init() {
    images = [].slice.call(document.querySelectorAll(`img.${LAZY_CLASS}`));
    
    if (images.length > 0) {
        window.addEventListener('scroll', handleWindowScroll);
    }
}

// ---------------------------- END PUBLIC METHODS ----------------------------
