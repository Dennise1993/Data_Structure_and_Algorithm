/**
Problem Statement
Suppose there is a staircase that you can climb in either 1 step, 2 steps, or 3 steps. 
In how many possible ways can you climb the staircase if the staircase has n steps? 
Write a recursive function to solve the problem.

Example:

n = 3
output = 4
The output is 4 because there are four ways we can climb the staircase:

1. 1 step +  1 step + 1 step
2. 1 step + 2 steps 
3. 2 steps + 1 step
4. 3 steps
 */

 /**
  * Return number of possible ways in which you can climb the staircase
  * @param {number} num the number of steps in the staircase
  * @returns {number}
  */
function staircase(num){
    if (num === 0){
        return 1;
    }
    wayTable = [];
    wayTable[0] = 1;
    for(let i = 1; i<=num; i++){
        let totalWays = 0;
        for (let j of [1,2,3]){
            if(i-j >= 0){
                totalWays += wayTable[i-j];
            }
        }
        wayTable[i] = totalWays;
    }
    return wayTable[num];
}

//Test case
console.log(staircase(3)); //4
console.log(staircase(4)); //7
console.log(staircase(7)); //44