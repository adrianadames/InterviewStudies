/*
Problem Statement (easy)

Given an unsorted array of numbers, find the ‘K’ largest numbers in it.

Note: For a detailed discussion about different approaches to solve 
this problem, take a look at Kth Smallest Number.

Example 1:
Input: [3, 1, 5, 12, 2, 11], K = 3
Output: [5, 12, 11]

Example 2:
Input: [5, 12, 11, -1, 12], K = 3
Output: [12, 11, 12]
*/

// - i have to find the top K largest numbers in an array; 
// - to do that, i will use a minHeap with a size of 4 elements; 
// - if the newly added element is greater than the minimum, remove the minimum 
// and add the new value

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

// time: O(n) = k * log(k) + (n-k)*log(k) => n * log(k)
function topKNumbers(arr, k) {
    let minHeap = new MinHeap();

    // - the first k numbers in the array will be the largest k numbers 
    // after looping through the first k numbers;
    // - O(k*log(k));
    for (let i = 0; i < k; i++) {
        minHeap.addItem(arr[i]);  
    };
    
    // - O((n-k)*log(k))
    for (let i = k; i < arr.length; i++) {
        if (minHeap.items[0] < arr[i]) {
            minHeap.extractMin();
            minHeap.addItem(arr[i]);
        };
    };
    
    return minHeap.items;
};

console.log('topKNumbers: ', topKNumbers([3, 1, 5, 12, 2, 11], 3)); // [12, 11, 5]
console.log('topKNumbers: ', topKNumbers([5, 12, 11, -1, 12], 3)); // [12, 12, 11]
