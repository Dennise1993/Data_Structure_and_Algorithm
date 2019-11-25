/*

Symmetric Tree
Given a binary tree, check whether it is a mirror of itself 
(ie, symmetric around its center). 
For example, this binary tree ​[1,2,2,3,4,4,3]​ is symmetric:

        1 
        /\ 
       2  2 
      /\  /\ 
     3  44  3
    / \    / \
   5   6  6   5
But the following ​[1,2,2,​null​,3,​null​,3]​ is not:
    1 
    /\ 
   2  2
    \   \ 
    3   3

*/
class Node{
    constructor(value){
        this.value = value;
        this.children = [];
    }
}

class Tree{
    constructor(root){
        this.root = root;
    }

    /**
     * 
     * @param {Tree} tree 
     */
    isSymmetric(){
        if(!this.root.children){
            return true;
        }
        return this.isSymmetricHelper(this.root.children[0], this.root.children[1]);
    }

    /**
     * 
     * @param {Node} t1 
     * @param {Node} t2 
     */
    isSymmetricHelper(n1, n2){
        if(n1.value !== n2.value){
            return false;
        }
        let children1 = n1.children;
        let reversedChildren2 = [...n2.children].reverse();
        if(children1.length !== reversedChildren2.length){
            return false;
        }
        for(let i=0; i< children1.length; i++){
            if(!this.isSymmetricHelper(children1[i], reversedChildren2[i])){
                return false;
            } 
        }
        return true;
    }

    isSymmetricIterative(){
        if(!this.root.children.length){
            return true;
        }
        let currDepth = 1;
        let queue = [[this.root, 1]];
        while(queue.length){
            let [currNode, depth] = queue.shift();
            if(depth!==currDepth){
                currDepth = depth;
                let levelContainer = [[currNode, depth],...queue];
                if(!this.checkSymm(levelContainer)){
                    return false;
                }
            }
            for(let i=0; i<currNode.children.length;i++){
                queue.push([currNode.children[i], depth+1]);
            }
        }
        return true;
    }

    /**
     * 
     * @param {array} lev 
     */
    checkSymm(lev){
        let lev1 = [...lev];
        lev1.reverse();
        for(let i=0;i<lev.length;i++){
            let [node,depth] = lev[i];
            let [node1, depth1] = lev1[i];
            if(node.value !== node1.value){
                return false;
            }
        }
        return true;
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
let f1 = new Node('f');

a.children = [b,b1];
b.children = [c,d];
c.children = [e,f];
b1.children = [d1,c1];
c1.children = [f1,e1];

let t1 = new Tree(a);
console.log(t1.isSymmetric());
console.log(t1.isSymmetricIterative());
let h = new Node('h');
let g = new Node('g');
let k = new Node('k');
h.children = [g,k];

let t2 = new Tree(h);
console.log(t2.isSymmetric());
console.log(t2.isSymmetricIterative());