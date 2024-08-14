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
    // console.log('arr: ', arr)

    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i +1) {
            duplicates.push(arr[i])
        }
    }
    return duplicates
}

// - from grokking solutions
function findAllDuplicateNumbers2(nums) {
    const result = [];
    const n = nums.length;
    
    for (let i = 0; i < n; i++) {
        while (nums[i] !== i + 1) {
            const correctIndex = nums[i] - 1;
            if (nums[i] === nums[correctIndex]) {
                // Duplicate found
                if (result[result.length - 1] !== nums[i]) {
                    result.push(nums[i]);
                }
                break;
            }
            // Swap
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        }
    }
    
    return result;
}

console.log('findAllDuplicateNumbers: ', findAllDuplicateNumbers([3, 4, 3]));
console.log('findAllDuplicateNumbers: ', findAllDuplicateNumbers([5, 4, 7, 2, 3, 5, 3]));




