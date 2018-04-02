import flipper from './modules/flipper';
import parallax from './modules/parallax';
import {preloader} from './modules/preloader';
import flipStart from './modules/flipStart';

preloader.start();

window.onload = init;

function init() {
    // flipStart();
    flipper();
    parallax();
    setTimeout(preloader.hide, 500);
    flipStart();

}



