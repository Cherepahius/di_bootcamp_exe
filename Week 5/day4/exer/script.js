const colorPalette = document.getElementById("color-palette");
const drawPlace = document.getElementById("draw-place");
const clearBtn = document.getElementById("clear-btn");
let selectedColor = "black";
let isDrawing = false;

for (let i = 0; i < 800; i++) {
    const pixel = document.createElement("div");
    pixel.addEventListener("mousedown", startDrawing);
    pixel.addEventListener("mouseover", draw);
    pixel.addEventListener("mouseup", stopDrawing);
    drawPlace.appendChild(pixel);
}

colorPalette.addEventListener("click", (event) => {
    if (event.target.classList.contains("color")) {
        selectedColor = event.target.style.backgroundColor;
    }
});

clearBtn.addEventListener("click", () => {
    const pixels = drawPlace.querySelectorAll("div");
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = "white";
    });
});


function startDrawing(event) {
    isDrawing = true;
    event.target.style.backgroundColor = selectedColor;
}

function draw(event) {
    if (isDrawing) {
        event.target.style.backgroundColor = selectedColor;
    }
}

function stopDrawing(event) {
    isDrawing = false;
}

drawPlace.addEventListener("mouseleave", stopDrawing);
drawPlace.addEventListener("mouseup", startDrawing);