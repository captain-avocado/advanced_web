export const blur = (function() {
    const wrapper = document.querySelector('.talk');
    // const form = document.querySelector('.form__input-area');
    const forminit = document.querySelector('.form');
    // const bottom = document.querySelector('.talk__bottom-area');
    const container = document.querySelector('.container');
    const footer = document.querySelector('.footer');
    const blur = document.querySelector('.form__input-blur');
    return {
        set() {
            const blurWidth = wrapper.clientWidth;
            const blurHeight = wrapper.clientHeight;
            console.log(blurWidth, blurHeight);
            const posLeft = -forminit.offsetLeft - container.offsetLeft;
            const posTop = -forminit.offsetTop + footer.clientHeight;
            console.log(posLeft);
            console.log(posTop);
            const blurCSS = blur.style;

            blurCSS.backgroundSize = `${blurWidth}px ${blurHeight}px`;
            blurCSS.backgroundPosition = `${posLeft}px ${posTop}px`;
        },
    };

}());