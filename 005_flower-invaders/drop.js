function Drop(x_, y_) {
    this.x = x_;
    this.y = y_;
    this.r = 8;

    this.show = function() {
        noStroke();
        fill(100, 100, 255);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    this.hits = function(flower) {
        var d = dist(this.x, this.y, flower.x, flower.y);
        if (d < this.r + flower.r) {
            return true;
        } else {
            return false;
        }
    }

    this.move = function() {
        this.y -= 2;
    }

}