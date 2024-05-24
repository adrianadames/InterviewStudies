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
    let longestLength = 1; 
    let substringLength = 1;
    let substringLettersTracker = {};
    substringLettersTracker[str[0]] = 1;
    let nonDuplicateCount = 0;
    let expandWindow = true;

    // -at beginning, only first letter present in tracker
    // -we expand size of window until certain condition met
    // -condition is that window can only have k letters that 
    // are different than str[windowStart]

    // ex: abbcb
    while (windowEnd < str.length -1) {
        if (expandWindow = true) {
            // we expand the size of the window
            windowEnd+=1;
            substringLength+=1;
            if (str[windowEnd] === str[windowStart]) {// if letter we add is same as letter at window start, continue expanding window
                substringLettersTracker[str[windowStart]] +=1;
                longestLength = Math.max(longestLength, substringLength);
            } else { // if letter we add different than letter at window start, 
                nonDuplicateCount += 1;
                if (!substringLettersTracker[str[windowEnd]]) { // if zero present in tracker, set letter count to 1 in the tracker
                    substringLettersTracker[str[windowEnd]] = 1;
                } else { // if letter already in tracker, increase its count
                    substringLettersTracker[str[windowEnd]]+=1;
                }
                // if adding that letter doesn't put us over the max nonDuplicateCount k
                // continue to expand the window
                if (nonDuplicateCount <= k) {
                    longestLength = Math.max(longestLength, substringLength);
                } else {
                    // if adding that letter puts us over the max nonDuplicateCount k
                    // we need to start shrinking the window from the front
                    expandWindow = false;
                }
            }
        } else {
            // we need to shrink the window until nonDuplicateCount <= k
            let letterToRemove = str[windowStart];
            
            // did shrinking the window by 1 reduct nonDuplicateCount

            // -we substract one from nonDuplicateCount when we 
            substringLettersTracker[str[windowStart]]-=1; 
            windowStart+=1;
            substringLength-=1;
        }
    }
    
    // // ex: abbcb
    // while (windowEnd < str.length -1) {
    //     if (expandWindow = true) {
    //         // we expand the size of the window
    //         windowEnd+=1;
    //         substringLength+=1;

    //         if (str[windowEnd] === str[windowStart]) {// if letter we add is same as letter at window start, continue expanding window
    //             substringLettersTracker[str[windowStart]] +=1;
    //             longestLength = Math.max(longestLength, substringLength);
    //         } else { // if letter we add different than letter at window start, 
    //             nonDuplicateCount += 1;
    //             substringLettersTracker[str[windowEnd]] +=1

    //             // if adding that letter doesn't put us over the nonDuplicateCount
    //             // continue to expand the window

    //             // if adding that letter puts us over the max nonDuplicateCount k
    //             // we need to start shrinking the window from the front
    //             if (nonDuplicateCount > k) {
    //                 expandWindow = false;
    //             }
    //         }
    //     }
    // }
}

console.log('longestSubstringWithSameLettersAfterReplacement: ', longestSubstringWithSameLettersAfterReplacement('aabccbb', 2)); 
console.log('longestSubstringWithSameLettersAfterReplacement: ', longestSubstringWithSameLettersAfterReplacement('abbcb', 1));
console.log('longestSubstringWithSameLettersAfterReplacement: ', longestSubstringWithSameLettersAfterReplacement('abccde',1));