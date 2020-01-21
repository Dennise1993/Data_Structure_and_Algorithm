/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
20 12
*/

class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var levelOrderBottom = function(root) {
    let queue = [root];
    let tracker = [];
    while(queue.length){
        let num = queue.length;
        let currDepth = [];
        while(num>0){
            let node = queue.shift();
            if(node){
                currDepth.push(node.val);
                queue.push(node.left,node.right);
            }
            num--;
        }
        if(currDepth.length){
            tracker.unshift(currDepth);
        }       
    }
    return tracker;
};

let a = new Node(3);
a.left = new Node(9);
a.right = new Node(20);
a.right.left = new Node(15);
a.right.right = new Node(7);
console.log(levelOrderBottom(a));