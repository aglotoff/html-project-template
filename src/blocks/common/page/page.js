/**
 * @file Implementation of the page block
 */

// TODO: block imports go here

// -------------------------- BEGIN MODULE VARIABLES --------------------------
const RESIZE_INTERVAL = 200;    // Resize debouncing interval
const SCROLL_INTERVAL = 200;    // Scroll throttling interval

let resizeTimer = null;

let scrollTimer = null;
let wasScrolled = false;
// --------------------------- END MODULE VARIABLES ---------------------------

// --------------------------- BEGIN EVENT HANDLERS ---------------------------
/**
 * Handle the window scroll event
 */
function onWindowScroll() {
    // TODO: add code
}

/**
 * Handle the window resize event
 */
function onWindowResize() {
    // TODO: add code
}
// ---------------------------- END EVENT HANDLERS ----------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the page block.
 * @return true
 */
function initBlock() {
    $(window).on({
        // Debounce the window resize event.
        resize: function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(onWindowResize, RESIZE_INTERVAL);
        },

        // Throttle the window scroll event.
        scroll: function() {
            if (scrollTimer) {
                // ensure that we catch and execute that last invocation.
                wasScrolled = true;
                return;
            }

            onWindowScroll();

            scrollTimer = this.setTimeout(function() {
                scrollTimer = null;
                if (wasScrolled) {
                    onWindowScroll();
                    wasScrolled = false;
                }
            }, SCROLL_INTERVAL);
        },
    });

    // TODO: initialize blocks

    // Process the initial window size and scroll position.
    onWindowResize();
    onWindowScroll();

    return true;
}
// ---------------------------- END PUBLIC METHODS ----------------------------

export default {
    initBlock,
};
