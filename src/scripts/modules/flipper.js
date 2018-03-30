export default function flipper() { 
    
    const btnAuth = document.querySelector('.btn-auth');
    const flipperBlock = document.querySelector('.flipper');
    const back = document.querySelector('.button_to-main');

    const flipBack = (e) => {
        e.preventDefault();
        btnAuth.style.display = 'none';
        flipperBlock.classList.remove('front');
        flipperBlock.classList.add('back');
    };

    const flipFront = (e) => {
        e.preventDefault();
        btnAuth.style.display = '';
        flipperBlock.classList.remove('back');
        flipperBlock.classList.add('front');
    };

    btnAuth.addEventListener('click', flipBack);

    back.addEventListener('click', flipFront);

    document.addEventListener('click', (e) => {

        const isClickedInsideFlipper = flipperBlock.contains(e.target);
        const isClickedInsideAuth = btnAuth.contains(e.target);
        const isBack = flipperBlock.classList.contains('back');

        if (!isClickedInsideFlipper && !isClickedInsideAuth && isBack) {
            flipFront(e);
        }
    });
}