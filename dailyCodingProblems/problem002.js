/* 
This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i 
of the new array is the product of all the numbers in the original array except 
the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be 
[120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be
[2, 3, 6].

Follow-up: what if you can't use division?

*/


// // USING DIVISION 

// productOfAllExceptIndex = (arr) => {
//     let productOfAll = 1; 
//     let outputArr = [];

//     for (let i = 0; i< arr.length;i++) {
//         productOfAll = productOfAll*arr[i]
//     }

//     for (let i = 0; i< arr.length;i++) {
//         outputArr.push(productOfAll/arr[i])
//     }
//     return outputArr
// }


// NOT USING DIVISION 

productOfAllExceptIndex = (arr) => {
    let productOfAll = 1; 
    let outputArr = arr.slice();
    outputArr.fill(1);

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                continue
            } 
            if (i !== j) {
                outputArr[i] = outputArr[i]*arr[j]
            }
        }
    }
    return outputArr
}



const arr1 = [1,2,3,4,5]
const arr2 = [3,2,1]
console.log(productOfAllExceptIndex(arr1))
console.log(productOfAllExceptIndex(arr2))

