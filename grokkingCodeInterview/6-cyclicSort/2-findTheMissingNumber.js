/*

NOTE: Finished problem. 

(easy)

Problem Statement: 
We are given an array containing ‘n’ distinct numbers taken 
from the range 0 to ‘n’. Since the array has only ‘n’ numbers
out of the total ‘n+1’ numbers, find the missing number.

Example 1:

Input: [4, 0, 3, 1]
Output: 2

Example 2:

Input: [8, 3, 5, 2, 4, 6, 0, 1]
Output: 7

*/

// use modified version of sortArrInPlace function (easy-does-it approach) or the 
// fast and slow pointer approach from previous problem
function sortArrInPlace(arr) { // <--modified version
    let i = 0; 
    while (i < arr.length) {
        // -if item is in the wrong spot (if arr[i] !== arr[arr[i]], because arr[i=0] 
        // supposed to equal 0 which implies that arr[arr[i=0]] = arr[i=0]) AND if
        // item not equal to n+1 = arr.length if it exists
        if (arr[i] !== arr[arr[i]] && arr[i] < arr.length) {
            // -move the item to its appropriate spot (i.e. move arr[i] to arr[arr[i] -1])
            // and switch it with number sitting in its new spot
            [arr[arr[i]], arr[i]] = [arr[i], arr[arr[i]]];
        }
        // -if item in correct spot, move the index over one spot
        else {
            i += 1;
        }
    }
    return arr
}
// sortArrInPlace function (fast and slow pointer approach) from previous problem
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


// time complexity: O(n)
// space complexity: O(1)
function findMissingNumber(arr) {
    sortArrInPlace(arr); 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i) {
            return i
        }
    }
}

console.log(findMissingNumber([4, 0, 3, 1])); 
console.log(findMissingNumber([8, 3, 5, 2, 4, 6, 0, 1])); 
