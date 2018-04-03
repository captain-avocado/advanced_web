export const preloader = (function() {

    const preloader = document.getElementById('preloader');
    const preloadSvg = document.getElementById('preloader__svg');

    const img = document.querySelectorAll('img');
    const imageNumber = img.length;

    const strokeDasharray = 440;
    let lengthSector = strokeDasharray / (imageNumber - 1);
    let currentSDO = lengthSector;

    return {
        start() {
            // console.log(`imageNumber = ${imageNumber}`);
            // console.log(`lengthSector = ${lengthSector}`);
            // console.log(`currentSDO = ${currentSDO}`);
            for (let i = 1; i < imageNumber; i++) {
                img[i].addEventListener('load', () => {
                    // console.log(`currentSDO = ${currentSDO}`);
                    preloadSvg.style.strokeDashoffset = strokeDasharray - currentSDO;
                    currentSDO += lengthSector;
                });
            }
        },
        hide() {
            preloader.classList.remove('active');
        },
    };

}());