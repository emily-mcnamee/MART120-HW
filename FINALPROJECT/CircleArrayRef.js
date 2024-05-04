let shape;

let r1 =25;

function setup() {
  createCanvas(800, 800, WEBGL);
  shape = buildGeometry(createShape);
}

function draw()
{
  background(50);
  orbitControl();
  lights();
  noStroke();
  model(shape);
}

  function createShape()
{
  for (let theta = radians(0); theta < radians(360); theta++)
  {
    let x = r1*cos(theta);
    let y = r1*sin(theta);
    rotateZ(radians(90));
    circle(x,y,35);
  }
}