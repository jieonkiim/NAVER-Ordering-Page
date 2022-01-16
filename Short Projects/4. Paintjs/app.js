const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor")

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let painting = false;

function stopPainting() {
    painting = false;
}

function startPainting () {
    painting = true;
}

function onMouseMove (event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else {
        ctx.lineTo(x,y);
        ctx.stroke()
    }
}

function onMouseDown (event) {
    painting = true;
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

console.log(colors)