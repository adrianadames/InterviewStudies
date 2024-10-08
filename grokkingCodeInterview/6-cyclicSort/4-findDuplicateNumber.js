/*

(easy)

Problem Statement: 

We are given an unsorted array containing ‘n+1’ numbers taken 
from the range 1 to ‘n’. The array has only one duplicate but 
it can be repeated multiple times. Find that duplicate number 
without using any extra space. You are, however, allowed to 
modify the input array.

Example 1:

Input: [1, 4, 4, 3, 2]
Output: 4

Example 2:

Input: [2, 1, 3, 3, 5, 4]
Output: 3

Example 3:

Input: [2, 4, 1, 4, 4]
Output: 4
*/

// -sort so that each value is at the appropriate index; 

function findDuplicateNumber(arr) {
    let i = 0; 
    while (i < arr.length) {
        let currentValue = arr[i]; 
        let correctIndex = arr[i] - 1; 
        let numberAtCorrectIndex = arr[correctIndex];

        if (arr[i] !== arr[correctIndex]) {
            arr[i] = numberAtCorrectIndex;
            arr[correctIndex] = currentValue;
        } else {
            i++;
        }
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            return arr[i]
        }
    }
}

console.log('findDuplicateNumber: ', findDuplicateNumber([1, 4, 4, 3, 2]))
console.log('findDuplicateNumber: ', findDuplicateNumber([2, 1, 3, 3, 5, 4]))
console.log('findDuplicateNumber: ', findDuplicateNumber([2, 4, 1, 4, 4]))