// Note: We need this for $ to work.
// Don't ask why!
$ = document.querySelector.bind(document);


// This will keep track of the position of the elf.
let elfLocation = {
  top: 1, 
  left: 2
};

// *****************************************
// This positions the elf on the board.
// *****************************************
function placeElf(leftPosition, topPosition){
  box = document.querySelector("#main-box");
  box.style.top= (topPosition*100) + "px";
  box.style.left = (leftPosition*100) + "px";
}

// *****************************************
// This makes the elf turn and move.
// *****************************************
function walkLeft() {
  console.log("walk left");
  elfLocation.left--; // subtract one from position left
  turnElf("left");
  placeElf(elfLocation.left, elfLocation.top); // move the elf sprite
}
function walkRight() {
  console.log("walk right");
  elfLocation.left++; // add one to position left
  turnElf("right");
  placeElf(elfLocation.left, elfLocation.top); // move the elf sprite
}
function walkUp() {
  console.log("walk up");
  elfLocation.top--; // subtract one from position top
  turnElf("up");
  placeElf(elfLocation.left, elfLocation.top); // move the elf sprite
}
// *****************************************
// TODO: finish this function to make the elf
// walk down.
// *****************************************
function walkDown() {
  console.log("walk down");
  elfLocation.top++;
  turnElf("down");
  placeElf(elfLocation.left, elfLocation.top)
  // TODO: make the elf turn and walk down

}

// *****************************************
// set up the button for walking left
// *****************************************
leftButton = $("#left-button");
leftButton.onclick = walkLeft; 
console.log(leftButton);
// *****************************************
// set up the button for walking right
// *****************************************
rightButton = $("#right-button");
rightButton.onclick = walkRight;
console.log(rightButton);

upButton = $("#up-button");
upButton.onclick = walkUp;
console.log(upButton);

downButton = $("#down-button");
downButton.onclick = walkDown;
console.log(downButton);
// *****************************************
// TODO: set up the button for walking up
// *****************************************

// *****************************************
// TODO:  set up the button for walking down
// ********************************
// *****************************************
// This function will set the sprite
// for the elf so it is facing the right direction.
// *****************************************
function turnElf(direction) {
  // find the elf-sprite img tag
  let elfSprite = $("#elf-sprite");

  // set the correct image for walking left.
  if(direction === 'left') {
    elfSprite.src = "img/elf_left.png";
  }
  
  }
//why does this not work???
function turnElf(direction) {
  let elfSprite = $("#elf-sprite");
  if(direction === 'down') {
    elfSprite.src = "img/elf_down.png";

  }
}




  
  
  
  
  // TODO: if the direction is right, up, or down
  // set the src to be the correct image









placeElf(elfLocation.left, elfLocation.top);

turnElf("right");
// *****************************************
// Now we must call place elf to put in into
// the page
// *****************************************
// It starts at the elfLocation, so we set it here.

// It starts looking down, so set it here.
turnElf("down");


// *****************************************
// Cookie Placement
// *****************************************

// Below, are the cookie objects.
// This will indicate the id of the cookie in index.html
// It will also indicate where to place the cookie on the board.
let cookie1 = {
  id: "#cookie-1",
  left: 2,
  top: 4
}

let cookie2 = {
  id: "#cookie-2",
  left: 1,
  top: 2
}

// TODO: make cookies for 3, 4, and 5.
// Hint: look in index.html for the ids.



let cookieObjects = [
  cookie1,
  cookie2
  // TODO: put more cookies here.

];

let cookieElm; 

// *****************************************
// This code places the cookies on the screen
// *****************************************
console.log(cookie1);
cookieElm = document.querySelector(cookie1.id); // select "cookie-1"
cookieElm.style.left = (100*cookie1.left) + 'px';
cookieElm.style.top = (100*cookie1.top) + 'px';

console.log(cookie2);
cookieElm = document.querySelector(cookie2.id); // select "cookie-2"
cookieElm.style.left = (100*cookie2.left) + 'px';
cookieElm.style.top = (100*cookie2.top) + 'px';

// *****************************************
// TODO: set the positions of the other cookies (3, 4, and 5)
// *****************************************





// BONUS: Replace the code for placing the cookies 
// on the page with a for-loop






// More Bonuses, check if the elf walks into a cookie
// If so, set the style.display of the cookie to none.
// Hint: Try it with on cookie. If you figure that out,
// make it into a function. And if that works, try a loop
// to check all the cookies!

// Can you think of anything else you'd like to do with
// the cookies?
