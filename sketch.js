let cube;

function setup () {
  createCanvas(windowWidth,windowHeight); 
  cube = new FallingSquare (30, 25,50)
} 

function draw() {
      background("LightYellow")
      cube.show();
}


