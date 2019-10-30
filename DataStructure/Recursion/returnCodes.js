/**
 * 
Problem statement

In an encryption system where ASCII lower case letters represent numbers in the pattern a=1, b=2, c=3... and so on, 
find out all the codes that are possible for a given input number.

Example 1

number = 123
codes_possible = ["aw", "abc", "lc"]
Explanation: The codes are for the following number:

1 . 23 = "aw"
1 . 2 . 3 = "abc"
12 . 3 = "lc"

Example 2

number = 145
codes_possible = ["ade", "ne"]

Return the codes in a list. The order of codes in the list is not important.

Note: you can assume that the input number will not contain any 0s
 *
 */

/**
 *  Helper function to figure out alphabet of a particular number
    Remember: 
        * ASCII for lower case 'a' = 97
        * chr(num) returns ASCII character for a number e.g. chr(65) ==> 'A'
 * @param {number} num 
 */
function getAlphabet(num){
    return String.fromCharCode(num+96);
}

 /**
  * Return an array with all possible codes for the input number
  * @param {number} number input integer
  * @returns {array} array of all codes possible for this number
  */
function allCodes(number){
    if(number === 0){
        return [''];
    }
    //calculation for two right-most digits. eg: if number = 1123, this calculation is meant for 23
    let remainder = number % 100;
    let output100 = [];
    //if remainder is two digits and is still in range(not larger than z)
    if(remainder <=26 && remainder >=10){
        // get all the code for the remaining number
        output100 = allCodes(Math.floor(number/100)); 

        let alphabet = getAlphabet(remainder);
        for(let i=0;i<output100.length;i++){
            output100[i] = output100[i].concat(alphabet);
        }
    }

    //claculation for right-most digit. eg: if number = 1123, this calculation is meant for 3
    remainder = number % 10;
    //get all the codes for the remaining number
    let output10 = allCodes(Math.floor(number/10)); 
    let alphabet10 = getAlphabet(remainder);
    for(let j=0;j<output10.length;j++){
        output10[j] = output10[j] + alphabet10;
    }
    let output = [...output10, ...output100];
    return output;

}

//Test cases
console.log(allCodes(123));//['abc', 'aw', 'lc']
console.log(allCodes(145));//['ade', 'ne']
console.log(allCodes(1145));//['aade', 'ane', 'kde']

