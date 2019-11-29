/*
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

Example:

Input: 38
Output: 2 
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
             Since 2 has only one digit, return it.
*/

function addDigits(num){
    let n = num;
    while(n>=10){
        let sum = 0;
        while(n>0){
            sum = sum + n%10;
            n = Math.floor(n/10);
        }
        n = sum 
    }
    return n;
}