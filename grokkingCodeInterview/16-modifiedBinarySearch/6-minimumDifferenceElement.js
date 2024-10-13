/*
Problem Statement (medium)

Given an array of numbers sorted in ascending order, find 
the element in the array that has the minimum difference 
with the given ‘key’.

Example 1:
Input: [4, 6, 10], key = 7
Output: 6
Explanation: The difference between the key '7' and '6' is 
minimum than any other number in the array 

Example 2:
Input: [4, 6, 10], key = 4
Output: 4

Example 3:
Input: [1, 3, 8, 10, 15], key = 12
Output: 10

Example 4:
Input: [4, 6, 10], key = 17
Output: 10
*/

// - time: O(log(n))
// - space: O(1)
// - note: my solution to this problem can be simplified. the improvement is worth doing, 
// but I don't feel like it right now :/
function minimumDifferenceElement(arr, key) {
    let left = 0;
    let right = arr.length -1
    
    let minDifference = Infinity;
    let minDifferenceElement = null;

    while (left <= right) {
        let middle = Math.floor((left + right)/2);
        let difference = arr[middle] - key; 
        let differenceMagnitude = Math.abs(difference);

        if (differenceMagnitude < minDifference) {
            minDifferenceElement = arr[middle];
            minDifference = differenceMagnitude;
        }

        if (difference === 0) {
            return minDifferenceElement
        } else if (difference < 0) {
            left = middle + 1; 
        } else {
            right = middle - 1;
        }
    }

    return minDifferenceElement
}

console.log('minimumDifferenceElement: ', minimumDifferenceElement([4, 6, 10], 7)); // 6
console.log('minimumDifferenceElement: ', minimumDifferenceElement([4, 6, 10], 4)); // 4
console.log('minimumDifferenceElement: ', minimumDifferenceElement([1, 3, 8, 10, 15], 12)); // 10
console.log('minimumDifferenceElement: ', minimumDifferenceElement([4, 6, 10], 17)); // 10
console.log('minimumDifferenceElement: ', minimumDifferenceElement([1, 2, 8, 12, 15, 17], 7)); // 8