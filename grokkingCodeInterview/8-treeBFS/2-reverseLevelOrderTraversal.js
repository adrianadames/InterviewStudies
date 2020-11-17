/*
(easy)

Problem Statement

Given a binary tree, populate an array to represent its 
level-by-level traversal in reverse order, i.e., the lowest 
level comes first. You should populate the values of all 
nodes in each level from left to right in separate sub-arrays.

Ex1

       1
    2      3
 4    5   6  7

Reverse Level Order Traversal: 
[[4,5,6,7],[2,3],[1]]    

Ex2
        12
      7    1
    9      10  5

Reverse Level Order Traversal: 
[[9,10,5],[7,1],[12]]

*/

class BinaryTree {
  constructor(value, left = null, right = null) {
    this.value = value; 
    this.left = left; 
    this.right = right; 
  }
};

// BFT => queue (FIFO)
class Queue {
  constructor(items = []) {
    this.items = items;
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    if (this.items.length < 1) {
      return 'queue is empty'
    } else {
      return this.items.shift()
    }
  }
}

// -in the previous problem the output arrays for the examples above are: 
// [[1],[2,3],[4,5,6,7]] & [[12],[7,1],[9,10,5]]

// -to get the desired output array, I could just grab the output array
// from the previous problem, and pop out each item in a new output array; 

// -is there a more efficienct way to reverse an array?
// -can it be done in place?
// -yes. I believe so. switch the items at the indices at opposite ends of the array
// and then increment the front index and decrement the back index. 
// -if number of items in the array is even (e.g. [1,2,3,4]), do this arr.length/2 many times
// -if number of items in array is odd (e.g. [1,2,3,4,5]), do this Math.floor(arr.length/2) many times

// -another way to do this would be to use a stack (i.e. levelOrderStack) to store each levelArray, and then at the end 
// pop out each element from the stack into the output array (i.e. levelOrderArr).  

// LINKED LIST QUEUE IMPLEMENTATION
class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null; 
        this.tail = null; 
        this.size = 0;
    }

    addToTail(nodeValue) {
        if (this.size === 0) {
            this.head = new Node(nodeValue);
            this.size +=1;
        } else if (this.size === 1) {
            this.head.next = new Node(nodeValue);
            this.tail = this.head.next;
            this.size +=1; 
        } else {
            let oldTail = this.tail; 
            let newTail = new Node(nodeValue);
            oldTail.next = newTail;
            this.tail = newTail;
            this.size += 1;
        }
    }

    removeHead() {
        if (this.size === 0) {
            return null
        } else if (this.size === 1) {
            let removedHead = this.head; 
            this.head = null; 
            this.tail = null;
            this.size -= 1;
            return removedHead; 
        } else {
            let removedHead = this.head; 
            let newHead = this.head.next; 
            this.head = newHead 
            this.size -= 1;
            return removedHead
        }
    }
}

class Queue {
    constructor() {
        this.items = new LinkedList();
        this.size = this.items.size;
    }

    enqueue(value) {
        if (value === null) {
            return Error('The item passed into this function must be a non-null value.')
        } else if (value === undefined) {
            return Error('The item passed into the function is undefined.')
        } else {
            this.items.addToTail(value);
            this.size = this.items.size;
        }
    }

    dequeue(value) {
        if (this.size < 1) {
            return 'queue is empty'
        } else {
            this.size -= 1;
            return this.items.removeHead();
        }
    }
}

// // REVERSE ARRAY HELPER FUNCTION
// time complexity: O(n)
// space complexity: O(1)
function reverseArray(arr) {
  let frontIndex = 0; 
  let backIndex = arr.length - 1; 

  for (let i = 0; i < Math.floor(arr.length/2);i++) {
    [arr[frontIndex], arr[backIndex]] = [arr[backIndex], arr[frontIndex]];
    frontIndex += 1;
    backIndex -= 1;
  }
  return arr
}