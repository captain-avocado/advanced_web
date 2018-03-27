export default function burger() {

    const burger = document.querySelector('.menu-burger');
    const menu = document.querySelector('.menu');
    const body = document.querySelector('body');

    console.log(burger);
    console.log(menu);

    burger.addEventListener('click', (e) => {
        e.preventDefault();
        // if (body.classList.contains('active')) {
        //     body.style.height = '100vh';
        //     body.style.overflow = 'hidden';
        // }
        // menu.style.opacity = (menu.classList.contains('active')) ? 0 : 1;
        menu.classList.toggle('active');
        body.classList.toggle('active');
    });

}