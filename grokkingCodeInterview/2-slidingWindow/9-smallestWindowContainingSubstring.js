/*
(hard)
Problem Statement

Given a string and a pattern, find the smallest substring in the given string 
which has all the characters of the given pattern.

Example 1:

Input: String="aabdec", Pattern="abc"
Output: "abdec"
Explanation: The smallest substring having all characters of the pattern is "abdec"

Example 2:

Input: String="abdabca", Pattern="abc"
Output: "abc"
Explanation: The smallest substring having all characters of the pattern is "abc".

Example 3:

Input: String="adcad", Pattern="abc"
Output: ""
Explanation: No substring in the given string has all characters of the pattern.
*/

// - Given a string and a pattern, find the smallest substring in the given string 
// which has all the characters of the given pattern.
function smallestWindowContainingSubstring(str, pattern) {

    // - first we create an object to store the frequencies of the letters in pattern; 
    let patternLettersFreq = {}; 
    for (let char of pattern) {
        if (!patternLettersFreq[char]) {
            patternLettersFreq[char] = 0; 
        }
        patternLettersFreq[char]++; 
    }

    // - then we create an object to store the frequencies of the letters in the window
    let windowLettersFreq = {}; 
    // - and we define the start of the current window; we'll define the windowEnd in the loop
    let windowStart = 0; 

    // - we initialize the minLength of the substring which we will need to keep track of and 
    // the start of the substring which we also need to keep track of;  
    let substringStart = 0; 
    let minLength = Infinity; 

    // - we initialize numberOfLettersMatched to keep track of the number of letters in the window
    // that should count in inching us our way closer to getting all the matches; this means that
    // if the pattern has two 'a''s (i.e. {a: 2}) and the window only has one 'a', then encountering 
    // another 'a' should cause the number of matches to increment, but if the window already contains
    // two or more 'a''s, then encountering another one should NOT increment the numberOfLettersMatched as
    // we have already met the quota for that letter; 
    let numberOfLettersMatched = 0; 

    // - for loop to expand/contract the window: 
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        // - if the current character is in the pattern, update it's frequency in windowLettersFreq
        if (str[windowEnd] in patternLettersFreq) {
            if (!windowLettersFreq[str[windowEnd]]) {
                windowLettersFreq[str[windowEnd]] = 0; 
            }; 
            windowLettersFreq[str[windowEnd]]++;

            // - although we update its frequency, we only increment the numberOfLettersMatched if
            // the incrementation of this letter's count caused it to be less than or equal to
            // the count in patternLettersFreq; 
            if (windowLettersFreq[str[windowEnd]] <= patternLettersFreq[str[windowEnd]]) {
                numberOfLettersMatched++;
            }
        }

        // - when we reach the point that the current window contains all the letters from the pattern, 
        // we need to start shrinking the window from the left; 
        while (numberOfLettersMatched === pattern.length) {
            // - if the current window is the smallest one we've encountered so far, update minLength and update
            // substringStart; 
            if (windowEnd - windowStart + 1 < minLength) {
                minLength = windowEnd - windowStart + 1;
                substringStart = windowStart; 
            }

            // - at this point, we have recorded if this is the smallest substring recorded thus far;
            // - we then shrink the window from the left; the idea is that if we shrink the window from the
            // left and we still have right number of letters matched, we should keep shrinking it

            // - if the letter we're about to remove is in patternLettersFreq
            if (str[windowStart] in patternLettersFreq) {
                // - we check if removing this letter will cause the match count to reduce; 
                // - if the frequencies of the letter in both objects is equal, then shrinking
                // the window will cause the numberOfLettersMatched to decrement by 1; 
                if (windowLettersFreq[str[windowStart]] === patternLettersFreq[str[windowStart]]) {
                    numberOfLettersMatched--; 
                }
                // - we remove the character from the windowLetterFreq object and increment windowStart; 
                windowLettersFreq[str[windowStart]]--;
            }; 
            windowStart++;
        }
    }

    if (minLength === Infinity) {
        return ''
    }
    return str.slice(substringStart, substringStart + minLength)
};


console.log('smallestWindowContainingSubstring(): ', smallestWindowContainingSubstring('aabdec', 'abc'));
console.log('smallestWindowContainingSubstring(): ', smallestWindowContainingSubstring('abdabca', 'abc'))
console.log('smallestWindowContainingSubstring(): ', smallestWindowContainingSubstring('adcad', 'abc'))
