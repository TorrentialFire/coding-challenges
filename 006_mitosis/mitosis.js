var cells = [];

function setup() {
    createCanvas(600, 600);
    cells.push(new Cell(null, 40));
}

function draw() {
    background(51);

    for (var i = 0; i < cells.length; i++) {
        for(var j = i; j < cells.length; j++) {
            if(cells[i].hits(cells[j])) {
                cells[i].vel.mult(-1);
                cells[j].vel.mult(-1);
            }
        }

        cells[i].move();
        cells[i].show();
    }
}

function mousePressed() {

    for(var i = cells.length-1; i >= 0; i--) {
        if(cells[i].clicked(mouseX, mouseY)) {
            cells[i].mitosis().forEach((newCell) => {
                cells.push(newCell); 
            });
            cells.splice(i, 1);
        }
    }

    /*
    var removedCells = [];
    var newCells = [];
    for (var i = 0; i < cells.length; i++) {
        if(cells[i].clicked(mouseX, mouseY)) {
            removedCells.push(i);

            cells[i].mitosis().forEach((newCell) => {
                newCells.push(newCell); 
            });
        }
    }

    for (var k = removedCells.length - 1; k >= 0; k--) {
        cells.splice(removedCells[k], 1);
    }

    for (var i = 0; i < newCells.length; i++) {
        cells.push(newCells[i]);
    }
    */
    
}