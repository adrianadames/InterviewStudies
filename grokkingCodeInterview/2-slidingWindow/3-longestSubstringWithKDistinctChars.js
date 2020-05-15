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
    let substring = str[0];
    let substringLength = 1;
    let longestSubstringLength = 1; 

    // establish set that will store up to K distinct chars
    let distinctChars = new Set(str[0]); // property: size, methods: add(value), delete(value), has(value)

    while (windowEnd < str.length -1) {
        // if we have reached max number of distinct chars in the substring we're analyzing, 
        if (distinctChars.size >= K) {
            // if the next character is NOT distinct, then add it to the substring window we're analyzing
            if (distinctChars.has(str[windowEnd+1])) {
                substringLength +=1;
                console.log('substringLength= ', substringLength)
                windowEnd +=1;
                if (substringLength > longestSubstringLength) {
                    longestSubstringLength = substringLength;
                }
            } 
            // if the next character is distinct, we make window smaller from the front - removing the
            // element from the front
            else {
                distinctChars.delete(str[windowStart]);
                windowStart += 1; 
                substringLength -=1;
                console.log('substringLength= ', substringLength)
            }
        } 
        // if we haven't reached max number of distinct chars in the substring, make window bigger from the end
        else {
            windowEnd +=1;
            substringLength +=1;            
            console.log('substringLength= ', substringLength)
            if (substringLength > longestSubstringLength) {
                longestSubstringLength = substringLength;
            }
            distinctChars.add(str[windowEnd]);
            console.log('distinctChars= ', distinctChars);
        }
    }

    return longestSubstringLength
}

// console.log(longestSubstringWithKDistinctChars('araaci', 2)) // returns 4
// console.log(longestSubstringWithKDistinctChars('araaci', 1)) // returns 2
// console.log(longestSubstringWithKDistinctChars('cbbebi', 3)) // returns 5



console.log(longestSubstringWithKDistinctChars('cbbebibccci', 2))
// -this example here catches a problem
// -at the point where our substring is 'bbeb', substring length is 4, and the letters in distinct
// chars set are 'b' and 'e' 
// -once we look to the next letter, we see that it's distinct (the letter 'i'), which means we shift
// window from the front, leaving us with 'beb'
// -the problem is that in the code above, i have removed 'b' from the distinct letters list; it 
// should still be there...
// -the algorithm should instead continue to shift the window over until the number of unique letters is < K, 
// reducing the length of the current substring