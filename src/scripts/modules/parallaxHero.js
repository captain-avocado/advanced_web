export const parallaxHero = (function() {
    const bg = document.querySelector('.hero__bg');
    const intro = document.querySelector('.hero__intro');
    return {
        move(block, windowScroll, strafeAmount) {
            const strafe = windowScroll / -strafeAmount;
            const leftValue = window.getComputedStyle(block, null).getPropertyValue('left');
            const coord = (leftValue === '0px') ? 0 : ('-50');
            const transformString = `translate3d(${coord}%, ${strafe + coord}%, 0)`;
            const style = block.style;
            style.transform = transformString;
            style.webkitTransform = transformString;
        },
        init(wScroll) {
            this.move(bg, wScroll, 40);
            this.move(intro, wScroll, 3);
        },
    };

}());