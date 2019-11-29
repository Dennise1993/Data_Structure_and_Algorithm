class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
/*
        a 
        /\ 
       b  b 
      /\  /\ 
     c  dd  c
    / \    / \
   e   f  f   e
*/
class Solution{
    /**
     * 
     * @param {Node} root 
     */
    isSymmetricIterative(root){
        if(!root){
            return true;
        }
        let queue = [root.left, root.right];
        while(queue.length){
            let left = queue.shift();
            let right = queue.shift();
            if(!left && !right){
                continue;
            }
            if((!left && right) || (left && !right)){
                return false;
            }
            if(left.value !== right.value){
                return false;
            }
            queue.push(left.left, right.right, left.right, right.left);            
        }
        return true;
    }

    /**
     * 
     * @param {Node} root 
     */
    isSymmetric(root){
        if(!root){
            return true;
        }
        return this.isSymmetricHelper(root.left, root.right);
    }

/**
 * 
 * @param {Node} left 
 * @param {Node} right 
 */
    isSymmetricHelper(left, right){
        if(!left && !right){
            return true;
        }

        if((left && !right) || (!right && left)){
            return false;
        }

        if(left.value !== right.value){
            return false;
        }

        return this.isSymmetricHelper(left.left, right.right) && this.isSymmetricHelper(left.right, right.left);
    }
}

let a = new Node('a');
let b = new Node('b');
let b1 = new Node('b');
let c = new Node('c');
let c1 = new Node('c');
let d = new Node('d');
let d1 = new Node('d');
let e = new Node('e');
let e1 = new Node('e');
let f = new Node('f');
let f1 = new Node('f1');

a.left = b;
a.right = b1;
b.left = c;
b.right = d;
c.left = e;
c.right = f;
b1.left = d1;
b1.right = c1;
c1.left = f1;
c1.right = e1;


console.log(new Solution().isSymmetricIterative(a));
console.log(new Solution().isSymmetric(a));