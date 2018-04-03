export const slider = (function() {
    
    const descr = document.querySelector('.descr');
    const preview = document.querySelector('.preview');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const nextControl = document.querySelector('.slide-next');
    const prevControl = document.querySelector('.slide-prev');

    const moveSlide = function(slider, counter) {
        // let counter = 1;
        // console.log(counter);

        
        const items = Array.from(slider.children);
        const activeItem = items.filter(item => item.classList.contains('active'))[0];

        //??????
        // if (counter >= items.length) {
        //     counter = 0;
        // }
        
        const reqItem = items[counter];

        activeItem.style.transition = 'top 1s';
        activeItem.style.top = '100%';

        activeItem.addEventListener('transitionend', () => {
            activeItem.style.transition = '';
            activeItem.style.top = '';
            activeItem.classList.remove('active');
        });
        
        reqItem.style.transition = 'top 1s';
        reqItem.style.top = 0;

        reqItem.addEventListener('transitionend', () => {
            reqItem.style.transition = '';
            reqItem.classList.add('active');
        });
    };
 


    return {
        init() {
            let counter = 1;
           
            prevControl.addEventListener('click', (e) => {
                e.preventDefault();

                if (counter >= prev.children.length) counter = 0;
                moveSlide(prev, counter);
                counter++;
            });
            
        },
    };


}()); 