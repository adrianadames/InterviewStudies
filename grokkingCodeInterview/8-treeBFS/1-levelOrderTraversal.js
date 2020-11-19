/*
(easy)

Problem Statement

Given a binary tree, populate an array to represent its 
level-by-level traversal. You should populate the values 
of all nodes of each level from left to right in separate 
sub-arrays.

Ex1

        1
    2      3
  4   5   6  7

Level Order Traversal: 
[[1],[2,3],[4,5,6,7]]

Ex2
        12
      7     1
    9      10  5

Level Order Traversal: 
[[12],[7,1],[9,10,5]]

*/

class BinaryTree {
  constructor(value, left = null, right = null) {
    this.value = value; 
    this.left = left; 
    this.right = right; 
  }
};

// -BFT => queue (FIFO); DFT => stack (FILO)
// NOTE: Consider using linked list implementation of queue to get O(1) dequeue time complexity. Look into double ended queue. 
class Queue {
  constructor(items = []) {
    this.items = items;
  }
  // O(1) operation
  enqueue(item) {
    this.items.push(item);
  }
  // O(n) operation
  dequeue() {
    if (this.items.length < 1) {
      return 'queue is empty'
    } else {
      return this.items.shift()
    }
  }
}

// time complexity: O(n)
// space complexity: O(n)
function levelOrderTraversal(binaryTreeRoot) {
  let queue = new Queue();
  let levelOrderArr = [];
  queue.enqueue(binaryTreeRoot);

  while (queue.items.length > 0) {
    let levelSize = queue.items.length;
    let levelArr = []; 

    for (let i = 0; i < levelSize; i++) {
      let levelNode = queue.dequeue(); 
      if (levelNode.left) {
        queue.enqueue(levelNode.left);
      }
      if (levelNode.right) {
        queue.enqueue(levelNode.right);
      }
      levelArr.push(levelNode.value);
    }

    levelOrderArr.push(levelArr);
  }

  return levelOrderArr
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

console.log(levelOrderTraversal(bt1));
console.log(levelOrderTraversal(bt2));