import burger from './modules/burger';
import { parallaxHero } from './modules/parallaxHero';
import preloader from './modules/preloader';
import dragElement from './modules/dragElement';

import googleMaps from 'google-maps';
import {initMap} from './modules/initMap';

window.onload = function() {
    preloader();
    burger();
    googleMaps.load(initMap);
    dragElement(document.getElementById(('contacts')));
};

window.onscroll = function() {
    const wScroll = window.pageYOffset;
    parallaxHero.init(wScroll);
};

