/*
You are given an extra long list. Each element of 
the list is an array. For example: [[1, 5], [10, 16], 
[2, 7],….. [1000, 1027]].

The first number of arrays represents the driver’s 
starting time and the second number is the arrival 
time for passengers. Given the starting and ending 
time for online drivers from this input array, find 
the time interval where there is maximum drivers online. 
For example, the answer could be [16, 801].
*/

class MaxHeap {
    constructor(items = []) {
        this.items = items;
        this.size = 0;
    }

    add(value) {
        // this.items.push(value); // NOTE: FOUND ISSUE HERE THAT RESOLVED WITH LINE BELOW
        this.items[this.size] = value; 
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

        // NOTE: RESOLVED ISSUE FOUND WITH COMMENTED LINE BELOW. NEED TO FIX IN
        // heapsort file in InterviewStudies/sortingAlgorithms directory

        // this.items.push(value);  
        this.items[this.size] = value; 
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

let maxDriversOnline1 = (intervals) => {
    intervals.sort((a,b) => a[0]-b[0]);
    let maxNumDrivers = 0, maxIntervalStart = 0, maxIntervalEnd = 0;
    let minHeap = new MinHeap();

    for (let i = 0; i < intervals.length; i++) {
        let intervalStart = intervals[i][0];
        let intervalEnd = intervals[i][1];
        if (minHeap.size > 0 && intervalStart >= minHeap.minimum()) { 
            // -if earliest intervalEnd time (i.e. minHeap.minimum()) in heap
            // less than/equal to current interval start time, then it doesn't 
            // overlap with the current interval; before popping it off, we check
            // if maxNumDrivers new max; if so, record associated start/end times
            if (minHeap.size > maxNumDrivers) {
                [maxNumDrivers, maxIntervalStart, maxIntervalEnd] = [minHeap.size, intervals[i-1][0], minHeap.minimum()];
            }
            minHeap.extractMin(); 
        }
        minHeap.add(intervalEnd);
    }
    if (minHeap.size > maxNumDrivers) {
        [maxNumDrivers, maxIntervalStart, maxIntervalEnd] = [minHeap.size, intervals[intervals.length-1][0], minHeap.minimum()];
    }
    return [maxNumDrivers, maxIntervalStart, maxIntervalEnd]
}

let maxDriversOnline2 = (intervals) => {
    intervals.sort((a,b) => a[0]-b[0]);
    let maxNumDrivers = 0, maxIntervalStart = 0, maxIntervalEnd = 0;
    let minHeap = new MinHeap();

    for (let i = 0; i < intervals.length; i++) {
        let intervalStart = intervals[i][0];
        let intervalEnd = intervals[i][1];
        while (minHeap.size>0 && intervalStart >= minHeap.minimum()) {
            // -if earliest intervalEnd time (i.e. minHeap.minimum()) in heap
            // less than/equal current interval start time, then pop it out from heap
            // because no overlap with current interval
            minHeap.extractMin();
        }
        minHeap.add(intervalEnd);
        if (minHeap.size > maxNumDrivers) {
            // -maxIntervalStart = intervalStart because interval start is the 
            // greatest of all the starts we've examined so far (list is sorted by start)
            [maxNumDrivers, maxIntervalStart, maxIntervalEnd] = [minHeap.size, intervalStart, minHeap.minimum()];
        }
    }
    return [maxNumDrivers, maxIntervalStart, maxIntervalEnd]
}

let list1 = [[1,10],[2,7],[3,19],[8,12],[10,20],[11,30],[19,35],[11,30],[14,40],[12,40]];
let list2 = [[1,14],[13,15]];
let list3 = [[1,10],[2,7],[3,19],[8,12],[10,20],[11,30]];
let list4 = [[23,40],[1,30],[7,25],[5,15],[10,18],[18,28],[6,17],[23,28]];

console.log('maxDriversOnline1: ', maxDriversOnline1(list1)); // 14,19
console.log('maxDriversOnline1: ', maxDriversOnline1(list2)); // 13,14
console.log('maxDriversOnline1: ', maxDriversOnline1(list3)); // 11, 12
console.log('maxDriversOnline1: ', maxDriversOnline2(list4)); // 10,15

console.log('maxDriversOnline2: ', maxDriversOnline2(list1)); // 14,19
console.log('maxDriversOnline2: ', maxDriversOnline2(list2)); // 13,14
console.log('maxDriversOnline2: ', maxDriversOnline2(list3)); // 11, 12
console.log('maxDriversOnline2: ', maxDriversOnline2(list4)); // 10,15
