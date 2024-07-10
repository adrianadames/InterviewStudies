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

// - keep a count of the most frequent appearing character in the window and then add k. that's the 
// answer

// time complexity: O(N);
// space complexity: O(1);
let longestSubstringWithSameLettersAfterReplacement = (str, k) => {
    let longestSubstringLength = 0; 
    let charTracker = {};
    let countOfMostFreqCharInWindow = 0; 
    let mostFreqCharInWindow = ''; 
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        if (!charTracker[str[windowEnd]]) {
            charTracker[str[windowEnd]] = 0; 
        }
        charTracker[str[windowEnd]]++; 

        // - this is the part i'm confused about; if we just added a letter that made it's
        // frequency equal to that of the largest frequency letter, which one do we save
        // as the highest frequency count since their count is both equal?wha
        if (charTracker[str[windowEnd]] >= countOfMostFreqCharInWindow) {
            countOfMostFreqCharInWindow = charTracker[str[windowEnd]]; 
            mostFreqCharInWindow = str[windowEnd];
        }

        // - if adding the character to the window violates the condition for validity, we need to shrink the 
        // window from the left until the condition is met
        while (windowEnd - windowStart + 1 - countOfMostFreqCharInWindow > k) {
            let leftChar = str[windowStart]; 

            charTracker[str[windowStart]]--;
            windowStart++; 

            // - if the character we just removed was the mostFreqentCharInWindow, then we will need 
            // to loop through our dictionary to update the new mostFrequentCharInWindow
            if (leftChar === mostFreqCharInWindow) {
                countOfMostFreqCharInWindow = 0; // - reset countOfMostFrequentCharInWindow 
                for (let key in charTracker) {
                    if (charTracker[key] >= countOfMostFreqCharInWindow) {
                        countOfMostFreqCharInWindow = charTracker[key];
                        mostFreqCharInWindow = key;  
                    }
                }
            }
        }
        // - after the above while loop, the constraint should be satisfied; we then check if this is the 
        // the longest substring we've encountered so far; 
        if (windowEnd - windowStart + 1 > longestSubstringLength) {
            longestSubstringLength = windowEnd - windowStart + 1;
        }
    }

    return longestSubstringLength
};

console.log('longestSubstringWithSameLettersAfterReplacement: ', longestSubstringWithSameLettersAfterReplacement('aabccbb', 2)); 
console.log('longestSubstringWithSameLettersAfterReplacement: ', longestSubstringWithSameLettersAfterReplacement('abbcb', 1));
console.log('longestSubstringWithSameLettersAfterReplacement: ', longestSubstringWithSameLettersAfterReplacement('abccde',1));


