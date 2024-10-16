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

// time: O(n^2) if already sorted, O(n^2 + n*log(n)) = O(n^2) (for large n) with the sort;
// space: O(1) + O(n) b/c sort;
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
            };

            // - if sum needs to be bigger, increase pointer on the left; 
            if (sum < target) {
                leftPointer++; 
            } else {
                rightPointer--;
            };
        };
    };
    return closestSum;
};

console.log('tripletSumCloseToTarget: ', tripletSumCloseToTarget2([-2, 0, 1, 2], 2)); // 1 
console.log('tripletSumCloseToTarget: ', tripletSumCloseToTarget2([-3, -1, 1, 2], 1)); // 0 
console.log('tripletSumCloseToTarget: ', tripletSumCloseToTarget2([1, 0, 1, 1], 100)); // 3
console.log('tripletSumCloseToTarget: ', tripletSumCloseToTarget2([0, 0, 2, 4], 3)); // 2