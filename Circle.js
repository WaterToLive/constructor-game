class FallingCircle {
  constructor(x, y, size,c,) {
    this.x = x;
    this.y = y;
    this.d = size;
    this.speed = random(2, 5); 
    this.c = c;
  }

  fall() {
    this.y += this.speed;
    if(this.y > height){
    this.y = 0;
    this.x = random(0, width)
  }
  }

  show() {
    fill(this.c)
   circle(this.x, this.y, this.d);
  }
}