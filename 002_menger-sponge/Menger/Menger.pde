
float a = 0;
Box b;
ArrayList<Box> sponge;
void setup() {
  size(400, 400, P3D);
  b = new Box(0, 0, 0, 200);
  sponge = new ArrayList<Box>();
  sponge.add(b);
}

void mousePressed() {
 ArrayList<Box> next = new ArrayList<Box>();
 for( Box b : sponge) {
   ArrayList<Box> newBoxes = b.generate();
   next.addAll(newBoxes);
 }
 sponge = next;
}

void draw() {
  float hw = width / 2;
  float hh = height / 2;
  background(51);
  stroke(128);
  fill(255);
  lights();
  
  translate(hw, hh);
  rotateX(a);
  rotateY(a*1/5);
  rotateZ(a*1/7);
  for(Box b : sponge) {
    b.show();
  }
  a += 0.01;
}
