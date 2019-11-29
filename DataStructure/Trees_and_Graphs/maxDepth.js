/*
Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
Note: A leaf is a node with no children.
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

    maxDepth(){
        return this.maxDepthHelper(this.root);
    }

    maxDepthHelper(node){
        let maxDepth = 0;
        if(!node || !node.value){
            return maxDepth;
        }
        maxDepth = 1;
        for(let child of node.children){
            maxDepth = Math.max(this.maxDepthHelper(child)+1, maxDepth);
        }
        return maxDepth;
    }

    maxDepthIterative(){
        let maxDepth = 0;
        let queue = [[this.root,0]];
        while(queue.length){
            let [curr, depth] = queue.shift();
            if(curr && curr.value){
                depth += 1;
                maxDepth = Math.max(maxDepth, depth);
            }
            for(let child of curr.children){
                queue.push([child, depth]);
            }
        }
        return maxDepth;
    }
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');
a.children = [b,c,d];
d.children = [e,f];

let tree = new Tree(a);
console.log(tree.maxDepth());
console.log(tree.maxDepthIterative());
