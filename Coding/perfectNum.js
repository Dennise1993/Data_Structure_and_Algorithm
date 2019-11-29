/*
We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.
Example:
Input: 28
Output: True
Explanation: 28 = 1 + 2 + 4 + 7 + 14
Note: The input number n will not exceed 100,000,000. (1e8)
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num<=0){
        return false;
    }
    
    let factors = new Set();
    factors.add(1);
    for(let i = 2; i<= Math.sqrt(num); i++){
        if(num%i === 0){
            factors.add(i);
            factors.add(num/i);
        }
    }
    let sum = 0;
    for(let j of factors){
        sum += j;
    }
    
    return sum === num;
};

console.log(checkPerfectNumber(28));