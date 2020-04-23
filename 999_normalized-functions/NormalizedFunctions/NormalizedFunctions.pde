int padding;
float latchTime;
boolean latch;
float x;
ArrayList<PVector> points = new ArrayList<PVector>();

float smoothStart2(float x) {
  return x * x;
}

float smoothStart3(float x) {
  return x * x * x;
}

void setup() {
  size(800, 800);
  padding = 100;
  
  float y;
  for(x = 0.0; x <= 1.0; x += 0.01) {
    y = smoothStart3(x);
    points.add(new PVector(x, y));
  }
  x = 0.0;
  printArray(points);
}

void draw() {
  background(51);
  
  translate(padding, height - padding);
  
  stroke(255);
  // Vertical axis
  line(0, 0, 0, -(height - (2 * padding)));
  // Horizontal axis
  line(0, 0, width - (2 * padding), 0);
  
  float yScl = -(height - (2 * padding));
  float xScl = width - (2 * padding);
  
  noFill();
  beginShape();
  for(PVector point : points) {
     vertex(point.x * xScl, point.y * yScl); 
  }
  endShape();
  
  fill(125, 125, 255);
  noStroke();
  float y = smoothStart3(x);
  circle(x * xScl, y * yScl, 20);
  
  x += 0.005;
  if (x > 1.0) {
    int ts = millis();
    if (!latch) {
      latchTime = ts + 3000;
      latch = true;
    } else if (latch && ts > latchTime) {
      latch = false;  
    }
    
    if(latch) {
      x = 1.0;
    } else {
      x = 0.0;
    }
    
  }
  
}
