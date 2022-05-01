/* 
(medium)

Problem Statement

Median is the middle value in an ordered integer list. If the size of 
the list is even, there is no middle value. So the median is the mean 
of the two middle value. For example, for [2,3,4], the median is 3. 
For [2,3], the median is (2 + 3) / 2 = 2.5.

Design a data structure that supports the following two operations:
    -void addNum(int num) - Add a integer number from the data stream 
    to the data structure.
    -double findMedian() - Return the median of all elements so far.

Example:

addNum(1)
addNum(2)
findMedian() -> 1.5
addNum(3) 
findMedian() -> 2
 

Follow up:
    -If all integer numbers from the stream are between 0 and 100, how 
    would you optimize it?
    -If 99% of all integer numbers from the stream are between 0 and 100, 
    how would you optimize it?
*/

// -NOTE: Code for the Max and Min Heap Data structures below is copy paste from 
// prior work (see InterviewStudies/sortingAlgorithms directory); the code 
// for the data structures is pared down to inlcude only the functionality 
// needed to solve this problem 

/*
------------------ Implementation Notes and Code ------------------------
Array representation of heap (i.e. array representation of complete binary tree):

-Given array index i of a node, the index of the parent or children is: 
    -parent = Math.floor((i-1)/2);
    -left = 2*i +1 (odd index implies node is a left child)
    -right = 2*i+2 (even index implies node is a left child)
*/

class MaxHeap {
    constructor(items = []) {
        this.items = items;
        this.size = 0;
    }

    add(value) {
        this.items.push(value);
        this.size +=1;
     
        if (this.size === 1) {
            // if only one item in heap, heap property satisfied
            return 
        } else {
            // then need to bubble the item up the tree to find approapriate position
            let nodeIndex= this.size-1;
            this.bubbleUp(nodeIndex);
        }
    }

    bubbleUp(nodeIndex) {
        let parentIndex = Math.floor((nodeIndex-1)/2);

        if (nodeIndex === 0) {
            // node cannot bubble up any further; it's the largest value in the heap
            return
        } else if (nodeIndex === 1 || nodeIndex === 2) {
            parentIndex = 0;
        } 

        if (this.items[parentIndex] >= this.items[nodeIndex]) {
            // heap property satisfied
            return 
        } else {
            // swap parent and child nodes in order to satisfy heap property
            [this.items[parentIndex], this.items[nodeIndex]] = [this.items[nodeIndex], this.items[parentIndex]];
        }

        // continue checking if heap property satisfied
        this.bubbleUp(parentIndex);
    }

    maximum() {
        if (this.size === 0) {
            return 'heap is empty'
        } else {
            return this.items[0]
        }
    }

    extractMax() {
        if (this.size === 0) {
            return 'heap is empty'
        } 

        let maxValue = this.items[0];

        // -if heap only contains one value, that value is the max
        if (this.size === 1) {
            this.size -=1;
            return maxValue
        } else {
            // -replace current root with last leaf in the tree
            this.items[0] = this.items[this.size-1];
            // -reduce the size of the heap by one
            this.size -=1;

            // -bubble down the value that was just placed at the root so 
            // that heap property satisfied
            this.bubbleDown();
            return maxValue
        }
    }

    bubbleDown(nodeIndex = 0) {
        let leftChildIndex = 2*nodeIndex + 1;
        let rightChildIndex = 2*nodeIndex + 2;

        if (leftChildIndex > this.size -1) {
            // cannot bubble down any longer. node that was passed in doesn't have children
            return
        }

        if (this.items[leftChildIndex] >= this.items[rightChildIndex] || rightChildIndex > this.size -1) {
            if (this.items[nodeIndex] > this.items[leftChildIndex]) {
                // heap property satisfied. no need to bubble down node; 
                return 
            } else {
                // swap parent and child nodes so heap property satisfied
                [this.items[nodeIndex], this.items[leftChildIndex]] = [this.items[leftChildIndex], this.items[nodeIndex]];
                
                // continue to bubble down node
                this.bubbleDown(leftChildIndex);
            }
        } else {
            if (this.items[nodeIndex] > this.items[rightChildIndex]) {
                // heap property satisfied. no need to bubble down node; 
                return 
            } else {
                // swap parent and child nodes so heap property satisfied
                [this.items[nodeIndex], this.items[rightChildIndex]] = [this.items[rightChildIndex], this.items[nodeIndex]];

                // continue bubble down value
                this.bubbleDown(rightChildIndex);
            }
        }
    }
}

class MinHeap {
    constructor(items = []) {
        this.items = items;
        this.size = 0;
    }

    add(value) {
        this.items.push(value);
        this.size +=1;
     
        if (this.size === 1) {
            // if only one item in heap, heap property satisfied
            return 
        } else {
            // then need to bubble the item up the tree to find approapriate position
            let nodeIndex= this.size-1;
            this.bubbleUp(nodeIndex);
        }
    }

    bubbleUp(nodeIndex) {
        let parentIndex = Math.floor((nodeIndex-1)/2);

        if (nodeIndex === 0) {
            // node cannot bubble up any further; it's the smallest value in the heap
            return
        } else if (nodeIndex === 1 || nodeIndex === 2) {
            parentIndex = 0;
        } 

        if (this.items[parentIndex] <= this.items[nodeIndex]) {
            // heap property satisfied
            return 
        } else {
            // swap parent and child nodes in order to satisfy heap property
            [this.items[parentIndex], this.items[nodeIndex]] = [this.items[nodeIndex], this.items[parentIndex]];
        }

        // continue checking if heap property satisfied
        this.bubbleUp(parentIndex);
    }

    minimum() {
        if (this.size === 0) {
            return 'heap is empty'
        } else {
            return this.items[0]
        }
    }

    extractMin() {
        if (this.size === 0) {
            return 'heap is empty'
        } 

        let minValue = this.items[0];

        // -if heap only contains one value, that value is the min
        if (this.size === 1) {
            this.size -=1;
            return minValue
        } else {
            // -replace current root with last leaf in the tree
            this.items[0] = this.items[this.size-1];
            // -reduce the size of the heap by one
            this.size -=1;

            // -bubble down the value that was just placed at the root so 
            // that heap property satisfied
            this.bubbleDown();
            return minValue
        }
    }

    bubbleDown(nodeIndex = 0) {
        let leftChildIndex = 2*nodeIndex + 1;
        let rightChildIndex = 2*nodeIndex + 2;

        if (leftChildIndex > this.size -1) {
            // cannot bubble down any longer. node that was passed in doesn't have children
            return
        }

        if (this.items[leftChildIndex] <= this.items[rightChildIndex] || rightChildIndex > this.size -1) {
            if (this.items[nodeIndex] < this.items[leftChildIndex]) {
                // heap property satisfied. no need to bubble down node; 
                return 
            } else {
                // swap parent and child nodes so heap property satisfied
                [this.items[nodeIndex], this.items[leftChildIndex]] = [this.items[leftChildIndex], this.items[nodeIndex]];
                
                // continue to bubble down node
                this.bubbleDown(leftChildIndex);
            }
        } else {
            if (this.items[nodeIndex] < this.items[rightChildIndex]) {
                // heap property satisfied. no need to bubble down node; 
                return 
            } else {
                // swap parent and child nodes so heap property satisfied
                [this.items[nodeIndex], this.items[rightChildIndex]] = [this.items[rightChildIndex], this.items[nodeIndex]];

                // continue bubble down value
                this.bubbleDown(rightChildIndex);
            }
        }
    }
}


class MedianTracker {
    constructor() {
    }
}