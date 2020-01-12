// Import polyfills
import 'promise-polyfill/src/polyfill';

// Import third-party libraries
import svg4everybody from 'svg4everybody';

import { init as initLazyLoader } from './util/lazy-loader';

// TODO: import blocks

// Manually initialize third-party libraries
svg4everybody();

initLazyLoader();

// TODO: initialize blocks
