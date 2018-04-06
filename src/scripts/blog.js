import burger from './modules/burger';
import { parallaxHero } from './modules/parallaxHero';
import { preloader } from './modules/preloader';
import paperListModule from './modules/paperList';
// import paperListToggle from './modules/paperListToggle';
// import scrollButtons from './modules/scrollButtons';


function Swipe(elem, callback) {
    var self = this;
    this.callback = callback;

    function handleEvent(e) {
        self.touchHandler(e);
    }

    elem.addEventListener('touchstart', handleEvent, false);
    elem.addEventListener('touchmove', handleEvent, false);
    elem.addEventListener('touchend', handleEvent, false);
}
Swipe.prototype.touches = {
    'touchstart': {'x':-1, 'y':-1},
    'touchmove' : {'x':-1, 'y':-1},
    'touchend'  : false,
    'direction' : 'undetermined',
};
Swipe.prototype.touchHandler = function (event) {
    var touch;
    if (typeof event !== 'undefined'){
        if (typeof event.touches !== 'undefined') {
            touch = event.touches[0];
            switch (event.type) {
            case 'touchstart':
            case 'touchmove':
                this.touches[event.type].x = touch.pageX;
                this.touches[event.type].y = touch.pageY;
                break;
            case 'touchend':
                this.touches[event.type] = true;
                var x = (this.touches.touchstart.x - this.touches.touchmove.x),
                    y = (this.touches.touchstart.y - this.touches.touchmove.y);
                if (x < 0) x /= -1;
                if (y < 0) y /= -1;
                if (x > y)
                    this.touches.direction = this.touches.touchstart.x < this.touches.touchmove.x ? 'right' : 'left';
                else
                    this.touches.direction = this.touches.touchstart.y < this.touches.touchmove.y ? 'down' : 'up';
                this.callback(event, this.touches.direction);
                break;
            }
        }
    }
};

const menuTrigger = document.querySelector('.adaptive-menu-trigger');

const paperList = document.querySelector('.paper-list');
const paperListWrap = paperList.parentElement;
menuTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    menuTrigger.classList.toggle('active');
    paperListWrap.classList.toggle('active');
    if (paperListWrap.clientWidth < window.innerWidth*0.45 + 1) {
        paperList.classList.remove('active');
    }
    // if (paperListWrap.clientWidth >= window.innerWidth*0.45) {
    //     paperList.classList.add('active');
    // }
});

paperListWrap.addEventListener('transitionend', () => {
    console.log('helloe ');
    if (paperListWrap.clientWidth) {
    // setTimeout(() => {
        paperList.classList.add('active');
    // paperListWrap.style.transition = 'width 0';
    // }, 5);
    }        
    
});

new Swipe(document.querySelector('.blog'), (e, dir) => {
    e.preventDefault();
    if (dir === 'right') {
        menuTrigger.classList.toggle('active');
        paperListWrap.classList.toggle('active');
        if (paperListWrap.clientWidth < window.innerWidth*0.45 + 1) {
            paperList.classList.remove('active');
        }
    }

});

preloader.start();

window.onload = function() {
    // paperList();
    // paperListToggle();
    burger();
    setTimeout(preloader.hide, 500);
};

window.onscroll = function() {
    const wScroll = window.pageYOffset;
    paperListModule(wScroll);
    parallaxHero.init(wScroll);
};