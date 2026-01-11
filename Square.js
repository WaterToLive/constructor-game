
class FallingSquare {
  constructor(x, y, size,c) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = random(1, 5); 
    this.c = c;
  }
  fall() {
    this.y += this.speed;
  }
   update() {
    if (this.y > Height) {
      this.y = -this.size;
    }
  }
  show() {
    fill(this.c)
    square(this.x, this.y, this.size);
  } 
}