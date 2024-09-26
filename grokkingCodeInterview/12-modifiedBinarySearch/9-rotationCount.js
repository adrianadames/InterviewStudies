/*
Problem Statement (medium)

Given an array of numbers which is sorted in ascending order 
and is rotated ‘k’ times around a pivot, find ‘k’.

You can assume that the array does not have any duplicates.

Example 1:
Input: [10, 15, 1, 3, 8]
Output: 2
Explanation: The array has been rotated 2 times.

Example 2:
Input: [4, 5, 7, 9, 10, -1, 2]
Output: 5
Explanation: The array has been rotated 5 times.

Example 3:
Input: [1, 3, 8, 10]
Output: 0
Explanation: The array has not been rotated.
*/

// - pivot k is index of the smallest value; so if we find that, we find the pivot; 
// - another way to frame this problem is to find the maximum value; the index of the 
//   pivot is the one right after 

// function rotationCount(arr) {
//     let left = 0; 
//     let right = arr.length - 1;

//     // - what we're looking for is the smallest value in the array; 
//     // - we know that the array is sorted in ascending order and shifted ("rotated")
//     // 'k' times; 

//     while (left < right) {
//         let middle = Math.floor((left + right)/2);
//         // - if arr[middle] < arr[middle + 1], we are in a part of 
//         // the array where the numbers are increasing; 

//         if (arr[middle] > arr[middle + 1]) {
//             return middle + 1
//         } else if (arr[middle] < arr[middle + 1]) {
//             // - if at this point, the value at arr[left] is less than the value at 
//             // arr[m + 1], then we know for sure that the max value is at or to the 
//             // right of m + 1; else then we know for sure that the max value is to the left 
//             // of m 

//             if (arr[left] < arr[middle + 1]) {
//                 left = middle + 1; 
//             } else {
//                 right = middle;
//             }
//         }
//     }
//     // console.log('arr: ', arr); 
//     // console.log('left: ', left);
//     // - at this point we know that the max is at left + 1;  we need to normalize it in case
//     // the max value is the last value in the array and left + 1 needs to map back to index 0; 
//     // - or we can do the following; 
//     if (left === arr.length - 1) {
//         return 0
//     } else {
//         return left + 1
//     }
// }

// - below is the chatgpt generated recommended revision
function rotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    // If the array is not rotated, the first element is the smallest
    if (arr[left] < arr[right]) {
        return 0;
    }

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        // Check if the middle element is the pivot (smallest element)
        if (arr[middle] > arr[middle + 1]) {
            return middle + 1;
        }

        // Check if the element just before the middle is the pivot
        if (arr[middle - 1] > arr[middle]) {
            return middle;
        }

        // Narrow down the search space:
        // If the middle element is greater than or equal to the first element,
        // it means the left half is sorted, so we move to the right half.
        if (arr[middle] >= arr[left]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return 0; // If no rotation found, return 0 (i.e., array is fully sorted)
}


console.log('rotationCount: ', rotationCount([10, 15, 1, 3, 8])); // 2
console.log('rotationCount: ', rotationCount([4, 5, 7, 9, 10, -1, 2])); // 5
console.log('rotationCount: ', rotationCount([1, 3, 8, 10])); // 0
console.log('rotationCount: ', rotationCount([21, 24, 29, 37, 41, 50, -3, 1, 12, 17, 19])); // 6
console.log('rotationCount: ', rotationCount([21, 24, 29, 37, 41, 50, -3])); // 6

