/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let pathMatrix = [];
    for (let row = 0; row < n; row++){
        pathMatrix.push([]);
        for(let col = 0; col < m; col++){
            pathMatrix[row].push(1);
        }
    }
    for(let row = 1; row < n; row++){
        for(let col = 1; col < m; col++){
            pathMatrix[row][col] = pathMatrix[row-1][col] + pathMatrix[row][col-1];
        }
    }
    return pathMatrix[n-1][m-1];
};
/**
 * Input: m = 7, n = 3
 * Output: 28
 */
console.log(uniquePaths(7, 3)); //28