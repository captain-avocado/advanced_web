export default function flipper() { 
    
    const btnAuth = document.querySelector('.btn-auth');
    const flipperBlock = document.querySelector('.flipper');
    const back = document.querySelector('.button_to-main');

    btnAuth.addEventListener('click', (e) => {
        e.preventDefault();
        flipperBlock.style.transform = 'rotateY(180deg)';
    });

    back.addEventListener('click', (e) => {
        e.preventDefault();
        flipperBlock.style.transform = 'rotateY(0deg)';
    });

}