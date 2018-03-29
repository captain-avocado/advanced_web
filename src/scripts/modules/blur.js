export const blur = (function() {
    const wrapper = document.querySelector('.talk');
    const form = document.querySelector('.form');
    const blur = document.querySelector('.form__input-blur');
    return {
        set() {
            const blurWidth = wrapper.offsetWidth;
            const posLeft = -form.offsetLeft;
            const posTop = -form.offsetTop;
            const blurCSS = blur.style;

            blurCSS.backgroundSize = `${blurWidth}px auto`;
            blurCSS.backgroundPosition = `${posLeft}px ${posTop}px`;
        },
    };

}());