
function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {

    return helper(root);
};

function helper (node, lower=Number.MIN_SAFE_INTEGER, upper=Number.MAX_SAFE_INTEGER){
    if(!node){
        return true;
    }
    let val = node.val;
    if(val<=lower || val>=upper){
        return false;
    }

    if(!helper(node.left, lower, val)){
        return false;
    }
    if(!helper(node.right, val, upper)){
        return false;
    }       
    return true;
}

let t = new TreeNode(0);
console.log(isValidBST(t));
