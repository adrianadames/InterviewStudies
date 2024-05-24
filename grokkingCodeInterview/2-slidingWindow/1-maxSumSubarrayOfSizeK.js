/*
(easy)

Problem Statement 
Given an array of positive numbers and a positive number ‘k’, find  
the maximum sum of any contiguous subarray of size ‘k’.

Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].

Example 2:

Input: [2, 3, 4, 1, 5], k=2 
Output: 7
Explanation: Subarray with maximum sum is [3, 4].

*/

function maxSumSubarrayOfSizeK(arr, k) {
    let windowStart = 0;
    let windowSum = 0;
    let currentMax = windowSum;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        if (windowEnd >= k-1) {
            console.log('windowEnd >= k-1')
            if (windowSum > currentMax) {
                currentMax = windowSum;
            } 
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }
    return currentMax
}

console.log(maxSumSubarrayOfSizeK([2, 1, 5, 1, 3, 2], 3)) // returns 9 
console.log(maxSumSubarrayOfSizeK([2, 3, 4, 1, 5], 2 )) // returns 7 

// time complexity: O(n)