/*

(easy)

Problem Statement

Given a binary tree, return an array containing nodes in its 
right view. The right view of a binary tree is the set of 
nodes visible when the tree is seen from the right side.

Ex1

        1
    2      3
  4   5   6  7

Right View: [1, 3, 7]

Ex2
        12
      7    1
    9      10  5
    3

Right View:
[12, 1, 5, 3]
*/

class Node {
    constructor(value, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev; 
    }
}

class BinaryTree {
  constructor(value, left = null, right = null) {
    this.value = value; 
    this.left = left; 
    this.right = right; 
  }
};

// ex 1 BT
let bt1 = new BinaryTree(1);
bt1.left = new BinaryTree(2);
bt1.right = new BinaryTree(3);
bt1.left.left = new BinaryTree(4);
bt1.left.right = new BinaryTree(5);
bt1.right.left = new BinaryTree(6);
bt1.right.right = new BinaryTree(7);
// console.log('bt1: ', bt1);

// ex 2 BT
let bt2 = new BinaryTree(12);
bt2.left = new BinaryTree(7);
bt2.right = new BinaryTree(1);
bt2.left.left = new BinaryTree(9);
bt2.right.left = new BinaryTree(10);
bt2.right.right = new BinaryTree(5);
bt2.left.left.left = new BinaryTree(3);
// console.log('bt2: ', bt2);


// - first in, first out
// - add to tail for adding elements, remove head for removing elements
class LinkedList {
    constructor(head = null, tail = null, size = 0) {
        this.head = head;
        this.tail = tail;
        this.size = size;
    }

    addToTail(node) {
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    removeHead() {
        let oldHead = this.head;
        this.head = this.head.next;
        this.size--;
        return oldHead
    }
}

// - in the queue, the binaryTrees are stored in nodes; 
class Queue {
    constructor(items = new LinkedList()) {
        this.items = items;
    }

    enqueue(item) {
        let node = new Node(item);
        this.items.addToTail(node);
    }

    dequeu() {
        return this.items.removeHead();
    }
}

// - time complexity: O(N)
// - space complexity: O(N)
function rightViewOfABinaryTree(binaryTree) {
    let rightViewNodes = [];
    let queue = new Queue();
    queue.enqueue(binaryTree);
    while (queue.items.size > 0) {
        let levelSize = queue.items.size;
        for (let i = 0; i < levelSize; i++) {
            let current = queue.dequeu(); // returns node who's value is a binaryTree
            if (i === levelSize - 1) {
                rightViewNodes.push(current.value.value);
            }
            if (current.value.left) {
                queue.enqueue(current.value.left);
            }
            if (current.value.right) {
                queue.enqueue(current.value.right);
            }
        }
    }
    return rightViewNodes
}

console.log('rightViewOfABinaryTree: ', rightViewOfABinaryTree(bt1));
console.log('rightViewOfABinaryTree: ', rightViewOfABinaryTree(bt2));