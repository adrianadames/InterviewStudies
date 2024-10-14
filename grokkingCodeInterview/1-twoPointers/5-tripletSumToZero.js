/*
(medium)

Problem Statement
-Given an array of unsorted numbers, find all unique triplets 
in it that add up to zero.

Example 1:
    Input: [-3, 0, 1, 2, -1, 1, -2]
    Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]
    Explanation: There are four unique triplets whose sum is equal to zero.
Example 2:
    Input: [-5, 2, -1, -2, 3]
    Output: [[-5, 2, 3], [-2, -1, 3]]
    Explanation: There are two unique triplets whose sum is equal to zero.
*/

// time: O(n^2) if already sorted, O(n^2 + n*log(n)) = O(n^2) (for large n) with the sort;
// space: O(k) where k number of triplets + O(n) from the sorting function
function tripletSumToZero(arr) {
    arr.sort((a, b) => a - b);
    
    let uniqueTriplets = []; 

    for (let fixedPointer = 0; fixedPointer < arr.length - 2; fixedPointer++) {
        // - skip duplicate initial element in the triple
        if (fixedPointer > 0 && arr[fixedPointer -1 ] === arr[fixedPointer]) {
            continue;
        };
        let leftPointer = fixedPointer + 1;
        let rightPointer = arr.length - 1;

        while (leftPointer < rightPointer) {
            let sum = arr[fixedPointer] + arr[leftPointer] + arr[rightPointer]; 

            // - if the sum of the numbers is greater than zero, the sum needs to go 
            // down; decrement rightPointer
            if (sum > 0) {
                rightPointer--;
            } else if (sum < 0) {
                leftPointer++;
            } else {
                uniqueTriplets.push([arr[fixedPointer], arr[leftPointer], arr[rightPointer]]);
                leftPointer++;
                // - Skip duplicates on the left side
                while (leftPointer < rightPointer && arr[leftPointer] === arr[leftPointer-1]) {
                    leftPointer++;
                };
                // - Skip duplicates on the right side
                while (leftPointer < rightPointer && arr[rightPointer] === arr[rightPointer+1]) {
                    rightPointer--;
                };
            };
        };
    };
    return uniqueTriplets;
};

console.log('tripletSumToZero: ', tripletSumToZero([-3, 0, 1, 2, -1, 1, -2]));
console.log('tripletSumToZero: ', tripletSumToZero([-3, -3, -3, 0, 1, 2, -1, 1, -2]));
console.log('tripletSumToZero: ', tripletSumToZero([-5, 2, -1, -2, 3]));


function tripletSumToZero2(arr) {
    // sort array
    arr.sort((a,b) => a-b);

    function searchForPair(arr, targetSum, left) {
        let right = arr.length-1;
        while (left < right) {
            let currentSum = arr[left] + arr[right];
            if (currentSum === targetSum) {
                triplets.push([-targetSum, arr[left], arr[right]]);
                left++;
                right--;
                while (left < right && arr[left] === arr[left-1]) {
                    left++;
                };
                while (left < right && arr[right] === arr[right+1]) {
                    right--;
                };
            } else if (targetSum > currentSum) { // need to increase currentSum
                left++;
            } else { // if (targetSum < currentSum), need to decrease currentSum
                right--; 
            };  
        };
    };
    
    // -here we take a number (arr[i]), hold it fixed, and find a pair 
    // who's sum is the negative of that number (because we're summing to zero)
    // -only unique sets of of triplets
    let triplets = [];
    for (let i = 0; i<arr.length; i++) {
        if (arr[i-1] === arr[i]) {
            continue;
        };
        searchForPair(arr, -arr[i], i+1);
    };
    return triplets;
};

console.log('tripletSumToZero2: ', tripletSumToZero2([-5, 2, -1, -2, 3]));