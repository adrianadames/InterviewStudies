/*
(hard)

Problem Statement: 
-We are given a list of jobs. Each job has a start time, an end time, 
and a CPU load when it is running. Our goal is to find the maximum 
CPU load at any time if all the jobs are running on the same machine.

Example 1:
    Jobs: [[1,4,3], [2,5,4], [7,9,6]]
    Output: 7
    Explanation: Since [1,4,3] and [2,5,4] overlap, their maximum CPU 
    load (3+4=7) will be when both the jobs are running at the same 
    time i.e., during the time interval (2,4).
Example 2:
    Jobs: [[6,7,10], [2,4,11], [8,12,15]]
    Output: 15
    Explanation: None of the jobs overlap, therefore we will take the 
    maximum load of any job which is 15.
Example 3:
    Jobs: [[1,4,2], [2,4,1], [3,6,5]]
    Output: 8
    Explanation: Maximum CPU load will be 8 as all jobs overlap during 
    the time interval [3,4]. 
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
            [this.items[parentIndex], this.items[nodeIndex]] = [[this.items[nodeIndex], this.items[parentIndex]]];
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

function maxCPULoad(arr) {
    arr.sort((a,b) => a[0] - b[0]);

    let minHeap = new MinHeap();
    let maxLoad = 0;
    let cpuLoad = 0;

    for (let i = 0; i < arr.length; i++) {
        let jobInterval = arr[i];

        // - first remove from the minHeap all jobs that have already ended
        // by the time this current job started 
        while (minHeap.minimum()[1] <= jobInterval[0]) {
            let removedJob = minHeap.extractMin();
            cpuLoad -= removedJob[2];
        }
        // - then add the current meeting to the maxHeap
        minHeap.add(jobInterval);
        cpuLoad += jobInterval[2];
        maxLoad = Math.max(maxLoad, cpuLoad);
    }
    return maxLoad
}

console.log('maxCPULoad: ', maxCPULoad([[1,4,3], [2,5,4], [7,9,6]]))
console.log('maxCPULoad: ', maxCPULoad([[6,7,10], [2,4,11], [8,12,15]]))
console.log('maxCPULoad: ', maxCPULoad([[1,4,2], [2,4,1], [3,6,5]]))