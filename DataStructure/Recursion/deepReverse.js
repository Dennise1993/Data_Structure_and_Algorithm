

 /**
  * Takes as input a list, and returns a new list that is the deep reverse of the input list.
  * This means it reverses all the elements in the list, and if any of those elements are lists themselves, 
  * reverses all the elements in the inner list, all the way down.
  * 
  * Example:
  * arr =  [1, [2,3], 4, [5,6]]
  * solution = [ [6,5], 4, [3, 2], 1]
  * 
  * @param {array} l list to be reversed
  */
 function deepReverse(l) {

    if(!l.length){ // if l is an empty array
        return [];
    }
    let firstEle = l[0];
    let subReverseArr = deepReverse(l.slice(1));
    //console.log("subReverseArr type is: ", typeof subReverseArr);
    if(typeof firstEle === 'object' && firstEle instanceof Array){
        firstEle = deepReverse(firstEle);
    }
    subReverseArr.push(firstEle);

    return subReverseArr;

 }

 //Test cases
 console.log(deepReverse([1, 2, 3, 4, 5])); //[5, 4, 3, 2, 1]
 console.log(deepReverse([1, 2, [3, 4, 5], 4, 5])); //[5, 4, [5, 4, 3], 2, 1]
 console.log(deepReverse([1, [2, 3, [4, [5, 6]]]])); //[[[[6, 5], 4], 3, 2], 1]
 console.log(deepReverse([1, [2,3], 4, [5,6]])); // [ [6,5], 4, [3, 2], 1]

