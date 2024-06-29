/*
(hard)
Problem Statement

Given a string with lowercase letters only, if you are allowed 
to replace no more than ‘k’ letters with any letter, find the 
length of the longest substring having the same letters after 
replacement.

Example 1:
    Input: String="aabccbb", k=2
    Output: 5
    Explanation: Replace the two 'c' with 'b' to have a longest repeating substring "bbbbb".
Example 2:
    Input: String="abbcb", k=1
    Output: 4
    Explanation: Replace the 'c' with 'b' to have a longest repeating substring "bbbb".
Example 3:
    Input: String="abccde", k=1
    Output: 3
    Explanation: Replace the 'b' or 'd' with 'c' to have the longest repeating substring "ccc".
*/


let longestSubstringWithSameLettersAfterReplacement = (str, k) => {
    let windowStart = 0;
    let windowEnd = 0; 
    let maxSubstringLength = 0; 
    let substringLength = 0;
    let distinctCharsTracker = {}
    let maxFreq = 0;

    while (windowEnd < str.length) {
        if (!distinctCharsTracker[str[windowEnd]]) {
            distinctCharsTracker[str[windowEnd]] = 0;
        };
        distinctCharsTracker[str[windowEnd]]++;

        maxFreq = Math.max(maxFreq, distinctCharsTracker[str[windowEnd]]); 

        if ((windowEnd - windowStart + 1 - maxFreq) > k) {
            distinctCharsTracker[str[windowStart]]--;
            windowStart++;
        };

        maxSubstringLength = Math.max(maxSubstringLength, windowEnd - windowStart + 1);

        windowEnd++;
    };

    return maxSubstringLength
};

console.log('longestSubstringWithSameLettersAfterReplacement: ', longestSubstringWithSameLettersAfterReplacement('aabccbb', 2)); 
console.log('longestSubstringWithSameLettersAfterReplacement: ', longestSubstringWithSameLettersAfterReplacement('abbcb', 1));
console.log('longestSubstringWithSameLettersAfterReplacement: ', longestSubstringWithSameLettersAfterReplacement('abccde',1));


