// Polyfill imports
import 'core-js/features/object/assign';
import 'core-js/features/promise';

// Library imports
import svg4everybody from 'svg4everybody';

// Utility imports
import initFocusUtility from '@utils/focus';
import LazyLoader from '@utils/lazy-loader';

// Component imports
// TODO: add code here
// import Example from '@components/example';

// Initialize libraries
svg4everybody();

// Initialize utilities
initFocusUtility();
LazyLoader.init();

// Initialize components
// TODO: add code here
