/**
 * @file Fix for the Bitrix admin panel.
 * @author Andrey Glotov
 */

// Imports
import { throttle } from './helpers';

// -------------------------- BEGIN MODULE VARIABLES --------------------------

// Scroll event throttling interval
const SCROLL_INTERVAL = 100; 

// Element selectors
const SELECTOR = {
    BX_PANEL: '#bx-panel',
    BX_PANEL_PIN: '#bx-panel-pin',
    BX_PANEL_HIDER: '#bx-panel-hider',
    BX_PANEL_EXPANDER: '#bx-panel-expander',
};

// Element class names
const CLASSNAME = {
    BX_PANEL_FIXED: 'bx-panel-fixed',
};

// Is the panel fixed?
let isFixed = false;

// Map of DOM elements
const elements = {};

// Throttled callback
let executeCallback = null;

// --------------------------- END MODULE VARIABLES ---------------------------

// ---------------------------- BEGIN EVENT HANDLERS --------------------------

/**
 * Handle change of the bitrix panel class.
 */
function handleClassChange() {
    if (elements.bxPanel.classList.contains(CLASSNAME.BX_PANEL_FIXED)) {
        isFixed = true;
        window.removeEventListener('scroll', executeCallback, false);
        window.addEventListener('scroll', executeCallback, false);
    } else {
        window.addEventListener('scroll', executeCallback, false);
        isFixed = false;
    }
    executeCallback();
}

// ----------------------------- END EVENT HANDLERS ---------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------

/**
 * Detect presence of the Bitrix panel and execute the callback passing the
 * bounding rect and fixed flag as parameters.
 *
 * @param {function} callback The callback to execute.
 */
export default function bxPanelFix(callback) {
    const bxPanel = document.querySelector(SELECTOR.BX_PANEL);
    if (bxPanel == null) {
        return;
    }

    executeCallback = throttle(() => {
        callback(bxPanel.getBoundingClientRect(), isFixed);
    }, SCROLL_INTERVAL);

    const bxPanelPin = bxPanel.querySelector(SELECTOR.BX_PANEL_PIN);
    if (bxPanelPin != null) {
        bxPanelPin.addEventListener('click', executeCallback, false);
    }

    const bxPanelHider = bxPanel.querySelector(SELECTOR.BX_PANEL_HIDER);
    if (bxPanelHider != null) {
        bxPanelHider.addEventListener('click', executeCallback, false);
    }

    const bxPanelExpander = bxPanel.querySelector(SELECTOR.BX_PANEL_EXPANDER);
    if (bxPanelExpander != null) {
        bxPanelExpander.addEventListener('click', executeCallback, false);
    }

    elements.bxPanel = bxPanel;
    elements.bxPanelPin = bxPanelPin;
    elements.bxPanelHider = bxPanelHider;
    elements.bxPanelExpander = bxPanelExpander;

    handleClassChange();
}

// ---------------------------- END PUBLIC METHODS ----------------------------
