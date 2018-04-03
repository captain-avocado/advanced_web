export const slider = (function() {
    
    const descr = document.querySelector('.descr');
    const preview = document.querySelector('.preview');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const nextControl = document.querySelector('.slide-next');
    const prevControl = document.querySelector('.slide-prev');

    let counter = 1;
    let inProcess = false;

    const moveSlide = function(slider, blockDirection, slideDirection) {
        // console.log(counter);

        const items = Array.from(slider.children);
        const activeItem = items.filter(item => item.classList.contains('active'))[0];


        // const innerCounter = (direction < 0) ? counter - 1 : counter + 1;
        // if (counter <= 0) {
        //     counter = 4;
        // }

        let innerCounter = (blockDirection < 0) ? items.length - counter : counter;
        
        if (innerCounter >= items.length) {
            innerCounter = 0;
            counter = 0;
        }
        console.log('innerCounter = ' + innerCounter);
        const reqItem = items[innerCounter];

        // if (counter >= items.length) {
        //     counter = 0;
        // }
        // const reqItem = items[counter];

        
        activeItem.style.transition = 'top .5s';
        activeItem.style.top = slideDirection * 100 + '%';

        activeItem.addEventListener('transitionend', () => {
            activeItem.style.transition = '';
            activeItem.style.top = '';
            activeItem.classList.remove('active');
        });
            
        reqItem.style.transition = 'top .5s';
        reqItem.style.top = 0;

        reqItem.addEventListener('transitionend', () => {
            reqItem.style.transition = '';
            reqItem.classList.add('active');
            inProcess = false;
        });


    };
 


    return {
        init() {
            // let counter = 1;
            prevControl.addEventListener('click', (e) => {
                e.preventDefault();

                // if (counter >= prev.children.length) counter = 0;
                if (!inProcess) {
                    inProcess = true;
                    moveSlide(prev, 1, 1);
                    moveSlide(next, -1, -1);
                    counter++;
                }
            });

            nextControl.addEventListener('click', (e) => {
                e.preventDefault();
                if (!inProcess) {
                    inProcess = true;
                    moveSlide(next, 1, -1);
                    moveSlide(prev,-1, 1);
                    counter++;
                }
            });
            
        },
    };


}()); 