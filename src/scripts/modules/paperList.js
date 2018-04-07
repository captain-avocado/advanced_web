import paperListToggle from './paperListToggle';

export default function paperList(wScroll) {

    const menuTrigger = document.querySelector('.adaptive-menu-trigger');

    const heroHeight = document.querySelector('.hero').clientHeight;

    const paperList = document.querySelector('.paper-list');
    const paperListItems = paperList.children;
    const paperListWrap = paperList.parentElement;

    const papers = document.querySelector('.blog__papers');
    const paperItems = papers.children;

    
    
    if (wScroll >= heroHeight) {
        paperListToggle(wScroll);
        paperListWrap.classList.add('fixed');
        papers.classList.add('fixed-neighbor');
        menuTrigger.style.display = '';
        

        // подсветка нужных элементов списка
        Array.from(paperItems).forEach((item, i) => {

            const itemScrollTopBorder = item.offsetTop;
            const itemScrollBottomBorder = itemScrollTopBorder + item.clientHeight;

            if (wScroll >= itemScrollTopBorder && wScroll <= itemScrollBottomBorder) {
                paperListItems[i].classList.add('active');
            } else {
                paperListItems[i].classList.remove('active');
            }
        });

    } else {
        
        if (!menuTrigger.classList.contains('active'))
            menuTrigger.style.display = 'none';
        menuTrigger.classList.remove('active');
        paperListWrap.classList.remove('active');
        paperList.classList.remove('active');

        if (window.innerWidth > 880) {
            paperListWrap.classList.remove('fixed');
            papers.classList.remove('fixed-neighbor');
        }
    }

}