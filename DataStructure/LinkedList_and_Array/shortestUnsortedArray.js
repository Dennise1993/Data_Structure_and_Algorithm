/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let stack = [];
    let start = nums.length - 1;
    let end = 0;
    for (let i = 0; i < nums.length; i++){
        while(stack.length && nums[i]<nums[stack[stack.length - 1]]){
            start = Math.min(start, stack.pop());
        }
        stack.push(i);
    }
    stack = [];
    for(let j = nums.length - 1; j>=0; j--){
        while(stack.length && nums[j]>nums[stack[stack.length - 1]]) {
            end = Math.max(end, stack.pop());
        }
        stack.push(j);
    }
    return end-start+1 > 0 ? end-start+1 : 0;
}

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])); //5