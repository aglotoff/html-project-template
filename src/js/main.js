// Polyfill imports
import 'promise-polyfill/src/polyfill';

// Third-party imports
import svg4everybody from 'svg4everybody';

// Utility imports
import * as FocusUtility from './util/focus';
import * as LazyLoader from './util/lazy-loader';

// Block imports
// TODO: add code here

svg4everybody();

FocusUtility.init();
LazyLoader.init();
