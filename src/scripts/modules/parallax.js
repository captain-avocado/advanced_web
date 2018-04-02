export default function parallax() {
    
    const parallaxContainer = document.getElementById('parallax');
    const layers = parallaxContainer.children;
    
    const moveLayers = (e) => {
        const initialX = window.innerWidth / 2 - e.pageX;
        const initialY = window.innerHeight / 2 - e.pageY;

        Array.from(layers).forEach((layer, i) => {
            const k = i / 100;
            const positionX = initialX * k;
            const positionY = initialY * k;
            const bottomPosition = window.innerHeight / 2 * k;

            layer.style.transform = `translate3d(${positionX}px, ${positionY}px, 0)`;
            layer.style.bottom = `-${bottomPosition}px`;
        });
    };

    window.addEventListener('mousemove', moveLayers);

}