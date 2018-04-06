import swipe from './swipe';

export default function paperListToggle() {

    const menuTrigger = document.querySelector('.adaptive-menu-trigger');

    const paperList = document.querySelector('.paper-list');
    const paperListWrap = paperList.parentElement;

    const blogSection = document.querySelector('.blog');

    const menuSwipe = new swipe(blogSection);
    console.log(menuSwipe);
    menuSwipe.onLeft(() => {
        console.log('SWIPED LEFT!!');
    });
    // blog.addEventListener('touchstart', handleTouchStart);        
    // blog.addEventListener('touchmove', handleTouchMove);

    // let xPrevPos = null;
    // let yPrevPos = null;
    
    // function handleTouchStart(e) {
    //     xPrevPos = e.touch[0].clientX;
    //     yPrevPos = e.touch[0].clientY;
    // }

    // function handleTouchMove(e) {
    //     if (!xPrevPos || !yPrevPos) return;

    //     let xNextPos = e.touch[0].clientX;
    //     let yNextPos = e.touch[0].clientY;

    //     let xDiff = xNextPos - xPrevPos;
    //     let yDiff = yNextPos  - yPrevPos; 

    //     if (Math.abs(xDiff) > Math.abs(yDiff)) {
    //         if ( xDiff > 0 ) {
    //             return 'left'; 
    //         } else {
    //             return 'right'
    //         }                       
    //     } else {
    //         if ( yDiff > 0 ) {
    //             /* up swipe */ 
    //         } else { 
    //             /* down swipe */
    //         }                                                                 
    //     }

    //     xPrevPos = null;
    //     yPrevPos = null;
    // }


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