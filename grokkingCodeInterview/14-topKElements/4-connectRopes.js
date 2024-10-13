/*
Problem Statement (easy)

Given ‘N’ ropes with different lengths, we need to connect these 
ropes into one big rope with minimum cost. The cost of connecting 
two ropes is equal to the sum of their lengths.

Example 1:
Input: [1, 3, 11, 5]
Output: 33
Explanation: First connect 1+3(=4), then 4+5(=9), and then 9+11(=20). 
So the total cost is 33 (4+9+20)

Example 2:
Input: [3, 4, 5, 6]
Output: 36
Explanation: First connect 3+4(=7), then 5+6(=11), 7+11(=18). Total 
cost is 36 (7+11+18)

Example 3:
Input: [1, 3, 11, 5, 2]
Output: 42
Explanation: First connect 1+2(=3), then 3+3(=6), 6+5(=11), 11+11(=22). 
Total cost is 42 (3+6+11+22)
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

// time: O(n) = n*log(n)
function connectRopes(arr) {
    if (arr.length === 0) {
        return 'empty array';
    };
    if (arr.length === 1) {
        return arr[0];
    };
    let minHeap = new MinHeap();
    arr.forEach(number => minHeap.addItem(number)); // O(n*log(n))

    let totalCost = 0;
    // - to minimize total cost, join smallest two ropes at any given time; 
    while (minHeap.items.length > 1) {
        let smallest = minHeap.extractMin();
        let nextSmallest = minHeap.extractMin();

        let newRopeSize = smallest + nextSmallest;
        totalCost+= newRopeSize;
        minHeap.addItem(newRopeSize);
    };
    return totalCost;
};

console.log('connectRopes: ', connectRopes([1, 3, 11, 5])); // 33
console.log('connectRopes: ', connectRopes([3, 4, 5, 6])); // 36
console.log('connectRopes: ', connectRopes([1, 3, 11, 5, 2])); // 42