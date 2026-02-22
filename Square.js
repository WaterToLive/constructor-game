
class FallingSquare {
  constructor(x, y, size,c,) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = random(7, 9);  
    this.c = c;
    
  }
  fall() {
    this.y += this.speed;
    if(this.y > height){
   // this.y = 0;
  //  this.x = random(0, width)
    noLoop();
  }
}
  show() {
    fill(this.c)
    square(this.x, this.y, this.size);
  } 
 
  
} 
