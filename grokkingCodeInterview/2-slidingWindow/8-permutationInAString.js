/*
(hard)
Problem Statement

Given a string and a pattern, find out if the string contains any 
permutation of the pattern.

Permutation is defined as the re-arranging of the characters of the 
string. For example, “abc” has the following six permutations:

abc
acb
bac
bca
cab
cba
If a string has ‘n’ distinct characters it will have n!n! permutations.

Example 1:

Input: String="oidbcaf", Pattern="abc"
Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.

Example 2:

Input: String="odicf", Pattern="dc"
Output: false
Explanation: No permutation of the pattern is present in the given string as a substring.

Example 3:

Input: String="bcdxabcdy", Pattern="bcdyabcdx"
Output: true
Explanation: Both the string and the pattern are a permutation of each other.

Example 4:

Input: String="aaacb", Pattern="abc"
Output: true
Explanation: The string contains "acb" which is a permutation of the given pattern.
*/


// Given a string and a pattern, find out if the string contains any 
// permutation of the pattern.

function permutationInAString(str, pattern) {

    // - first we create an object that contains the counts of the letters in the pattern
    let patternLetterCount = {}; 

    for (let i = 0; i < pattern.length; i++) {
        if (patternLetterCount[pattern[i]]) {
            patternLetterCount[pattern[i]]++;
        } else {
            patternLetterCount[pattern[i]] = 1; 
        }
    }; 
    // console.log('patternLetterCount: ', patternLetterCount);

    // - what we want to do is create a window the same size as the pattern, store the letters in the window
    // in an object, and see if the letters in the window match those of the pattern; if we get a match, return 
    // true. if not, shift the window one spot at a time until the end of the string; 

    for (let windowStart = 0; windowStart < str.length - pattern.length + 1; windowStart++) {
        // console.log('windowStart: ', windowStart);
        let windowLetterCount = {}; 

        for (let i = windowStart; i < pattern.length + windowStart; i++) {
            if (windowLetterCount[str[i]]) {
                windowLetterCount[str[i]]++;
            } else {
                windowLetterCount[str[i]] = 1; 
            }
        };
        // console.log('windowLetterCount: ', windowLetterCount);

        // - now I need to check if the counts of the letters in windowLetterCount and patternLetterCount match

        // - set matchFound = true, and then loop through the entries in windowLetterCount, and if you 
        // encounter an entry that doesn't match set matchFound to false
        let matchFound = true; 
        for (let key in patternLetterCount) {
            // console.log('key: ', key); 
            // console.log('patternLetterCount[key]: ', patternLetterCount[key]);
            // console.log('windowLetterCount[key]: ', windowLetterCount[key]);
            if (!windowLetterCount[key] || windowLetterCount[key] !== patternLetterCount[key]) {
                matchFound = false; 
            }
        }

        if (matchFound === true) {
            return true
        }

    };
    return false    
}

// console.log('permutationInAString: ', permutationInAString("oidbcaf","abc"));
// console.log('permutationInAString: ', permutationInAString("odicf","dc"));
// console.log('permutationInAString: ', permutationInAString("bcdxabcdy","bcdyabcdx"));
// console.log('permutationInAString: ', permutationInAString("aaacb","abc"));