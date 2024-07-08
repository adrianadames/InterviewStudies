/*
(hard)
Problem Statement 

Given a string, find the length of the longest substring 
which has no repeating characters.

Example 1:
    Input: String="aabccbb"
    Output: 3
    Explanation: The longest substring without any repeating characters is "abc".
Example 2:
    Input: String="abbbb"
    Output: 2
    Explanation: The longest substring without any repeating characters is "ab".
Example 3:
    Input: String="abccde"
    Output: 3
    Explanation: Longest substrings without any repeating characters are "abc" & "cde".
*/

// -length of substring with no repeating chars; 
let noRepeatSubstring = (str) => {
    let longestSubstring = 0; 
    let charTracker = {};
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        if (!charTracker[str[windowEnd]]) {
            charTracker[str[windowEnd]] = 0; 
        }
        charTracker[str[windowEnd]]++; 

        // - if the character we just added to our tracker, made the count
        // of that chracter greater than 1, we need to shrink the window 
        // from the left until the freq of that char goes to back to one
        while (charTracker[str[windowEnd]] > 1) {
            charTracker[str[windowStart]]--; 
            if (charTracker[str[windowStart]] === 0) {
                delete charTracker[str[windowStart]];
            }
            windowStart++;
        }

        longestSubstring = Math.max(windowEnd - windowStart + 1, longestSubstring);
    }

    return longestSubstring
}

console.log(noRepeatSubstring("aabccbb")); // Output: 3 ("abc")
console.log(noRepeatSubstring("abbbb"));   // Output: 2 ("ab")
console.log(noRepeatSubstring("abccde"));  // Output: 3 ("abc" or "cde")
console.log(noRepeatSubstring(""));        // Output: 0 (empty string)
console.log(noRepeatSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(noRepeatSubstring("abc"));      // Output: 3 ("abc")
console.log(noRepeatSubstring("aaaa"));     // Output: 1 ("a")