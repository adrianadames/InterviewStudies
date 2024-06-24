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

// space: O(n) = 1;
// time: O(n) = n;
let noRepeatSubstring = (str) => {
    let windowStart = 0;
    let windowEnd = -1;
    let longestLength = 0;
    let substringLength = 0;
    let charsCount = {};
    let repeats = false;

    while (windowEnd < str.length-1 && windowStart < str.length-1) {
        if (repeats === false) { // -if no duplicates detected so far, expand window size
            windowEnd += 1;
            substringLength +=1;
            if (!charsCount[str[windowEnd]]) { // if character distinct (i.e. if count < 1)
                charsCount[str[windowEnd]] = 1;
                longestLength = Math.max(longestLength, substringLength);
            } else { // duplicate character detected
                charsCount[str[windowEnd]]+=1;
                repeats = true;
            }
        } else { // -duplicate character detected; decrease window size
            charsCount[str[windowStart]] -=1;
            if (charsCount[str[windowEnd]] <= 1) {
                repeats = false;
            }
            windowStart+=1;
            substringLength-=1;
        }
    }
    return longestLength
}

// console.log('noRepeatSubstring: ', noRepeatSubstring('aabccbb'));
// console.log('noRepeatSubstring: ', noRepeatSubstring('abbbb'));
// console.log('noRepeatSubstring: ', noRepeatSubstring('abccde'));


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

let noRepeatSubstring2 = (str) => {
    let windowStart = 0;
    let windowEnd = -1; 
    let distinctChars = {}; 
    
    let substringLength = 0; 
    let maxSubstringLength = 0; 

    while (windowEnd < str.length -1) {
        windowEnd++;
        substringLength++; 

        // - if the newly added character doesn't exist in our store, add it to the store
        if (!distinctChars[str[windowEnd]]) {
            distinctChars[str[windowEnd]] = 1; 
            if (substringLength > maxSubstringLength) {
                maxSubstringLength = substringLength;
            }

            // - if the newly added character exists in our store, reduce the window 
            // from the front until the count of the newly added character is back to 1
        } else {
            distinctChars[str[windowEnd]] += 1; 

            // reduce window from front until distinctChars[str[windowEnd]] equals 1 again
            while (distinctChars[str[windowEnd]] > 1) {
                distinctChars[str[windowStart]] -= 1;
                windowStart++;
                substringLength--;
            }
        }
    }
    return maxSubstringLength
}

console.log('noRepeatSubstring: ', noRepeatSubstring2('aabccbb'));
console.log('noRepeatSubstring: ', noRepeatSubstring2('abbbb'));
console.log('noRepeatSubstring: ', noRepeatSubstring2('abccde'));