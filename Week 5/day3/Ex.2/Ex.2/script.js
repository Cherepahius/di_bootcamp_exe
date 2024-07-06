function myMove() {
    let element = document.getElementById("animate");
    let pos = 0;
    const containerWidth = document.getElementById("container").offsetWidth;
    const animateWidth = element.offsetWidth;
    const interval = setInterval(frame, 1);

    function frame() {
        if (pos >= containerWidth - animateWidth) {
            clearInterval(interval);
        } else {
            pos++;
            element.style.left = pos + "px";
        }
    }
}