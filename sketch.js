let die= [];
function setup () {
  createCanvas(windowWidth,windowHeight); 
  for(let i =0; i < 12; i++) {
    die.push(new FallingSquare(random(width), random(height), random(5,15), "blue"));
  }
} 

function draw() {
      background("red")
      die.show(); 

      die[0].show(); 
      die[1].show();
      die[2].show();
      die[3].show();
}

