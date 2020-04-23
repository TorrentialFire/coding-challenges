function Cell(pos_, r_) {
    this.dirx = random();
    this.diry = random();
    this.vel = createVector((this.dirx < 0.5 ? -1 : 1) * random(1, 3), (this.diry < 0.5 ? -1 : 1) * random(1, 3));
    this.r = r_;
    this.c = color(random(100,255), 0, random(100,255), 100);
    
    if(pos_) {
        this.pos = pos_.copy();
    } else {
        this.pos = createVector(random(this.r, width-this.r), random(this.r, height-this.r));   
    }
    

    this.move = function() {
        var jitter = p5.Vector.random2D();
        this.pos.add(jitter);
        this.pos.add(this.vel);
        this.pos.x = constrain(this.pos.x, this.r, width-this.r);
        this.pos.y = constrain(this.pos.y, this.r, height-this.r);

        if(this.pos.x <= this.r || this.pos.x >= width-this.r) {
            this.vel.x *= -1;
        }

        if(this.pos.y <= this.r || this.pos.y >= height-this.r) {
            this.vel.y *= -1;
        }

        this.r += 0.1;
    }

    this.mitosis = function() { 
        var newCells = [];
        newCells.push(new Cell(createVector(this.pos.x - this.r/2, this.pos.y - this.r/2), this.r/2));
        newCells.push(new Cell(createVector(this.pos.x + this.r/2, this.pos.y + this.r/2), this.r/2));
        return newCells;
    }

    this.hits = function(other) {
        var d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
        if(d < this.r + other.r) {
            return true;
        } else {
            return false;
        }
    }

    this.show = function() {
        noStroke();
        fill(this.c);
        ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
    }

    this.clicked = function(mx, my) {
        var d = dist(this.pos.x, this.pos.y, mx, my);
        if(d < this.r) {
            return true;
        } else {
            return false;
        }
    }
}