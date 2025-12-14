let shapes = [];
let score = 0; 


class Shape {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = 60;
  }
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}