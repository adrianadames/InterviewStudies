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

// time complexity: O(n)
// space complexity: O(1)

function maxSumSubarrayOfSizeK(arr, k) {
    let maxSum = 0; 
    let windowStart = 0; 
    let currentSum = 0; 

    // - managing window size 
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        currentSum += arr[windowEnd]; // add the number at windowEnd

        // - if the window size is greater than k, subtract from the
        // currentSum the number at windowStart and increment windowStart
        if (windowEnd - windowStart + 1 > k) {
            currentSum -= arr[windowStart]; 
            windowStart++;
        }; 
        
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

console.log(maxSumSubarrayOfSizeK([2, 1, 5, 1, 3, 2], 3)); // returns 9 
console.log(maxSumSubarrayOfSizeK([2, 3, 4, 1, 5], 2 )); // returns 7 
console.log(maxSumSubarrayOfSizeK([1, 2, 3, 4, 5, 6], 2 )); // returns 11 
console.log(maxSumSubarrayOfSizeK([4, 1, 1, 1, 2, 3], 3 )); // returns 6
