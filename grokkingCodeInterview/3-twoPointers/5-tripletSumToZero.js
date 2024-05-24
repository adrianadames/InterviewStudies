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

tripletSumToZero([-3, 0, 1, 2, -1, 1, -2])