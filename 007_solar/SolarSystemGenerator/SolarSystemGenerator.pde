
Planet sun;

void setup() {
  size(600, 600);
  sun = new Planet(50, 0, 0);
  
  Planet p1 = new Planet(8, 125, 0.03);
  sun.addChild(p1);
  
  Planet m11 = new Planet(2, 20, 0.09);
  p1.addChild(m11);
  
  Planet m12 = new Planet(2, 25, 0.085);
  p1.addChild(m12);
  
  Planet p2 = new Planet(7, 200, 0.01);
  sun.addChild(p2);
}

void draw() {
  fill(0, 20);
  rect(0, 0, width, height);
  translate(width/2, height/2);
  
  sun.update();
  sun.show();
  
}
