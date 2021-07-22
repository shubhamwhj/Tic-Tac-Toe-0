

/* PDM Course: Graphics Unit
This version by Matthew A. Bardin[2021]
    This is a version of the Paint App Project that utilizes a class of objects to generate all of the color boxes, an dmethods to call funcitons and change the color. This is just one of several potential solutions.
*/

// a list of all the variables used in this code.
let black, red, blue, green, yellow, orange, violet, white, currentColor;

function setup() {
  createCanvas(600, 600); //size of the canvas to draw on
  background(255); // be sure to set the background to white, and move the line to setup();

  black = new colorBox(0, 0, 50, 50, "black"); //making an object for each color box. This could potentially be done with a for loop
  red = new colorBox(0, 50, 50, 50, "red");
  green = new colorBox(0, 100, 50, 50, "green");
  blue = new colorBox(0, 150, 50, 50, "blue");
  yellow = new colorBox(0, 200, 50, 50, "yellow");
  orange = new colorBox(0, 250, 50, 50, "orange");
  violet = new colorBox(0, 300, 50, 50, "violet");
  white = new colorBox(0, 350, 50, 50, "white");

  currentColor = 0; //setting the default starting color

  instructions(); //makes the text instructions appear on the screen
}

function draw() {
  //calls a function to begin drawing the line on the canvas. doesn't need to be a function.
  if (mouseIsPressed) {
    drawing();
  }
  //calling the methods for each object. Need them to appear on the canvas and behave properly when clicked on. without groups, this can take a lot of space in the code.
  black.appear();
  black.onMousePressed();
  red.appear();
  red.onMousePressed();
  green.appear();
  green.onMousePressed();
  blue.appear();
  blue.onMousePressed();
  yellow.appear();
  yellow.onMousePressed();
  orange.appear();
  orange.onMousePressed();
  violet.appear();
  violet.onMousePressed();
  white.appear();
  white.onMousePressed();
}



function colorChange() {//the function that changes the color of the line being drawn
  if (mouseY > 0 && mouseY < 50) {//test to see which object the mouse is lined up with
    currentColor = "black"; //changes the vairable responcible for the color of the line. this line needs to match the same value as this.color
  } else if (mouseY > 50 && mouseY < 100) {
    currentColor = "red";
  } else if (mouseY > 100 && mouseY < 150) {
    currentColor = "green";
  } else if (mouseY > 150 && mouseY < 200) {
    currentColor = "blue";
  } else if (mouseY > 200 && mouseY < 250) {
    currentColor = "yellow";
  } else if (mouseY > 250 && mouseY < 300) {
    currentColor = "orange";
  } else if (mouseY > 300 && mouseY < 350) {
    currentColor = "violet";
  } else if (mouseY > 350 && mouseY < 400) {
    currentColor = "white";
  }
}

function drawing() {//function that does the drawing
  if (mouseX > 50) {//parameter to keep from drawing on the color selector boxes
    stroke(currentColor); //sets drawing color
    strokeWeight(3); //thichkess of drawing line
    line(mouseX, mouseY); //draws a line that follows the mouse
  }
}

function instructions() {//seperate function containing everything with the on-screen instructions.
  fill("grey");
  stroke(0);
  rect(0, height - 20, width, 20);
  textAlign(CENTER);
  fill(0);
  text("Click and drag the mouse to paint! Choose your color by clicking on the boxes to the left!", width / 2, height - 8);
}
//# sourceURL=pen.js
    

