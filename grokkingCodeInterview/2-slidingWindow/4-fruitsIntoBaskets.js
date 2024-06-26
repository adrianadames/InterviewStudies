/*
(medium)
Problem Statement

Given an array of characters where each character represents 
a fruit tree, you are given two baskets and your goal is to 
put maximum number of fruits in each basket. The only restriction 
is that each basket can have only one type of fruit.

You can start with any tree, but once you have started you can’t 
skip a tree. You will pick one fruit from each tree until you 
cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both the baskets.

Example 1:
- Input: Fruit=['A', 'B', 'C', 'A', 'C']
- Output: 3
- Explanation: We can put 2 'C' in one basket and one 'A' in the other from 
the subarray ['C', 'A', 'C']

Example 2:
- Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
- Output: 5
- Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']
*/

// space: O(n) = 1;
// time: O(n) = n;
let fruitsIntoBaskets = (arr) => {
    // -same as finding length of longest contiguous subarray 
    // with at most two distinct chars
    let windowStart = 0;
    let windowEnd = -1;
    let longestLength = 0;
    let subarrayLength = 0;
    let numDistinctFruits = 0;
    let subarrayFruitsCount = {};

    while (windowEnd < arr.length && windowStart < arr.length) {
        if (numDistinctFruits <= 2) {
            windowEnd++;
            subarrayLength +=1;
            if (subarrayFruitsCount[arr[windowEnd]]) {
                subarrayFruitsCount[arr[windowEnd]]+=1;
                longestLength = Math.max(longestLength, subarrayLength);
            } else {
                subarrayFruitsCount[arr[windowEnd]] = 1;
                numDistinctFruits +=1;
                if (numDistinctFruits<=2) {
                    longestLength = Math.max(longestLength,subarrayLength)
                }
            }
        } else {
            subarrayFruitsCount[arr[windowStart]] -=1;
            if (subarrayFruitsCount[arr[windowStart]] === 0) {
                numDistinctFruits -=1;
            }
            windowStart+=1;
            subarrayLength-=1;
        }
    }
    return longestLength
}

// console.log('fruitsIntoBaskets: ', fruitsIntoBaskets(['A', 'B', 'C', 'A', 'C']));
// console.log('fruitsIntoBaskets: ', fruitsIntoBaskets(['A', 'B', 'C', 'B', 'B', 'C']));



/*
(medium)
Problem Statement

Given an array of characters where each character represents 
a fruit tree, you are given two baskets and your goal is to 
put maximum number of fruits in each basket. The only restriction 
is that each basket can have only one type of fruit.

You can start with any tree, but once you have started you can’t 
skip a tree. You will pick one fruit from each tree until you 
cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both the baskets.

Example 1:
- Input: Fruit=['A', 'B', 'C', 'A', 'C']
- Output: 3
- Explanation: We can put 2 'C' in one basket and one 'A' in the other from 
the subarray ['C', 'A', 'C']

Example 2:
- Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
- Output: 5
- Explanation: We can put 3 'B' in one basket and two 'C' in the other basket. 
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']
*/

// - same problem as finding the maximum size substring with at most 2 distinct chars
let fruitsIntoBaskets2 = (arr) => {
    let windowStart = 0; 
    let windowEnd = 0; 
    let distinctChars = {}; 

    let maxSubstringLength = 0; 
    let substringLength = 0; 

    let numberOfDistinctChars = 0;

    while (windowEnd < arr.length) {
        // if new character is in distinct Chars, add one to it, 
        if (distinctChars[arr[windowEnd]]) {
            distinctChars[arr[windowEnd]]+=1; 
            substringLength++;

            if (substringLength > maxSubstringLength) {
                maxSubstringLength = substringLength;
            }
        } else {
            distinctChars[arr[windowEnd]] = 1;
            numberOfDistinctChars += 1; 
            substringLength++;

            // -if adding this new character causes number of distinct chars to be greater than 2, 
            //  reduce window size on the frontside until the number of distinct chars is 2
            if (numberOfDistinctChars > 2) {
                while (numberOfDistinctChars > 2) {
                    distinctChars[arr[windowStart]] -= 1;
                    if (distinctChars[arr[windowStart]] === 0) {
                        numberOfDistinctChars -= 1;
                    };
                    windowStart++;
                    substringLength--;
                };
            };

            // -after adjusting the front side of the window until we have only two 
            // unique characters in our store, we can see what the new substring length 
            // is given the increase in window End and the corresponding adjustment on the 
            // front side if needed
            if (substringLength > maxSubstringLength) {
                maxSubstringLength = substringLength;
            }
        };

        // expand size of window
        windowEnd++; 
    }
    return maxSubstringLength
}

console.log('fruitsIntoBaskets: ', fruitsIntoBaskets2(['A', 'B', 'C', 'A', 'C']));
console.log('fruitsIntoBaskets: ', fruitsIntoBaskets2(['A', 'B', 'C', 'B', 'B', 'C']));