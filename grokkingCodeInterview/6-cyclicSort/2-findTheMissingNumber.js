/*

(easy)

Problem Statement: 
We are given an array containing ‘n’ distinct numbers taken 
from the range 0 to ‘n’. Since the array has only ‘n’ numbers
out of the total ‘n+1’ numbers, find the missing number.

Example 1:

Input: [4, 0, 3, 1]
Output: 2

Example 2:

Input: [8, 3, 5, 2, 4, 6, 0, 1]
Output: 7

*/

// - sort the array from smallest to biggest
// and then loop to find missing number

function findMissingNumber(arr) {
    let i = 0;

    while (i < arr.length) {
        let currentValue = arr[i]; 
        let correctIndex = arr[i]; 

        let valueAtCorrectIndex = arr[correctIndex]; 

        if (arr[i] < arr.length && arr[i] !== arr[correctIndex]) {
            arr[i] = valueAtCorrectIndex; 
            arr[correctIndex] = currentValue; 
        } else {
            i++;
        };
    };
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i) {
            return i
        }
    }
};

console.log(findMissingNumber([4, 0, 3, 1]));  // Output: 2
console.log(findMissingNumber([8, 3, 5, 2, 4, 6, 0, 1])); // Output: 7