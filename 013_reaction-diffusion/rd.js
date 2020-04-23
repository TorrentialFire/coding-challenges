
var grid = [];
var next = [];

var dA = 1.0;
var dB = 0.5;
var feed = 0.055;
var k = 0.062;

function setup() {
    createCanvas(200, 200);
    pixelDensity(1);   
    
    grid = [];
    next = [];
    for (var x = 0; x < width; x++) {
        grid[x] = [];
        next[x] = [];
        for (var y = 0; y < height; y++) {
            grid[x][y] = {a: 1, b: 0};
            next[x][y] = {a: 1, b: 0};
        }
    }

    for (var x = 10; x < 25; x++) {
        for (var y = 10; y < 25; y++) {
            //grid[x][y].a = 0;
            grid[x][y].b = 1;
        }
    }
}

function laplaceA(x, y) {
    var sum = 0;

    sum += grid[x][y].a * -1;
    if(x !== 0)
        sum += grid[x-1][y].a * 0.2;
    if(x !== width - 1)
        sum += grid[x+1][y].a * 0.2;
    if(y !== height - 1)
        sum += grid[x][y+1].a * 0.2;
    if(y !== 0)
        sum += grid[x][y-1].a * 0.2;
    
    if(x !== 0 && y !== 0)
        sum += grid[x-1][y-1].a * 0.05;
    
    if(x !== width - 1 && y !== 0)
        sum += grid[x+1][y-1].a * 0.05;
    
    if(x !== width - 1 && y !== height - 1)
        sum += grid[x+1][y+1].a * 0.05;

    if(x !== 0 && y !== height - 1)
        sum += grid[x-1][y+1].a * 0.05;

    return sum;
}

function laplaceB(x, y) {
    var sum = 0;

    sum += grid[x][y].b * -1;
    if(x !== 0)
        sum += grid[x-1][y].b * 0.2;
    if(x !== width - 1)
        sum += grid[x+1][y].b * 0.2;
    if(y !== height - 1)
        sum += grid[x][y+1].b * 0.2;
    if(y !== 0)
        sum += grid[x][y-1].b * 0.2;
    
    if(x !== 0 && y !== 0)
        sum += grid[x-1][y-1].b * 0.05;
    
    if(x !== width - 1 && y !== 0)
        sum += grid[x+1][y-1].b * 0.05;
    
    if(x !== width - 1 && y !== height - 1)
        sum += grid[x+1][y+1].b * 0.05;

    if(x !== 0 && y !== height - 1)
        sum += grid[x-1][y+1].b * 0.05;

    return sum;
}

function draw() {
    //background(51);

    
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            var a = grid[x][y].a;
            var b = grid[x][y].b;
            next[x][y].a = a + 
                           (dA * laplaceA(x, y)) - 
                           (a * b * b) + 
                           (feed * (1 -a));
            next[x][y].b = b + 
                           (dB * laplaceB(x, y)) + 
                           (a * b * b) - 
                           ((k + feed) * b);
            next[x][y].a = constrain(next[x][y].a, 0, 1)
            next[x][y].b = constrain(next[x][y].b, 0, 1)
        }
    }
    


    loadPixels();
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            var pix = (x + y * width) * 4;
            var c = constrain(floor((255 - 255 * next[x][y].b) * (next[x][y].a)), 0, 255);
            pixels[pix + 0] = c;
            pixels[pix + 1] = c;
            pixels[pix + 2] = c;
            pixels[pix + 3] = 255;

        }
    }
    updatePixels();

    swap();
    //noLoop();
}

function swap() {
    var temp = grid;
    grid = next;
    next = temp;
}