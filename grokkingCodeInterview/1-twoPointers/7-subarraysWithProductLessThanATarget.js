/*
(medium)

Problem Statement
-You are given an array of positive integers nums.
Count and print the number of (contiguous) subarrays where the product 
of all the elements in the subarray is less than k.

Example 1:
    Input: nums = [10, 5, 2, 6], k = 100
    Output: 8
    Explanation: The 8 subarrays that have product less than 100 are: 
    [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]. Note that 
    [10, 5, 2] is not included as the product of 100 is not strictly 
    less than k.
*/

// time: O(n);
// space: O(1) if we're giving count, O(n) if we return the subarrays in an array;
function subarraysWithProductLessThanK(arr, k) {
    let subarrays = [];
    let product = 1;
    let windowStart = 0;
    
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        product *= arr[windowEnd]; 
        
        // - shrink window if product too large
        while (product >= k) {
            product /= arr[windowStart];
            windowStart++;
        }

        // - all subarrays from windowStart to windowEnd have a product < k
        for (let i = windowEnd; i >= windowStart; i--) {
            subarrays.push(arr.slice(i, windowEnd + 1));
        }
    }

    return [subarrays.length, subarrays];
}

console.log('subarraysWithProductLessThanK: ', subarraysWithProductLessThanK([10, 5, 2, 6], 100));
