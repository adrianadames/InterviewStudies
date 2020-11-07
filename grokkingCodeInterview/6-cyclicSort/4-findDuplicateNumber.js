/*

NOTE: Finished problem. 

(easy)

Problem Statement: 

We are given an unsorted array containing ‘n+1’ numbers taken 
from the range 1 to ‘n’. The array has only one duplicate but 
it can be repeated multiple times. Find that duplicate number 
without using any extra space. You are, however, allowed to 
modify the input array.

Example 1:

Input: [1, 4, 4, 3, 2]
Output: 4

Example 2:

Input: [2, 1, 3, 3, 5, 4]
Output: 3

Example 3:

Input: [2, 4, 1, 4, 4]
Output: 4
*/

// use modified version of sortArrInPlace function (easy-does-it approach) or the 
// fast and slow pointer approach problem 1-cyclicSort.js to start sorting arr 

// input is a array with n items (i.e. arr.length = n) 
// duplicate is unique (i.e. only one number in the arr is repeated)
// range of numbers in arr is 1 to n

// time complexity: O(n)
// space complexity: O(1) 
function findDuplicateNumber(arr) {
    let i = 0; 
    
    while (i < arr.length) {
        // -if item is in the wrong spot
        if (arr[i] !== arr[arr[i]-1]) {
            // -move the item to its appropriate spot (i.e. move arr[i] to arr[arr[i] -1])
            // and switch it with number sitting in its new spot
            [arr[arr[i]-1], arr[i]] = [arr[i], arr[arr[i]-1]];
        } 
        // -items in above if statement are equal in value 
        else {
            // if items equal, but the indices are different, it's a duplicate
            if (i !== arr[i]-1) {
                return arr[i]
            }
            // if items equal, but indices are the same
            i += 1;
        }
    }
}

console.log(findDuplicateNumber([1, 4, 4, 3, 2]));
console.log(findDuplicateNumber([2, 1, 3, 3, 5, 4]));
console.log(findDuplicateNumber([2, 4, 1, 4, 4]));
console.log(findDuplicateNumber([4,2, 10, 8, 7, 9, 3, 6, 6, 6]));
console.log(findDuplicateNumber([1, 2, 3, 4, 5, 7, 9, 8, 9]));