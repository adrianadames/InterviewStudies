/*

NOTE: Finished this problem using two different approaches. 

(easy)

Problem Statement: 

We are given an array containing ‘n’ objects. Each object, when 
created, was assigned a unique number from 1 to ‘n’ based on 
their creation sequence. This means that the object with sequence 
number ‘3’ was created just before the object with sequence 
number ‘4’.

Write a function to sort the objects in-place on their creation
sequence number in O(n) and without any extra space. For 
simplicity, let’s assume we are passed an integer array 
containing only the sequence numbers, though each number is 
actually an object.

Example 1:

Input: [3, 1, 5, 4, 2]
Output: [1, 2, 3, 4, 5]

Example 2:

Input: [2, 6, 4, 3, 1, 5]
Output: [1, 2, 3, 4, 5, 6]

Example 3:

Input: [1, 5, 6, 4, 3, 2]
Output: [1, 2, 3, 4, 5, 6]

*/

/*
// EASY-DOES-IT APPROACH
-go through each item in the array starting with the first one
-if the item is in the right spot, check if the next item in the arr is in the right spot
-if the item is in the wrong spot, move it to its appropriate spot, 
and switch it with the number currently sitting in its new spot
*/ 

// time complexity: O(n)
// space complexity: O(1)
function sortArrInPlace(arr) {
    let q = 0; 
    let i = 0; 
    while (i < arr.length) {
        console.log('q: ', q++)
        // -if item is in the wrong spot
        if (arr[i] !== i + 1) {
            // -move the item to its appropriate spot (i.e. move arr[i] to arr[arr[i] -1])
            // and switch it with number sitting in its new spot
            [arr[arr[i]-1], arr[i]] = [arr[i], arr[arr[i]-1]];
        } 
        // -if item in correct spot, move the index over one spot
        else {
            i += 1;
        }
    }
    return arr
}


// // FAST AND SLOW POINTER APPROACH
// time : O(n)
// space: O(1)
// function sortArrInPlace(arr) {
//     // initialize the slow and fast pointers
//     let [slowP, fastP] = [0,1]; 

//     while (slowP !== fastP) {
//         // if fast pointer isn't at the end of the array
//         if (fastP < arr.length - 1) {
//             // if arr[slowP] > arr[fastP], switch the values, and keep incrementing fastP until it reaches end 
//             if (arr[slowP] > arr[fastP]) {
//                 [arr[slowP], arr[fastP]] = [arr[fastP], arr[slowP]];
//             } 
//             fastP +=1;
//         } 
//         // when fastP at end of arr (i.e. when fastP = arr.length - 1)
//         else { 
//             // if slow pointer not yet at the end of the array next to fastP
//             if (slowP !== fastP-1) {
//                 // increment the slow pointer
//                 slowP +=1;
//                 // if the number at slow pointer less than number at fast pointer, switch them
//                 if (arr[slowP] > arr[fastP]) {
//                     [arr[slowP], arr[fastP]] = [arr[fastP], arr[slowP]];
//                 } 
//                 // move the fast pointer next to the slow pointer
//                 fastP = slowP +1;
//             } else {
//                 return arr
//             }            
//         }
//     }
// }

console.log(sortArrInPlace([3, 1, 5, 4, 2]));
console.log(sortArrInPlace([2, 6, 4, 3, 1, 5]));
console.log(sortArrInPlace([1, 5, 6, 4, 3, 2]));

