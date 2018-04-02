import burger from './modules/burger';
import { parallaxHero } from './modules/parallaxHero';
import { preloader } from './modules/preloader';

preloader.start();

window.onload = function() {
    burger();
    setTimeout(preloader.hide, 500);
};

window.onscroll = function() {
    const wScroll = window.pageYOffset;
    parallaxHero.init(wScroll);
};