/*
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
*/

// Approach 1: Recursion
class Node{
    constructor(val){
        this.val = val;
        this.left = this.right = null;
    }
}
/**
 * 
 * @param {Node} root 
 * @param {Number} sum 
 * @returns {Boolean}
 */
function pathSum(root, sum){
    return pathSumHelper(root, sum);
}

function pathSumHelper(root, sum){
    if(!root){
        return false;
    }
    let currSum = sum - root.val;
    if(!root.left && !root.right){
        return currSum === 0;
    }
    return pathSumHelper(root.left, currSum) || pathSumHelper(root.right, currSum);
}
//Approach 2: Iteration
function pathSumIterative(root, sum){
    if(!root){
        return false;
    }
    let stack = [[root, sum-root.val]];
    while(stack.length){
        let [node, currSum] = stack.pop();
        if(!node.left && !node.right && currSum === 0){
            return true;
        }
        currSum -= node.val;
        if(node.left){
            stack.push([node.left,currSum]);
        }
        if(node.right){
            stack.push([node.right,currSum]);
        }
    }
    return false;
}
// Test
let root = new Node(5);
root.left = new Node(4);
root.left.left = new Node(11);
root.left.left.left = new Node(7);
root.left.left.right = new Node(2);
root.right = new Node(8);
root.right.left = new Node(13);
root.right.right = new Node(4);
root.right.right.right = new Node(1);
console.log(pathSum(root, 22));
console.log(pathSumIterative(root, 22));
