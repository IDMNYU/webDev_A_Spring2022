console.log("the Mess age!");

// an empty array to keep track of clicks??!!!!
let theEmptyArray = [];
let theBody = document.querySelector("body");
const myButton = document.getElementById("theButton");

myButton.addEventListener('click', magicClick)

function magicClick(){
    console.log("you cliked!")
    theBody.style.backgroundColor = "yellow";
    document.querySelector("h3").textContent = "the medium is also the message!"
}