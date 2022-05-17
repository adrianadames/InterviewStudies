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

let slidingWindowMedian = (nums, k) => {
    let windowRunwayLength = nums.length - k; 
    let medians = [];
    let medianTracker = new MedianTracker();
    
    // start position window median
    for (let i = 0; i< k; i++) {
        medianTracker.addNum(nums[i]);
    }
    medians[0] = medianTracker.findMedian();

    // median for each window position
    for (let i = 1; i<= windowRunwayLength; i++) {
        // console.log('medians: ', medians);
        let numToRemove = nums[i-1];
        let numToAdd = nums[i+k-1];
        // console.log('numToRemove: ', numToRemove);
        // console.log('numToAdd: ', numToAdd);

        // -if numToRemove less than or equal to maxHeap.maximum(), it's in the maxHeap
        // (i.e., it's value part of the smaller half of all the values in the window)
        if (numToRemove <= medianTracker.maxHeap.maximum()) {
            for (let i = 0; i < medianTracker.maxHeap.items.length; i++) {
                // -identify index of numToRemove in the maxHeap
                if (medianTracker.maxHeap.items[i] === numToRemove) {
                    // -swap value with last value in heap, 
                    let maxHeapSize = medianTracker.maxHeap.items.length;
                    let lastValueInHeap = medianTracker.maxHeap.items[maxHeapSize-1];
                    medianTracker.maxHeap.items[i] = lastValueInHeap;    
                    // change size of heap and median Tracker
                    medianTracker.maxHeap.size -= 1; 
                    medianTracker.size -=1;
                    // bubble down the value that was swapped into numToRemove's position
                    medianTracker.maxHeap.bubbleDown(i);

                    // -if window size even, maxHeap had same size as minHeap
                    // -removing from maxHeap means we need to pop off minHeap min and 
                    // add it to the maxHeap, making minHeap temporarily smaller; 
                    // -then we add the new number, making the heaps the same size again
                    if (k % 2 === 0) {
                        medianTracker.maxHeap.add(medianTracker.minHeap.extractMinimum()); 
                        medianTracker.addNum(numToAdd);
                        medians.push(medianTracker.findMedian());
                        break;
                    } else {
                        // -window size was odd, meaning maxHeap had an extra value
                        medianTracker.addNum(numToAdd);
                        medians.push(medianTracker.findMedian());
                        break;
                    }
                }
            }
        } 
        // -if numToRemove greater than or equal to minHeap.minimum(), it's in the minHeap
        // (i.e., it's value part of the larger half of all the values in the window)
        else if (numToRemove >= medianTracker.minHeap.minimum()) {
            for (let i = 0; i < medianTracker.minHeap.items.length; i++) {
                // -identify index of numToRemove in the minHeap
                if (medianTracker.minHeap.items[i] === numToRemove) {
                    // -swap value with last value in heap, 
                    let minHeapSize = medianTracker.minHeap.items.length;
                    let lastValueInHeap = medianTracker.minHeap.items[minHeapSize-1];
                    medianTracker.minHeap.items[i] = lastValueInHeap;    
                    // change size of heap and median Tracker
                    medianTracker.minHeap.size -= 1; 
                    medianTracker.size -=1;
                    // bubble down the value that was swapped into numToRemove's position
                    medianTracker.minHeap.bubbleDown(i);

                    // -if window size odd, minHeap had one fewer than maxHeap, but
                    // now it has two less; need to pop off from maxHeap and add to 
                    // minHeap to get the sizes of the minHeap and maxHeap equal and their
                    // sizes equal, and then we add the num making the medianTracker size odd again as desired
                    if (k % 2 !== 0) {
                        medianTracker.minHeap.add(medianTracker.maxHeap.extractMax()); 
                        medianTracker.addNum(numToAdd);
                        medians.push(medianTracker.findMedian());
                        break;
                    } else {
                        // -window size was even, meaning minHeap had same size as maxHeap 
                        medianTracker.addNum(numToAdd);
                        medians.push(medianTracker.findMedian());
                        break;
                    }
                }
            }
        }
    }
    return medians
}

let nums1 = [1, 3, -1, -3, 5, 3, 6, 7];
console.log('slidingWindowMedian', slidingWindowMedian(nums1, 3));