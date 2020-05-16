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

// NOTE: -I'm suspicuous of this solution because it doesn't result in an array with the duplicates removed...
// -It does result in O(n) time complexity and does output the right length. 
// -What if, after finding the length, cleaving away the end part of the array that we don't care about so we're
//  left only with the array of non-duplicates? We'd do something like, arr.splice(nextNonduplicate-1). 
// -That's an O(n) operation, but we only do it once (unlike in my first attempt) so overall, the big 0 is 0(n).
// -Very good. 

function removeDuplicates(arr) {
    // index of next non-duplicate element
    let nextNonDuplicate = 1;

    let i = 1; 
    while (i < arr.length ) {
        if (arr[nextNonDuplicate - 1] !== arr[i]) {
            arr[nextNonDuplicate] = arr[i];
            nextNonDuplicate += 1;
        }
        i += 1;
    }
    // arr.splice(nextNonDuplicate); return arr.length <---- fixes solution

    return nextNonDuplicate
}

console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]));
console.log(removeDuplicates([2, 2, 2, 11]));



// // Attempt 1
// function removeDuplicates(arr) {
//     let pointerA = 0;
//     let pointerB = 1; 

//     while (pointerA < arr.length  && pointerB < arr.length ) {
//         if (arr[pointerA] === arr[pointerB]) {
//             arr.splice(Math.max(pointerA, pointerB),1);
//         } else {
//             if (pointerA < pointerB) {
//                 pointerA = pointerB + 1;
//             } else {
//                 pointerB = pointerA + 1
//             }
//         }
//     }
//     return arr.length
// }

// console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]));
// console.log(removeDuplicates([2, 2, 2, 11]));

// // time big 0 
// // - not sure about this because not sure what the time complexity of the splice function is
// // - i think it would be very large. imagine every number being the same. all the values
// //  to the right of something being deleted would need to be shifted over. that's O(n)
// // - and then you would need to perform that splice function n times, meaning that 
// //  the overall big O would be O(n^2)

// // space big 0:  O(1) 