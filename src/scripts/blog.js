import burger from './modules/burger';
import { parallaxHero } from './modules/parallaxHero';
import preloader from './modules/preloader';

window.onload = function() {
    preloader();
    burger();
};

window.onscroll = function() {
    const wScroll = window.pageYOffset;
    parallaxHero.init(wScroll);
};