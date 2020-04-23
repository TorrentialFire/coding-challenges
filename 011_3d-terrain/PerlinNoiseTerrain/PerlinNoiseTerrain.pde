
int cols, rows;
int scl = 20;
int w;
int h;
float yoff = 0;
float vy = 0.05;
float[][] terrain;

void setup() {
  size(800, 600, P3D);
  
  w = width * 2;
  h = height * 3;
  cols = w / scl;
  rows = h / scl;
  terrain = new float[cols][rows];
  
  /*
  float xoff = 0;
  float yoff = 0;
  float nscl = 0.1;
  
  for (int y = 0; y < rows; y++) {
    for (int x = 0; x < cols; x++) {
      terrain[x][y] = sample(x, y, xoff, yoff, nscl);
    }
  }*/
}

float sample(int x, int y, float xoff, float yoff, float nscl) {
  return map(noise(xoff + nscl*x, yoff + nscl*y), 0, 1, -150, 150);
}

void draw() {
  background(0);
  
  /*
  for (int x = 0; x < cols; x++) {
    for (int y = 0; y < rows; y++) {
      stroke(255);
      noFill();
      rect(x*scl, y*scl, scl, scl);
    }
  }
  */
  
  float xoff = 0;
  yoff -= vy;
  float nscl = 0.1;
  
  for (int y = 0; y < rows; y++) {
    for (int x = 0; x < cols; x++) {
      terrain[x][y] = sample(x, y, xoff, yoff, nscl);
    }
  }
  
  stroke(255);
  noFill();
  
  
  translate(width/2, height/2 + 50);
  rotateX(PI/3);
  translate(-w/2, -h/2);
  
  for (int y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (int x = 0; x < cols; x++) {
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
      
    }
    vertex(cols*scl, y*scl, terrain[cols-1][y]);
    vertex(cols*scl, (y+1)*scl, terrain[cols-1][y+1]);
    endShape();
  }
}
