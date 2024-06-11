function createGrid(size){
    const container=document.querySelector(".container");
    container.innerHTML="";
    const squareSize=400/size;
    for(let i=0;i<size*size;i++){
        const square=document.createElement("div");
        square.style.width=`${squareSize}px`;
        square.style.height=`${squareSize}px`;
        square.addEventListener("mouseover",()=>{
            square.style.backgroundColor="blue";
        });
    container.appendChild(square);

    }
}

document.getElementById("resetButton").addEventListener("click",()=>{
    let size;
    do{
        size=parseInt(prompt("Enter the number of squares per side (max 100)"))
    }
})