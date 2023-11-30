// Note: We need this for $ to work.
// Don't ask why!
$ = document.querySelector.bind(document);

// *****************************************
// This sets the main box to red.
// *****************************************
function setRed() {
  // Select the main box from the HTML document.
  box = $("#main-box");
  // Set the style to red.
  box.style.color = "red";
}
redButton = $('#red-button');
redButton.onclick = setRed;



// *****************************************
// This sets the main box to green.
// *****************************************
function setGreen() {
  window.alert("set green!")
  // TODO: set the color of the main-box here.
  // Step 1: Select the main box 
  //         from the HTML document.

  // Step 2: Set the style to green.

}
greenButton = $('#green-button');
greenButton.onclick = setGreen;


// *****************************************
// This sets the main box to blue.
// *****************************************
function setBlue() {
  window.alert("set blue!")
  // TODO: set the color of the main-box here.

}
blueButton = $("#blue-button");
blueButton.onclick = setBlue;


// *****************************************
// This makes the elf turn left.
// *****************************************
function setLeft() {
  elfSprite = $("#elf-sprite");
  elfSprite.src = "img/elf_left.png";

}
leftButton = $("#left-button");
leftButton.onclick = setLeft;

// *******************************************
// TODO: create a function to make the elf turn right
// When onclick occurs on the right button, invoke the
// function. 
// Be sure to add comments to your code!
// *******************************************




// *******************************************
// TODO: create a function to make the elf turn up
// Create a button in HTML for the action.
// When onclick occurs on the up button, invoke the
// function.
// Be sure to add comments to your code!
// *******************************************



// *******************************************
// TODO: create a function to make the elf turn down
// Create a button in HTML for the action.
// When onclick occurs on the down button, invoke the
// function.
// Be sure to add comments to your code!
// *******************************************















// BONUS...
// This will tell us the position of the elf.
const state = {
  left: 200,
  top: 100
};
// Set the posistion of the elf in CSS.
box = $("#main-box");
box.style.left = state.left + "px";
box.style.top= state.top + "px";