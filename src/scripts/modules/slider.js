export const slider = (function() {
    
    const descr = document.querySelector('.descr');
    const preview = document.querySelector('.preview');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const nextControl = document.querySelector('.slide-next');
    const prevControl = document.querySelector('.slide-prev');

    let prevCounter = 0, nextCounter = 0, previewCounter = 0;
    let inProcess = false;

    const info = [
        {
            title: 'сайт школы онлайн образования',
            tech: 'html, css, javascript',
            href: 'https://google.com',
        },
        {
            title: 'лэндинг магазина бургеров',
            tech: 'html, scss, javascript + jQuery',
            href: 'https://stackoverflow.com',
        },
        {
            title: 'сайт кофоркинга',
            tech: 'html, css, javascriptик',
            href: 'https://loftschool.com',
        },
        {
            title: 'последний слайд',
            tech: 'tech',
            href: 'https://github.com',
        },
    ];

    const processCounter = (counter, direction) => {
        if (direction > 0) counter++;
        if (direction < 0) counter--;

        if (counter < 0) counter = 3;
        if (counter > 3) counter = 0;
        return counter;
    };
    
    const moveSlide = function(slider, blockDirection, slideDirection, counter) {

        const items = Array.from(slider.children);
        const activeItem = items[counter];
        counter = processCounter(counter, blockDirection);
        const reqItem = items[counter];


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

        return counter;
    };
 

    const fadeSlide = function(slider, direction, counter) {
        
        const items = Array.from(slider.children);
        const activeItem = items[counter];

        counter = processCounter(counter, direction);

        const reqItem = items[counter];

        // transitionend??
        activeItem.classList.remove('active');
        reqItem.classList.add('active');

        const title = document.getElementById('show-title');
        const tech = document.getElementById('show-tech');
        const link = document.getElementById('show-link');

        title.innerHTML = info[counter].title;
        title.animate({
            // keyframes
            opacity: [0.5, 1],
            transform: ['scale(0.8)', 'scale(1.05)', 'scale(0.9)', 'scale(1)'],
        }, { 
            // timing options
            duration: 300,
            // iterations: Infinity
        });
        tech.innerHTML = info[counter].tech;
        link.href = info[counter].href;
        return counter;
    };

    return {
        init() {
            preview.children[0].classList.add('active');

            prevControl.addEventListener('click', (e) => {
                e.preventDefault();
                
                if (!inProcess) {
                    inProcess = true;
                    prevCounter = moveSlide(prev, 1, 1, prevCounter);
                    nextCounter = moveSlide(next, -1, -1, nextCounter);
                    previewCounter = fadeSlide(preview, -1, previewCounter);
                }
            });

            nextControl.addEventListener('click', (e) => {
                e.preventDefault();
                if (!inProcess) {
                    inProcess = true;
                    nextCounter = moveSlide(next, 1, -1, nextCounter);
                    prevCounter =  moveSlide(prev, -1, 1, prevCounter);
                    previewCounter = fadeSlide(preview, 1, previewCounter);
                }
            });
            
        },
    };


}()); 