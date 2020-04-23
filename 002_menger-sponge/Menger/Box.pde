class Box {
  PVector pos;
  float r;
  
  Box(float x, float y, float z, float r_) {
    pos = new PVector(x, y, z);
    r = r_;
  }
  
  ArrayList<Box> generate() {
    ArrayList<Box> boxes = new ArrayList<Box>();
    float newR = r/3;
    for(int x = -1; x < 2; x++) {
      for(int y = -1; y < 2; y++) {
        for(int z = -1; z < 2; z++) {
          
          int sum = abs(x) + abs(y) + abs(z);
          if(sum > 1) {
            Box b = new Box(x*newR + pos.x, y*newR + pos.y, z*newR + pos.z, newR);
            boxes.add(b);
          }
        }
      }
    }
    return boxes;
  }
  
  void show() {
    pushMatrix();
    translate(pos.x, pos.y, pos.z);
    box(r);
    popMatrix();
  }  
}
