// Swiper 8.4.7
import './vendor/swiper';
import './vendor/focus-visible-polyfill';

import {gsap} from './vendor/gsap.min.js';
import {ScrollTrigger} from './vendor/scroll-trigger';
import {ScrollToPlugin} from './vendor/scroll-to-plugin.js';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
