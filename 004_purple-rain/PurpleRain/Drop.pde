class Drop {
  float z = random(0, 20);
  float x = random(width);
  float y = random(-height, -10);
  float vy = map(z, 0, 20, 4, 10);
  float len = map(z, 0, 20, 10, 20);
  float ay = map(z, 0, 20, 0, 0.2);
  
  
  void fall() {
    y += vy;
    vy += ay;
    
    if( y > height) {
      z = random(0, 20);
      y = random(-height, -10);
      x = random(width);
      vy = map(z, 0, 20, 4, 10);
      len = map(z, 0, 20, 10, 20);
      ay = map(z, 0, 20, 0, 0.2);
    }
  }
  
  void show() {
    float thick = map(z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(138,43,226);
    line(x, y, x, y+len);
    
  }
  
}
