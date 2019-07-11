/*
1) Check Palindrome: Given the string, check if it is a palindrome.

Example

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
For inputString = "a", the output should be
checkPalindrome(inputString) = true.
*/

// A palindrome is a word, phrase, or sequence that reads the same backward as forward. 

// Off the top, my idea is to turn the string into an array of its characters, 
// and then check if it's a palindrome by reversing the array and checking if 
// it's equal to the original array. 

function checkPalindrome(str) {
    let arr = str.split('');
    let arr_reversed = arr.slice().reverse();

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr_reversed[i]) {
            return false
        }
    }
    return true
}

console.log(checkPalindrome('adrian'))
console.log(checkPalindrome('aabaa'))