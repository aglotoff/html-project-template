// Polyfill imports
import 'core-js/features/object/assign';
import 'core-js/features/promise';

// Library imports
import svg4everybody from 'svg4everybody';

// Utility imports
import initFocusUtility from './util/focus';
import LazyLoader from './util/lazy-loader';

// Component imports
// TODO: add code here

// Initialize libraries
svg4everybody();

// Initialize utilities
initFocusUtility();
LazyLoader.init();

// Initialize components
// TODO: add code here
