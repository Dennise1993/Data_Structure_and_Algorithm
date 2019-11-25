/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. 

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.

Example1:
11110
11010
11000
00000

Output: 1

Example2:
11000
11000
00100
00011

Output: 3

*/

class Visitor{
    constructor(earth){
        this.earth = earth;
        this.seen = new Map();
    }

    numOfIslands(){
        let counter = 0;
        for(let row = 0; row < this.earth.rows; row++){
            for(let col = 0; col < this.earth.cols; col++){
                let coord = [row, col];
                if( this.isIsland(coord)){
                    counter+=1;
                    this.sinkWholeIsland(coord);     
                } 
            }
        }
        return counter;
    }

    sinkWholeIsland(coord){
        if(this.isIsland(coord)){
            let row = coord[0];
            let col = coord[1];
            this.earth.grid[row][col] = '0';
            let neighbours = this.earth.getNeighbours(coord);
            for(let neigh of neighbours){
                this.sinkWholeIsland(neigh);
            }
        }
        
    }

    //============================Issue==============================
    /**
     * 
     * @param {array} point 
     */
    visitWholeIsland(point){
        let tracker = [point];
        while(tracker.length){
            let currPoint = tracker.pop();
            if(this.hasVisited(currPoint)){
                continue;
            }
            this.markAsVisited(currPoint);
            if(!this.isIsland(currPoint)){               
                continue;
            }           
            let neighbours = this.earth.getNeighbours(currPoint);
            tracker.push(...neighbours);
        }
    }
    //============================Issue==============================

    /**
     * 
     * @param {array} point 
     */
    isIsland(point){
        let r = point[0];
        let c = point[1];
        let type = this.earth.grid[r][c].toString();
        if( type === '1'){
            return true;
        }
        return false;
    }

    //============================Issue==============================
    markAsVisited(point){
        if(!this.hasVisited(point)){
            let key = point[0].toString() + point[1].toString();
            this.seen.set(key, true);
        }
    }

    
    /**
     * 
     * @param {array} point [row, col]
     */
    hasVisited(point){
        let row = point[0];
        let col = point[1];
        let key = row.toString() + col.toString();
        if(this.seen.get(key)){
            return true;
        } 
        return false;
    }
    //============================Issue==============================
}

class Earth{
    /**
     * 
     * @param {array} grid 
     */
    constructor(grid){
        this.grid = grid;
        this.rows = grid.length;
        this.cols = grid[0].length;
    }

    /**
     * 
     * @param {array} coord [row, column]
     */
    getNeighbours(coord){
        const neighbours = [[0,1], [0,-1], [1,0], [-1,0]];
        let coords = [];
        for(let [neighRow, neighCol] of neighbours){

            let coordRow = neighRow + coord[0];
            let coordCol = neighCol + coord[1];

            if(coordRow < 0 || coordRow >= this.rows || coordCol < 0 || coordCol >=this.cols){
                continue;
            }

            coords.push([coordRow, coordCol]);
        }
        return coords;
    }
}

let grid1 = [
    [1,1,1,1,0],
    [1,1,0,1,0],
    [1,1,0,0,0],
    [0,0,0,0,0]
];

let grid2 = [
    [1,1,0,0,0],
    [1,1,0,0,0],
    [0,0,1,0,0],
    [0,0,0,1,1]
];
let grid3 = [
    [1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0],
    [0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0],
    [0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1],
    [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1],
    [0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
    [0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0],
    [0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1],
    [0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0],
    [1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0],
    [0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0],
    [1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1],
    [0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0],
    [0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0],
    [1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1],
    [1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0],
    [0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0],
    [0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1],
    [0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0]
];

let grid4 = [
    [1,0,0,1,0],
    [1,0,1,0,1],
    [0,1,0,0,0],
    [1,1,1,0,0]
];

let grid5 = [
    [1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0],
    [0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0],
    [0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1],
    [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,1],
    [0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
    [0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0],
    [0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1],
];
let visitor = new Visitor(new Earth(grid3));//22
console.log(visitor.numOfIslands());
