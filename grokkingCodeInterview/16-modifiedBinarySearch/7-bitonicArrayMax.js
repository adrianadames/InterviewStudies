/*
Problem Statement (easy)

Find the maximum value in a given Bitonic array. An array is considered 
bitonic if it is monotonically increasing and then monotonically decreasing. 
Monotonically increasing or decreasing means that for any index i in the 
array arr[i] != arr[i+1].

Example 1:
Input: [1, 3, 8, 12, 4, 2]
Output: 12
Explanation: The maximum number in the input bitonic array is '12'.

Example 2:
Input: [3, 8, 3, 1]
Output: 8

Example 3:
Input: [1, 3, 8, 12]
Output: 12

Example 4:
Input: [10, 9, 8]
Output: 10
*/

// time: O(n) = log(n);
// space: O(n) = 1;
function bitonicArrayMax(arr) {
    let left = 0; 
    let right = arr.length -1; 

    while (left < right) {
        let middle = Math.floor((left+right)/2);
        if (arr[middle] < arr[middle + 1]) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }
    return arr[left];
};

console.log('bitonicArrayMax: ', bitonicArrayMax([1, 3, 8, 12, 4, 2])); // 12
console.log('bitonicArrayMax: ', bitonicArrayMax([3, 8, 3, 1])); // 8
console.log('bitonicArrayMax: ', bitonicArrayMax([1, 3, 8, 12])); // 12
console.log('bitonicArrayMax: ', bitonicArrayMax([10, 9, 8])); // 10