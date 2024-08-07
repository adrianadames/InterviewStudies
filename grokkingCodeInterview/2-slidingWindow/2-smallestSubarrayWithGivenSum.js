/*
(easy)

Problem Statement:

Given an array of positive numbers and a positive number ‘S’, 
find the length of the smallest contiguous subarray whose sum
is greater than or equal to ‘S’. Return 0, if no such subarray 
exists.

Example 1:

Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].

Example 2:

Input: [2, 1, 5, 2, 8], S=7 
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

Example 3:

Input: [3, 4, 1, 1, 6], S=8 
Output: 3
Explanation: Smallest subarrays with a sum greater than or equal to '8' are [3, 4, 1] or [1, 1, 6].
*/

// time complexity: O(n)
// space complexity: O(1)
function smallestSubarrayWithGivenSum(arr, S) {
    let smallestSubarrayLength = Infinity; 

    let windowStart = 0; 
    let currentSum = 0; 

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        currentSum += arr[windowEnd]; 

        while (currentSum >= S) {
            if (windowEnd - windowStart + 1 < smallestSubarrayLength) {
                smallestSubarrayLength = windowEnd - windowStart + 1;
            }
            currentSum -= arr[windowStart];
            windowStart++;
        }
    }

    if (smallestSubarrayLength === Infinity) {
        return 0
    } 

    return smallestSubarrayLength
}

console.log(smallestSubarrayWithGivenSum([2, 1, 5, 2, 3, 2], 7)) // returns 2
console.log(smallestSubarrayWithGivenSum([2, 1, 5, 2, 8], 7)) // returns 1
console.log(smallestSubarrayWithGivenSum([3, 4, 1, 1, 6], 8)) // returns 3
console.log(smallestSubarrayWithGivenSum([3, 4, 4, 1, 1, 5, 6], 11)) // returns 2
console.log(smallestSubarrayWithGivenSum([3, 4, 4, 1, 1, 5, 6], 14)) // returns 5
console.log(smallestSubarrayWithGivenSum([3, 4, 4, 1, 1, 5, 6], 140)) // returns 0