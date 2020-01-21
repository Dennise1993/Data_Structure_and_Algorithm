/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

 

Example 1:

Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.
*/
class Node{
    constructor(val){
        this.val = val;
        this.left = this.right = null;
    }
}
// Approach 1, Bootom-up recursion
/**
 * 
 * @param {Node} root 
 */
function balancedBinaryTree(root){
    return bottomHelper(root)[0];
}

function bottomHelper(root){
    if(!node){
        return [true, 0];
    }
    let [leftB, leftD] = bottomHelper(root.left);
    let [rightB, rightD] = bottomHelper(root.right);
    return [leftB && rightB && Math.abs(leftD - rightD)<=1, Math.max(leftD,rightD)+1];
}

// Approach 2, Top-down recursion
function balancedBinaryTree2(root){
    if(!root){
        return true;
    }
    let leftD = depth(root.left);
    let rightD = depth(root.right);
    if(Math.abs(leftD - rightD)>1){
        return false;
    } 
    return balancedBinaryTree2(root.left) && balancedBinaryTree2(root.right);
}

function depth(root){
    if(!root){
        return -1;
    }
    return Math.max(depth(root.left), depth(root.right)) + 1;
}