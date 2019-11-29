/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    if(nums.length === 0){
        return 0;
    }
    let currSum = 0;
    let maxSum = nums[0];

    for(let i=0; i<nums.length;i++){
        if(nums[i]+ currSum < 0){
            currSum = 0;
            maxSum = Math.max(maxSum, nums[i]);
        }else{
            currSum += nums[i];
            maxSum = Math.max(maxSum, currSum);
        }
    }
    return maxSum;
}

/*
Complexity Analysis

Time complexity : O(N) since it's one pass along the array.

Space complexity : O(1), since it's a constant space solution.
*/

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));