/*
(hard)
Problem Statement

Given a string and a pattern, find the smallest substring in the given string 
which has all the characters of the given pattern.

Example 1:

Input: String="aabdec", Pattern="abc"
Output: "abdec"
Explanation: The smallest substring having all characters of the pattern is "abdec"

Example 2:

Input: String="abdabca", Pattern="abc"
Output: "abc"
Explanation: The smallest substring having all characters of the pattern is "abc".

Example 3:

Input: String="adcad", Pattern="abc"
Output: ""
Explanation: No substring in the given string has all characters of the pattern.
*/

// - Given a string and a pattern, find the smallest substring in the given string 
// which has all the characters of the given pattern.
function smallestWindowContainingSubstring(str, pattern) {
    let patternTracker = {};
    for (let i = 0; i < pattern.length; i++) {
        if (!patternTracker[pattern[i]]) {
            patternTracker[pattern[i]] = 0;
        }
        patternTracker[pattern[i]]++;
    }
    // console.log('patternTracker: ', patternTracker);

    let smallestSubstringLength = Infinity;
    let smallestSubstring = ''
    let windowTracker = {};
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {

    }
    return smallestSubstring
};


console.log('smallestWindowContainingSubstring(): ', smallestWindowContainingSubstring('aabdec', 'abc'));
console.log('smallestWindowContainingSubstring(): ', smallestWindowContainingSubstring('abdabca', 'abc'))
console.log('smallestWindowContainingSubstring(): ', smallestWindowContainingSubstring('adcad', 'abc'))
