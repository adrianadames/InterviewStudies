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

// - we put leftPointer at 0 and rightPointer at 1; 
// - we hold the leftPointer at its value and move the rightPointer until we encounter a 
// a distinct number; 
// - once we encounter distinct value, we increment left, and set the value of arr[left] 
// to this distinct value; then we increment rightPointer; 

// time: O(n);
// space: O(1);
function removeDuplicates(arr) {
    let leftPointer = 0; 
    let rightPointer = 1; 

    while (rightPointer < arr.length) {
    // - if the number at leftPointer is distinct from number at rightPointer, 
    // then advance the leftPointer and reassign arr[left] to value at rightPointer
        if (arr[leftPointer] !== arr[rightPointer]) {
            leftPointer++;
            arr[leftPointer] = arr[rightPointer];
        };
        rightPointer++;
    };
    return leftPointer + 1;
};
console.log('removeDuplicates: ', removeDuplicates([2, 3, 3, 3, 6, 9, 9]));
console.log('removeDuplicates: ', removeDuplicates([2, 2, 2, 11]));