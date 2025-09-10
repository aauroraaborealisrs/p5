let sizes = [];
let cols = 20;
let rows = 20;
let size = 20;
let xoff = 0;
let yoff = 0;
let inc = 0.06;
let zoff = 0;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.elt.classList.add("bg-canvas");
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  rotateX(-45);
  rotateY(45);

  noFill();
  stroke(255);
  strokeWeight(1);

  xoff = 0;
  for (let i = 0; i < cols; i++) {
    sizes[i] = [];
    yoff = 0;
    for (let j = 0; j < rows; j++) {
      sizes[i][j] = map(noise(xoff, yoff, zoff), 0, 1, 0, 100);
      yoff += inc;

      push();
      translate(i * size - 100, sizes[i][j], j * size - 100);
      box(size, 1, size);
      pop();
    }
    xoff += inc;
    zoff += 0.0003;
  }
}
