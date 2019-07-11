/*
This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time
and constant space. In other words, find the lowest positive integer that does not
exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
*/

getLowestMissingPositiveInt = (arr) => {
    let lowestMissingPosIntGuess = 1;
    while (arr.includes(lowestMissingPosIntGuess)) {
        lowestMissingPosIntGuess += 1;
    }
    return lowestMissingPosIntGuess
}

// big O: O(n)?  

const arr1 = [3, 4, -1, 1]
const arr2 = [1, 2, 0]
const arr3 = [-5, -7, -1, 0, 1, 2, 3, 4, 5, 5, 5, 6, 6, 7, 9, 10, 11]

console.log(getLowestMissingPositiveInt(arr1))
console.log(getLowestMissingPositiveInt(arr2))
console.log(getLowestMissingPositiveInt(arr3))



// //FIRST ATTEMPT didn't work with positive duplicate entries. 
// getLowestMissingPositiveInt = (arr) => {
//     let outputArr = arr.slice();
//     let compareFunction = (a,b) => {
//         return a-b
//     };
//     outputArr.sort(compareFunction);
//     outputArr = outputArr.filter(element => {
//         return element > 0;
//     })

//     // now from here i start at the beginning of the sorted array and find the smallest 
//     // integer in there. if not 1, answer is 1, if 1, move on to the next smallest. if
//     // not 2, answer is 2. if 2, move on to next smallest, 
//     let lowestMissingPosIntGuess = 1;
//     for (let i = 0; i < outputArr.length; i++) {
//         if (outputArr[i] !== lowestMissingPosIntGuess) {
//             return lowestMissingPosIntGuess
//         } else {
//             lowestMissingPosIntGuess += 1;
//         }
//     }
//     return lowestMissingPosIntGuess
// }