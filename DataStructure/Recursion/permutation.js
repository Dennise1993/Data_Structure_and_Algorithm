/**
 * Return a list of permutations
 * Example:
 *  permute([0, 1]) returns [ [0, 1], [1, 0] ]
 * @param {array} l list of items to be permuted
 * @returns {array} permu list of permutation with each permuted item being represented by a list
 */
function permute(l){
    let permu = [];
    if(!l.length){
        permu.push([]);
        return permu;
    }
    //get the permutation of l except l's first element;
    let firstEle = l[0];
    let subPermu = permute(l.slice(1));   

    //for each subArr in subPermu
    for(let subArr of subPermu){
        // how many permutations for the subArr and the first element?
        for(let i=0;i<=subArr.length; i++){
            let arr = [...subArr]; //copy subArry to arr
            arr.splice(i,0,firstEle); // insert the first element into arr
            permu.push(arr);
        }
    }

    return permu;
}

// Test Cases
/*
console.log(permute([]));//[[]]
console.log(permute([0]));//[[0]]
console.log(permute([0, 1]));//[[0, 1], [1, 0]]
console.log(permute([0, 1, 2]));//[[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]]
*/

/**
 * Return a list of all permutations of the string
 * Example
 *  string = 'ab'  output = ['ab', 'ba']
 * @param {string} str input string
 * @returns {array} permu list of all permutations of the input string
 */
function permutateString(str){
    let permu = [];
    if(!str.length){
        permu.push('');
        return permu;
    }
    let firstChar = str[0];
    let subPerm = permutateString(str.slice(1));
    for(let subStr of subPerm){
        for(let i=0;i<=subStr.length;i++){
            let newStr = subStr.slice(0);
            newStr = newStr.slice(0,i) + firstChar + newStr.slice(i);
            permu.push(newStr);
        }
    }
    return permu;
}

//Test Cases
console.log(permutateString(''))//''
console.log(permutateString('ab')) //['ab','ba']
console.log(permutateString('abc')) //['abc', 'bac', 'bca', 'acb', 'cab', 'cba']