/*
(hard)
Problem - String Anagrams 

Given a string and a pattern, find all anagrams of the pattern 
in the given string.

An anagram is actually a Permutation of a string. For example, 
“abc” has the following six anagrams:

abc
acb
bac
bca
cab
cba

Write a function to return a list of starting indices of the 
anagrams of the pattern in the given string.

Example 1:

Input: String="ppqp", Pattern="pq"
Output: [1, 2]
Explanation: The two anagrams of the pattern in the given string 
are "pq" and "qp".

Example 2:

Input: String="abbcabc", Pattern="abc"
Output: [2, 3, 4]
Explanation: The three anagrams of the pattern in the given string
are "bca", "cab", and "abc".
*/

// - Given a string and a pattern, find all anagrams of the pattern 
// in the given string. Write a function to return a list of starting 
// indices of the anagrams of the pattern in the given string.

function stringAnagrams(str, pattern) {
    // -we can create a window that once it reaches the same size as the pattern, 
    // when we add another element we have to substract one from the left; 
    
    let patternTracker = {};
    for (let i = 0; i < pattern.length; i++) {
        if (!patternTracker[pattern[i]]) {
            patternTracker[pattern[i]] = 0;
        }
        patternTracker[pattern[i]]++;
    }

    let windowStart = 0; 
    let charTracker = {};
    let indicesArr = [];

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        if (!charTracker[str[windowEnd]]) {
            charTracker[str[windowEnd]] = 0; 
        }
        charTracker[str[windowEnd]]++;

        if (windowEnd >= pattern.length - 1) {
            // - at this point the char tracker should be the same length as the pattern
            // so we can start checking if we have an anagram match with the pattern
            let patternFound = true; 
            for (let key in patternTracker) {
                // - if any of the key values from patternTracker don't match, we 
                // do not have a match, and we should increment the position of the window
                if (!charTracker[key] || charTracker[key] !== patternTracker[key]) {
                    patternFound = false;
                }
            }

            if (patternFound === true) {
                indicesArr.push(windowStart);
            }

            charTracker[str[windowStart]]--;
            windowStart++;
        }
    }
    
    return indicesArr;
}

console.log('stringAnagrams(): ', stringAnagrams("ppqp", "pq")); // Output: [1, 2]
console.log('stringAnagrams(): ', stringAnagrams("abbcabc", "abc")); // Output: [2, 3, 4]
console.log('stringAnagrams(): ', stringAnagrams("abcabcabc", "abc")); // Output: [0, 1, 2, 3, 4, 5, 6] (testing overlapping case)
console.log('stringAnagrams(): ', stringAnagrams("cbaebabacd", "abc")); // Output: [0, 6]
