const bodyel = document.querySelector("body")
bodyel.addEventListener("mousemove" , (event)=>{
    const xpos= event.offsetX;
    const ypos= event.offsetY;
    const spanel=document.createElement("span")
    spanel.style.top= ypos+"px";
    spanel.style.left= xpos+"px";
    const size= Math.random() * 100;
    spanel.style.width=size+"px";
    spanel.style.height=size+"px";
    bodyel.appendChild(spanel);
    setTimeout(() => {
        spanel.remove();
    }, 3000);
})