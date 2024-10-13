/*
Problem Statement (medium)

Given an array, find the sum of all numbers between the K1’th 
and K2’th smallest elements of that array.

Example 1:
Input: [1, 3, 12, 5, 15, 11], and K1=3, K2=6
Output: 23
Explanation: The 3rd smallest number is 5 and 6th smallest number 15. 
The sum of numbers coming between 5 and 15 is 23 (11+12).

Example 2:
Input: [3, 5, 8, 7], and K1=1, K2=4
Output: 12
Explanation: The sum of the numbers between the 1st smallest number 
(3) and the 4th smallest number (8) is 12 (5+7).
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

// time: O(n) = n * log(k2);
function sumOfElements(arr, k1, k2) {
    let maxHeap = new MaxHeap();

    for (let i = 0; i < k2; i++) {
        maxHeap.addItem(arr[i]);
    };

    for (let i = k2; i < arr.length; i++) {
        if (arr[i] < maxHeap.items[0]) {
            maxHeap.extractMax();
            maxHeap.addItem(arr[i]);
        };
    };

    // at this point maxHeap will have the k2th smallest numbers
    let numberOfElementsToSum = k2-k1-1;
    maxHeap.extractMax();
    let sum = 0;

    while (numberOfElementsToSum > 0) {
        sum += maxHeap.extractMax();
        numberOfElementsToSum--;
    };

    return sum;
};

console.log('sumOfElements: ', sumOfElements([1, 3, 12, 5, 15, 11], 3, 6));
console.log('sumOfElements: ', sumOfElements([3, 5, 8, 7], 1, 4));