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

// - put a pointer at 0 and one at arr.length - 1; 
// - i understand how to do this, but my strategy requires use of the sort alg, which 
// i'm pretty sure is n*log(n); 
// - can i come up with an O(n) solution? => initialize an array. place values based on 
// position


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
        }
    }
    return squaredArr
}

console.log(squaringASortedArray([-4,-3,-2,-1]));
console.log(squaringASortedArray([1,2,3,5]));
console.log(squaringASortedArray([-2, -1, 0, 2, 3]));
console.log(squaringASortedArray([-3, -1, 0, 1, 2]));
console.log(squaringASortedArray([-31, -11, -5, -1, 2]));




