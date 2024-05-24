/*
(easy)

Problem Statement: 
-Given a sorted array, create a new array containing squares of 
all the number of the input array in the sorted order.

Example 1:
    Input: [-2, -1, 0, 2, 3]
    Output: [0, 1, 4, 4, 9]
Example 2:
    Input: [-3, -1, 0, 1, 2]
    Output: [0 1 1 4 9]
*/

let squaringASortedArray = arr => {
    let leftPointer = 0;
    let rightPointer = arr.length-1;
    let squaredArr = [];

    while (leftPointer <= rightPointer) {
        if (arr[leftPointer]*arr[leftPointer] >= arr[rightPointer]*arr[rightPointer]) {
            squaredArr.push(arr[leftPointer]*arr[leftPointer]);
            leftPointer+=1;
        } else {
            squaredArr.push(arr[rightPointer]*arr[rightPointer]);
            rightPointer-=1;
        }
    }
    return squaredArr
}

console.log(squaringASortedArray([-4,-3,-2,-1]));
console.log(squaringASortedArray([1,2,3,5]));
console.log(squaringASortedArray([-2, -1, 0, 2, 3]));
console.log(squaringASortedArray([-31, -11, -5, -1, 2]));