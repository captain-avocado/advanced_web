export const blur = (function() {
    const wrapper = document.querySelector('.talk__img');
    
    const talk_form = document.querySelector('.talk__form');
    const blur = document.querySelector('.form__input-blur');
    
    return {
        set() {
            const blurWidth = wrapper.offsetWidth;

            const posLeft = -talk_form.offsetLeft;
            const posTop = -talk_form.offsetTop;

            const offsetImgTop = wrapper.offsetTop;
            
            const offsetLeft = posLeft + talk_form.clientWidth * .05;
            const offsetTop = posTop + offsetImgTop + talk_form.clientHeight * .05;

            const blurCSS = blur.style;

            blurCSS.backgroundSize = `${blurWidth}px auto`;
            blurCSS.backgroundPosition = `${offsetLeft}px ${offsetTop}px`;
        },
    };

}());