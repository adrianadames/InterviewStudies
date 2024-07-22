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

// what's the difference between this problem, and the previous problem and the target is 0. the difference
// is that we're looking for unique combinations instead of the sum closest to the target; 

function tripletSumToZero2(arr) {
    // first let me solve this problem my way; 
    let uniqueTriplets = []; 

    arr.sort((a, b) => a - b);

    // sheeesh; i should remove duplicates; and return new array with all unique values; 
    console.log('arr: ', arr); 

    // another thing I could do is have a dictionary of all unique triplets so that
    // I only push the unique ones?

    for (let fixedPointer = 0; fixedPointer < arr.length - 2; fixedPointer++) {
        let leftPointer = fixedPointer + 1;
        let rightPointer = arr.length - 1;

        while (leftPointer < rightPointer) {
            let sum = arr[fixedPointer] + arr[leftPointer] + arr[rightPointer]; 

            // if the sum of the numbers is greater than zero, the number needs to go 
            // down; decrement rightPointer
            if (sum > 0) {
                rightPointer--;
            } else if (sum < 0) {
                leftPointer++;
            } else {
                uniqueTriplets.push([arr[fixedPointer], arr[leftPointer], arr[rightPointer]]);
                leftPointer++;
            }
        }
    }
    return uniqueTriplets
}




console.log('tripletSumToZero: ', tripletSumToZero2([-3, 0, 1, 2, -1, 1, -2]));
console.log('tripletSumToZero: ', tripletSumToZero2([-5, 2, -1, -2, 3]));













let tripletSumToZero = (arr) => {
    // sort array
    arr.sort((a,b) => a-b);

    // -here we take a number (arr[i]), hold it fixed, and find a pair 
    // who's sum is the negative of that number (because we're summing to zero)
    // -only unique sets of of triplets
    let triplets = [];
    for (let i = 0; i<arr.length; i++) {
        if (arr[i-1] === arr[i]) {
            continue;
        }
        searchForPair(arr, -arr[i], i+1, triplets)
    }
    console.log('triplets: ', triplets);
    return
}

let searchForPair = (arr, targetSum, left, triplets) => {
    let right = arr.length-1;
    while (left < right) {
        let currentSum = arr[left] + arr[right];
        if (currentSum === targetSum) {
            triplets.push([-targetSum, arr[left], arr[right]]);
            left++;
            right--;
            while (left < right && arr[left] === arr[left-1]) {
                left++;
            }
            while (left < right && arr[right] === arr[left-1]) {
                right--;
            }
        } else if (targetSum > currentSum) { // need to increase currentSum
            left++;
        } else { // if (targetSum < currentSum), need to decrease currentSum
            right--; 
        }
        
    }
}

// tripletSumToZero([-3, 0, 1, 2, -1, 1, -2])