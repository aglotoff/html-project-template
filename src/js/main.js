// Polyfill imports
import 'core-js/features/object/assign';
import 'core-js/features/promise';

// Library imports
import svg4everybody from 'svg4everybody';

// Utility imports
import bxPanelFix from './util/bx-panel-fix';
import * as FocusUtility from './util/focus';
import * as LazyLoader from './util/lazy-loader';

// Block imports
// TODO: add code here

// Initialize libraries
svg4everybody();

// Initialize utilities
FocusUtility.init();
LazyLoader.init();

bxPanelFix((panel, isFixed) => {
    void(panel);
    void(isFixed);
});
