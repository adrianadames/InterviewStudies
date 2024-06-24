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


// console.log(longestSubstringWithKDistinctChars('araaci', 2)) // returns 4
// console.log(longestSubstringWithKDistinctChars('araaci', 1)) // returns 2
// console.log(longestSubstringWithKDistinctChars('cbbebi', 3)) // returns 5
// console.log(longestSubstringWithKDistinctChars('cbbebibccci', 2)) // returns 4



/*
Given a string, find the length of the longest substring in it with no more than K distinct characters.

Example 1:

Input: String="araaci", K=2
Output: 4
*/


function longestSubstringWithKDistinctChars2(str, K) {
    // - define two pointers that represent the start and end of the substring 
    let windowStart = 0; 
    let windowEnd = 0; 

    // - define object that will be the store of all the distinct chars in the substring
    let distinctChars = {}; 
    distinctChars[str[0]] = 1;

    // - define variable for storing the longest substring length with k or less distinct chars
    let longestSubstringLength = 1; 

    // - define variable for the current substring under examination
    let substring = str[0]; 
    let substringLength = 1;

    // - while the pointer windowEnd is less than the length of the string
    while (windowEnd < str.length - 1) {
        
        // - increment the size of the window by 1
        windowEnd++; 
        substringLength++; 

        // - if the new letter is already in the distinctChars object, increment its count by 1
        if (distinctChars[str[windowEnd]]) {
            distinctChars[str[windowEnd]] += 1;

            if (substringLength > longestSubstringLength) {
                longestSubstringLength = substringLength; 
            }
        } else {
            // - if the new letter isn't in the distinctChars object, add it to the distinctChars object
            //   and make its count 1; increase substring length by 1; 
            distinctChars[str[windowEnd]] = 1;
            
            // - if adding this new key-value causes the number of entries in the object to be greater than k,
            //   then we need to decrement the size of the window until its size is k again;  we reduce 
            //   the window size by incrementing windowStart by 1; 
            let numberOfDistinctChars = 0; 
            for (let key in distinctChars) {
                numberOfDistinctChars++; 
            };

            if (numberOfDistinctChars > K) {
                while (numberOfDistinctChars > K) {
                    if (distinctChars[str[windowStart]] === 1) {
                        delete distinctChars[str[windowStart]];
                        numberOfDistinctChars--;
                        windowStart++;
                        substringLength--;
                    } else {
                        distinctChars[str[windowStart]] -= 1;
                        windowStart++;
                        substringLength--;
                    };
                };
            };
        };
    };

    return longestSubstringLength
};

console.log(longestSubstringWithKDistinctChars2('araaci', 2)) // returns 4
console.log(longestSubstringWithKDistinctChars2('araaci', 1)) // returns 2
console.log(longestSubstringWithKDistinctChars2('cbbebi', 3)) // returns 5
console.log(longestSubstringWithKDistinctChars2('cbbebibccci', 2)) // returns 4