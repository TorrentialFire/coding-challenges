
var cols, rows;
var w = 20;
var grid = [];
var current;
var next;
var stack = [];

function setup() {
    // 1600: 2, 2, 2, 2, 2, 2, 5, 5
    // 900: 2, 2, 3, 3, 5, 5
    // 100, 50, 25, 20, 10, 5
    createCanvas(1600, 900);
    cols = floor(width/w);
    rows = floor(height/w);
    //frameRate(1);
    for( var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }

    current = grid[0];
    //current.visited = true;
    stack.push(current);

}

function draw() {
    background(51);

    if(stack.length > 0) {
        current = stack.pop();
        current.visited = true;
        next = current.checkNeighbors();
        if(next) {
            stack.push(current);
            removeWalls(current, next);
            //next.visited = true;
            stack.push(next);
        }
    }

    for (var i = 0; i < grid.length; i++) {
        grid[i].show();
    }

    next = undefined;
}

function removeWalls(current, next) {

    var y = current.i - next.i;
    if (y > 0) { // current is below next
        current.walls[0] = false;
        next.walls[2] = false;
    } else if (y < 0) { // current is above next
        current.walls[2] = false;
        next.walls[0] = false;
    } else { // current is in the same row as next
        var x = current.j - next.j;
        if (x > 0) { // current is to the right of next
            current.walls[3] = false;
            next.walls[1] = false;
        } else { //current is to the left of next
            current.walls[1] = false;
            next.walls[3] = false;
        }
    }

}