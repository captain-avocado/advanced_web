import burger from './modules/burger';
import { parallaxHero } from './modules/parallaxHero';
import { blur } from './modules/blur';
import { preloader } from './modules/preloader';
import { slider } from './modules/slider';
import scrollButtons from './modules/scrollButtons';

preloader.start();

window.onload = function() {
    scrollButtons();
    slider.init();
    burger();
    setTimeout(preloader.hide, 500);
};

window.onscroll = function() {
    const wScroll = window.pageYOffset;
    if (wScroll <= 900) {
        parallaxHero.init(wScroll);
    }
    blur.set();
};

window.onresize = function() {
    blur.set();
};

