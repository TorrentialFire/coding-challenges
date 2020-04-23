function Flower(x_, y_) {
    this.x = x_;
    this.y = y_;
    this.r = 30;

    this.show = function() {
        fill(255, 0, 200);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }

}