import burger from './modules/burger';
import { parallaxHero } from './modules/parallaxHero';
import { blur } from './modules/blur';

burger();
blur.set();

window.onscroll = function() {
    const wScroll = window.pageYOffset;
    parallaxHero.init(wScroll);
};

window.onresize = function() {
    blur.set();
};