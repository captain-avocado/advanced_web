export default function scrollTop() {
    const scrollTopBtn = document.getElementById('scroll-top');
    const scrollDownBtn = document.getElementById('scroll-down');

    function animateScroll(Y, scrollSpeed) {
        const targetScroll = Y;
        let currentScroll = 0;
        let screenY = Math.floor(window.scrollY);

        //Scroll Down
        if(screenY < Y) {
            const windowScroll = setInterval(function(){ 
                screenY += scrollSpeed;  
                if (screenY >= targetScroll){ 
                    clearInterval(windowScroll); 
                    return;
                }    
                window.scrollTo(0, screenY); 
            }, 3);   
        }

        //Scroll Up
        if (screenY > Y) {
            const windowScroll = setInterval(function() { 
                screenY -= scrollSpeed;  
                if (screenY <= targetScroll){ 
                    clearInterval(windowScroll); 
                    return;
                }    
                window.scrollTo(0, screenY); 
            }, 3);  
        } 

    }
    scrollTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        animateScroll(0, 10);    
    });

    scrollDownBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const heroHeight = document.querySelector('.hero').clientHeight;
        animateScroll(heroHeight, 10);
    });
}