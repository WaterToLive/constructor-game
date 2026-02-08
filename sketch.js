let die= [];
function setup () {
  createCanvas(windowWidth,windowHeight); 
  for(let i =0; i < 12; i++) {
    die.push(new FallingSquare(random(width), -50*i , random(20,35), "blue"));
    die.push(new FallingCircle(random(width), 0 , random(10,30), "yellow"));
    die.push(new FallingTriangle(random(width), 0, random(15,25),"purple"));  
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

