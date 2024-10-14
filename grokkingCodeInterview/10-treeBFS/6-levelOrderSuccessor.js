/*

(easy)

Problem Statement

Given a binary tree and a node, find the level order 
successor of the given node in the tree. The level order 
successor is the node that appears right after the given 
node in the level order traversal.

Ex1

       1
    2     3
 4    5  

Given Node:3
Level Order Successor:4

Ex2
        12
      7    1
    9      10  5

Given Node:9 
Level Order Successor:10

Ex3
        12
      7    1
    9      10  5

Given Node: 12
Level Order Successor:7
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
function levelOrderSuccessor(binaryTree, binaryTreeNode) {
    let queue = new Queue();
    queue.enqueue(binaryTree);
    let binaryTreeNodeFound = false;

    while (queue.items.size > 0) {
        let levelSize = queue.items.size;
        
        for (let i = 0; i < levelSize; i++) {
            let current = queue.dequeu(); // returns node who's value is a binaryTree
            if (binaryTreeNodeFound === true) {
                return current.value.value
            }
            if (current.value.value === binaryTreeNode.value) {
                binaryTreeNodeFound = true;
            }
            if (current.value.left) {
                queue.enqueue(current.value.left);
            }
            if (current.value.right) {
                queue.enqueue(current.value.right);
            }
        }
    }
}

console.log(levelOrderSuccessor(bt1, bt1.right)); // returns 
console.log(levelOrderSuccessor(bt2, bt2.left.left)); // returns 10
console.log(levelOrderSuccessor(bt2, bt2)); 








// // - my original approach

// class BinaryTree {
//   constructor(value, left = null, right = null) {
//     this.value = value;
//     this.left = left;
//     this.right = right;
//   }
// }

// // queue = first in, first out
// class Queue {
//   constructor() {
//     this.items = [];
//     this.size = this.items.length;
//   }
  
//   enqueue(node) {
//     this.items.push(node);
//     this.size = this.items.length;
//   }

//   dequeue() {
//     if (this.items.length > 0) {
//       this.size -= 1;
//       return this.items.shift()
//     } else {
//       return 'Queue is empty'
//     }
//   }
// }

// // time complexity: O(n)
// // space complexity: O(n)
// function levelOrderSuccessor(binaryTreeRoot, predecessorNodeValue) {
//   let levelOrderArr = [];
//   let queue = new Queue();
//   queue.enqueue(binaryTreeRoot);

//   let successorNext = false;

//   while (queue.size > 0) {
//     let levelSize = queue.size;
//     let levelArr = [];

//     for (let i = 0; i < levelSize; i++) {
//       let levelNode = queue.dequeue();
      
//       if (successorNext === true) {
//         return levelNode.value
//       }
//       if (levelNode.value === predecessorNodeValue) {
//         successorNext = true; 
//       }
//       if (levelNode.left) {
//         queue.enqueue(levelNode.left);
//       }
//       if (levelNode.right) {
//         queue.enqueue(levelNode.right);
//       }
//     }
//   }
// }

// // Ex1

// //        1
// //     2     3
// //  4    5  

// // Given Node:3
// // Level Order Successor:4

// let bt1 = new BinaryTree(1);
// bt1.left = new BinaryTree(2);
// bt1.right = new BinaryTree(3);
// bt1.left.left = new BinaryTree(4);
// bt1.left.right = new BinaryTree(5);

// console.log(levelOrderSuccessor(bt1, 3));

// // Ex2
// //         12
// //       7    1
// //     9      10  5

// // Given Node:9 
// // Level Order Successor:10

// let bt2 = new BinaryTree(12);
// bt2.left = new BinaryTree(7);
// bt2.right = new BinaryTree(1);
// bt2.left.left = new BinaryTree(9);
// bt2.right.left = new BinaryTree(10);
// bt2.right.right = new BinaryTree(5);

// console.log(levelOrderSuccessor(bt2, 9));

// // Ex3
// //         12
// //       7    1
// //     9      10  5

// // Given Node: 12
// // Level Order Successor:7

// console.log(levelOrderSuccessor(bt2, 12));