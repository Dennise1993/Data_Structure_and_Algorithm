/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let lastZeroIndex = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== 0){
            nums[lastZeroIndex] = nums[i];
            lastZeroIndex ++;
        }
    }

    for(let j = lastZeroIndex; j<nums.length;j++){
        nums[j] = 0;
    }
    return nums;
}

console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]