class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Solution{
    constructor(){

    }

    /**
     * 
     * @param {Node} node 
     */
    inOrder(node){
        if(!node){
            return;
        }
        this.inOrder(node.left);
        console.log(node.value);
        this.inOrder(node.right);
    }

    /**
     * Given the root node of a binary search tree (BST) and a value. 
     * You need to find the node in the BST that the node's value equals the given value. 
     * Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.
     * @param {Node} node 
     * @param {any} value
     * @returns {Node}
     */
    searchBST(node, value){
        if(!node){
            return null;
        }
        if(node.value === value){
            return node;
        } else if(value < node.value){
            return this.searchBST(node.left, value);
        } else {
            return this.searchBST(node.right, value);
        }
    }

    /**
     * 
     * @param {Node} node 
     * @param {number} value 
     */
    insertBST(node, value){
        if(!node){
            return new Node(value);
        }
        let curr = node;
        while(true){
            if(value<curr.value){
                if(!curr.left){
                    curr.left = new Node(value);
                    break;
                }
                curr = curr.left;
            } else if(value > curr.value){
                if(!curr.right){
                    curr.right = new Node(value);
                    break;
                }
                curr = curr.right;
            }
        }       
        return node;
    }
}



/*
Given the tree:
    4
    /\ 
   2  6
  /\   \
 1  3  (7)
Add the value to search: 2
*/

let a = new Node(4);
let b = new Node(2);
let c = new Node(6);
let d = new Node(1);
let e = new Node(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
let sol = new Solution();
let subTree = sol.searchBST(a, 2);
sol.inOrder(subTree)
console.log('==========');
subTree = sol.searchBST(a, 5);
sol.inOrder(subTree);
console.log('==========');
sol.insertBST(a, 7);
sol.inOrder(a);
console.log('==========');
