export default function dragElement(elmnt) {

    let directionOffsetX = 0;
    let directionOffsetY = 0;
    let currentOffsetX = 0;
    let currentOffsetY = 0;

    const dragMouseDown = (e) => {

        const closeDragElement = () => {
            document.onmouseup = null;
            document.onmousemove = null;
        };

        const elementDrag = (e) => {
            directionOffsetX = currentOffsetX - e.clientX;
            directionOffsetY = currentOffsetY - e.clientY;
            currentOffsetX = e.clientX;
            currentOffsetY = e.clientY;
            elmnt.style.left = (elmnt.offsetLeft - directionOffsetX) + 'px';
            elmnt.style.top = (elmnt.offsetTop - directionOffsetY) + 'px';
        };

        currentOffsetX = e.clientX;
        currentOffsetY = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;

    };

    elmnt.onmousedown = dragMouseDown;

}