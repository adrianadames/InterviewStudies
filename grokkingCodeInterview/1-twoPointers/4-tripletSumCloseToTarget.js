/*
(medium)

Problem Statement
-Given an array of unsorted numbers and a target number, find a 
triplet in the array whose sum is as close to the target number 
as possible, return the sum of the triplet. If there are more 
than one such triplet, return the sum of the triplet with the 
smallest sum.

Example 1:
    Input: [-2, 0, 1, 2], target=2
    Output: 1
    Explanation: The triplet [-2, 1, 2] has the closest sum to the target.
Example 2:
    Input: [-3, -1, 1, 2], target=1
    Output: 0
    Explanation: The triplet [-3, 1, 2] has the closest sum to the target.
Example 3:  
    Input: [1, 0, 1, 1], target=100
    Output: 3
    Explanation: The triplet [1, 1, 1] has the closest sum to the target.
*/

// "If there are more than one such triplet, return the sum of the triplet 
// with the smallest sum."
// -so if the Target is 3 and one triplet sums to 2 and the other triplet 
// sums to 4, return 2 


function tripletSumCloseToTarget2 (arr, target) {
    arr.sort((a,b) => (a-b));
    let closestSum = Infinity; 

    for (let fixedPointer = 0; fixedPointer < arr.length - 2; fixedPointer++) {
        let leftPointer = fixedPointer + 1;
        let rightPointer = arr.length -1; 

        while (leftPointer < rightPointer) {
            let sum = arr[fixedPointer] + arr[leftPointer] + arr[rightPointer];

            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            } else if (Math.abs(sum - target) === Math.abs(closestSum - target)) {
                closestSum = Math.min(sum, closestSum);
            }

            // - if sum needs to be bigger, increase pointer on the left; 
            if (sum < target) {
                leftPointer++; 
            } else {
                rightPointer--;
            }
        }
    };
    return closestSum;
};

console.log('tripletSumCloseToTarget: ', tripletSumCloseToTarget2([-2, 0, 1, 2], 2)); // 1 
console.log('tripletSumCloseToTarget: ', tripletSumCloseToTarget2([-3, -1, 1, 2], 1)); // 0 
console.log('tripletSumCloseToTarget: ', tripletSumCloseToTarget2([1, 0, 1, 1], 100)); // 3
console.log('tripletSumCloseToTarget: ', tripletSumCloseToTarget2([0, 0, 2, 4], 3)); // 2















// time: O(n) = n^3*log(n)
// space: O(n) = 1;
let tripletSumCloseToTarget = (arr, target) => {
    // sort array
    arr.sort((a, b) => a-b); // time O(n)= n*log(n) 

    // -if triplet sum closer than closestSum, reassign closestSum to this sum
    let closestSum = Infinity;

    // -fix the first of the triplet and then use two pointer method with one pointer
    // at beginning and one pointer at end of array
    for (let i = 0; i<arr.length -2; i++) { // -time O(n) = n^2 because of nested loop
        let ptr1 = i+1;
        let ptr2 = arr.length-1;

        // -while more triplet sums are available to check 
        while (ptr1 < ptr2) {
            // calculate sum of current triplet
            let sum = arr[i] + arr[ptr1] + arr[ptr2];

            // -check if triplet sum is closer to target than current closestSum
            if (Math.abs(sum-target) < Math.abs(closestSum-target)) {
                closestSum = sum;
            }

            // -if triplet sum greater than the target, reduce sum by decrementing the 
            // pointer on the right (ptr2)
            if (sum > target) {
                ptr2--; 
            } else { // -if triplet sum less than target, increment left pointer (ptr1)
                ptr1++;
            }
        } 
    }
    return closestSum
}

// console.log('tripletSumCloseToTarget: ', tripletSumCloseToTarget([-2, 0, 1, 2], 2));
// console.log('tripletSumCloseToTarget: ', tripletSumCloseToTarget([-3, -1, 1, 2], 1));
// console.log('tripletSumCloseToTarget: ', tripletSumCloseToTarget([1, 0, 1, 1], 100));