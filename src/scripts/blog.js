import burger from './modules/burger';
import { parallaxHero } from './modules/parallaxHero';
import { preloader } from './modules/preloader';
import paperList from './modules/paperList';
import scrollButtons from './modules/scrollButtons';
import paperListLinks from './modules/paperListLinks';

preloader.start();

window.onload = function() {
    scrollButtons();
    paperListLinks();
    burger();
    setTimeout(preloader.hide, 500);
};

window.onscroll = function() {
    const wScroll = window.pageYOffset;
    paperList(wScroll);
    parallaxHero.init(wScroll);
};