/*
(hard)

Problem Statement: 
-Given a list of intervals representing the start and end time of ‘N’ 
meetings, find the minimum number of rooms required to hold all the 
meetings.

Example 1:
    Meetings: [[1,4], [2,5], [7,9]]
    Output: 2
    Explanation: Since [1,4] and [2,5] overlap, we need two rooms to 
    hold these two meetings. [7,9] can occur in any of the two rooms 
    later.
Example 2:
    Meetings: [[6,7], [2,4], [8,12]]
    Output: 1
    Explanation: None of the meetings overlap, therefore we only need 
    one room to hold all meetings.
Example 3:
    Meetings: [[1,4], [2,3], [3,6]]
    Output:2
    Explanation: Since [1,4] overlaps with the other two meetings 
    [2,3] and [3,6], we need two rooms to hold all the meetings.
Example 4:
    Meetings: [[4,5], [2,3], [2,4], [3,5]]
    Output: 2
    Explanation: We will need one room for [2,3] and [3,5], and 
    another room for [2,4] and [4,5].
*/

// - first sort meetings by start time; 
// - then create a minheap where as we loop through the meetings, we will
// insert into the heap, the meetings sorted by end time; this means that
// the earliest ending meeting will be at the top of the heap; 
// - as we loop through all the meeting times, the maximum number of 
// intervals in the minheap is the number of rooms needed to hold all the meetings

// left: 2*i+1;
// right: 2*i+2;
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

// - time: O(n*log(n))
// - space: O(n)
function minimumMeetingRooms(arr) {
    arr.sort((a,b) => a[0] - b[0]);

    let minHeap = new MinHeap();
    let maxCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let meetingInterval = arr[i];

        // -first remove from the minHeap all meetings that have already ended; 
        // - while the meetings have ended before current meeting started
        while (minHeap.minimum()[1] <= meetingInterval[0]) {
            minHeap.extractMin();
        }
        // - then add the current meeting to the maxHeap
        minHeap.add(meetingInterval);
        maxCount = Math.max(maxCount, minHeap.size);
    }
    return maxCount
}


console.log('minimumMeetingRooms: ', minimumMeetingRooms([[1,4], [2,5], [7,9]]));
console.log('minimumMeetingRooms: ', minimumMeetingRooms([[6,7], [2,4], [8,12]]));
console.log('minimumMeetingRooms: ', minimumMeetingRooms([[1,4], [2,3], [3,6]]));
console.log('minimumMeetingRooms: ', minimumMeetingRooms([[4,5], [2,3], [2,4], [3,5]]));
console.log('minimumMeetingRooms: ', minimumMeetingRooms([[1,4], [2,5], [3,6]]));

// // - this solution works, but the time complexity is O(n^2)
// function minimumMeetingRooms(arr) {
//     // - sort by start time
//     arr.sort((a,b) => a[0] - b[0]);
//     let maxCount = 1;

//     for (let i = 0; i < arr.length-1; i++) {
//         let currentInterval = arr[i];
//         let nextIntervalIndex = i+1;
//         let nextInterval = arr[nextIntervalIndex];

//         let count = 1;

//         let overlapStart = Math.max(currentInterval[0], nextInterval[0]);
//         let overlapEnd = Math.min(currentInterval[1], nextInterval[1]);

//         while (nextIntervalIndex < arr.length) {
//             if (nextInterval[0] >= overlapEnd) {
//                 break
//             } else {
//                 while (nextIntervalIndex < arr.length  && nextInterval[0] < overlapEnd) {
//                     count++;
//                     nextIntervalIndex++;
//                     if (nextIntervalIndex < arr.length) {
//                         nextInterval = arr[nextIntervalIndex];
//                         overlapEnd = Math.min(overlapEnd, nextInterval[1]);
//                     } else {
//                         break
//                     }
//                 }
//                 maxCount = Math.max(maxCount, count)
//             } 
//         }
//     }
//     return maxCount
// }