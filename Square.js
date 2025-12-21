class FallingSquare {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = random(1, 25); // different speed for each square
  }

  fall() {
    this.y += this.speed;
  }

  show() {
    square(this.x, this.y, this.size);
  }