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
    // establish parameters used to define the indices of the beginning and end of the substring 
    let windowStart = 0;
    let windowEnd = 0; 
    
    // initialize substring length
    let substringLength = 0;
    let longestSubstringLength = 0; 

    // create object for tracking the distinct letters in our substring and their quantity
    let distinctCharsTracker = new Object();

    while (windowEnd < str.length) {
        // if letter under consideration already in our tracker, add 1 to it's count in our tracker
        // and expand the substring (by moving the indices) to include the letter
        if (distinctCharsTracker[str[windowEnd]]) {
            distinctCharsTracker[str[windowEnd]] += 1;
            windowEnd +=1;
            substringLength +=1;
            if (substringLength > longestSubstringLength) {
                longestSubstringLength = substringLength;
            }
        } 
        // if letter under consideration not in our tracker already
        else {
            // if our tracker has less than 2 entries, then expand the substring
            // to include the letter and add it to our tracker
            if (Object.entries(distinctCharsTracker).length < K) {
                distinctCharsTracker[str[windowEnd]] =1;
                windowEnd += 1; 
                substringLength +=1;
                if (substringLength > longestSubstringLength) {
                    longestSubstringLength = substringLength;
                }
            } 
            // if our tracker has 2 entries in it, then we have to shrink the
            // substring from the frontside. we shrink the window from the frontside
            // adding one to window start and we subtract one instance of it from our tracker 
            else {
                distinctCharsTracker[str[windowStart]] -=1;
                
                // I use the below strategy so that I don't have to loop through the values
                // of the distinctCharsTracker to check that there are at least two entries
                // with non-zero values 
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