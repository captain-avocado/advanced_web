import burger from './modules/burger';
import { parallaxHero } from './modules/parallaxHero';
import { blur } from './modules/blur';
import preloader from './modules/preloader';

window.onload = function() {
    preloader();
    burger();
    blur.set();
};

window.onscroll = function() {
    const wScroll = window.pageYOffset;
    parallaxHero.init(wScroll);
};

window.onresize = function() {
    blur.set();
};

const slideItem = function(slider, axis, direction) {
    // const items = Array.from(slider.children);
    // const activeItem = items.filter(item => item.classList.contains('active'));
    // console.log(slider.nextSibling)
    let size;
    if (axis === 'X') {
        size = slider.children[0].offsetWidth;
    }
    if (axis === 'Y') {
        size = slider.children[0].offsetHeight;
    }
    
    const offset = size * direction + 'px';

    slider.style.transition = 'transform .5s';
    slider.style.transform = `translate${axis}(${offset})`;

};


const descr = document.querySelector('.descr');
const preview = document.querySelector('.preview');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const nextControl = document.querySelector('.slide-next');
const prevControl = document.querySelector('.slide-prev');

// function moveElement(element) {
//     element.style.transition = '';
//     element.style.transform = 'translate(0, 0)';
//     element.appendChild(element.firstElementChild);
//     console.log(' in movelee!!ment' ,element);
// }

// const translateLayout = (view, controlNext, controlPrev) => {
//     slideItem(preview, 'X', -1);
//     slideItem(next, 'Y', -1);
//     slideItem(prev, 'Y', 1);
// };

nextControl.addEventListener('click', (e) => {
    e.preventDefault();
    slideItem(preview, 'X', -1);
    slideItem(next, 'Y', -1);
    slideItem(prev, 'Y', 1);
    console.log('int next');
});

prevControl.addEventListener('click', (e) => {
    e.preventDefault();
    slideItem(preview, 'X', 1);
    slideItem(next, 'Y', 1);
    slideItem(prev, 'Y', -1);
    console.log(' in prev');
});
 
preview.addEventListener('transitionend', () => {
    preview.style.transition = '';
    preview.style.transform = 'translate(0, 0)';
    preview.appendChild(preview.firstElementChild);
    console.log(' in moveleement' ,preview);
});
next.addEventListener('transitionend', () => {
    next.style.transition = '';
    next.style.transform = 'translate(0, 0)';
    next.appendChild(next.firstElementChild);
    console.log(' in movelee!!ment' ,next);
});
prev.addEventListener('transitionend', () => {
    prev.style.transition = '';
    prev.style.transform = 'translate(0, 0)';
    prev.appendChild(prev.firstElementChild);
    console.log(' in movelee!!ment' ,prev);
});
// next.addEventListener('transitionend', moveElement(next));
// prev.addEventListener('transitionend', moveElement(prev));









// const slider = document.querySelector('.prev');
// const item = document.querySelector('.controls__prev');
// const button = document.querySelector('.controls__link');

// console.log(slider);
// const array = Array.from(slider.children);



// button.addEventListener('click', (e) => {
//     e.preventDefault();
//     item.style.transform = 'translateY(-100%)';
//     item.classList.remove
// });
