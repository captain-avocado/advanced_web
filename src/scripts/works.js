import burger from './modules/burger';
import { parallaxHero } from './modules/parallaxHero';
import { blur } from './modules/blur';
import preloader from './modules/preloader';

window.onload = function() {
    preloader();
    burger();
    blur.set();
};

window.onscroll = function() {
    const wScroll = window.pageYOffset;
    parallaxHero.init(wScroll);
};

window.onresize = function() {
    blur.set();
};