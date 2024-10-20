/*
(easy)

Problem Statement: 

We are given an unsorted array containing ‘n’ numbers taken 
from the range 1 to ‘n’. The array has some duplicates, find 
all the duplicate numbers without using any extra space.

Example 1:

Input: [3, 4, 4, 5, 5]
Output: [4, 5]

Example 2:

Input: [5, 4, 7, 2, 3, 5, 3]
Output: [3, 5]
*/

function findAllDuplicateNumbers(arr) {
    let i = 0; 
    while (i < arr.length) {
        let currentValue = arr[i]; 
        let correctIndex = arr[i] - 1; 
        let numberAtCorrectIndex = arr[correctIndex];

        if (arr[i] !== arr[correctIndex] && arr[i] !== i +1) {
            arr[i] = numberAtCorrectIndex;
            arr[correctIndex] = currentValue;
        } else {
            i++;
        }
    }

    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i +1) {
            duplicates.push(arr[i])
        }
    }
    return duplicates;
}

function findAllDuplicateNumbers2(arr) {
    let index = 0;
    while (index < arr.length) {
        if (arr[index] === index + 1) {
            index++;
        } else {
            // - swap the element encountered with the array value that is at it's proper spot; 
            // - if when we look to make the swap we see that the proper number is at the location, 
            // we have a repeat; increment p; 
            let j = arr[index];
            let properIndex = j -1; 
            
            if (j === arr[properIndex]) { // repeat encountered; skip it 
                index++;
            } else { // value at properIndex not j, so make the swap
                arr[index] = arr[properIndex]; 
                arr[properIndex] = j; 
            }
        }
    }

    let dups = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i +1) {
            dups.push(arr[i]);
        }
    }
    return dups;
}
console.log('findAllDuplicateNumbers: ', findAllDuplicateNumbers([3,4,4,4,5,4,3,4,4,4,4,3,5,3])); // [ 4, 4, 4, 3, 4, 4, 4, 4, 3, 5, 3]
console.log('findAllDuplicateNumbers2: ', findAllDuplicateNumbers2([3,4,4,4,5,4,3,4,4,4,4,3,5,3])); //  [ 4, 4, 4, 3, 4, 4, 4, 4, 3, 5, 3]  

console.log('findAllDuplicateNumbers: ', findAllDuplicateNumbers([5, 4, 7, 2, 3, 5, 3, 3,5, 3])); // [ 3, 5, 3, 5, 3 ]
console.log('findAllDuplicateNumbers2: ', findAllDuplicateNumbers2([5, 4, 7, 2, 3, 5, 3, 3, 5, 3])); //  [ 3, 5, 3, 5, 3 ]