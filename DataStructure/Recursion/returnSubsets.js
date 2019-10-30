/**
Problem Statement
Given an integer array, find and return all the subsets of the array. The order of subsets in the output array is not important. However the order of elements in a particular subset should remain the same as in the input array.

Note: An empty set will be represented by an empty list

Example 1

arr = [9]

output = [[]
          [9]]
Example 2

arr = [9, 12, 15]

output =  [[],
           [15],
           [12],
           [12, 15],
           [9],
           [9, 15],
           [9, 12],
           [9, 12, 15]]
 */

 /**
  * 
  * @param {array} arr input integer array
  * @returns {array} array of arrays (two dimensional array) where each array represents a subset
  */
function subsets(arr){
  let subsetsArr = [];
    if(!arr.length) {
      subsetsArr.push([]);
      return subsetsArr;
    }
    let firstElement = arr[0];
    let smallSubsets = subsets(arr.slice(1));
    for(let smallArr of smallSubsets){
      subsetsArr.push(smallArr);
      let newArr = [...smallArr];
      newArr.unshift(firstElement);
      subsetsArr.push(newArr);
    }
    return subsetsArr;

}

//Test Cases
console.log(subsets([9, 8, 9, 8]));
/*
solution = [[],
[8],
[9],
[9, 8],
[8],
[8, 8],
[8, 9],
[8, 9, 8],
[9],
[9, 8],
[9, 9],
[9, 9, 8],
[9, 8],
[9, 8, 8],
[9, 8, 9],
[9, 8, 9, 8]]
*/
console.log("===========================================");
console.log(subsets([5, 7])); //[[], [7], [5], [5, 7]]
console.log("===========================================");
console.log(subsets([9])); //[[],[9]]
console.log("===========================================");
console.log(subsets([9, 12, 15])); //[[], [15], [12], [12, 15], [9], [9, 15], [9, 12], [9, 12, 15]]