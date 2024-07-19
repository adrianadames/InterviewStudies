/*
(easy)

Problem Statement: 
-Given an array of sorted numbers, remove all duplicates 
from it. You should not use any extra space; after removing 
the duplicates in-place return the new length of the array.

Example 1:
    Input: [2, 3, 3, 3, 6, 9, 9]
    Output: 4
    Explanation: The first four elements after removing the 
    duplicates will be [2, 3, 6, 9].
Example 2:
    Input: [2, 2, 2, 11]
    Output: 2
    Explanation: The first two elements after removing the 
    duplicates will be [2, 11].
*/

// time: O(n) = n; 
// space: O(n) = 1;


// - we put leftPointer at 0 and rightPointer at 1; 
// - we hold the leftPointer at its value and move the rightPointer until we encounter a 
// a distinct number; 
// - once we encounter the distinct value, we increment leftPointer by 1, and swap 
// values with the encountered distinct value; 
// - we then increment rightPointer until we encounter another distinct number; 


function removeDuplicates2(arr) {
    let leftPointer = 0; 
    let rightPointer = 1; 

    while (rightPointer < arr.length) {
        // - if the number at leftPointer is distinct from number at rightPointer, 
        // then advance the leftPointer and switch its value with that at the rightPointer
        if (arr[leftPointer] !== arr[rightPointer]) {
            leftPointer++;
            [arr[leftPointer], arr[rightPointer]] = [arr[rightPointer], arr[leftPointer]];
            rightPointer++;
        } else {
            rightPointer++;
        }
    }
    return leftPointer + 1
};

console.log('removeDuplicates2: ', removeDuplicates2([2, 3, 3, 3, 6, 9, 9]));
console.log('removeDuplicates2: ', removeDuplicates2([2, 2, 2, 11]));

