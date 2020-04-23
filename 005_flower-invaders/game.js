// array of flowers
// array of water
// watering can

var can;
var flowers = [];
var drops = [];

function setup() {
    createCanvas(600, 400);
    can = new Can();
    //drop = new Drop(width/2, height-80);
    for (var i = 0; i < 7; i++) {
        flowers[i] = new Flower(i * 80 + 60, 60);
    }
}

function draw() {
    background(51);

    for (var i = 0; i < flowers.length; i++) {
        flowers[i].show();
    }

    var removedDrops = [];
    for (var i = 0; i < drops.length; i++) {
        drops[i].move();
        drops[i].show();

        for (var j = 0; j < flowers.length; j++) {
            if(drops[i].hits(flowers[j])) {
                flowers.splice(j, 1);
                removedDrops.push(i);
            }
        }

        if(drops[i].y < 0) {
            removedDrops.push(i);
        }
    }

    for (var k = removedDrops.length - 1; k >= 0; k--) {
        drops.splice(removedDrops[k], 1);
    }

    if (keyIsDown(RIGHT_ARROW)) {
        can.move(1);
    } else if (keyIsDown(LEFT_ARROW)) {
        can.move(-1);
    }

    can.show();
}

function keyPressed() {
    /*if (keyCode === RIGHT_ARROW) {
        can.move(1);
    } else if (keyCode === LEFT_ARROW) {
        can.move(-1);
    }*/

    if(key === ' ') {
        var drop = new Drop(can.x, height-80);
        drops.push(drop);
    }
}

