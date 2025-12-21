
class FallingSquare {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = random(1, 25); 
    this.c = c;
  }

  fall() {
    this.y += this.speed;
  }

  show() {
    fill(this.c)
    square(this.x, this.y, this.size);
  } 
}