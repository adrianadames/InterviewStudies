/*
(hard)

Problem Statement: 
-For ‘K’ employees, we are given a list of intervals representing the 
working hours of each employee. Our goal is to find out if there is a 
free interval that is common to all employees. You can assume that 
each list of employee working hours is sorted on the start time.

Example 1:
    Input: Employee Working Hours=[[[1,3], [5,6]], [[2,3], [6,8]]]
    Output: [3,5]
    Explanation: Both the employess are free between [3,5].
Example 2:
    Input: Employee Working Hours=[[[1,3], [9,12]], [[2,4]], [[6,8]]]
    Output: [4,6], [8,9]
    Explanation: All employess are free between [4,6] and [8,9].
Example 3:
    Input: Employee Working Hours=[[[1,3]], [[2,4]], [[3,5], [7,9]]]
    Output: [5,7]
    Explanation: All employess are free between [5,7].
*/

class MinHeap {
    constructor(items = []) {
        this.items = items;
        this.size = items.length;
    }

    add(interval) {
        this.items[this.size] = interval;
        this.size++;

        if (this.size === 1) {
            // if only one item in heap, heap property satisfied
            return
        } else {
            let nodeIndex = this.size - 1; 
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

        if (this.items[parentIndex][1] <= this.items[nodeIndex][1]) {
            // heap property satisfied
            return
        } else {
            // swap parent with child
            [this.items[parentIndex], this.items[nodeIndex]] = [this.items[nodeIndex], this.items[parentIndex]];
        }

        // continue checking that heap property satisfied after the switch is made
        this.bubbleUp(parentIndex)
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

        if (this.items[leftChildIndex][1] <= this.items[rightChildIndex][1] || rightChildIndex > this.size -1) {
            if (this.items[nodeIndex][1] < this.items[leftChildIndex][1]) {
                // heap property satisfied. no need to bubble down node; 
                return 
            } else {
                // swap parent and child nodes so heap property satisfied
                [this.items[nodeIndex], this.items[leftChildIndex]] = [this.items[leftChildIndex], this.items[nodeIndex]];
                
                // continue to bubble down node
                this.bubbleDown(leftChildIndex);
            }
        } else {
            if (this.items[nodeIndex][1] < this.items[rightChildIndex][1]) {
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


function employeeFreeTime(schedule) {
    let minHeap = new MinHeap();
    let freeIntervals = [];

    for (let i = 0; i < schedule.length; i++) {
        minHeap.add([schedule[i][0][0], schedule[i][0][1], i, 0]);
    };

    let prevInterval = minHeap.minimum(); // earliest ending interval
    // let prevInterval = minHeap.extractMin(); // don't understand why this approach not working

    while (minHeap.size > 0) {
        let [start, end, employeeIndex, intervalIndex] = minHeap.extractMin();

        // - if there's a gap between the end of the last interval and the
        // start of the current interval
        if (start > prevInterval[1]) {
            freeIntervals.push([prevInterval[1], start]);
            prevInterval = [start, end];
        } else {
            prevInterval[1] = Math.max(prevInterval[1], end)
        }

        // If there are more intervals for the current employee, add the next interval to the heap
        if (intervalIndex + 1 < schedule[employeeIndex].length) {
            let nextInterval = schedule[employeeIndex][intervalIndex + 1];
            minHeap.add([nextInterval[0], nextInterval[1], employeeIndex, intervalIndex + 1]);
        }
    }

    return freeIntervals;
}


console.log(employeeFreeTime([[[1,3], [5,6]], [[2,3], [6,8]]])); // Output: [[3,5]]
// console.log(employeeFreeTime([[[1,3], [9,12]], [[2,4]], [[6,8]]])); // Output: [[4,6], [8,9]]
// console.log(employeeFreeTime([[[1,3]], [[2,4]], [[3,5], [7,9]]])); // Output: [[5,7]]