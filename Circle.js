class FallingCircle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.speed = random(1, 25); 
  }

  fall() {
    this.y += this.speed;
  }

  show() {
    circle(this.x, this.y, this.r * 2);
  }
}