import burger from './modules/burger';
import { parallaxHero } from './modules/parallaxHero';
import { blur } from './modules/blur';
import { preloader } from './modules/preloader';
import { slider } from './modules/slider';
import scrollButtons from './modules/scrollButtons';

// preloader.start();

window.onload = function() {
    
    scrollButtons();
    slider.init();
    burger();
    blur.set();
    setTimeout(preloader.hide, 500);
};

window.onscroll = function() {
    const wScroll = window.pageYOffset;
    if (wScroll <= 900) {
        parallaxHero.init(wScroll);
    }
};

window.onresize = function() {
    blur.set();
};








// //
// let start = false;

// const slideItem = function(slider, axis, direction) {
//     // const items = Array.from(slider.children);
//     // const activeItem = items.filter(item => item.classList.contains('active'));
//     // console.log(slider.nextSibling)
//     let size;
//     if (axis === 'X') {
//         size = slider.children[0].offsetWidth;
//     }
//     if (axis === 'Y') {
//         size = slider.children[0].offsetHeight;
//     }
    
//     const offset = size * direction + 'px';


//     if (direction < 0) {
//         slider.style.transition = 'transform 5s';
//         slider.style.transform = `translate${axis}(${offset})`;
//     } else {
        
//         slider.style.transform = `translate${axis}(-${offset})`;
//         slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
//         slider.style.transition = 'transform 5s';
//         // slider.style.transform = 'translate(0, 1px)';

//         slider.style.transform = `translate${axis}(${offset})`;
//         // slider.style.transition = 'transform .5s';
//         // slider.style.transform = `translate${axis}(-${offset})`;
//         // slider.style.transform = `translate${axis}(0)`;
//         // slider.style.transition = '';
//     }


//     // if (direction < 0) {
//     // slider.style.transition = 'transform .5s';
//     // slider.style.transform = `translate${axis}(${offset})`;
//     // }
//     // if (direction > 0) {
//     //     // slider.insertBefore(slider.lastElementChild, slider.firstElementChild);

        
//     //     slider.style.transform = `translate${axis}(${offset})`;
        
        
//     // //     // slider.style.transform = `translate${axis}(${offset})`;
//     //     slider.style.transition = 'transform 5s';
//     //     slider.style.transform = `translateY(0)`;
//     //     slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
        
//     //     // slider.style.transition = 'transform 5s';
//     // //     slider.style.transform = 'translateY(0, 35%)';
//     // }
    

// };



// const descr = document.querySelector('.descr');
// const preview = document.querySelector('.preview');
// const prev = document.querySelector('.prev');
// const next = document.querySelector('.next');

// // for (let i = 0; i < prev.children; i++) {
// //     prev.children[i].style.top = i * 100 + '%';
// // }
// const nextControl = document.querySelector('.slide-next');
// const prevControl = document.querySelector('.slide-prev');

// nextControl.addEventListener('click', (e) => {
//     e.preventDefault();
//     slideItem(preview, 'X', -1);
//     slideItem(next, 'Y', -1);
//     // start = true;
//     slideItem(prev, 'Y', 1);
//     // start = false;
//     console.log('int next');
// });

// prevControl.addEventListener('click', (e) => {
//     e.preventDefault();
//     slideItem(preview, 'X', 1);
//     slideItem(next, 'Y', 1);
//     slideItem(prev, 'Y', -1);
//     console.log(' in prev');
// });
 
// preview.addEventListener('transitionend', () => {
//     preview.style.transition = '';
//     preview.style.transform = 'translate(0, 0)';
//     preview.appendChild(preview.firstElementChild);
//     console.log(' in moveleement' ,preview);
// });

// prev.addEventListener('transitionstart', () => {
//     console.log('STRT = ', start);
//     // if (start) {
//     // prev.insertBefore(prev.lastElementChild, prev.firstElementChild);
//     // prev.style.transform = 'translate(0, 0)';
//     // }
// });

// prev.addEventListener('transitionend', () => {
//     prev.style.transform = 'translate(0, 0)';
//     prev.style.transition = '';
// });

// next.addEventListener('transitionend', () => {
//     next.style.transition = '';
//     next.style.transform = 'translate(0, 0)';
//     next.appendChild(next.firstElementChild);
//     console.log(' in movelee!!ment' ,next);
// });
// // prev.addEventListener('transitionstart', () => {
// //     // prev.style.transition = '';
// //     // prev.style.transform = 'translate(0, 0)';
// //     // prev.appendChild(prev.firstElementChild);
// //     // // prev.insertBefore(prev.lastElementChild, prev.firstElementChild);
// //     // // prev.style.transition = '.5s';
// //     // // prev.style.transform = 'translate(0, 0)';
// //     // console.log(' in movelee!!ment' ,prev);
// // });
// // next.addEventListener('transitionend', moveElement(next));
// // prev.addEventListener('transitionend', moveElement(prev));









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
