/*
(easy)

Problem Statement: 

We are given an unsorted array containing numbers taken 
from the range 1 to ‘n’. The array can have duplicates, 
which means some numbers will be missing. Find all those 
missing numbers.

Example 1:

Input: [2, 3, 1, 8, 2, 3, 5, 1]
Output: 4, 6, 7

Explanation: The array should have all numbers 
from 1 to 8, due to duplicates 4, 6, and 7 are missing.

Example 2:

Input: [2, 4, 1, 2]
Output: 3

Example 3:

Input: [2, 3, 2, 1]
Output: 4
*/

// use modified version of sortArrInPlace function (easy-does-it approach) or the 
// fast and slow pointer approach problem 1-cyclicSort.js. 
function sortArrInPlace(arr) {
    let i = 0; 
    
    while (i < arr.length) {
        // -if item is in the wrong spot
        if (arr[i] !== arr[arr[i]-1]) {
            // -move the item to its appropriate spot (i.e. move arr[i] to arr[arr[i] -1])
            // and switch it with number sitting in its new spot
            [arr[arr[i]-1], arr[i]] = [arr[i], arr[arr[i]-1]];
        } 
        // -if item in correct spot, move the index over one spot
        else {
            i += 1;
        }
    }
}

function findAllMissingNumbers(arr) {
    // sort the numbers in the array (using modified version of function from problem 1-cyclicSort.js.)
    sortArrInPlace(arr);
    let missingNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i + 1) {
            missingNumbers.push(i + 1);
        } 
    }
    return missingNumbers
}

console.log(findAllMissingNumbers([2, 4, 1, 2]));
console.log(findAllMissingNumbers([2, 3, 2, 1]));
console.log(findAllMissingNumbers([4,1, 10, 8, 7, 9, 3, 4, 6, 6]));
console.log(findAllMissingNumbers([6, 1, 9]));
