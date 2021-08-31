// An array of all the colors used in this code.
var turn=0
function setup() {
    //size of the canvas to draw on
    createCanvas(innerWidth,innerHeight); 
    // Set the background to white, and move the line to setup();
    background("yellow");

    fill("#404040");
  rect(0, 0, width, 50);

  textAlign(CENTER);
  fill("White");
  textSize(18);
  text("TIC TAC TOE", width / 2, 33);
  fill("Black");
}


function draw()
{

 createRow(150)
 createRow(250)
 createRow(350)  
}

function createRow(y)
{
  for (x = 150; x < 450; x=x+100)
   {
       var b1= new Box(x, y, 100, 100); 
       b1.appear();   
   }  
}



    

function mousePressed() {
  textx=0
  texty=0
  if (mouseY < 250 && mouseX < 250 && mouseY > 150 && mouseX > 150) {
    currentColor = "white";
    textx=200
    texty=200
  } 
  else if (mouseX < 350 && mouseY < 250) {
    currentColor = "white";
    textx=300
    texty=200
  } 
  else if(mouseX < 450 && mouseY < 250) {
    currentColor = "white";
    textx=400
    texty=200
  } 
  
      

  if(turn%2==0)
  {
    text("O",textx,texty) 
  }
  else{
    text("X",textx,texty)

  }

  turn=turn+1

  if(turn==9)
  {
    background("yellow")
    turn=0
  }
  console.log(turn)
}