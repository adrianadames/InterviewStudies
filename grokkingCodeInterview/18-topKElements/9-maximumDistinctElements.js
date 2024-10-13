/*
Problem Statement (medium)

Given an array of numbers and a number ‘K’, we need to remove 
‘K’ numbers from the array such that we are left with maximum 
distinct numbers.

Example 1:
Input: [7, 3, 5, 8, 5, 3, 3], and K=2
Output: 3
Explanation: We can remove two occurrences of 3 to be left with 3 distinct numbers [7, 3, 8], we have 
to skip 5 because it is not distinct and occurred twice. 
Another solution could be to remove one instance of '5' and '3' each to be left with three 
distinct numbers [7, 5, 8], in this case, we have to skip 3 because it occurred twice.

Example 2:
Input: [3, 5, 12, 11, 12], and K=3
Output: 2
Explanation: We can remove one occurrence of 12, after which all numbers will become distinct. Then 
we can delete any two numbers which will leave us 2 distinct numbers in the result.

Example 3:
Input: [1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5], and K=2
Output: 3
Explanation: We can remove one occurrence of '4' to get three distinct numbers.
*/
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
        if (rightChild > this.items.length -1 || this.items[leftChild][1]  < this.items[rightChild][1]) {
            if (this.items[index][1]  < this.items[leftChild][1] ) {
                return;
            } else {
                // swap
                [this.items[index], this.items[leftChild]] = [this.items[leftChild], this.items[index]];
                this.bubbleDown(leftChild);
            };
        } else {
            if (this.items[index][1]  < this.items[rightChild][1]) {
                return;
            } else {
                // swap
                [this.items[index], this.items[rightChild]] = [this.items[rightChild], this.items[index]];
                this.bubbleDown(rightChild);
            };
        };
    };
};

// - loop through the array and record the freqency of each letter in the array; 
// - go through each key-value pair in the object--if the frequency of the key is 1, increase
// the distinctNumberCount by 1; if the frequency of the key is greater than 1, add it to 
// a minHeap that has at the very top the key-value pair with the smallest frequency;

// - then we need to look at k, the number of removals left, and the freqCount of the key-value
// pair at the root of the minHeap; if k >= freqCount - 1, then we can remove that value from the
// minHeap, increment the distinctNumberCount by 1, and adjust the number of removals like so: 
// k = k - (freqCount - 1); see code for rest of logic

// time: O(n) = n* log(n) + k *log(n);
function maxDistinctElements(arr, k) {
    let freq = {};
    // O(n) = n
    for (let i = 0; i < arr.length; i++) {
        if (freq[arr[i]]) {
            freq[arr[i]]++;
        } else {
            freq[arr[i]] = 1;
        };
    };
    let keyValuePairs = Object.entries(freq);
    
    let minHeap = new MinHeap();
    let distinctNumberCount = 0;
    // O(n) = n*log(n)
    keyValuePairs.forEach(keyValuePair => {
        if (keyValuePair[1] === 1) {
            distinctNumberCount++;
        } else {
            // NOTE: here I could've limited teh size of the minHeap to store max of K 
            // entries because next K lowest frequent are the max number of removals
            // we have, so this way we keep height of heap at log(k)
            minHeap.addItem(keyValuePair);
        };
    });

    // O(n) = k*log(n)
    while (minHeap.items.length > 0 && k >= minHeap.items[0][1] -1) {
        k -= minHeap.items[0][1] -1;
        minHeap.extractMin();
        distinctNumberCount++;
    };

    if (minHeap.items.length > 0) {
        return distinctNumberCount;
    } else {
        return distinctNumberCount-k;
    };
};

console.log('maxDistinctElements: ', maxDistinctElements([7, 3, 5, 8, 5, 3, 3], 2)); // 3
console.log('maxDistinctElements: ', maxDistinctElements([3, 5, 12, 11, 12], 3)); // 2
console.log('maxDistinctElements: ', maxDistinctElements([1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5], 2)); // 3