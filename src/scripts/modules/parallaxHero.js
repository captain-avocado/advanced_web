export const parallaxHero = (function() {
    const bg = document.querySelector('.hero__bg');
    const intro = document.querySelector('.hero__intro');

    return {
        move: function(block, windowScroll, strafeAmount) {
            const strafe = windowScroll / -strafeAmount + '%';
            // const style = block.style;
            console.log(block);
            block.style.top = strafe;
        },
        init: function(wScroll) {
            this.move(bg, wScroll, 40);
        },
    };

}());