function getRandomColor(){
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}

function createGrid(size){
    const container=document.querySelector(".container");
    container.innerHTML="";
    const squareSize=400/size;

    for(let i=0;i<size*size;i++){
        const square=document.createElement("div");
        square.style.width=`${squareSize}px`;
        square.style.height=`${squareSize}`;
        
        square.style.opacity="1";

        square.addEventListener("mouseover",()=>{
            let currentOpacity=parseFloat(square.style.opacity);
            square.style.backgroundColor=getRandomColor();
            if(currentOpacity>0){
                square.style.opacity=currentOpacity-0.1;
            }
        });
        container.appendChild(square);
    }

}

document.getElementById("resetButton").addEventListener("click", () => {
    let size;
    do {
        size = parseInt(prompt("Enter the number of squares per side (max 100):"),10);
    } while(isNaN(size)||size<1||size>100);
    createGrid(size);
});

