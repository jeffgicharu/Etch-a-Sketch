function getRandomColor(){
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}



document.getElementById("resetButton").addEventListener("click", () => {
    let size;
    do {
        size = parseInt(prompt("Enter the number of squares per side (max 100):"),10);
    } while(isNaN(size)||size<1||size>100);
    createGrid(size);
});

