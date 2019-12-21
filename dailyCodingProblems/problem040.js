/*
This problem was asked by Google.

Given an array of integers where every integer occurs three 
times except for one integer, which only occurs once, find 
and return the non-duplicated integer.

For example, given [6, 1, 3, 3, 3, 6, 6], return 1. Given
[13, 19, 13, 13], return 19.

Do this in O(N) time and O(1) space.
*/

// // FAIL. Solution at the bottom. 

// function findNonDuplicate(arr) {
//     let counts = {};
//     let appearsOnce, appearTwice;
//     for (let i=0; i < arr.length; i++) {
//         if (!counts[arr[i]]) {
//             counts[arr[i]]
//         }
        
//     }
//     // console.log(counts);
//     // return Object.keys(counts)[0];
// }

// // console.log(findNonDuplicate([6, 1, 3, 3, 3, 6, 6]));
// console.log(findNonDuplicate([13, 19, 13, 13]));



// function findElement(arr) {
//   var ones = 0;
//   var twos = 0;
//   for (var i = 0; i < arr.length; i++) {
//     ones = (ones ^ arr[i]) & ~twos;
//     twos = (twos ^ arr[i]) & ~ones;
//   }
//   return ones;
// }