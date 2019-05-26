/**
 * @file Lazy loader for images
 */

// -------------------------- BEGIN MODULE VARIABLES --------------------------

const BUFFER_HEIGHT = 50;
const LAZY_SELECTOR = '.lazy';

let $images;

// --------------------------- END MODULE VARIABLES ---------------------------

// -------------------------- BEGIN UTILITY FUNCTIONS -------------------------

/**
 * Check if <tt>elem</tt> is in the browser's viewport.
 * 
 * @param {JQuery} $elem The element to check
 * @return {boolean} <tt>true</tt> if the element is in the viewport,
 *      <tt>false</tt> otherwise
 */
function isInViewport($elem) {
    const windowBottom = $(window).scrollTop() + $(window).height();
    return $elem.offset().top < (windowBottom + BUFFER_HEIGHT);
}

// --------------------------- END UTILITY FUNCTIONS --------------------------

// ----------------------------- BEGIN DOM METHODS ----------------------------

/**
 * Lazy-load the given <tt>img</tt> element.
 * 
 * @param {JQuery} $img The image element
 */
function loadImage($img) {
    if ($img.parent().is('picture')) {
        $img.siblings('source').forEach(function() {
            const $source = $(this);
            $source
                .attr('srcset', $source.attr('data-srcset'))
                .removeAttr('data-srcset');
        });
    }

    $img
        .attr('src', $img.attr('data-src'))
        .attr('srcset', $img.attr('data-srcset'))
        .removeAttr('data-src data-srcset')
        .removeClass('lazy');
}

// ------------------------------ END DOM METHODS -----------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------

/**
 * Initialize the lazy image loader
 */
function init() {
    $images = $(LAZY_SELECTOR);
}

/**
 * Load all images that have been scrolled into the viewport for the first time
 */
function scanImages() {
    if ($images.length === 0) {
        return;
    }

    $images = $images.filter(function() {
        const $img = $(this);

        if (!isInViewport($img)) {
            return true;
        }
        
        loadImage($img);        

        return false;
    });
}

// ---------------------------- END PUBLIC METHODS ----------------------------

export default {
    init,
    scanImages,
};
