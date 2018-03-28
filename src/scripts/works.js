import burger from './modules/burger';
import { parallaxHero } from './modules/parallaxHero';

burger();

window.onscroll = function() {
    const wScroll = window.pageYOffset;
    parallaxHero.init(wScroll);
};