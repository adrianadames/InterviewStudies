/*
(easy)

Problem Statement:
Given an array of integers, identify the highest value that 
appears only once in the array. If no such number exists, 
return -1.

Example 1:
Input: [5, 7, 3, 7, 5, 8]
Expected Output: 8
Justification: The number 8 is the highest value that appears only once in the array.

Example 2:
Input: [1, 2, 3, 2, 1, 4, 4]
Expected Output: 3
Justification: The number 3 is the highest value that appears only once in the array.

Example 3:
Input: [9, 9, 8, 8, 7, 7]
Expected Output: -1
*/

// time: O(n);
// space: O(n);
function largestUniqueNum(arr) {
    let numCount = {};
    arr.forEach(num => {
        if (!numCount[num]) {
            numCount[num] = 0;
        }
        numCount[num]++;
    });

    let max = -1;
    for (let key in numCount) {
        if (numCount[key] === 1) {
            if (Number(key) > max) {
                max = Number(key);
            }
        }
    }
    return max;
}

console.log('largestUniqueNum: ', largestUniqueNum([5, 7, 3, 7, 5, 8])); 
console.log('largestUniqueNum: ', largestUniqueNum([1, 2, 3, 2, 1, 4, 4])); 
console.log('largestUniqueNum: ', largestUniqueNum([9, 9, 8, 8, 7, 7])); 