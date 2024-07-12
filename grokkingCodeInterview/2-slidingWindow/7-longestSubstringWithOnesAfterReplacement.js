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

// time complexity: O(N); 
// space complexity: O(1);
function longestContinuousSubarrayOfAllOnes(arr, k) {
    // - we use the sliding window method
    // - as we expand the window, we need to make sure that the the following condition is met: 
    // (windowEnd - windowStart + 1 - numberOfOnesInWindow) > k
    
    let numberOfOnesInWindow = 0; 
    let longestSubarrayLength = 0; 
    let windowStart = 0; 

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        // - if the number we're about to add is 0, we need to check if adding it violated our condition; 
        if (arr[windowEnd] === 0) {
            while (windowEnd - windowStart + 1 - numberOfOnesInWindow > k) {
                // - if condition violated, shrink window from the left
                if (arr[windowStart] === 1) {
                    numberOfOnesInWindow--;
                    windowStart++;
                } else {
                    windowStart++;
                }
            }
        } else {
            // - if the number we're about to add is a 1;
            numberOfOnesInWindow++;
        }
        // - after adding the number at windowEnd and shrinking the window if need be
        // we check if this length of the window is the longest encountered so far; 
        if (windowEnd - windowStart + 1 > longestSubarrayLength) {
            longestSubarrayLength = windowEnd - windowStart + 1;
        }
    }
    return longestSubarrayLength
};

console.log('longestContinuousSubarrayOfAllOnes: ', longestContinuousSubarrayOfAllOnes([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
console.log('longestContinuousSubarrayOfAllOnes: ', longestContinuousSubarrayOfAllOnes([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3));