/*
(medium)

Problem Statement: 

Given an unsorted array containing numbers, find the 
smallest missing positive number in it.

Example 1:

Input: [-3, 1, 5, 4, 2]
Output: 3
Explanation: The smallest missing positive number is '3'

Example 2:

Input: [3, -2, 0, 1, 2]
Output: 4

Example 3:

Input: [3, 2, 5, 1]
Output: 4
*/

function findSmallestMissingPositive(arr) {
    let i = 0; 

    while (i < arr.length) {
        let currentValue = arr[i];
        let correctIndex = arr[i] -1; 
        let valueAtCorrectIndex = arr[correctIndex];

        if (arr[i] > 0 && arr[i] !== arr[correctIndex]) {
            arr[i] = valueAtCorrectIndex; 
            arr[correctIndex] = currentValue;
        } else {
            i++;
        }
    }
    console.log('arr: ', arr)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i+1) {
            return i+1
        }
    }
}

console.log('findSmallestMissingPositive: ', findSmallestMissingPositive([-3, 1, 5, 4, 2]))
console.log('findSmallestMissingPositive: ', findSmallestMissingPositive([3, -2, 0, 1, 2]))
console.log('findSmallestMissingPositive: ', findSmallestMissingPositive([3, 2, 5, 2]))

// console.log('findSmallestMissingPositive: ', findSmallestMissingPositive([3, 2, 5, 2]))