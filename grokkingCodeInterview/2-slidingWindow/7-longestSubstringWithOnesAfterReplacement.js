/*
(hard)

Problem Statement 
Given an array containing 0s and 1s, if you are allowed to replace 
no more than ‘k’ 0s with 1s, find the length of the longest contiguous 
subarray having all 1s.

Example 1:
    Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
    Output: 6
    Explanation: Replace the '0' at index 5 and 8 to have the longest 
    contiguous subarray of 1s having length 6.

Example 2:
    Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
    Output: 9
    Explanation: Replace the '0' at index 6, 9, and 10 to have the 
    longest contiguous subarray of 1s having length 9.
*/

function longestContinuousSubarrayOfAllOnes(arr, k) {
    let windowStart = 0; 
    let windowEnd = 0; 
    let maxSubarrayLength = 0; 
    let zeroTracker = 0;  

    while (windowEnd < arr.length) {
        if (arr[windowEnd] === 0) {
            zeroTracker++; 
        }

        while (zeroTracker > k) {
            if (arr[windowStart] === 0) {
                zeroTracker--;
            }
            windowStart++; 
        }

        maxSubarrayLength = Math.max(maxSubarrayLength, windowEnd - windowStart + 1);

        windowEnd++;
    };

    return maxSubarrayLength
};

console.log('longestContinuousSubarrayOfAllOnes: ', longestContinuousSubarrayOfAllOnes([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
console.log('longestContinuousSubarrayOfAllOnes: ', longestContinuousSubarrayOfAllOnes([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3));