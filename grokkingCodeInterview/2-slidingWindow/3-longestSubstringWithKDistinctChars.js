/*
(medium)

Problem Statement: 

Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example 1:

Input: String="araaci", K=2
Output: 4
Explanation: The longest substring with no more than '2' distinct characters is "araa".

Example 2:

Input: String="araaci", K=1
Output: 2
Explanation: The longest substring with no more than '1' distinct characters is "aa".

Example 3:

Input: String="cbbebi", K=3
Output: 5
Explanation: The longest substrings with no more than '3' distinct characters are "cbbeb" & "bbebi".
*/

// time complexity: O(n)
// space complexity: O(k)
function longestSubstringWithKDistinctChars(str, K) {
    if (K === 0) { // edge case
        return 0
    }
    let longestSubstringLength = 0;
    let windowStart = 0; 
    let charTracker = {};  
    let numberOfDistinctChars = 0; 

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        // - add char at windowEnd to our tracker
        if (!charTracker[str[windowEnd]]) {
            charTracker[str[windowEnd]] = 0; 
            numberOfDistinctChars++; 
        };
        charTracker[str[windowEnd]]++; 

        // - if adding the char above cause the number of distinct chars to be over K, 
        // shrink window from left until it's back to K
        while (numberOfDistinctChars > K) {
            charTracker[str[windowStart]]--;
            if (charTracker[str[windowStart]] === 0) {
                delete charTracker[str[windowStart]]; // deleting the char ensures our space complexity is O(K)
                numberOfDistinctChars--;
            }
            windowStart++; 
        };
        longestSubstringLength = Math.max(windowEnd - windowStart + 1, longestSubstringLength);
    };

    return longestSubstringLength;
};

console.log(longestSubstringWithKDistinctChars('araaci', 2)); // returns 4
console.log(longestSubstringWithKDistinctChars('araaci', 1)); // returns 2
console.log(longestSubstringWithKDistinctChars('cbbebi', 3)); // returns 5
console.log(longestSubstringWithKDistinctChars('cbbebibccci', 2)); // returns 4
console.log(longestSubstringWithKDistinctChars("", 1)); // Output: 0
console.log(longestSubstringWithKDistinctChars("a", 0)); // Output: 0
console.log(longestSubstringWithKDistinctChars("a", 1)); // Output: 1
console.log(longestSubstringWithKDistinctChars("abcabcabc", 3)); // Output: 9
console.log(longestSubstringWithKDistinctChars("aabbcc", 10)); // Output: 6