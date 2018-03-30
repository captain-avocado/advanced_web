import flipper from './modules/flipper';
import parallax from './modules/parallax';

const flipperBlock = document.querySelector('.flipper');

window.onload = init;
function init() {
    flipperBlock.classList.add('active');
    flipper();
    parallax();
}

