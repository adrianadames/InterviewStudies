/*
Problem Statement (medium)

Given an array of numbers sorted in an ascending order, 
find the ceiling of a given number ‘key’. The ceiling of 
the ‘key’ will be the smallest element in the given array 
greater than or equal to the ‘key’.

Write a function to return the index of the ceiling of the
‘key’. If there isn’t any ceiling return -1.

Example 1:
Input: [4, 6, 10], key = 6
Output: 1
Explanation: The smallest number greater than or equal to 
'6' is '6' having index '1'.

Example 2:
Input: [1, 3, 8, 10, 15], key = 12
Output: 4
Explanation: The smallest number greater than or equal to 
'12' is '15' having index '4'.

Example 3:
Input: [4, 6, 10], key = 17
Output: -1
Explanation: There is no number greater than or equal to 
'17' in the given array.

Example 4:
Input: [4, 6, 10], key = -1
Output: 0
Explanation: The smallest number greater than or equal to 
'-1' is '4' having index '0'.
*/

function ceilingOfANumber(arr, key) {
    let left = 0;
    let right = arr.length - 1; 

    // - if key greater than largest number, there's no ceiling. 
    if (key > arr[right]) {
        return -1;
    }

    while (left <= right) {
        let middle = Math.floor((left + right)/2);
        
        if (arr[middle] === key) {
            return middle; 

        // - if middle element is greater than key, move right pointer  
        // to the left of middle 
        } else if (arr[middle] > key) {
            right = middle - 1; 

        // - if middle element is greater than key, move left pointer  
        // to the right of middle 
        } else  {
            left = middle + 1;
        };
    };

    // - if the middle element is the ceiling but it's not equal to the key, 
    // then the left pointer will eventually come to point at this number in 
    // the end
    return left;
}

console.log('ceilingOfANumber: ', ceilingOfANumber([4, 6, 10], 6)); // 1
console.log('ceilingOfANumber: ', ceilingOfANumber([1, 3, 8, 10, 15], 12)); // 4
console.log('ceilingOfANumber: ', ceilingOfANumber([4, 6, 10], 17)); // -1
console.log('ceilingOfANumber: ', ceilingOfANumber([4, 6, 10], -1)); // 0
console.log('ceilingOfANumber: ', ceilingOfANumber([2, 3, 4, 6, 7, 8, 10], 5)); // 3
