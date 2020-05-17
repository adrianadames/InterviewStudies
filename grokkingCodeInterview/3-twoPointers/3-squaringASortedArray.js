/*
(easy)

Problem Statement: 
Given a sorted array, create a new array containing squares of all the 
number of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]

Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0 1 1 4 9]
*/


function squaringASortedArray(arr) {
    let outputArr = [];

    if (arr[0] >= 0) {
        for (let i = 0; i < arr.length; i++) {
            outputArr.push(Math.pow(arr[i],2));
        }
    } else if (arr[arr.length-1] <= 0) {
        for (let i = arr.length-1; i > -1; i--) {
            outputArr.push(Math.pow(arr[i],2));
        }
    } else {
        let leftPointer = findNegToPosCrossoverPoint(arr);
        console.log('cross-over point: ', leftPointer);
        let rightPointer = leftPointer +1; 
        // console.log('leftPointer0: ', leftPointer);
        // console.log('rightPointer0: ', rightPointer);
        
        while (leftPointer >= 0 && rightPointer <= arr.length -1) {
            // console.log('leftPointer1: ', leftPointer);
            // console.log('rightPointer1: ', rightPointer);
            // [-4, -3, 0, 1, 2, 3]
            // [-1,0,1]
            // [-31, -11, -5, -1, 2]
            if (Math.pow(arr[leftPointer],2)<= Math.pow(arr[rightPointer],2)) {
                // console.log('leftPointer1: ', leftPointer);
                // console.log('rightPointer1: ', rightPointer);
                outputArr.push(Math.pow(arr[leftPointer],2));
                console.log('outputArr1: ', outputArr);
                leftPointer -=1;
                if (leftPointer < 0) {
                    leftPointer = 0; 
                    rightPointer +=1;
                    if (rightPointer>arr.length-1) {
                        outputArr.push(Math.pow(arr[rightPointer-1],2));
                    }
                    // console.log('rightPointer111: ', rightPointer);
                }
            } else {
                // console.log('leftPointer2: ', leftPointer);
                // console.log('rightPointer2: ', rightPointer);
                outputArr.push(Math.pow(arr[rightPointer],2));   
                console.log('outputArr2: ', outputArr);
                
                if (rightPointer === arr.length -1) {
                    outputArr.push(Math.pow(arr[leftPointer],2));
                    leftPointer -=1;
                } else {
                    rightPointer +=1;  
                }
                console.log('rightPointer222: ', rightPointer);
                console.log('leftPointer222: ', leftPointer);
            }
        }
        
    }
    // we're looking for the index where it goes from negative to positive 
    // in other words, we're looking for the index i where arr[i] <0 and arr[i+1] >=0; 
    // once we have that i, we'll now where to look for starting to square numbers
    function findNegToPosCrossoverPoint(arr) {    
        // let's start with defining a left and right pointer that start at the beginning and end of the input array
        let leftPointer = 0; 
        let rightPointer = arr.length -1;
        let middlePointer = Math.floor((leftPointer + rightPointer)/2);
    
        while (!(arr[middlePointer]<0 && arr[middlePointer+1]>=0)) {
            middlePointer = Math.floor((leftPointer + rightPointer)/2);
    
            // if the middleValue is less than zero, make that the new left pointer
            // the middleVal we're looking for will be between the new left and the unchanged right pointer
            if (arr[middlePointer] < 0) {
                leftPointer = middlePointer;
            }
            // if the middleValue is equal or greater than zero, make that the right pointer
            // the middleVal we're looking for will be between the unchangedleft pointer and the new right pointer 
            else {
                rightPointer = middlePointer
            }
        }
        return middlePointer
    }

    return outputArr
}



// console.log(squaringASortedArray([-4,-3,-2,-1]))
// console.log(squaringASortedArray([1,2,3,5]))
// console.log(squaringASortedArray([-2, -1, 0, 2, 3]))
console.log(squaringASortedArray([-31, -11, -5, -1, 2]))


