class FallingTriangle {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = random(1, 25);
  }

  fall() {
    this.y += this.speed;
  }

  show() {
    triangle(
      this.x, this.y,
      this.x - this.size / 2, this.y + this.size,
      this.x + this.size / 2, this.y + this.size
    );
  }
}