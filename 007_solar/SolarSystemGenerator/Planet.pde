class Planet {
  float radius;
  float angle;
  float orbitRadius;
  float omega;
  ArrayList<Planet> children = new ArrayList<Planet>();
  
  Planet(float radius_, float orbitRadius_, float omega_) {
    radius = radius_;
    orbitRadius = orbitRadius_;
    angle = 0;
    omega = omega_;
  }
  
  void update() {
    angle += omega;
  }
  
  void show() {
    pushMatrix();
    fill(255);
    noStroke();
    rotate(angle);
    translate(orbitRadius, 0);
    ellipse(0, 0, radius*2, radius*2);
    for(Planet child : children) {
       child.update();
       child.show(); 
    }

    popMatrix();
  }
  
  void addChild(Planet child) {
     children.add(child); 
  }
  
  ArrayList<Planet> getChildren() {
    return children; 
  }
  
}
