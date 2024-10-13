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

// time complexity: O(n)
// space complexity: O(1)

// - essentially the same problem as find the maximum continuous subarray length
// with at most K distinct chars, except K is set to two; 
let fruitsIntoBaskets = (arr) => {
    let maxNumberOfFruits = 0; 
    let fruitTracker = {}; 
    let windowStart = 0;
    let numberOfDistinctFruits = 0; 

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        // - add fruit to tracker
        if (!fruitTracker[arr[windowEnd]]) {
            fruitTracker[arr[windowEnd]] = 0; 
            numberOfDistinctFruits++;
        }
        fruitTracker[arr[windowEnd]]++; 

        // - if adding this fruit causes the number of distinct fruits to be greater than 2, 
        // we have to shrink window from left until the number of distinct fruits is less than 2
        while (numberOfDistinctFruits > 2) {
            fruitTracker[arr[windowStart]]--; 
            if (fruitTracker[arr[windowStart]] === 0) {
                numberOfDistinctFruits--;
                delete fruitTracker[arr[windowStart]];
            }
            windowStart++;
        }

        maxNumberOfFruits = Math.max(windowEnd - windowStart + 1, maxNumberOfFruits);
    }
    return maxNumberOfFruits
}

console.log(fruitsIntoBaskets(['A', 'B', 'C', 'A', 'C'])); // Output: 3
console.log(fruitsIntoBaskets(['A', 'B', 'C', 'B', 'B', 'C'])); // Output: 5
console.log(fruitsIntoBaskets(['A', 'B', 'A', 'B', 'A', 'B'])); // Output: 6
console.log(fruitsIntoBaskets(['A'])); // Output: 1
console.log(fruitsIntoBaskets([])); // Output: 0
console.log(fruitsIntoBaskets(['A', 'A', 'A', 'A'])); // Output: 4