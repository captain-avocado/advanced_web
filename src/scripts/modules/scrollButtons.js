import animateScroll from './animateScroll';

export default function scrollTop() {
    const scrollTopBtn = document.getElementById('scroll-top');
    const scrollDownBtn = document.getElementById('scroll-down');

    if (scrollTopBtn !== null) {
        scrollTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            animateScroll(0, 10);    
        });
    }

    if (scrollDownBtn !== null) {
        scrollDownBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const heroHeight = document.querySelector('.hero').clientHeight;
            //погрешность свг?
            animateScroll(heroHeight + 7, 10);
        });
    }
}