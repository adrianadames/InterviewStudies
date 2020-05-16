/*
(easy)

Problem Statement: 
Given an array of sorted numbers, remove all duplicates from it. You should not use any 
extra space; after removing the duplicates in-place return the new length of the array.

Example 1:

Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

Example 2:

Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].
*/

function removeDuplicates(arr) {
    let pointerA = 0;
    let pointerB = 1; 

    while (pointerA < arr.length  && pointerB < arr.length ) {
        if (arr[pointerA] === arr[pointerB]) {
            arr.splice(Math.max(pointerA, pointerB),1);
        } else {
            if (pointerA < pointerB) {
                pointerA = pointerB + 1;
            } else {
                pointerB = pointerA + 1
            }
        }
    }
    return arr.length
}

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(removeDuplicates([2, 2, 2, 11]));

// time big 0 
// - not sure about this because not sure what the time complexity of the splice function is
// - i think it would be very large. imagine every number being the same. all the values
//   to the right of something being deleted would need to be shifted over. that's O(n)
// - and then you would need to perform that splice function n times, meaning that 
//   the overall big O would be O(n^2)

// space big 0:  O(1) 