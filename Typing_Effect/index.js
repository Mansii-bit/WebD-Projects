const boxele= document.querySelector(".box")
let name="Mansi Singh";
let i=0;
nameWrite();
function nameWrite(){
    i++;    
boxele.innerHTML=`
  <h1 >Hii , I'm ${name.slice(0,i)}</h1>
`;
if(i===name.length) i=0;
setTimeout(nameWrite, 200);
}


