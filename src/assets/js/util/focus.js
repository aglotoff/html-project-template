/**
 * Utility to handle focus styles for accessibility users.
 * 
 * When the user tabs to an element on the page, add a special utility class to
 * the root HTML element, and use CSS cascade to add specific styles to the
 * currently active element.
 * 
 * @author Andrey Glotov
 */

// -------------------------- BEGIN MODULE VARIABLES --------------------------

const FOCUS_CLASS = 'focus-utility';
const KEY_TAB = 9;

const rootElement = document.documentElement;

// --------------------------- END MODULE VARIABLES ---------------------------

// ---------------------------- BEGIN EVENT HANDLERS --------------------------

/**
 * Detect tab key press event and apply the focus utility class to the root
 * element.
 * 
 * @param {KeyboardEvent} e The event object.
 */
function handleKeyDown(e) {
    if (e.keyCode === KEY_TAB) {
        rootElement.classList.add(FOCUS_CLASS);
        rootElement.addEventListener('mousedown', handleMouseDown, false);
        rootElement.removeEventListener('keydown', handleKeyDown, false);
    }
}

/**
 * Detect mouse down event and remove the focus utility class when clicked
 * outside of the active element.
 * 
 * @param {MouseEvent} e The event object.
 */
function handleMouseDown(e) {
    const activeElement = document.activeElement;
    if (!activeElement) {
        return;
    }

    const target = e.target;
    if ((target === document) || activeElement.contains(target)) {
        return;
    }

    document.documentElement.classList.remove(FOCUS_CLASS);
    document.addEventListener('keydown', handleKeyDown, false);
    document.removeEventListener('mousedown', handleMouseDown, false);
}

// ----------------------------- END EVENT HANDLERS ---------------------------

// ---------------------------- BEGIN PUBLIC METHODS --------------------------

/**
 * Initialize the focus utility.
 */
export function init() {
    document.addEventListener('keydown', handleKeyDown, false);
}

// ----------------------------- END PUBLIC METHODS ---------------------------
