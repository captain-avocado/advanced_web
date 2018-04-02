export default function() {
    const flipperBlock = document.querySelector('.flipper');
    setTimeout(() => {
        flipperBlock.classList.add('active');
    }, 1000);
}