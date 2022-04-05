/*
HEAP SORT 

References:
-Corbin Ch. 6
-Goodrich 9.4.2
-Necaise 12.1
-Skiena 4.3 

Performance: 
-runtime: O(n) = n*log(n);
-spacetime: O(n) = 1; (i.e. in place sorting)

TDs: 
-performance analysis for all the methods
-Introduction and Motivation Section: 
    -Pros and cons to using heap as opposed to a different data structure (for 
    applications in which a heap would realistically be used) (lean into skiena 
    reference for this one)
    -3 examples of when heaps would be appropriate data structure to use (lean 
    into skiena reference for this one)
-Implementation Notes and Code
    -Things to ponder blurb

**************************************************************************
****************** The Heap and the Heapsort Algorithm ******************
**************************************************************************

-The heapsort sorting algorithm is a little bit different than the sorting algorithms 
we've discussed up until now in that it utilizes a special kind of data structure called 
a heap. The heap is integral to the heapsort algorithm and will therefore be one of the 
points of emphasis in this write-up. The write-up is organized as follows: 
    
    -Introduction and Motivation: 
        -What is a heap? Why do we use them? 
            -Data structure with certain properties that make it attractive 
            for use in two modalities: 
                -1) as a priority queue, and 
                -2) for sorting
            -Key properties:
                -heap-order property (max heap vs min heap)
                -complete binary tree property
                    -height of a heap
            -Pros and cons to using heap as opposed to a different data structure (for 
            applications in which a heap would realistically be used) (lean into skiena 
            reference for this one)
            -3 examples of when heaps would be appropriate data structure to use (lean 
            into skiena reference for this one)
    -Implementation Notes and Code
        -Array representation of a heap
        -Methods:
            -add(item)
            -maximum() (return the maximum value stored in the heap)
            -extractMax() (i.e. remove and return max value)
            -constructHeap(arr) 
                -bottom-up heap construction from initial unsorted array input (see p.96 in notebook)
                -fact that for n element heap represented as array, the leaves of the 
                heap are the nodes indexed by: floor(n/2) + 1, floor(n/2) + 2, ..., n
                (important fact to know for ground-up construction of a heap)
            -internal methods bubbleUp(nodeIndex) and bubbleDown(nodeIndex)
        -Heapsort (i.e. sort unsorted array input) 
            -two part process:
                1) first use bottom-up heap construction to build the heap
                2) then construct array in-place using extractMax method (see p.96 in notebook)
        -Things to ponder: 
            -is storing the size of the heap as a heap property important?
                -*it's done in Corbin Ch 6.4. in goodrich it's done indirectly as it's a property 
                of the priority base class that the heap priority queue is based off of; Why not 
                just use the length of the array you're working on and give that as the length? 
                BUT THEN how would I implement the heapsort algorithm in Corbin using this approach 
                (i.e. without heap size as as stored property);* 
                -*Necaise Ch. 13.5: 
                    -"The next step in the process of extracting a value from the heap is to remove
                    the leaf node from the heap. In an array representation, we do this by reducing
                    a counter indicating the number of items in the heap."*


------------------ Introduction and Motivation ------------------------
A priority queue is a queue-like data structure for maintaining a set 
of elements, each with an associated value called a key. Elements in a 
priority queue are dequeued based on the size of the key- with the largest
key values having priority. There are also min-priority queues, but for the 
discussion that follows we'll assume we're working with a max-priority queue
and a max-heap. 

A priority queue supports the following operations: 
    -insert: inserts element into the set 
    -maximum: returns element with the largest key
    -extractMax: removes and returns element with the largest key

Before discussing the heap, let's compare implementing a priority queue 
with an unsorted list vs a sorted list. With an unsorted list, we have
an O(1) insertion time, but finding or removing element requires O(n)
loop through entire list. With a sorted list, removing the max element
is an O(1) operation, but adding an element requires an O(n) loop. 

The heap data structure strikes a balance between these two extremes
of having elements being entirely unsorted vs perfectly sorted. It 
allows us to perform both insertions and removals in O(log(n)). (And 
it allows us to sort in O(n*log(n))).

The heap is a binary tree that stores items at its nodes and satisfies 
two additional properties: 
    -heap-order property: 
        the key of the parent must always be greater than or equal to the 
        key of its children (implies that the max value is always at root)
    -complete binary tree property: 
        -the tree must always have the maximum number of nodes at every 
        level except for the bottom-most level; and the remaining nodes
        at the bottom level must reside at the leftmost possible position

Due to the complete binary tree property, we can say that a heap storing
n entries has height h = log(n). 

------------------ Implementation Notes and Code ------------------------
Array representation of heap (i.e. array representation of complete binary tree):

-Given array index i of a node, the index of the parent or children is: 
    -parent = Math.floor((i-1)/2);
    -left = 2*i +1 (odd index implies node is a left child)
    -right = 2*i+2 (even index implies node is a left child)
*/


