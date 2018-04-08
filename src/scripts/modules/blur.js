export const blur = (function() {
    const wrapper = document.querySelector('.talk__img');
    // const form = document.querySelector('.form__input-area');
    const forminit = document.querySelector('.form');
    // const bottom = document.querySelector('.talk__bottom-area');
    const container = document.querySelector('.container');
    const footer = document.querySelector('.footer');
    const talk_form = document.querySelector('.talk__form');
    const blur = document.querySelector('.form__input-blur');
    return {
        set() {
            const blurWidth = wrapper.offsetWidth;
            const blurHeight = wrapper.clientHeight;
            const posLeft = -talk_form.offsetLeft;
            const posTop = -talk_form.offsetTop;

            const offsetImgTop = wrapper.offsetTop;
            const offsetTop = posTop + offsetImgTop;
            const blurCSS = blur.style;


            console.log(posLeft, posTop);
            blurCSS.backgroundSize = `${blurWidth}px auto`;
            blurCSS.backgroundPosition = `${posLeft}px ${offsetTop}px`;
        },
    };

}());