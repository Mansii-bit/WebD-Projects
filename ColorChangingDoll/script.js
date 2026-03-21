let boxes=document.querySelectorAll(".box");

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
function changeColor(x){
    x.style.backgroundColor=getRandomColor();
}
boxes.forEach(x => {
    x.addEventListener("click", () => changeColor(x));
});