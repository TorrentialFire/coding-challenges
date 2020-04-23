function Can() {
    this.x = width / 2;
    this.vx = 2;

    this.show = function() {
        fill(255);
        rectMode(CENTER);
        rect(this.x, height-40, 20, 60);
    }

    this.move = function(dir) {
        if(dir > 0) {
            this.x += dir + this.vx;
        } else {
            this.x += dir - this.vx;
        }
        this.x = constrain(this.x, 10, width-10);
    }
}