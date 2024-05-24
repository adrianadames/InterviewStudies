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

function smallestSubarrayWithGivenSum(arr,S) {
    // establish parameters used to define contiguous array
    let windowStart = 0;
    let windowEnd = 0; 

    // initialize length and sum of contiguous array 
    let windowLength = 1;
    let windowSum = arr[0];

    // if the smallestSubarrayLength is greater than the length of the input array at the very end of the while loop, 
    // then we know that there is no subarray whose sum >= S;
    let smallestSubarrayLength = arr.length+1; 
      
    while (windowEnd < arr.length) {     
        // if windowSum greater than S, we check if that's the new minimum length
        // and proceed to make the window smaller from the front
        if (windowSum >= S) {
            // if windowLength is 1 then 1 is the smallest length of the contiguous arr whose sum >= S
            if (windowLength === 1) {
                return 1
            }
            if (windowLength < smallestSubarrayLength) {
                smallestSubarrayLength = windowLength;
            }
            windowSum -= arr[windowStart];
            windowStart +=1;
            windowLength -=1;
        }
        // else make the window larger from the end
        else {
            windowEnd +=1;
            windowSum += arr[windowEnd];
            windowLength +=1;
        }        
    }

    if (smallestSubarrayLength === arr.length + 1) {
        return 0
    } else {
        return smallestSubarrayLength
    }
}

console.log(smallestSubarrayWithGivenSum([2, 1, 5, 2, 3, 2], 7)) // returns 2
console.log(smallestSubarrayWithGivenSum([2, 1, 5, 2, 8], 7)) // returns 1
console.log(smallestSubarrayWithGivenSum([3, 4, 1, 1, 6], 8)) // returns 3
console.log(smallestSubarrayWithGivenSum([3, 4, 4, 1, 1, 5, 6], 11)) // returns 2
console.log(smallestSubarrayWithGivenSum([3, 4, 4, 1, 1, 5, 6], 14)) // returns 5
console.log(smallestSubarrayWithGivenSum([3, 4, 4, 1, 1, 5, 6], 140)) // returns 0


// time complexity: O(2n) = O(n)
// space complexity: O(1)

