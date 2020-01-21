/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/


/**
 * @param {Array} nums
 * @param {number} target
 * @return {Array}
 */
function twoSum(nums, target){
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(target - nums[i])){
            return [map.get(target - nums[i]), i];
        }
        map.set(nums[i], i);
    }
}

/*
Time complexity : O(n). We traverse the list containing nn elements only once. Each look up in the table costs only O(1) time.

Space complexity : O(n). The extra space required depends on the number of items stored in the hash table, which stores at most nn elements.
*/

console.log(twoSum([2, 7, 11, 15],9));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function(nums, target) {
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        
        let expectedKey = target - nums[i];
        if(map.has(expectedKey)){
            return [map.get(expectedKey), i];
        }
        map.set(nums[i], i);
    }
    
}
console.log(twoSum1([2, 7, 11, 15],9));