/*
(hard)

Problem Statement

Median is the middle value in an ordered integer list. If the size of 
the list is even, there is no middle value. So the median is the mean 
of the two middle value. For example, for [2,3,4], the median is 3. 
For [2,3], the median is (2 + 3) / 2 = 2.5.

Given an array nums, there is a sliding window of size k which is 
moving from the very left of the array to the very right. You can 
only see the k numbers in the window. Each time the sliding window 
moves right by one position. Your job is to output the median array 
for each window in the original array.

For example,
Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.

Window position                Median
---------------               -----
[1  3  -1] -3  5  3  6  7       1
 1 [3  -1  -3] 5  3  6  7       -1
 1  3 [-1  -3  5] 3  6  7       -1
 1  3  -1 [-3  5  3] 6  7       3
 1  3  -1  -3 [5  3  6] 7       5
 1  3  -1  -3  5 [3  6  7]      6

Therefore, return the median sliding window as [1,-1,-1,3,5,6].

Note:
-You may assume k is always valid, ie: k is always smaller than 
input array's size for non-empty array.
-Answers within 10^-5 of the actual value will be accepted as correct.
*/

import MedianTracker from './1-medianOfNumberStream.js';

// let slidingWindowMedian = (nums, k) => {
//     let windowRunwayLength = nums.length - k; 
//     let medians = [];
//     let medianTracker = new MedianTracker();
    
//     // median of start position
//     for (let i = 0; i< k; i++) {
//         medianTracker.addNum(nums[i]);
//     }
//     // console.log('medianTracker: ', medianTracker);
//     medians[0] = medianTracker.findMedian();

//     for (let i = 0; i< windowRunwayLength; i++) {
//         let firstNum = nums[i];
//         let lastNum = nums[i+k-1];
//         console.log('firstNum: ', firstNum);
//         console.log('lastNum: ', lastNum)

//         console.log('num to remove: ', firstNum);
//         console.log('num to add: ', nums[i+k])
//     }
// }

// naive way
let slidingWindowMedian = (nums, k) => {
    let windowRunwayLength = nums.length - k; 
    let medians = [];
    let medianTracker = new MedianTracker();
    
    // median of start position
    for (let i = 0; i< k; i++) {
        medianTracker.addNum(nums[i]);
    }
    // console.log('medianTracker: ', medianTracker);
    medians[0] = medianTracker.findMedian();

    for (let i = 1; i<= windowRunwayLength; i++) {
        let numRemoved = nums[i-1];
        let numAdded = nums[i+k-1];
        console.log('numRemoved: ', numRemoved);
        console.log('numAdded: ', numAdded);

        // -we're removing a node and adding another; 
        // -we need to remove numRemoved from whatever heap it's in;

        if (numRemoved <= medianTracker.maxHeap.maximum()) {
            // then here i thought i would find whatever index numRemoved is at in the maxHeap and sift it down
            // for (let i = 0; i < maxHeap.size; i++) {
            //  if (numRemoved = maxHeap.items[i]) {
            //      maxHeap.items[i] === -100
            //      // then sift it down
            //      // then swap it, then sift down whatever you swapped it with
            //      // then reduce size of it and the medianTracker by 1
            // }

        }

        // -if the number we're removing is less than or equal to maxHeap.maximum(), it's in there. 
        // -we can get rid of it by first making it negative infinity and sifting it down.
        // -at this point, it will be leaf
        // -then, we swap it with the last value in the maxHeap, making it so that the last value in
        // the maxHeap arr (the last leaf) is negative infinity. after swapping, we make sure
        // the the value swapped into the new position satisfies the heap rule by using bubble up function on it
        // -then we decrease the size of the maxHeap by 1 and the medianTracker by 1
        // -at this point, the maxHeap and meanHeap will have same number of values
        // -then we add the numToAdd to medianTracker (whether it be the maxHeap or the minHeap) 
        // and it stays odd

        // -if the number we're removing is less than or equal to maxHeap.maximum() AND
        // medianTracker.size is even, then we do as mentioned above. we change it to negative 
        // infinity, bubble it down, swap it with the last leaf, and reduce the size of maxHeap by one
        // -then we remove the min from minHeap and add it to maxHeap
        // -then we add the numAdd so medianTracker.size stays even 

        
        // -now, if the number we're removing is greater than maxHeap.maximum(), 
        // then we know it's in the minHeap. 
        // -we get rid of it by first making it positive infinity and sifting it down
        // -then we swap it with the last leaf and reduce the size of minHeap by one and the 
        // size of the medianTracker by 1

        // -if medianTracker.size was initially odd before the removal, then maxHeap had one 
        // more node value. that means the right now, maxHeap has two more node values than minHeap
        // -we pop off maxHeap.maximum() and put it in minHeap to get back balance (same number of nodes on each side)
        // -then we add the numToAdd to medianTracker to get an odd number of values back 

        // -if medianTracker.size was initially even before the removal, 
        // after numToRemove is removed from minHeap, minHeap will have one less value than maxHeap, 
        // which means that we're still balanced (albeit with an odd number of values)
        // -we add numToAdd via MedianTracker to bring our total number of values back to the 
        // even value we originally started with

    }
}

let nums1 = [1, 3, -1, -3, 5, 3, 6, 7];
slidingWindowMedian(nums1, 3);