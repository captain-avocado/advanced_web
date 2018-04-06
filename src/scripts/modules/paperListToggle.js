export default function paperListToggle() {

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


    

}