class MaxHeap {
    constructor(items = []) {
        this.size = items.length;

        // this.items = items => array representation of binary tree heap
        this.size > 0 ? this.constructHeap(items): this.items = items; 
    }

    add(value) {
        this.items.push(value);
        this.size +=1;
        
        if (this.size === 1) {
            // if only one item in heap, heap property satisfied
            return 
        } else {
            // then need to bubble the item up the tree to find approapriate position
            let nodeIndex= this.size-1;
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

    maximum() {
        if (this.size === 0) {
            return 'heap is empty'
        } else {
            return this.items[0]
        }
    }

    extractMax() {
        if (this.size === 0) {
            return 'heap is empty'
        } 

        let maxValue = this.items[0];

        // -if heap only contains one value, that value is the max
        if (this.size === 1) {
            this.size -=1;
            return maxValue
        } else {
            // -replace current root with last leaf in the tree
            this.items[0] = this.items[this.size-1];
            // -reduce the size of the heap by one
            this.size -=1;

            // -bubble down the value that was just placed at the root so 
            // that heap property satisfied
            this.bubbleDown();

            return maxValue
        }
    }

    bubbleDown(nodeIndex = 0) {
        let leftChildIndex = 2*nodeIndex + 1;
        let rightChildIndex = 2*nodeIndex + 2;

        if (leftChildIndex > this.size -1) {
            // cannot bubble down any longer. node that was passed in doesn't have children
            return
        }

        if (this.items[leftChildIndex] >= this.items[rightChildIndex] || rightChildIndex > this.size -1) {
            if (this.items[nodeIndex] > this.items[leftChildIndex]) {
                // heap property satisfied. no need to bubble down node; 
                return 
            } else {
                // swap parent and child nodes so heap property satisfied
                [this.items[nodeIndex], this.items[leftChildIndex]] = [this.items[leftChildIndex], this.items[nodeIndex]];
                
                // continue to bubble down node
                this.bubbleDown(leftChildIndex);
            }
        } else {
            if (this.items[nodeIndex] > this.items[rightChildIndex]) {
                // heap property satisfied. no need to bubble down node; 
                return 
            } else {
                // swap parent and child nodes so heap property satisfied
                [this.items[nodeIndex], this.items[rightChildIndex]] = [this.items[rightChildIndex], this.items[nodeIndex]];

                // continue bubble down value
                this.bubbleDown(rightChildIndex);
            }
        }
    }

    // -bottom up construction of the heap
    constructHeap(arr) {
        // -we know that given an array representation of a complete binary tree, 
        // the leaves start at index = Math.floor(n/2) + 1 and go up to n;
        // -this implies that the parents of those leaves start at index Math.floor(n/2); 
        // -we go through all the parents and bubble up any leaves that need to be bubbled up

        this.items = arr;
        let lastParentIndex = Math.floor(arr.length/2);

        for (let i = lastParentIndex; i >= 0; i--) {
            this.bubbleDown(i);
        }
    }
}

function heapSort(arr) {
    let heap = new MaxHeap(arr);
    
    for (let i = arr.length-1; i >= 0; i--) {
        arr[i] = heap.extractMax();
    }

    return arr
}

// heapSort example
let arr1 = [50, 70, 16, 40, 65, 25, 69, 90];
console.log('heapSort: ', heapSort(arr1));

// example for heap instantiation, adding items, extracting max
let h1 = new MaxHeap([4, 6, 10, 43,1, 5, 6])
h1.add(34);
console.log('h1.maximum: ', h1.maximum());
h1.add(77);
console.log('h1.maximum: ', h1.maximum());
while (h1.size > 0) {
    console.log('h1.extractMax(): ', h1.extractMax())
}
console.log('h1.maximum: ', h1.maximum());