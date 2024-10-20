/*
(medium)

Problem Statement: 

Given an unsorted integer array nums. Return the smallest positive 
integer that is not present in nums. You must implement an algorithm 
that runs in O(n) time and uses O(1) auxiliary space.

Example 1:
Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.

Example 2:
Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.

Example 3:
Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
*/

// time: O(n);
// space: O(1);
function findSmallestMissingPositive(arr) {
    let i = 0; 

    while (i < arr.length) {
        let val = arr[i];
        if (arr[i] > arr.length || arr[i] <= 0) {
            i++
        } else if (arr[val -1] !== val) {
            arr[i] = arr[val -1];
            arr[val -1] = val;
        } else if (arr[val -1] === val) {
            i++;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    return arr.length + 1
}


console.log('findSmallestMissingPositive: ', findSmallestMissingPositive([1,2,0]))
console.log('findSmallestMissingPositive: ', findSmallestMissingPositive([3,4,-1,1]))
console.log('findSmallestMissingPositive: ', findSmallestMissingPositive([7,8,9,11,12]))




console.log('findSmallestMissingPositive: ', findSmallestMissingPositive([-3, 1, 5, 4, 2]));
console.log('findSmallestMissingPositive: ', findSmallestMissingPositive([3, -2, 0, 1, 2]));
console.log('findSmallestMissingPositive: ', findSmallestMissingPositive([3, 2, 5, 1]));
