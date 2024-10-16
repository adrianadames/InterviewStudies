/*
(medium) 

Problem - Minimum Window Sort 

Given an integer array nums, you need to find one continuous 
subarray such that if you only sort this subarray in non-decreasing 
order, then the whole array will be sorted in non-decreasing order.

Return the shortest such subarray and output its length.

Example 1:
Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.

Example 2:
Input: nums = [1,2,3,4]
Output: 0

Example 3:
Input: nums = [1]
Output: 0

Constraints:
1 <= nums.length <= 104
-105 <= nums[i] <= 105

Follow up: Can you solve it in O(n) time complexity?
*/
// time: O(n)
// space: O(1)
function minWindowSort(arr) {
    let left = 0;
    let right = arr.length -1; 
    
    while (left < arr.length && arr[left] <= arr[left + 1]) {
        left++;
    }

    if (left === arr.length -1) { // - array already sorted 
        return 0; 
    }

    while (right > 0 && arr[right] >= arr[right - 1]) {
        right--;
    }

    console.log('left: ', left);
    console.log('right: ', right)

    let min = Math.min(...arr.slice(left,right+1))
    let max = Math.max(...arr.slice(left,right+1))
    console.log('max: ', max);
    console.log('min: ', min);

    while (left > 0 && arr[left-1] > min) {
        left--;
    }

    while (right < arr.length -1 && arr[right+1] < max) {
        right++;
    }

    return [right - left + 1, arr.slice(left,right+1)];
}

console.log('minWindowSort: ', minWindowSort([2,6,4,8,10,9,15]));
// console.log('minWindowSort: ', minWindowSort([1,2,3,4]));
// console.log('minWindowSort: ', minWindowSort([1]));
console.log('minWindowSort: ', minWindowSort([1,3,5,2,6,8,9]));