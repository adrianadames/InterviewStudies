/*
Problem Statement (easy)

Given an unsorted array of numbers, find Kth smallest number in it.

Please note that it is the Kth smallest number in the sorted order, 
not the Kth distinct element.

Note: For a detailed discussion about different approaches to solve 
this problem, take a look at Kth Smallest Number.

Example 1:
Input: [1, 5, 12, 2, 11, 5], K = 3
Output: 5
Explanation: The 3rd smallest number is '5', as the first two smaller 
numbers are [1, 2].

Example 2:
Input: [1, 5, 12, 2, 11, 5], K = 4
Output: 5
Explanation: The 4th smallest number is '5', as the first three small 
numbers are [1, 2, 5].

Example 3:
Input: [5, 12, 11, -1, 12], K = 3
Output: 11
Explanation: The 3rd smallest number is '11', as the first two small 
numbers are [5, -1].
*/

class MaxHeap {
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
        if (this.items[parentIndex] < this.items[index]) {
            [this.items[parentIndex], this.items[index]] = [this.items[index], this.items[parentIndex]];
            this.bubbleUp(parentIndex);
        } else {
            return;
        };
    };

    extractMax() {
        // - swap the first item and the last item; pop off the last item; that's the max. 
        // - then bubble down the item at the top 
        [this.items[0], this.items[this.items.length -1]] = [this.items[this.items.length -1], this.items[0]];
        let max = this.items.pop(); 
        this.bubbleDown(0);
        return max;
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
        if (this.items[leftChild] > this.items[rightChild] || rightChild > this.items.length -1) {
            if (this.items[index] > this.items[leftChild]) {
                return;
            } else {
                // swap
                [this.items[index], this.items[leftChild]] = [this.items[leftChild], this.items[index]];
                this.bubbleDown(leftChild);
            };
        } else {
            if (this.items[index] > this.items[rightChild]) {
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
function kthSmallestNumber(arr, k) {
    let maxHeap = new MaxHeap();

    for (let i = 0; i < k; i++) {
        maxHeap.addItem(arr[i]);
    };

    // - at this point, maxHeap contains the four smallest of the
    // first four numbers in array; 
    // - with the kth smallest at the top; 

    for (let i = k; i < arr.length; i++) {
        if (arr[i] < maxHeap.items[0]) {
            maxHeap.extractMax();
            maxHeap.addItem(arr[i]);
        };
    };
    
    return maxHeap.items[0];
};

console.log('kthSmallestNumber: ', kthSmallestNumber([1, 5, 12, 2, 11, 5], 3)); // 5
console.log('kthSmallestNumber: ', kthSmallestNumber([1, 5, 12, 2, 11, 5], 4)); // 5
console.log('kthSmallestNumber: ', kthSmallestNumber([5, 12, 11, -1, 12], 3)); // 11