"use strict";
window.onload = init;


//this will run when the page loads, and will wire up event handlers
function init(){
    //get a variable that represents the button element
    const computeButtonElement = document.getElementById("computeButton");
    
    //set the on-click event handler to the name of the function below.
    computeButtonElement.onclick = computeButtonOnClick;

}

//this will be the event handler for the OnClick event of computeButton
function computeButtonOnClick(){
    console.log("The computeButton has been clicked");
    //todo: do stuff here.
<button onclick="displayDate()"><Today's date is</button>
}