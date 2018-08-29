/**
 * Create jQuery plugin for custom component.
 * 
 * @param {function} ctor The constructor to create a component instance.
 * @param {string} dataKey A unique key naming this component. 
 * @return {function} A function ready to be used as a jQuery plugin.
 */
export default function createComponent(ctor, dataKey) {
    return function(action, ...args) {
        return this.each(function() {
            let object = $(this).data(dataKey);
            if (!object) {
                object = new ctor(this, action);
                $(this).data(dataKey, object);
            }

            if (
                (typeof action == 'string') &&
                (typeof object[action] == 'function')
            ) {
                object[action](...args);
            }
        });
    };
}
