/*
Problem Statement (medium)

Given a Bitonic array, find if a given ‘key’ is present 
in it. An array is considered bitonic if it is monotonically 
increasing and then monotonically decreasing. Monotonically 
increasing or decreasing means that for any index i in the 
array arr[i] != arr[i+1].

Write a function to return the index of the ‘key’. If the 
‘key’ is not present, return -1.

Example 1:
Input: [1, 3, 8, 4, 3], key=4
Output: 3

Example 2:
Input: [3, 8, 3, 1], key=8
Output: 1

Example 3:
Input: [1, 3, 8, 12], key=12
Output: 3

Example 4:
Input: [10, 9, 8], key=10
Output: 0
*/

// time: O(n) = log(n);
// space: O(n) = 1;

// - procedure: 
// 1) find the max; 
// 2) search for the key on both sides of the max; 

function findBitonicArrayMax(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let middle = Math.floor((left + right) /2);
        if (arr[middle] < arr[middle + 1]) {
           left = middle + 1;  
        } else {
            right = middle;
        };
    };
    return left; 
};

function searchBitonicArray(arr, key) {
    let maxElementIndex = findBitonicArrayMax(arr);
    let leftSideSearch = binarySearch(arr, 0, maxElementIndex, key);
    let rightSideSearch = binarySearch(arr, maxElementIndex+1, arr.length-1, key);

    if (leftSideSearch !== -1) {
        return leftSideSearch;
    } else if (rightSideSearch !== -1) {
        return rightSideSearch;
    } else {
        return -1;
    };
};

function binarySearch(arr, leftStart, rightStart, key) {
    let left = leftStart; 
    let right = rightStart;
    let isAscending = arr[left] < arr[right];

    while (left <= right) {
        let middle = Math.floor((left + right)/2);
        if (arr[middle] === key) {
            return middle;
        } else if (isAscending) {
            // - if middle element greater than key in ascending array, key is in
            // left half of the array. move the right pointer to the element to 
            // the left of the middle pointer (i.e. middle - 1)
            if (arr[middle] > key) { 
                right = middle - 1;
            } else {
                left = middle + 1;
            };
            // - if middle element greater than key in descending array, key is in 
            // right half of the array. move the left pointer to the element to 
            // the left of the middle pointer (i.e. middle + 1)
        } else {
            if (arr[middle] > key) {
                left = middle + 1;
            } else {
                right = middle - 1;
            };
        };
    };

    return -1;
};

console.log('searchBitonicArray: ', searchBitonicArray([1, 3, 8, 4, 3], 4));
console.log('searchBitonicArray: ', searchBitonicArray([3, 8, 3, 1], 8));
console.log('searchBitonicArray: ', searchBitonicArray([1, 3, 8, 12], 12));
console.log('searchBitonicArray: ', searchBitonicArray([10, 9, 8], 10));