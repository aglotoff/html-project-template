/**
 * @file Implementation of the page block
 */

// TODO: imports other blocks

// -------------------------- BEGIN MODULE VARIABLES --------------------------
const RESIZE_INTERVAL = 200;    // Resize event debouncing interval
const SCROLL_INTERVAL = 200;    // Scroll event throttling interval

let resizeTimer = null;

let scrollTimer = null;
let wasScrolled = false;
// --------------------------- END MODULE VARIABLES ---------------------------

// --------------------------- BEGIN EVENT HANDLERS ---------------------------
/**
 * Handle the window scroll event
 */
function handleWindowScroll() {
    // TODO: add code
}

/**
 * Handle the window resize event
 */
function handleWindowResize() {
    // TODO: add code
}

/**
 * Debounce the window resize event
 */
function debounceWindowResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleWindowResize, RESIZE_INTERVAL);
}

/**
 * Throttle the window scroll event
 */
function throttleWindowScroll() {
    if (scrollTimer) {
        // Ensure that we catch and execute that last invocation.
        wasScrolled = true;
        return;
    }

    handleWindowScroll();

    scrollTimer = this.setTimeout(function() {
        scrollTimer = null;
        if (wasScrolled) {
            handleWindowScroll();
            wasScrolled = false;
        }
    }, SCROLL_INTERVAL);
}
// ---------------------------- END EVENT HANDLERS ----------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the page block.
 * @return true
 */
function initBlock() {
    $(window).on({
        resize: debounceWindowResize,
        scroll: throttleWindowScroll,
    });

    // TODO: initialize other blocks

    // Process the initial window size and scroll position
    handleWindowResize();
    handleWindowScroll();

    return true;
}
// ---------------------------- END PUBLIC METHODS ----------------------------

export default {
    initBlock,
};
