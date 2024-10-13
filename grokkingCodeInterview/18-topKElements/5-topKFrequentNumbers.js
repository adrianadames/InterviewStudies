/*
Problem Statement (medium)

Given an unsorted array of numbers, find the top ‘K’ frequently 
occurring numbers in it.

Example 1:
Input: [1, 3, 5, 12, 11, 12, 11], K = 2
Output: [12, 11]
Explanation: Both '11' and '12' apeared twice.

Example 2:
Input: [5, 12, 11, 3, 11], K = 2
Output: [11, 5] or [11, 12] or [11, 3]
Explanation: Only '11' appeared twice, all other numbers appeared once.
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
        if (this.items[parentIndex][1] > this.items[index][1]) {
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
        if (this.items[leftChild][1] < this.items[rightChild][1] || rightChild > this.items.length -1) {
            if (this.items[index][1] < this.items[leftChild][1]) {
                return;
            } else {
                // swap
                [this.items[index], this.items[leftChild]] = [this.items[leftChild], this.items[index]];
                this.bubbleDown(leftChild);
            };
        } else {
            if (this.items[index][1] < this.items[rightChild][1]) {
                return;
            } else {
                // swap
                [this.items[index], this.items[rightChild]] = [this.items[rightChild], this.items[index]];
                this.bubbleDown(rightChild);
            };
        };
    };
};

// time: O(n) = n + k + n*log(k) => n + n*log(k)
function topKFrequentNumbers(arr, k) {
    let freq = {};
    // O(n) = n
    arr.forEach(number => {
        if (freq[number]) {
            freq[number]++;
        } else {
            freq[number] = 1;
        };
    });

    let keyValuePairs = Object.entries(freq);
    let minHeap = new MinHeap();

    // O(n) = k * log(k)
    for (let i = 0; i < k; i++) {
        minHeap.addItem(keyValuePairs[i]);
    };

    // - at this point we have the top k most frequent entries out of the first four entries; 
    // - the smallest of the top k is at the top; if we encounter a bigger one, remove the top and
    // add the bigger one

    // O(n) = (n-k)*log(k)
    for (let i = k; i < keyValuePairs.length; i++) {
        if (keyValuePairs[i][1] > minHeap.items[0][1]) {
            minHeap.extractMin();
            minHeap.addItem(keyValuePairs[i]);
        };
    };

    // O(n) = k
    return minHeap.items.map((item) => Number(item[0]));
};


console.log('topKFrequentNumbers: ', topKFrequentNumbers([1, 3, 5, 12, 11, 12, 11], 2)); // [11, 12]
console.log('topKFrequentNumbers: ', topKFrequentNumbers([5, 12, 11, 3, 11], 2)); // [5, 11]