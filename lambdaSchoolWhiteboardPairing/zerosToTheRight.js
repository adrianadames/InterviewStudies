/*
Zeros to the Right

Write a function that takes an array of integers and moves each non-zero integer to the left side of the array, 
then returns the number of non-zero integers. The order of the non-zero integers does not matter in the mutated array.

Examples
Sample input: [0, 3, 1, 0, -2]
Expected output: 3
Expected output array state: [3, 1, -2, 0, 0]
Sample input: [4, 2, 1, 5]
Expected output: 4
Expected output array state: [4, 2, 1, 5]

*/

zerosToTheRight = (arr) => {
    let arrCopy = arr.slice();
    let arrWithZerosToRight= [];
    let count = 0;

    for (let i = 0; i < arrCopy.length;i++) {
        if (arrCopy[i] !== 0) {
            count +=1;
            arrWithZerosToRight.unshift(arrCopy[i]) // add non-zero integer to beginning of array
        } else {
            arrWithZerosToRight.push(arrCopy[i]); //add zero to end of array
        }
    }
    console.log(arrWithZerosToRight)
    return (count)
}


let arr1 = [0, 3, 1, 0, -2]
console.log(zerosToTheRight(arr1))

let arr2 =[4, 2, 1, 5]
console.log(zerosToTheRight(arr2))

let arr3 =[0, 4, 0, 0, 2, 0, 1, 5, 0, 234, 0, -.12, -33.3, 0.5, -1, 0.25, 0, 0]
console.log(zerosToTheRight(arr3))