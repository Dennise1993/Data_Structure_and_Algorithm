class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }

    toString(){
        let curr = this;
        while(curr){
            console.log(curr.value);
            curr = curr.next;
        }
    }

}

class Solution{
    constructor(){

    }

    /**
     * 
     * @param {Node} node 
     */
    reverse(node){
        let curr = node;
        let prev = null;
        while(curr){
            let temp = curr.next;
            curr.next = prev;

            prev = curr;
            curr = temp;
        }
        return prev;
    }

    /**
     * 
     * @param {Node} node 
     */
    reverseRecursion(node){
        if( node === null || node.next === null){
            return node;
        }
        let reversedHead = this.reverseRecursion(node.next);
        node.next.next = node;
        node.next = null;
        return reversedHead;
    }

        /**
     * 
     * @param {array} arr 
     */
    buildLinkedList(arr){
        let head = null;
        if(!arr.length){
            return head;
        }

        head = new Node(arr[0]);
        let curr = head;
        for(let i = 1; i<arr.length; i++){
            let node = new Node(arr[i]);
            curr.next = node;
            curr = node;
        }

        return head;
    }

}

let sol = new Solution();
let node = sol.buildLinkedList([1,2,3,4,5]);
node.toString();
console.log('===================');
let reversed = sol.reverse(node);
reversed.toString();
console.log('===================');
let reversedBack = sol.reverseRecursion(reversed);
reversedBack.toString();
console.log('===================');