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

// - put pointers at the two ends. the max of the squared arr
// will be one of those two; after finding the max, add it to the squaredArr
// output array and decrement the pointer to the next largest value from the
// left/right hand side

// time complexity: O(n);
// space complexity: O(n);
let squaringASortedArray = arr => {
    let leftPointer = 0;
    let rightPointer = arr.length - 1;
    let squaredArr = Array(arr.length); 
    let arrayPlacementPointer = arr.length - 1; 

    while (leftPointer <= rightPointer) {
        if (arr[leftPointer] * arr[leftPointer] >= arr[rightPointer] * arr[rightPointer]) {
            squaredArr[arrayPlacementPointer] = arr[leftPointer] * arr[leftPointer];
            arrayPlacementPointer--;
            leftPointer++;
        } else {
            squaredArr[arrayPlacementPointer] = arr[rightPointer] * arr[rightPointer];
            arrayPlacementPointer--;
            rightPointer--;
        };
    };
    return squaredArr;
};

console.log(squaringASortedArray([-4,-3,-2,-1]));
console.log(squaringASortedArray([1,2,3,5]));
console.log(squaringASortedArray([-2, -1, 0, 2, 3]));
console.log(squaringASortedArray([-3, -1, 0, 1, 2]));
console.log(squaringASortedArray([-31, -11, -5, -1, 2]));