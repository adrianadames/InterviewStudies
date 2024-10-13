/*
Problem Statement (hard) 

Given a string and a number ‘K’, find if the string can be rearranged 
such that the same characters are at least ‘K’ distance apart from each other.

Example 1:
Input: "mmpp", K=2
Output: "mpmp" or "pmpm"
Explanation: All same characters are 2 distance apart.

Example 2:
Input: "Programming", K=3
Output: "rgmPrgmiano" or "gmringmrPoa" or "gmrPagimnor" and a few more  
Explanation: All same characters are 3 distance apart.

Example 3:
Input: "aab", K=2
Output: "aba"
Explanation: All same characters are 2 distance apart.

Example 4:
Input: "aappa", K=3
Output: ""
Explanation: We cannot find an arrangement of the string where any 
two 'a' are 3 distance apart.
*/

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

function rearrangeStringKDistanceApart(str, k) {
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

    // - at this point, all key-value pairs are stored in the maxHeap 
    // with the letter with the largest frequency count at the top; 
    // - now we need to build the string by popping off the most frequent, 
    // adding the letter to the string, and then we need a k character 
    // cooling off period before we can re-add the key-value pair back to 
    // the maxHeap; 

    let rearrangedString = '';
    let coolOffQueue = [];
    while (maxHeap.items.length > 0) {
        let letterFreqPair = maxHeap.extractMax();
        rearrangedString += letterFreqPair[0];
        letterFreqPair[1]--;
        coolOffQueue.push(letterFreqPair);
        if (coolOffQueue.length === k) {
            letterFreqPair = coolOffQueue.shift();
            if (letterFreqPair[1] > 0) {
                maxHeap.addItem(letterFreqPair);
            };
        };
    };

    if (rearrangedString.length === str.length) {
        return rearrangedString;
    } else {
        return '';
    };

};

// console.log('rearrangeStringKDistanceApart: ', rearrangeStringKDistanceApart('mmpp', 2));
// console.log('rearrangeStringKDistanceApart: ', rearrangeStringKDistanceApart('Programming', 3));
// console.log('rearrangeStringKDistanceApart: ', rearrangeStringKDistanceApart('aab', 2));
// console.log('rearrangeStringKDistanceApart: ', rearrangeStringKDistanceApart('aappa', 3));

