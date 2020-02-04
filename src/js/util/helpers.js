/**
 * @file Miscellaneous helper functions.
 * @author Andrey Glotov
 */

/**
 * Debounce function execution.
 * 
 * @param {function} cb The function to execute.
 * @param {number} interval The debouncing interval in milliseconds.
 * @return {function} The debounced function.
 */
export function debounce(cb, interval) {
    let timer = null;

    return function() {
        clearTimeout(timer);
        timer = setTimeout(cb, interval);
    };
}

/**
 * Throttle function execution.
 * 
 * @param {function} cb The function to execute.
 * @param {number} interval The throttling interval in milliseconds.
 * @return {function} The throttled function.
 */
export function throttle(cb, interval) {
    let called = false;
    let timer = null;

    return function() {
        if (timer !== null) {
            // Ensure that we catch and execute that last invocation.
            called = true;
            return;
        }

        cb();

        timer = setTimeout(function() {
            timer = null;
            if (called) {
                cb();
                called = false;
            }
        }, interval);
    };
}
