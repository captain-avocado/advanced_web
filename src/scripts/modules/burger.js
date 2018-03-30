export default function burger() {

    const burger = document.querySelector('.menu-burger');
    const menu = document.querySelector('.menu');
    const body = document.querySelector('body');

    const items = menu.children;

    burger.addEventListener('click', (e) => {
        e.preventDefault();
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('active');
        const translateY = window.getComputedStyle(items[0], null).getPropertyValue('margin-top');

        if (menu.classList.contains('active')) {
            
            console.log(translateY);
            let i = 0;
            let intervalID;
            intervalID = setInterval(() => {
                if (i < 4) {
                    items[i].style.opacity = 1;
                    items[i].style.transform = `translate3d(0, -${translateY}, 0)`;
                    i++;
                } else {
                    clearInterval(intervalID);
                }
            }, 150);
        } else {
            for (let i = 0; i < items.length; i++) {
                items[i].style.opacity = 0;
                items[i].style.transform = `translate3d(0, ${translateY}, 0)`;
            }
        }

    });

}