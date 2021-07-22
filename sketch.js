// An array of all the colors used in this code.
let colors = ["white","black", "red", "blue", "green", "yellow", "orange", "violet", "grey"];
let currentColor;

function setup() {
    //size of the canvas to draw on
    createCanvas(innerWidth,innerHeight); 

    // Set the background to white, and move the line to setup();
    background("white");
  
    header();
    

}

function draw()
{
  //Calls a function to begin drawing the line on the canvas. doesn't need to be a function.
  if (mouseIsPressed) {
    drawing();
  }
    let y = 50;
    for (i = 0; i < colors.length; i++){
       colorname = colors[i].toString();
       //make an object for each color box:
        var currentColor = new ColorBox(0, y, 50, 50, colorname );  
        currentColor.appear();
        currentColor.onMousePressed();
        y = y + 50;
    }
}

//The function that changes the color of the line being drawn
function colorChange() {
  
    if (mouseY > 50 && mouseY < 100) {
      currentColor = "white";
    
    } else if (mouseY > 100 && mouseY < 150) {
      currentColor = "black";
    
    } else if (mouseY > 150 && mouseY < 200) {
      currentColor = "red";
    
    } else if (mouseY > 200 && mouseY < 250) {
      currentColor = "blue";
    
    } else if (mouseY > 250 && mouseY < 300) {
      currentColor = "green";
    
    } else if (mouseY > 300 && mouseY < 350) {
      currentColor = "yellow";
    
    } else if (mouseY > 350 && mouseY < 400) {
      currentColor = "orange";
    
  }
    else if (mouseY > 400 && mouseY < 450) {
      currentColor = "violet";
  }
  else if (mouseY > 450 && mouseY < 500) {
    currentColor = "grey";
  }
}

//Function that does the drawing
function drawing() {
  
    if (mouseX > 100 && mouseY > 100)
    {
        stroke(currentColor); //sets drawing color
        strokeWeight(3); //thichkess of drawing line
        line(pmouseX, pmouseY, mouseX, mouseY); //draws a line that follows the mouse
  }
}

//display instruction
function header() {
  fill("#404040");
  rect(0, 0, width, 50);

  textAlign(CENTER);
  fill("white");
  textSize(18);
  text("PAINT", width / 2, 33);
}

    

