function Cell(i, j) {
    this.i = i;
    this.j = j;
    //            top, right, bottom, left
    this.walls = [true, true, true, true];
    this.visited = false;

    this.checkNeighbors = function() {
        var unvisitedNeighbors = [];
        var k = this.i*cols + this.j;

        // Don't look up if we're on the first row
        if (this.i !== 0) {
            var nup = k - cols;
            if(!grid[nup].visited)
                unvisitedNeighbors.push(grid[nup]);
        }

        // Don't look right if we're on the last column
        if (this.j !== cols - 1) {
            var nright = k + 1;
            if(!grid[nright].visited)
                unvisitedNeighbors.push(grid[nright]);
        }

        // Don't look down if we're on the last row
        if (this.i !== rows - 1) {
            var ndown = k + cols;
            if(!grid[ndown].visited)
                unvisitedNeighbors.push(grid[ndown]);
        }

        // Don't look left if we're on the first column
        if (this.j !== 0) {
            var nleft = k - 1;
            if(!grid[nleft].visited)
                unvisitedNeighbors.push(grid[nleft]);
        }

        if (unvisitedNeighbors.length > 0) {
            var r = floor(random(0, unvisitedNeighbors.length));
            return unvisitedNeighbors[r];
        } else {
            return undefined;
        }
    }

    this.show = function() {
        var x = this.j*w;
        var y = this.i*w;

        noStroke();
        if (next && next.i === this.i && next.j === this.j) {
            fill(0, 255, 0, 100);
            rect(x, y, w, w);
        } else if (this.visited) {
            fill(255, 0, 255, 100);
            rect(x, y, w, w);
        }

        stroke(255);
        // TL -> TR
        if (this.walls[0])
            line(x, y, x + w, y);

        // TR -> BR
        if (this.walls[1])
            line(x + w, y, x + w, y + w);

        // BL -> BR
        if (this.walls[2])
            line(x, y + w, x + w, y + w);

        // TL -> BL
        if (this.walls[3])
            line(x, y, x, y + w);

    }
}

