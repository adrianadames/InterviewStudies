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
let removeDuplicates = (arr) => {
    let leftPointer = 0;
    let rightPointer = 1;

    while (rightPointer < arr.length) {
        // -once non-duplicate encountered, swap it with the number in front of the left
        // pointer and increment both pointers
        if (arr[leftPointer] !== arr[rightPointer]) {
            [arr[leftPointer+1], arr[rightPointer]] = [arr[rightPointer], arr[leftPointer+1]];
            leftPointer+=1;
            rightPointer+=1;
        } else {
            rightPointer+=1;
        } 
    }
    arr.splice(leftPointer+1);
    // console.log('arr: ', arr);
    return leftPointer + 1
}

console.log('removeDuplicates: ', removeDuplicates([2, 3, 3, 3, 6, 9, 9]));
console.log('removeDuplicates: ', removeDuplicates([2, 2, 2, 11]));