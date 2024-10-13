/*
Problem Statement (easy)

Given an array of points in the 2D plane, find ‘K’ closest points 
to the origin.

Example 1:
Input: points = [[1,2],[1,3]], K = 1
Output: [[1,2]]
Explanation: The Euclidean distance between (1, 2) and the origin is sqrt(5).
The Euclidean distance between (1, 3) and the origin is sqrt(10).
Since sqrt(5) < sqrt(10), therefore (1, 2) is closer to the origin.

Example 2:
Input: point = [[1, 3], [3, 4], [2, -1]], K = 2
Output: [[1, 3], [2, -1]]
*/

function distanceToOrigin(arr) {
    return Math.sqrt(arr[0]^2 + arr[1]^2);
};

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
        if (distanceToOrigin(this.items[parentIndex]) < distanceToOrigin(this.items[index])) {
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
        if (distanceToOrigin(this.items[leftChild]) > distanceToOrigin(this.items[rightChild]) || rightChild > this.items.length -1) {
            if (distanceToOrigin(this.items[index]) > distanceToOrigin(this.items[leftChild])) {
                return;
            } else {
                // swap
                [this.items[index], this.items[leftChild]] = [this.items[leftChild], this.items[index]];
                this.bubbleDown(leftChild);
            };
        } else {
            if (distanceToOrigin(this.items[index]) > distanceToOrigin(this.items[rightChild])) {
                return;
            } else {
                // swap
                [this.items[index], this.items[rightChild]] = [this.items[rightChild], this.items[index]];
                this.bubbleDown(rightChild);
            };
        };
    };
};

// time: O(n) = n * log(k)
function kClosestPointsToTheOrigin(arr, k) {
    let maxHeap = new MaxHeap();

    for (let i = 0; i < k; i++) {
        maxHeap.addItem(arr[i]); // O(n) = k* log(k)
    };

    // O(n) = (n-k) * log(k)
    for (let i = k; i < arr.length; i++) {
        if (distanceToOrigin(arr[i]) < distanceToOrigin(maxHeap.items[0])) {
            maxHeap.extractMax();
            maxHeap.addItem(arr[i]);
        };
    };

    return maxHeap.items;
};

console.log('kClosestPointsToTheOrigin: ', kClosestPointsToTheOrigin([[1,2],[1,3]], 1)); // [ [ 1, 3 ] ]
console.log('kClosestPointsToTheOrigin: ', kClosestPointsToTheOrigin([[1, 3], [3, 4], [2, -1]], 2)); // [ [ 2, -1 ], [ 1, 3 ] ]
