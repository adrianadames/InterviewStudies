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


function maxSumSubarrayOfSizeK2(arr, k) {
    // -we need to find the maximumSum of any subarray of size k
    let windowStart = 0; 
    let windowEnd = windowStart + k -1; 
    let maxWindowSum = 0;

    let windowSum = 0;
    // - the first sum we have to get is the sum of the first k numbers in the array
    for (let i = windowStart; i < windowEnd+1; i++) {
        windowSum += arr[i]; 
        // console.log('windowSum: ', windowSum);
    }


    // - now we shift the window one index at a time, subtracting the previous arr[windowStart] 
    // from the window sum and adding the new number at the new arr[windowEnd]
    while (windowEnd < arr.length) {
        if (windowSum > maxWindowSum) {
            maxWindowSum = windowSum;
            // console.log('maxWindowSum: ', maxWindowSum);
        }
        windowSum -= arr[windowStart]
        windowStart++;
        windowEnd++;
        windowSum += arr[windowEnd]
        // console.log('windowStart: ', windowStart, 'windowEnd: ', windowEnd)
    }
    return maxWindowSum
}

console.log(maxSumSubarrayOfSizeK2([2, 1, 5, 1, 3, 2], 3)) // returns 9 
console.log(maxSumSubarrayOfSizeK2([2, 3, 4, 1, 5], 2 )) // returns 7 