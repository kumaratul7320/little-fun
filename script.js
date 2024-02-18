const main_button = document.querySelector("button");
const body = document.querySelector("body")
const currentColor = document.querySelector(".current-color");
// console.log(currentColor)
const randomColorGenerator= function(){
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`
    return randomColor;
}   

main_button.addEventListener("click", ()=>{
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor;
})