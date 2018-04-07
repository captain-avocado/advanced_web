import burger from './modules/burger';
import { parallaxHero } from './modules/parallaxHero';
import { preloader } from './modules/preloader';
import dragElement from './modules/dragElement';
import scrollButtons from './modules/scrollButtons';


import googleMaps from 'google-maps';
import {initMap} from './modules/initMap';

preloader.start();

window.onload = function() {
    scrollButtons();
    burger();
    googleMaps.load(initMap);
    googleMaps.KEY = 'AIzaSyDb-hSAeXf2JnxUCPnrIL8W54NMBW8rCRs';
    dragElement(document.getElementById(('contacts')));
    setTimeout(preloader.hide, 500);
};

window.onscroll = function() {
    const wScroll = window.pageYOffset;
    parallaxHero.init(wScroll);
};

