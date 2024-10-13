/*

(easy)

Problem Statement

Given a binary tree, populate an array to represent the 
averages of all of its levels.

Ex1

       1
    2     3
 4    5  6  7

Level Averages:
[1, 2.5, 5.5]   

Ex2
        12
      7     1
    9      10  5

 Level Averages: 

 [12.0, 4.0, 8]

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
function levelAverages(binaryTree) {
    let allLevelsNodes = [];
    let queue = new Queue();
    queue.enqueue(binaryTree);
    while (queue.items.size > 0) {
        let levelSize = queue.items.size;
        let levelSum = 0;
        for (let i = 0; i < levelSize; i++) {
            let current = queue.dequeu(); // returns node who's value is a binaryTree
            levelSum += current.value.value;
            if (current.value.left) {
                queue.enqueue(current.value.left);
            }
            if (current.value.right) {
                queue.enqueue(current.value.right)
            }
        }
        allLevelsNodes.push(levelSum/levelSize);
    }
    return allLevelsNodes
}

console.log('levelAverages: ', levelAverages(bt1))
console.log('levelAverages: ', levelAverages(bt2))







// // - my original approach
// class BinaryTree {
//    constructor(value, left = null, right = null) {
//      this.value = value; 
//      this.left = left; 
//      this.right = right; 
//    }
//  };
 

// class Queue {
//    constructor(items = []) {
//       this.items = items;
//    }
//    // O(1) operation
//    enqueue(item) {
//       this.items.push(item);
//    }
//    // O(n) operation
//    dequeue() {
//       if (this.items.length < 1) {
//          return 'queue is empty'
//       } else {
//          return this.items.shift()
//       }
//    }
// }
 
// // time complexity: O(n)
// // space complexity: O(n)
// function levelAverages(binaryTreeRoot) {
// let queue = new Queue();
// let levelAverages = [];
// queue.enqueue(binaryTreeRoot);

// while (queue.items.length > 0) {
//    let levelSize = queue.items.length;
//    let levelArr = []; 

//    for (let i = 0; i < levelSize; i++) {
//       let levelNode = queue.dequeue(); 
//       if (levelNode.left) {
//       queue.enqueue(levelNode.left);
//       }
//       if (levelNode.right) {
//       queue.enqueue(levelNode.right);
//       }
//       levelArr.push(levelNode.value);
//    }

//    let levelAverage = (levelArr.reduce((accumulator, currentValue) => accumulator + currentValue))/levelArr.length;

//    levelAverages.push(levelAverage);
// }

// return levelAverages
// };

// // ex 1 BT
// let bt1 = new BinaryTree(1);
// bt1.left = new BinaryTree(2);
// bt1.right = new BinaryTree(3);
// bt1.left.left = new BinaryTree(4);
// bt1.left.right = new BinaryTree(5);
// bt1.right.left = new BinaryTree(6);
// bt1.right.right = new BinaryTree(7);
// // console.log('bt1: ', bt1);

// // ex 2 BT
// let bt2 = new BinaryTree(12);
// bt2.left = new BinaryTree(7);
// bt2.left.left = new BinaryTree(9);
// bt2.right = new BinaryTree(1);
// bt2.right.left = new BinaryTree(10);
// bt2.right.right = new BinaryTree(5);
// // console.log('bt2: ', bt2);

// console.log(levelAverages(bt1));
// console.log(levelAverages(bt2));