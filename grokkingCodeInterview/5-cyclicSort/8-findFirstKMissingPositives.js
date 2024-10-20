/*
(hard)

Problem Statement: 

Given an unsorted array containing numbers and a number ‘k’, 
find the first ‘k’ missing positive numbers in the array.

Example 1:

Input: [3, -1, 4, 5, 5], k=3
Output: [1, 2, 6]
Explanation: The smallest missing positive numbers are 1, 2 and 6.

Example 2:

Input: [2, 3, 4], k=3
Output: [1, 5, 6]
Explanation: The smallest missing positive numbers are 1, 5 and 6.

Example 3:

Input: [-2, -3, 4], k=2
Output: [1, 2]
Explanation: The smallest missing positive numbers are 1 and 2.
*/

// time: O(n + k)
// space: O(k) for storing the k numbers
function findFirstKMissingPositives(arr, k) {
    let i = 0; 
    while (i < arr.length) {
        let val = arr[i];
        if (arr[i] > arr.length || arr[i] <= 0) {
            i++;
        } else if (arr[val -1] !== val) {
            arr[i] = arr[val -1];
            arr[val -1] = val;
        } else if (arr[val -1] === val) {
            i++;
        }
    }

    let missingPosNums = [];
    let extras = {};
    for (let i = 0; i < arr.length; i++) {
        if (missingPosNums.length < k) {
            if (arr[i] !== i + 1) {
                missingPosNums.push(i+1);
                if (!extras[arr[i]]) {
                    extras[arr[i]] = 0; 
                } 
                extras[arr[i]]++;
            }
        }
    }

    i = 1; 
    while (missingPosNums.length < k) {
        let next = arr.length + i;
        if (!(extras[next])) {
            missingPosNums.push(next);
        }
        i++;
    }

    return missingPosNums;
}


console.log('findFirstKMissingPositives: ', findFirstKMissingPositives([-3, 1, 5, 4, 2], 5)); // [3, 6, 7, 8, 9]
console.log('findFirstKMissingPositives: ', findFirstKMissingPositives([3, -1, 4, 5, 5],3)); // [1, 2, 6]
console.log('findFirstKMissingPositives: ', findFirstKMissingPositives([2, 3, 4], 3)); // [1, 5, 6]
console.log('findFirstKMissingPositives: ', findFirstKMissingPositives([-2, -3, 4], 2)); // [1, 2]
