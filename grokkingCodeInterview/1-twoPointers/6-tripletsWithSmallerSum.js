/*
(medium)

Problem Statement
-Given an array arr of unsorted numbers and a target sum, count 
all triplets in it such that arr[i] + arr[j] + arr[k] < target 
where i, j, and k are three different indices. Write a function 
to return the count of such triplets.

Example 1:
    Input: [-1, 0, 2, 3], target=3 
    Output: 2
    Explanation: There are two triplets whose sum is less than 
    the target: [-1, 0, 3], [-1, 0, 2]
Example 2:
    Input: [-1, 4, 2, 1, 3], target=5 
    Output: 4
    Explanation: There are four triplets whose sum is less than 
    the target: [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]
*/

// -sort the array; 
// -choose an element and hold it fixed; 
// -put a pointer right next to the element--the left pointer, and 
// a pointer at the end---the right pointer
// -sum the fixed element and the elements at the pointers
// -if the sum is greater than the target; we need to decrement the right 
// pointer
// -if the sum is less than the target; we need to increment the left pointer

// time: O(n^2) if already sorted, O(n^2 + n*log(n)) = O(n^2) (for large n) with the sort;
// space: O(1) + O(n) b/c sort;
function tripletsWithSmallerSum(arr, target) {
    arr.sort((a,b) => a - b);
    let tripletCount = 0; 

    for (let fixedPointer = 0; fixedPointer < arr.length - 2; fixedPointer++) {
        let leftPointer = fixedPointer + 1; 
        let rightPointer = arr.length - 1;

        while (leftPointer < rightPointer) {
            let sum = arr[fixedPointer] + arr[leftPointer] + arr[rightPointer];
            if (sum < target) {
                tripletCount+= rightPointer-leftPointer; 
                leftPointer++;
            } else if (sum >= target) {
                rightPointer--;
            };
        };
    };
    return tripletCount;
};

console.log('tripletsWithSmallerSum: ', tripletsWithSmallerSum([-1, 0, 2, 3], 3)) // 2
console.log('tripletsWithSmallerSum: ', tripletsWithSmallerSum([-1, 4, 2, 1, 3], 5)) // 4