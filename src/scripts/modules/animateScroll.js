export default function animateScroll(Y, scrollSpeed) {

    const targetScroll = Y;
    // let currentScroll = 0;
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