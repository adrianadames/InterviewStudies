/*
(easy)

Problem Statement

Given a string, identify the position of the first character 
that appears only once in the string. If no such character 
exists, return -1.

Example 1:
Input: "apple"
Expected Output: 0
Justification: The first character 'a' appears only once in 
the string and is the first character.

Example 2:
Input: "abcab"
Expected Output: 2
Justification: The first character that appears only once 
is 'c' and its position is 2.

Example 3:
Input: "abab"
Expected Output: -1
*/

// time: O(n);
// space: O(n) (worst case if every char is distinct);
function firstNonRepeatingChar(str) {
    let charCount = {};

    for (let i = 0; i < str.length; i++) {
        if (!charCount[str[i]]) {
            charCount[str[i]] = 0;
        }
        charCount[str[i]]++;
    }

    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return i;
        }
    }

    return -1;
}

console.log('firstNonRepeatingChar: ', firstNonRepeatingChar("apple")); // 0
console.log('firstNonRepeatingChar: ', firstNonRepeatingChar("abcab")); // 2
console.log('firstNonRepeatingChar: ', firstNonRepeatingChar("abab")); // -1