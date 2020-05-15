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

function longestSubstringWithKDistinctChars(str,K) {
    // establish parameters used to define substring
    let windowStart = 0;
    let windowEnd = 0; 
    
    // initialize substring to analyze
    let substringLength = 0;
    let longestSubstringLength = 0; 

    let distinctCharsTracker = new Object();

    while (windowEnd < str.length) {

        //does the letter we're considering have an entry in our tracker?
        if (distinctCharsTracker[str[windowEnd]]) {
            // if yes, then add plus one to its value in the tracker and expand the window
            // console.log('letter currently in tracker: ', str[windowEnd]);
            distinctCharsTracker[str[windowEnd]] += 1;
            windowEnd +=1;
            substringLength +=1;
            // console.log('substringLength3 = ', substringLength);
            if (substringLength > longestSubstringLength) {
                longestSubstringLength = substringLength;
            }
        } else {
            if (Object.entries(distinctCharsTracker).length < K) {
                distinctCharsTracker[str[windowEnd]] =1;
                // console.log('distinctCharsTracker1= ', distinctCharsTracker);
                windowEnd += 1; 
                substringLength +=1;
                // console.log('substringLength1 = ', substringLength);
                if (substringLength > longestSubstringLength) {
                    longestSubstringLength = substringLength;
                }
            } else {
                distinctCharsTracker[str[windowStart]] -=1;
                // console.log('distinctCharsTracker2= ', distinctCharsTracker);
                if (distinctCharsTracker[str[windowStart]] === 0) {
                    delete distinctCharsTracker[str[windowStart]];
                }
                substringLength -=1;
                windowStart +=1;  
            }
        }
    }
    return longestSubstringLength
}


console.log(longestSubstringWithKDistinctChars('araaci', 2)) // returns 4
console.log(longestSubstringWithKDistinctChars('araaci', 1)) // returns 2
console.log(longestSubstringWithKDistinctChars('cbbebi', 3)) // returns 5
console.log(longestSubstringWithKDistinctChars('cbbebibccci', 2)) // returns 4