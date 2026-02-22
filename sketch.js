let die= [];
function setup () {
  createCanvas(windowWidth,windowHeight); 
  for(let i =0; i < 12; i++) {
    die.push(new FallingSquare(random(width), -100*i , random(25,30), "blue"));
    die.push(new FallingCircle(random(width), 0 , random(25,35), "yellow"));
    die.push(new FallingTriangle(random(width), 0, random(10,15),"purple"));  
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
function mousePressed() {
  for(let i = 0 ;  i < die.length; i++){
  let d = dist(mouseX, mouseY, die[i].x, die[i].y);
  if (d < die[i].d/2) {
    console.log("Circle Tapped!");
    die.splice(i, 1);
  }    
}
}
