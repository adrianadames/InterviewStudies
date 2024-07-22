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



function subarraysWithProductLessThanK(arr, k) {
    let subarrays = [];
    let windowEnd = 0;
    let windowStart = 0; 
    let product = arr[windowStart];

    while (windowStart < arr.length && windowEnd < arr.length) {

        if (product < k ) {
            // - if the end of the window is at the end of the array and 
            // the product between it and that between windowStart inclusive,
            // then all those subarrays will be less than k too
            if (windowEnd === arr.length - 1) {
                while (windowStart <= windowEnd) {
                    subarrays.push(arr.slice(windowStart, windowEnd + 1));
                    product = product/ arr[windowStart];
                    windowStart++
                }
            } else {
                subarrays.push(arr.slice(windowStart, windowEnd + 1));
                windowEnd++;
                product = product * arr[windowEnd];
            }
        } else { // - product too big
            // - divide the product by the number at windowStart and shrink the window if window size> 1 or 
            // move the window if the windowSize is 1; 
            product = product/ arr[windowStart];  
            
            if (windowStart === windowEnd) {
                windowStart++;
                windowEnd++;
            } else {
                windowStart++;
            }
        }
    }


    return [subarrays.length, subarrays]
}


console.log('subarraysWithProductLessThanK: ', subarraysWithProductLessThanK([10, 5, 2, 6], 100))


