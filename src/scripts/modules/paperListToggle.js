import swipe from './swipe';

export default function paperListToggle(wScroll) {

    const menuTrigger = document.querySelector('.adaptive-menu-trigger');

    const paperList = document.querySelector('.paper-list');
    const paperListWrap = paperList.parentElement;

    const blogSection = document.querySelector('.blog');

    const menuSwipe = new swipe(blogSection);

    console.log(wScroll , blogSection.offsetTop);
    
    menuSwipe.onLeft(() => {
        if (wScroll >= blogSection.offsetTop) {
            menuTrigger.classList.remove('active');
            paperListWrap.classList.remove('active');
            paperList.classList.remove('active');
        }
    });
    menuSwipe.onRight(() => {
        if (wScroll >= blogSection.offsetTop) {
            console.log(wScroll);
            menuTrigger.classList.add('active');
            paperListWrap.classList.add('active');
        }
    });
    menuSwipe.run();
    
    paperListWrap.addEventListener('transitionend', () => {
        if (paperListWrap.clientWidth) {
            paperList.classList.add('active');
        }        
    });
    
    


    

}