/*
Problem Statement (medium)

Given an array of numbers sorted in ascending order, 
find the range of a given number ‘key’. The range of 
the ‘key’ will be the first and last position of the 
‘key’ in the array.

Write a function to return the range of the ‘key’. If 
the ‘key’ is not present return [-1, -1].

Example 1:
Input: [4, 6, 6, 6, 9], key = 6
Output: [1, 3]

Example 2:
Input: [1, 3, 8, 10, 15], key = 10
Output: [3, 3]

Example 3:
Input: [1, 3, 8, 10, 15], key = 12
Output: [-1, -1]
*/

// - time O(n) = log(n)
// - space O(n) = 1
function numberRange(arr, key) {
    let range = [-1, -1];

    function findLeftMostIndex() {
        let left = 0;
        let right = arr.length -1; 

        while (left <= right) {
            let middle = Math.floor((left + right)/2);

            if (arr[middle] < key) {
                left = middle + 1;
            } else if (arr[middle] > key) {
                right = middle - 1;
            } else {
                range[0] = middle;
                right = middle -1;
            };
        };
    };

    function findRightMostIndex() {
        let left = 0;
        let right = arr.length -1; 
        while (left <= right) {
            let middle = Math.floor((left + right)/2);

            if (arr[middle] < key) {
                left = middle + 1;
            } else if (arr[middle] > key) {
                right = middle - 1;
            } else {
                range[1] = middle;
                left = middle + 1;
            };
        };
    };

    findLeftMostIndex();
    if (range[0] !== -1) {
        findRightMostIndex();
    };

    return range;
};

// // -grokking solution; above solution is my approach
function numberRange2(arr, key) {
    let range = [-1, -1];
    range[0] = binarySearch(arr, key, false);
    if (range[0] !== -1) {
        range[1] = binarySearch(arr, key, true);
    }
    return range
}

function binarySearch(arr, key, findMaxIndex) {
    let keyIndex = -1;
    let left = 0;
    let right = arr.length - 1;

    if (key < arr[0] || key > arr[right]) {
        return [-1, -1]
    } 
    
    while (left <= right) {
        let middle = Math.floor((left + right)/2);
        if (arr[middle] < key) {
            left = middle + 1;
        } else if (arr[middle] > key) {
            right = middle - 1;
        } else {
            keyIndex = middle;
            if (findMaxIndex) {
                left = middle + 1;
            } else {
                right = middle -1;
            }
        }
    };
    
    return keyIndex
};

console.log('numberRange: ', numberRange([4, 6, 6, 6, 9], 6)); // [1,3]
console.log('numberRange: ', numberRange([1, 3, 8, 10, 15], 10)); // [3,3]
console.log('numberRange: ', numberRange([1, 3, 8, 10, 15], 12)); // [-1,-1]
console.log('numberRange: ', numberRange([4, 5, 5, 5, 5, 6, 6, 6, 9, 10, 11, 11], 6)); // [5,7]


// console.log('numberRange: ', numberRange2([4, 6, 6, 6, 9], 6)); // [1,3]
// console.log('numberRange: ', numberRange2([1, 3, 8, 10, 15], 10)); // [3,3]
// console.log('numberRange: ', numberRange2([1, 3, 8, 10, 15], 12)); // [-1,-1]
// console.log('numberRange: ', numberRange2([4, 5, 5, 5, 5, 6, 6, 6, 9, 10, 11, 11], 6)); // [5,7]