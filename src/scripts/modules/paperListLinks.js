import animateScroll from './animateScroll';

export default function paperListLinks() {

    const paperLinks = document.querySelectorAll('.paper-name__link');

    const papers = document.querySelector('.blog__papers');
    const paperItems = papers.children;

    Array.from(paperLinks).forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // const elementBorder = (window.innerWidth <= 480) ? (7) : (10);

            const elementBorder = 10;
            const scrollY = paperItems[index].offsetTop + elementBorder;

            animateScroll(scrollY, 10);
        });
    });
    
}