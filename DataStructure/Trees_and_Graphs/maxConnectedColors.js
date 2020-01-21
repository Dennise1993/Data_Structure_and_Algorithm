class Solution{
    constructor(){

    }

    /**
     * Return the maximum number of connected colors
     * @param {Board} board 2D array of colors
     * @returns {number} maxCount maximum number of connected colors
     */
    maxConnected(board){
        // iterate the grid, and check the number of connected colors for each point
        let maxCount = 0;
        for (let y=0;y<board.height;y++){
            for(let x=0;x<board.width;x++){
                let count = this.findConnectedNum(board, x, y);
                maxCount = Math.max(count, maxCount);
            }
        }
        return maxCount;
    }

    /**
     * 
     * @param {Board} board 
     * @param {number} x 
     * @param {number} y 
     * @returns {number} count
     */
    findConnectedNum(board, x, y){
        //return this._findConnectedNum(board, x, y, board.getColor(x,y), new Map());
        return this._findConnectedInterative(board, x, y);
    }

    /**
     * 
     * @param {Board} board 
     * @param {number} x 
     * @param {number} y 
     * @returns {number}
     */
    _findConnectedInterative(board, x, y) {
        let stack = [[x,y]];
        let color = board.getColor(x,y);
        let count = 0;
        let seen = new Map();
        while(stack.length){
            let [coordX, coordY] = stack.pop();
            let key = coordX.toString() + coordY.toString();
            if(seen.get(key)){
                continue;
            }
            seen.set(key, true);

            if(color !== board.getColor(coordX, coordY)){
                continue;
            }

            count += 1;
            stack.push(...board.getNegibourhoods(coordX, coordY));
        }
        return count;
    }

    /**
     * 
     * @param {Board} board 
     * @param {number} x 
     * @param {number} y 
     * @param {string} color 
     * @param {Map} seen 
     */
    _findConnectedNum(board, x, y, color, seen){
        let count = 0;
        let key = x.toString() + y.toString();
        if(seen.get(key)){
            return count;
        }
        seen.set(key,true);

        if(color !== board.getColor(x,y)){
            return count;
        }

        count = 1;
        let neighbors = board.getNegibourhoods(x,y);
        for(let neighbor of neighbors){
            count += this._findConnectedNum(board, neighbor[0], neighbor[1], color, seen);
        }
        return count;
    }
}

class Board{
    /**
     * 
     * @param {array} grid 
     * [
     *  ['red', 'green', 'blue'],
     *  ['red', 'red', 'red'],
     *  ['green', 'green', 'red']
     * ]
     */
    constructor(grid){
        this.grid = grid;
        this.width = grid[0].length;
        this.height = grid.length;
    }

    /**
     * 
     * @param {number} x point's position on x-axis
     * @param {number} y point's position on y-axis
     * @returns {array} all negibourhoods of point (x, y)
     */
    getNegibourhoods(x,y){
        const neighbors = [
            [-1,0],
            [0,-1],
            [1,0],
            [0,1]
        ];
        let coords = [];
        for (let neighbor of neighbors){
            let coordX = neighbor[0] + x;
            let coordY = neighbor[1] + y;
            if(coordX<0 || coordX>=this.width || coordY<0 || coordY>=this.height){
                continue;
            }
            coords.push([coordX,coordY]);
        }
        return coords;
    }

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @returns {string}
     */
    getColor(x,y){
        return this.grid[y][x];
    }
}

let grid = [
    ['r', 'g', 'b'],
    ['r', 'r', 'r'],
    ['g', 'g', 'r']
];

let board = new Board(grid);
let max = new Solution().maxConnected(board);
console.log(max);


