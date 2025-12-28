let die= [];
function setup () {
  createCanvas(windowWidth,windowHeight); 
  for(let i =0; i < 12; i++) {
    die.push(new FallingSquare(random(width), 0 , random(20,35), "blue"));
  }
} 

function draw() {
      background("red")
      //die.show(); 
  for(i=0; i < 4; i++) {
      die[i].show(); 
  }
      die[0].fall();
      die[1].fall();
      die[2].fall();
      die[3].fall();
}

