class Star {
  float x;
  float y;
  float z;
  float hw;
  float hh;
  float pz;
  
  Star() {
    hw = width/2;
    hh = height/2;  
    x = random(-hw, hw);
    y = random(-hh, hh);
    z = random(width);
    pz = z;
  }
  
  void update() {
    pz = z;
    z = z - speed;
    if (z < 1) {
        z = width;
        x = random(-hw, hw);
        y = random(-hh, hh);
        pz = z;
    }
  }
  
  void show() {
    fill(255);
    noStroke();
    
    float sx = map(x / z, 0, 1, 0, width);
    float sy = map(y / z, 0, 1, 0, height);

    float r = map(z, 0, width, 8, 0);
    //ellipse(sx, sy, r, r);
    
    stroke(255);
    
    float psx = map(x / pz, 0, 1, 0, width);
    float psy = map(y / pz, 0, 1, 0, height);
    
    line(psx, psy, sx, sy);
  }
}
