class FallingCircle {
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.r = d;
    //this.speed = random(1, 25); 
  }

  //fall() {
    //this.y += this.speed;
  //}

  display() {
    circle(this.x, this.y, this.d);
  }
}