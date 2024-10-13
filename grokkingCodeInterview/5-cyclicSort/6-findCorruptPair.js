/*
(easy) 

Problem Statement: 

We are given an unsorted array containing ‘n’ numbers taken 
from the range 1 to ‘n’. The array originally contained all 
the numbers from 1 to ‘n’, but due to a data error, one of 
the numbers got duplicated which also resulted in one number 
going missing. Find both these numbers.

Example 1:

Input: [3, 1, 2, 5, 2]
Output: [2, 4]
Explanation: '2' is duplicated and '4' is missing.

Example 2:

Input: [3, 1, 2, 3, 6, 4]
Output: [3, 5]
Explanation: '3' is duplicated and '5' is missing.
*/

function findCorruptPair(arr) {
    let i = 0; 

    while (i < arr.length) {
        let currentValue = arr[i]; 
        let correctIndex = arr[i] - 1; 
        let valueAtCorrectIndex = arr[correctIndex]; 

        if (arr[i] !== arr[correctIndex]) {
            arr[i] = valueAtCorrectIndex; 
            arr[correctIndex] = currentValue; 
        } else {
            i++
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            return [arr[i], i +1]
        }
    }
}

console.log('findCorruptPair: ', findCorruptPair([3, 1, 2, 5, 2]));
console.log('findCorruptPair: ', findCorruptPair([3, 1, 2, 3, 6, 4]));