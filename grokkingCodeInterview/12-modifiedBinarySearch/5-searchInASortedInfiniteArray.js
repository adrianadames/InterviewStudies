/*
Problem Statement (medium)

Given an infinite sorted array (or an array with unknown size), 
find if a given number ‘key’ is present in the array. Write a 
function to return the index of the ‘key’ if it is present in 
the array, otherwise return -1.

Since it is not possible to define an array with infinite (unknown) 
size, you will be provided with an interface ArrayReader to read 
elements of the array. ArrayReader.get(index) will return the number 
at index; if the array’s size is smaller than the index, it will 
return Integer.MAX_VALUE.

Example 1:
Input: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], key = 16
Output: 6
Explanation: The key is present at index '6' in the array.

Example 2:
Input: [4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30], key = 11
Output: -1
Explanation: The key is not present in the array.

Example 3:
Input: [1, 3, 8, 10, 15], key = 15
Output: 4
Explanation: The key is present at index '4' in the array.

Example 4:
Input: [1, 3, 8, 10, 15], key = 200
Output: -1
Explanation: The key is not present in the array.
*/

class ArrayReader {
    constructor(arr) {
        this.arr = arr;
    }

    get(index) {
        if (index >= this.arr.length) {
            return Number.MAX_SAFE_INTEGER;
        }
        return this.arr[index];
    }
};

function searchInASortedInfiniteArray(reader, key) {
    let leftIndex = 0; 
    let rightIndex = 1; 

    // - while the upper bound is greater than the key, keep expanding it and also
    // move the leftIndex to the old rightIndex to make the lower bound larger
    while (reader.get(rightIndex) < key) {
        leftIndex = rightIndex;
        rightIndex = rightIndex*2;
    };

    while (leftIndex <= rightIndex) {
        // - check halfway between these indices and adjust bounds
        let index = Math.floor((leftIndex + rightIndex)/2);

        if (reader.get(index) === key) {
            return index;
        } else if (reader.get(index) > key) { // if number at index larger, then this new upper bound
            rightIndex = index -1; 
            // upperBound = reader.get(rightIndex);
        } else {
            leftIndex = index + 1; 
            // lowerBound = reader.get(leftIndex);
        };
    };
    return -1; 
};

let ar1 = new ArrayReader([4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]); 
let ar2 = new ArrayReader([4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]); 
let ar3 = new ArrayReader([1, 3, 8, 10, 15]);
let ar4 = new ArrayReader([1, 3, 8, 10, 15]);

console.log('searchInASortedInfiniteArray: ', searchInASortedInfiniteArray(ar1, 16)); // 6
console.log('searchInASortedInfiniteArray: ', searchInASortedInfiniteArray(ar2, 11)); // -1
console.log('searchInASortedInfiniteArray: ', searchInASortedInfiniteArray(ar3, 15)); // 4
console.log('searchInASortedInfiniteArray: ', searchInASortedInfiniteArray(ar4, 200)); // -1
