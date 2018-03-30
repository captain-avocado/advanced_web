import flipper from './modules/flipper';
import parallax from './modules/parallax';
import preloader from './modules/preloader';
import flipStart from './modules/flipStart';


window.onload = init;
function init() {
    preloader();
    flipStart();
    flipper();
    parallax();
}

