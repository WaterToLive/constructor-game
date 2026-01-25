let die= [];
function setup () {
  createCanvas(windowWidth,windowHeight); 
  for(let i =0; i < 12; i++) {
    die.push(new FallingSquare(random(width), 0 , random(50,75), "blue"));
    die.push(new FallingCircle(random(width), 0 , random(25,45), "yellow"));
    die.push(new FallingTriangle(random(width), 0, random(9,12),"orange"));
  }
} 

function draw() {
      background("red")
      //die.show(); 
  for(i=0; i < die.length; i++) {
      die[i].show(); 
      die[i].fall();  
    }
    
}

