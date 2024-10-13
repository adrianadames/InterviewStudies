/*
Problem Statement (medium)

Given a string, sort it based on the decreasing frequency of its characters.

Example 1:
Input: "Programming"
Output: "rrggmmPiano"
Explanation: 'r', 'g', and 'm' appeared twice, so they need to appear 
before any other character.

Example 2:
Input: "abcbab"
Output: "bbbaac"
Explanation: 'b' appeared three times, 'a' appeared twice, and 'c' 
appeared only once.
*/

// sort based on decreasing frequency; 

// -so if we created a maxHeap with the the most frequent character at the very top, 
// we would push that out and add the next most frequent character after that


// - first let me create a min heap data structure; 
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
        if (this.items[parentIndex][1] < this.items[index][1]) {
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
        if (rightChild > this.items.length -1 || this.items[leftChild][1] > this.items[rightChild][1]) {
            if (this.items[index][1] > this.items[leftChild][1]) {
                return;
            } else {
                // swap
                [this.items[index], this.items[leftChild]] = [this.items[leftChild], this.items[index]];
                this.bubbleDown(leftChild);
            };
        } else {
            if (this.items[index][1] > this.items[rightChild][1]) {
                return;
            } else {
                // swap
                [this.items[index], this.items[rightChild]] = [this.items[rightChild], this.items[index]];
                this.bubbleDown(rightChild);
            };
        };
    };
};

// time: O(n) = n + n*log(n) => n*log(n)
function frequencySort(str) {
    let freq = {};
    // O(n) = n
    for (let i = 0; i < str.length; i++) {
        if (freq[str[i]]) {
            freq[str[i]]++;
        } else {
            freq[str[i]] = 1;
        };
    };

    let keyValuePairs = Object.entries(freq);
    let maxHeap = new MaxHeap();

    // O(n) = n*log(n)
    keyValuePairs.forEach(keyValuePair => maxHeap.addItem(keyValuePair));
    
    let newString = '';
    while (maxHeap.items.length>0) {
        let [char, count] = maxHeap.extractMax();
        for (let i = 0; i < count; i++) {
            newString +=char;
        };
    };
    return newString;
};

console.log('frequencySort: ', frequencySort('Programming')); // rrggmmPiano
console.log('frequencySort: ', frequencySort('abcbab')); // bbbaac