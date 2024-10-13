/*
Problem - Order-agnostic Binary Search (easy)

Given a sorted array of numbers, find if a given number 
‘key’ is present in the array. Though we know that the 
array is sorted, we don’t know if it’s sorted in ascending 
or descending order. You should assume that the array can 
have duplicates.

Write a function to return the index of the ‘key’ if it 
is present in the array, otherwise return -1.

Example 1:
Input: [4, 6, 10], key = 10
Output: 2

Example 2:
Input: [1, 2, 3, 4, 5, 6, 7], key = 5
Output: 4

Example 3:
Input: [10, 6, 4], key = 10
Output: 0

Example 4:
Input: [10, 6, 4], key = 4
Output: 2
*/

function orderAgnosticBinarySearch(arr, key) {
    let left = 0;
    let right = arr.length -1;
    let isAscending = arr[left] < arr[right];
    while (left <= right) {
        let middle = Math.floor((left + right)/2);

        if (arr[middle] === key) {
            return middle
        } else if (isAscending) {
            // - if middle element greater than key in ascending array, key is in
            // left half of the array. move the right pointer to the element to 
            // the left of the middle pointer (i.e. middle - 1)
            if (arr[middle] > key) { 
                right = middle - 1;
            } else {
                left = middle + 1;
            }
            // - if middle element greater than key in descending array, key is in 
            // right half of the array. move the left pointer to the element to 
            // the left of the middle pointer (i.e. middle + 1)
        } else {
            if (arr[middle] > key) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
    }
    return -1
}

console.log(orderAgnosticBinarySearch([4, 6, 10], 10)); // 2
console.log(orderAgnosticBinarySearch([1, 2, 3, 4, 5, 6, 7], 5)); // 4
console.log(orderAgnosticBinarySearch([10, 6, 4], 10)); // 0 
console.log(orderAgnosticBinarySearch([10, 6, 4], 4)); // 2