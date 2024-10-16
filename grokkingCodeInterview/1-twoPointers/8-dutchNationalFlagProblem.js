/*
(medium)

Problem Statement
-Given an array containing 0s, 1s and 2s, sort the array 
in-place. You should treat numbers of the array as objects, 
hence, we can’t count 0s, 1s, and 2s to recreate the array.

The flag of the Netherlands consists of three colors: red, 
white and blue; and since our input array also consists of 
three different numbers that is why it is called Dutch 
National Flag problem.
*/

// - use a left pointer, middle pointer,right pointer; left at 0, 
// right at arr.length -1, middle at 0;
// - 0s go before left, 2s after right, 1s in the middle
// - if arr[middle] = 0, swap with arr[left] and increment both left and middle; 
// - if arr[middle] = 1, increment middle
// - if arr[middle] = 2, swap with arr[right] and decrement right


// time: O(n);
// space: O(1);
function dutchNationalFlag(arr) {
    let leftPointer = 0; 
    let rightPointer = arr.length -1; 
    let middlePointer = 0;

    while (middlePointer <= rightPointer) { // consider [1, 2, 0] to see why <= needed here
        if (arr[middlePointer] === 0) {
            [arr[middlePointer], arr[leftPointer]] = [arr[leftPointer], arr[middlePointer]];
            leftPointer++;
            middlePointer++;
        } else if (arr[middlePointer] === 1) {
            middlePointer++;
        } else if (arr[middlePointer] === 2) {
            [arr[middlePointer], arr[rightPointer]] = [arr[rightPointer], arr[middlePointer]];
            rightPointer--;
        };
    };
    return arr;
};

console.log('dutchNationalFlag: ', dutchNationalFlag([2,1,2,0,0,2,2,2,2,1,1,1,2,0,1]));