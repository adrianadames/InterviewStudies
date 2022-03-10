// HEAP SORT

/*
Things to review here: 
-the heap data structure
    -methods: 
        -add value
        -extract max value (i.e. remove and return max value)
-heapsort algorithm
    -bottom up heap construction (buildMaxHeap function)
    -in-place construction of sorted array from unsorted array via constructed heap


NOTE: Remaining TO DOs: 
-figure out best way to construct heap from array input
    -should it be a separate function? should it reference the input array?

-prove to self that constructing heap O(n) = n; 

-figure out how to implement heapSort in-place for a given input array
    -first construct heap in place by pointing heap items to input array and then 
    constructing the heap
    -then sort in place by extracting the max and pushing it to the end of the 
    array as each max value is popped out; it's noted here that this is a lil 
    confusing given how we reference the input array; it's length is mutated as
    we extract the max from the array, but at the same time we place the extracted
    max at the last position of the array plus 1, which is out of bounds...
*/


/*
-for complete binary tree implemented as an array, 

index_leftChild = 2*index_parent + 1; // odd index implies node is a left child
index_rightChild = 2*index_parent + 2; // even index implies node is a right child

index_parent = (index_leftChild - 1)/2 = (index_rightChild -2)/2;
=> index_parent = Math.floor((index_child-1)/2);

*/ 


class MaxHeap {
    constructor(items = []) {
        this.items = items // array representation of binary tree heap
    }

    add(value) {
        // first need to push item to the next empty position in the binary tree
        this.items.push(value);
        
        if (this.items.length === 1) {
            // if only one item in heap, heap property satisfied
            return 
        } else {
            // then need to bubble the item up the tree to find approapriate position
            let nodeIndex= this.items.length-1;
            this.bubbleUp(nodeIndex);
        }
    }

    bubbleUp(nodeIndex) {
        let parentIndex = Math.floor((nodeIndex-1)/2);

        if (nodeIndex === 0) {
            // node cannot bubble up any further; it's the largest value in the heap
            return
        } else if (nodeIndex === 1 || nodeIndex === 2) {
            parentIndex = 0;
        } 

        if (this.items[parentIndex] >= this.items[nodeIndex]) {
            // heap property satisfied
            return 
        } else {
            // swap parent and child nodes in order to satisfy heap property
            [this.items[parentIndex], this.items[nodeIndex]] = [this.items[nodeIndex], this.items[parentIndex]];
        }

        // continue checking if heap property satisfied
        this.bubbleUp(parentIndex);
    }

    extractMax() {
        if (this.items.length === 0) {
            return 'heap is empty'
        } 

        // if heap only contains one value, that value is the max
        if (this.items.length === 1) {
            return this.items.pop()
        }
    
        let maxValue = this.items[0];

        // replace current root with last leaf in the tree
        this.items[0] = this.items.pop();

        // sift down the value that was just placed at the root so that heap property satisfied
        this.siftDown();

        return maxValue
    }

    siftDown(nodeIndex = 0) {
        let leftChildIndex = 2*nodeIndex + 1;
        let rightChildIndex = 2*nodeIndex + 2;

        if (leftChildIndex > this.items.length -1) {
            // cannot sift down any longer. node that was passed in doesn't have children
            return
        }

        if (this.items[leftChildIndex] >= this.items[rightChildIndex] || rightChildIndex > this.items.length -1) {
            if (this.items[nodeIndex] > this.items[leftChildIndex]) {
                // heap property satisfied. no need to sift down node; 
                return 
            } else {
                // swap parent and child nodes so heap property satisfied
                [this.items[nodeIndex], this.items[leftChildIndex]] = [this.items[leftChildIndex], this.items[nodeIndex]];
                
                // continue sifting down value
                this.siftDown(leftChildIndex);
            }
        } else {
            if (this.items[nodeIndex] > this.items[rightChildIndex]) {
                // heap property satisfied. no need to sift down node; 
                return 
            } else {
                // swap parent and child nodes so heap property satisfied
                [this.items[nodeIndex], this.items[rightChildIndex]] = [this.items[rightChildIndex], this.items[nodeIndex]];

                // continue sifting down value
                this.siftDown(rightChildIndex);
            }
        }
    }

    constructHeap(arr) {
        // -for now let's assume heap is empty. 
        // -i think later can use this by adding the passed in array to the end of this.items
        // and use this.items as the array to construct the heap from

        // -we will be doing a bottom up construction of the heap

        // -we know that given an array representation of a complete binary tree, 
        // the leaves start at index Math.floor(n/2) + 1 and go up to n;
        // -this implies that the parents of those leaves start at index Math.floor(n/2); 
        // -we go through all the parents and bubble up any leaves that need to be bubbled up

        this.items = [...arr];
        let lastParentIndex = Math.floor(this.items.length/2);

        for (let i = lastParentIndex; i >= 0; i--) {
            this.siftDown(i);
        }
    }
}

function constructHeap(arr) {
    let heap = new MaxHeap();
    heap.items = [...arr];

    let lastParentIndex = Math.floor(heap.items.length/2);

    for (let i = lastParentIndex; i >= 0; i--) {
        heap.siftDown(i);
    }

    console.log('arr: ', arr);
    console.log('heap.items: ', heap.items);
}

let h1 = new MaxHeap();
let arr1 = [50, 70, 16, 40, 65, 25, 69, 90];

arr1.forEach(item => h1.add(item));
console.log('h1.items: ', h1.items);

while (h1.items.length > 0) {
    console.log('h1.extractMax(): ', h1.extractMax());
}

console.log('h1.items: ', h1.items);


let h2 = new MaxHeap();
h2.constructHeap(arr1);
console.log('h2: ', h2);

while (h2.items.length > 0) {
    console.log('h2.extractMax(): ', h2.extractMax());
}

constructHeap(arr1)

function heapSort(arr) {
    let heap = new MaxHeap();
    heap.constructHeap(arr);

    for (let i = arr.length-1; i >= 0; i--) {
        arr[i] = heap.extractMax();
    }

    return arr
}

console.log('heapSort: ', heapSort(arr1))