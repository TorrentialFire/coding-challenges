var snake;
var scl = 25;
var fr = 10;
var food;

function setup() {
    createCanvas(750, 750);
    snake = new Snake();
    frameRate(10);
    pickLocation();
}

function pickLocation() {
    var cols = floor(width/scl);
    var rows = floor(height/scl);
    food = createVector(floor(random(3, cols - 3)), floor(random(3, rows - 3)));
    food.mult(scl);
}

function draw() {
    background(51);
    snake.update();

    if(snake.death()) {
        fr = 10;
        frameRate(fr);
        pickLocation();
    }

    snake.show();

    if(snake.eat(food)) {
        frameRate(++fr);
        pickLocation();
    }

    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
}

function keyPressed() {
    if(keyCode === UP_ARROW) {
        snake.dir(0, -1);
    } else if(keyCode === DOWN_ARROW) {
        snake.dir(0, 1);
    } else if(keyCode === RIGHT_ARROW) {
        snake.dir(1, 0);
    } else if(keyCode === LEFT_ARROW) {
        snake.dir(-1, 0);
    }
}

