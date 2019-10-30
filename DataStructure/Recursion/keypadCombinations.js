/**
 * A keypad on a cellphone has alphabets for all numbers between 2 and 9.
 * You can make different combinations of alphabets by pressing the numbers.
 * 
 * For example, if you press 23, the following combinations are possible:
 * ad, ae, af, bd, be, bf, cd, ce, cf
 * 
 * Note that because 2 is pressed before 3, the first letter is always an alphabet on the number 2. 
 * Likewise, if the user types 32, the order would be
 * da, db, dc, ea, eb, ec, fa, fb, fc
 * 
 * Given an integer num, find out all the possible strings that can be made using digits of input num. 
 * Return these strings in a list. The order of strings in the list does not matter. 
 * However, as stated earlier, the order of letters in a particular string matters.
 */

function getCharacters(num){
    if (num === 2){
        return "abc"
    }else if (num === 3){
        return "def"
    }else if (num === 4){
        return "ghi"
    }else if (num === 5){
        return "jkl"
    }else if (num === 6){
        return "mno"
    }else if (num === 7){
        return "pqrs"
    }else if (num === 8){
        return "tuv"
    }else if (num === 9){
        return "wxyz"
    }else{
        return ""
    }
}

/**
 * 
 * @param {number} num 
 */
function keypad(num){
    // transfer num's type from number to string
    if(typeof num === 'number'){
        num = num.toString();
    }

    let comb = [];
    if(!num.length) {
        comb.push('');
        return comb;
    }
    let charsForFirstNum = getCharacters(Number(num[0]));

    let subComb = keypad(num.slice(1));

    for(let subStr of subComb){
        for(let char of charsForFirstNum){
            let newStr = char.concat(subStr);
            comb.push(newStr);
        }
    }

    return comb;

}

// Test Cases
console.log(keypad(0)); // ['']
console.log(keypad(9)) //['w','x','y','z']
console.log(keypad(23)); //["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
let arr3 = ["djg", "ejg", "fjg", "dkg", "ekg", "fkg", "dlg", "elg", "flg", "djh", "ejh", "fjh", "dkh", "ekh", "fkh", "dlh", "elh", "flh", "dji", "eji", "fji", "dki", "eki", "fki", "dli", "eli", "fli"];
let set3 = new Set(["djg", "ejg", "fjg", "dkg", "ekg", "fkg", "dlg", "elg", "flg", "djh", "ejh", "fjh", "dkh", "ekh", "fkh", "dlh", "elh", "flh", "dji", "eji", "fji", "dki", "eki", "fki", "dli", "eli", "fli"]);
let arr3a = keypad(354);
let set3a = new Set(keypad(354));
console.log(arr3.length === arr3a.length);// true

