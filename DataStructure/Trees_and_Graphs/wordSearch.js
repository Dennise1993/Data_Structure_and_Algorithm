/**
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // iterate the whole board finding the word
    for(let row = 0; row < board.length; row++){
        for(let col = 0; col < board[0].length; col++){
            if(hasWord(board, row, col, word, 0, new Map())){
                return true;
            }
        }
    }
    return false;
}

function hasWord(board, row, col, word, index, seen){

    if(index===word.length){
        return true;
    }
    if(row >= board.length || row < 0 || col >= board[0].length || col < 0){
        return false;
    }
    let currChar = board[row][col];
    let k = row.toString() + col.toString();
    if(seen.has(k) && seen.get(k)){
        return false;
    }
    if(currChar !== word[index]){
        return false;
    }

    // currChar is equl to the word[index]
    // and has not been visited before
    seen.set(k, true);
    index += 1;

    let isExist =  hasWord(board, row + 1, col, word, index, seen)
        || hasWord(board, row - 1, col, word, index, seen)
        || hasWord(board, row, col + 1, word, index, seen)
        || hasWord(board, row, col - 1, word, index, seen);

    seen.set(k, false);
    return isExist;
}

let board = [
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E']
  ];
  
let word = "ABCCED"; //return true.
let word1 = "SEE"; // return true.
let word2 = "ABCB"; // return false.

console.log(exist(board, word));
console.log(exist(board, word1));
console.log(exist(board, word2));

let board1 = [["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]];
let word3 = "ABCESEEEFS";
console.log(exist(board1, word3));//true