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


// time complexity: O(N + K) where K number of letters in pattern;
// space compexity: O(P) where P number of unique letter in pattern;

// - we need to use the sliding window method; if the chars in the window
// match the letter counts of the chars in the pattern, then return true; 
function permutationInAString(str, pattern) {
    // - first we track the pattern letter counts
    let patternTracker = {}; 
    for (let i = 0; i < pattern.length; i++) {
        if (!patternTracker[pattern[i]]) {
            patternTracker[pattern[i]] = 0;
        }
        patternTracker[pattern[i]]++;
    }

    let windowStart = 0;
    let charTracker = {}; 
    let windowEnd = 0; 

    // - then we set up the window
    while (windowEnd < str.length && windowStart < str.length) {
        
        // - if the letter we're about to add is not in the patternTracker, 
        // then adding it to the window will violate our condition; at this point
        // we'll need to reset our window to the next char after windowEnd 
        if (!(str[windowEnd] in patternTracker)) {
            windowStart = windowEnd + 1; 
            windowEnd++; 
            charTracker = {};
        } else {
            // - add the letter to the tracker; 
            if (!charTracker[str[windowEnd]]) {
                charTracker[str[windowEnd]] = 0;
            }
            charTracker[str[windowEnd]]++; 

            // - if the letter we're about to add is in our patternTracker, 
            // we need to check if adding it will violate the condition of too many 
            // of that letter being in the window shrink window until it's satisfied
            while (charTracker[str[windowEnd]] > patternTracker[str[windowEnd]]) {
                charTracker[str[windowStart]]--; 
                windowStart++; 
            }

            // - at this point the window should satisfy the condition that the
            // count of the letter in the window shouldn't exceed that of the pattern
            // - we can then check if the window chars matches the pattern chars
            let permutationFound = true; 
            for (let key in patternTracker) {
                if (charTracker[key] !== patternTracker[key]) {
                    permutationFound = false; 
                } 
            };
            // - if all the entries above match, the permutationFound should be true;
            if (permutationFound === true) {
                return true;
            }
            windowEnd++; 
        }
    }
    return false;
}

console.log('permutationInAString: ', permutationInAString("oidbcaf","abc"));
console.log('permutationInAString: ', permutationInAString("odicf","dc"));
console.log('permutationInAString: ', permutationInAString("bcdxabcdy","bcdyabcdx"));
console.log('permutationInAString: ', permutationInAString("aaacb","abc"));