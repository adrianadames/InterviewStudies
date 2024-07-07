/*
(hard)
Problem - String Anagrams 

Given a string and a pattern, find all anagrams of the pattern 
in the given string.

An anagram is actually a Permutation of a string. For example, 
“abc” has the following six anagrams:

abc
acb
bac
bca
cab
cba

Write a function to return a list of starting indices of the 
anagrams of the pattern in the given string.

Example 1:

Input: String="ppqp", Pattern="pq"
Output: [1, 2]
Explanation: The two anagrams of the pattern in the given string 
are "pq" and "qp".

Example 2:

Input: String="abbcabc", Pattern="abc"
Output: [2, 3, 4]
Explanation: The three anagrams of the pattern in the given string
are "bca", "cab", and "abc".
*/


function stringAnagrams(str, pattern) {
    let patternLettersFreq = {};

    for (let char of pattern) {
        if (!patternLettersFreq[char]) {
            patternLettersFreq[char] = 0;
        }
        patternLettersFreq[char]++;
    };
    // console.log('patternLettersFreq: ', patternLettersFreq);
    
    // - how do we know if we have found an anagram; 
    // - we have to check if the characters in the window are an anagram of the pattern 

    let windowLettersFreq = {}; 
    let windowStart = 0; 

    // - for the loop that controls the size of the window, when we examine a character 
    // we have to ask a few questions about it; 
    // - is this letter present in the pattern? if it is present in the pattern, does it 
    // adding it to the window bring the count of that character closer to the count of the 
    // letter in the pattern. if we've already reached the count, then adding this letter 
    // will violate the anagram rules. 
    // - what if this letter isn't present in the pattern? if it's not present we need to move
    // window start to the next index, because if the window includes this letter that isn't in 
    // the pattern, it will violate the anagram rules

    let numberOfLettersMatched = 0; 
    let startingIndices = [];
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        console.log('top of loop');
        console.log('windowEnd: ', windowEnd)
        console.log('windowStart: ', windowStart)
        console.log('windowLettersFreq: ', windowLettersFreq);
        // - if the character under examination is in patternLettersFreq
        // we add it to the window
        if (str[windowEnd] in patternLettersFreq) {
            if (!windowLettersFreq[str[windowEnd]]) {
                windowLettersFreq[str[windowEnd]] = 0;   
            }
            windowLettersFreq[str[windowEnd]]++; 
            
            // - did adding this character to our window bring the count 
            // of that character closer to the count of the letter in the pattern?
            // - if so, that means we can increment numberOfLettersMatched; 
            // - if adding this character put us over the count of the letter in 
            // pattern, then we need to shrink the window from the left until 
            // one of those letters is gone

            if (windowLettersFreq[str[windowEnd]] <= patternLettersFreq[str[windowEnd]]) {
                console.log('adding this character to our window got us closer to a match')
                console.log('windowLettersFreq: ', windowLettersFreq);
                numberOfLettersMatched++;
                console.log('numberOfLettersMatched increased: ', numberOfLettersMatched)
                if (numberOfLettersMatched === pattern.length) {
                    startingIndices.push(windowStart);
                    console.log('index added to startingIndices: ', startingIndices)
                }
            } else {

                // - my problem is in the case that the addition of this letter to the window
                // puts us over the count of the letter in the pattern


                console.log('adding this character to our window puts us over')
                console.log('windowLettersFreq: ', windowLettersFreq);
                while (windowLettersFreq[str[windowEnd]] > patternLettersFreq[str[windowEnd]]) {
                    // - we need to shrink the window from the left

                    // -if the character at window start is the same as that in windowEnd, 
                    // we don't need to decrease number of letters matched because we never added it
                    if (str[windowStart] === str[windowEnd]) {
                        windowLettersFreq[str[windowStart]]--;
                        console.log('windowLettersFreq: ', windowLettersFreq);
                        
                        windowStart++;
                        if (numberOfLettersMatched === pattern.length) {
                            startingIndices.push(windowStart);
                            console.log('index added to startingIndices: ', startingIndices)
                        }
                        
                    } else {
                        windowLettersFreq[str[windowStart]]--;
                        numberOfLettersMatched--;
                        console.log('numberOfLettersMatched decreased: ', numberOfLettersMatched)
    
                        windowStart++;
                    }
                    
                }
            }
        } else {
            // - if the character under examination is not in the pattern
            // then we need to update windowStart to the index after this letter; 
            // - we also need to remove the corresponding entries from windowLettersFreq
            while (windowStart <= windowEnd) {
                windowLettersFreq[str[windowStart]]--;
                windowStart++;
            }
        }

    }
    return startingIndices
}

// console.log('stringAnagrams(): ', stringAnagrams("ppqp", "pq")); // Output: [1, 2]
// console.log('stringAnagrams(): ', stringAnagrams("abbcabc", "abc")); // Output: [2, 3, 4]
// console.log('stringAnagrams(): ', stringAnagrams("abcabcabc", "abc")); // Output: [0, 1, 2, 3, 4, 5, 6] (testing overlapping case)
console.log('stringAnagrams(): ', stringAnagrams("cbaebabacd", "abc")); // Output: [0, 6]
