/*
Problem Statement (medium)

Design a class to efficiently find the Kth largest element 
in a stream of numbers.

The class should have the following two things:

The constructor of the class should accept an integer array 
containing initial numbers from the stream and an integer ‘K’.
The class should expose a function add(int num) which will 
store the given number and return the Kth largest number.

Example 1:
Input: [3, 1, 5, 12, 2, 11], K = 4
1. Calling add(6) should return '5'.
2. Calling add(13) should return '6'.
2. Calling add(4) should still return '6'.
*/
// - first let me create a min heap data structure; 
class MinHeap {
    constructor(items = []) {
        this.items = items;
    };

    addItem(item) {
        // - first push item to next available slot; then bubble up from there; 
        this.items.push(item); 
        this.bubbleUp(this.items.length -1);
    };

    bubbleUp(index) {
        if (index === 0) {
            return;
        }; 

        let parentIndex = Math.floor((index-1)/2);

        // - if arr[parentIndex] < arr[childIndex], swap
        if (this.items[parentIndex] > this.items[index]) {
            [this.items[parentIndex], this.items[index]] = [this.items[index], this.items[parentIndex]];
            this.bubbleUp(parentIndex);
        } else {
            return;
        };
    };

    extractMin() {
        // - swap the first item and the last item; pop off the last item; that's the max. 
        // - then bubble down the item at the top 
        [this.items[0], this.items[this.items.length -1]] = [this.items[this.items.length -1], this.items[0]];
        let min = this.items.pop(); 
        this.bubbleDown(0);
        return min;
    };

    bubbleDown(index) {
        let leftChild = 2 * index + 1;
        let rightChild = 2 * index + 2;

        // - if leftChild out of bounds, the node at this index doesn't have children; end bubbleDown; 
        if (leftChild > this.items.length -1) {
            return;
        };

        // - when deciding which child to swap with when bubbling down, choose the smaller of 
        // the two children; if there's no right child, just look to leftChild 
        if (this.items[leftChild] < this.items[rightChild] || rightChild > this.items.length -1) {
            if (this.items[index] < this.items[leftChild]) {
                return;
            } else {
                // swap
                [this.items[index], this.items[leftChild]] = [this.items[leftChild], this.items[index]];
                this.bubbleDown(leftChild);
            };
        } else {
            if (this.items[index] < this.items[rightChild]) {
                return;
            } else {
                // swap
                [this.items[index], this.items[rightChild]] = [this.items[rightChild], this.items[index]];
                this.bubbleDown(rightChild);
            };
        };
    };
};

// - we can use a minHeap to track the K largest numbers in the stream; 
// - with a minHeap, the smallest of the top K largest numbers will be at the root; 
// - if we encounter a larger number, remove the root and add the larger number to the minHeap; 

// time: O(n) = n*log(k)
class FindKthLargestNumberInStream {
    constructor(arr, k) {
        this.arr = arr;
        this.k = k;
        this.minHeap = this.buildInitialHeap(arr);
    }

    // O(n) = n*log(k)
    buildInitialHeap(arr) {
        let minHeap = new MinHeap();
        
        // O(n) = k * log(k)
        for (let i = 0; i < this.k; i++) {
            minHeap.addItem(arr[i]);
        };
        // O(n) = (n-k) * log(k)
        for (let i = this.k; i < arr.length; i++) {
            if (arr[i] > minHeap.items[0]) {
                minHeap.extractMin();
                minHeap.addItem(arr[i]);
            };
        };
        return minHeap;
    };

    // O(n) = 2 * log(k)
    add(num) {
        if (num > this.minHeap.items[0]) {
            this.minHeap.extractMin();
            this.minHeap.addItem(num);
        };
        return this.minHeap.items[0];
    };
};

let kthLargestInStream = new FindKthLargestNumberInStream([3, 1, 5, 12, 2, 11], 4);

// 1. Calling add(6) should return '5'.
// 2. Calling add(13) should return '6'.
// 2. Calling add(4) should still return '6'.

// console.log('kthLargestInStream: ', kthLargestInStream)

console.log('kthLargestInStream.add(6): ', kthLargestInStream.add(6));
console.log('kthLargestInStream.add(13): ', kthLargestInStream.add(13));
console.log('kthLargestInStream.add(4): ', kthLargestInStream.add(4));