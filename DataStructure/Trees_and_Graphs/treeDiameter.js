/*
Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:
Given a binary tree
          1
         / \
        2   3
       / \     
      4   5    
Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].
*/



class Node{
    constructor(v){
        this.v = v;
        this.right = null;
        this.left = null;
    }
}

//Solution 1
let diameter = 0;
var diameterOfBinaryTree = function(root) {
    depth(root);
    return diameter;
}

function depth(node){
    if(!node){
        return 0;
    }
    let leftDepth = depth(node.left);
    let rightDepth = depth(node.right);
    diameter = Math.max(diameter, leftDepth + rightDepth);
    return Math.max(leftDepth, rightDepth)+1;
}

let a = new Node(1);
a.right = new Node(3);
a.left =new Node(2);
a.left.left = new Node(4);
a.left.right = new Node(5);
console.log(diameterOfBinaryTree(a)); // 3
console.log(diameterTree(a)); // 3


//Solution 2
function diameterTree(root){
    
    return _diameterHelper(root)[1];
}

function _diameterHelper(root){
    if(!root){
        return [-1,0];
    }
    let [leftHeight, leftDiameter] = _diameterHelper(root.left);
    let [rightHeight, rightDiameter] = _diameterHelper(root.right);

    return [Math.max(leftHeight,rightHeight)+1, Math.max(leftDiameter,rightDiameter,leftHeight+rightHeight+2)];
}
