/*
Problem Statement (medium)

Given an array of lowercase letters sorted in ascending 
order, find the smallest letter in the given array greater 
than a given ‘key’.

Assume the given array is a circular list, which means that 
the last letter is assumed to be connected with the first 
letter. This also means that the smallest letter in the given 
array is greater than the last letter of the array and is also 
the first letter of the array.

Write a function to return the next letter of the given ‘key’.

Example 1:
Input: ['a', 'c', 'f', 'h'], key = 'f'
Output: 'h'
Explanation: The smallest letter greater than 'f' is 'h' in the 
given array.

Example 2:
Input: ['a', 'c', 'f', 'h'], key = 'b'
Output: 'c'
Explanation: The smallest letter greater than 'b' is 'c'.

Example 3:
Input: ['a', 'c', 'f', 'h'], key = 'm'
Output: 'a'
Explanation: As the array is assumed to be circular, the smallest 
letter greater than 'm' is 'a'.

Example 4:
Input: ['a', 'c', 'f', 'h'], key = 'h'
Output: 'a'
Explanation: As the array is assumed to be circular, the smallest 
letter greater than 'h' is 'a'.
*/

function nextLetter(arr, key) {
    let left = 0;
    let right = arr.length - 1;
    
    // - if the largest letter in the array is less than the key, 
    // then the smallest letter larger than the key is arr[0]; this
    // is because the array is circular, so the first letter of the array 
    // is greater than the last letter in the array after the first circulation
    // - same if smallest letter in arr greater than the key;
    if (arr[left] > key || arr[right] <= key) {
        return arr[0];
    };

    while (left <= right) {
        let middle = Math.floor((left + right)/2);
        if (arr[middle] > key) {
            right = middle - 1;
        } else {
            left = middle + 1;
        };
    };
    return arr[left];
};

console.log('nextLetter: ', nextLetter(['a', 'c', 'f', 'h'], 'f')); // h
console.log('nextLetter: ', nextLetter(['a', 'c', 'f', 'h'], 'b')); // c
console.log('nextLetter: ', nextLetter(['a', 'c', 'f', 'h'], 'm')); // a
console.log('nextLetter: ', nextLetter(['a', 'c', 'f', 'h'], 'h')); // a