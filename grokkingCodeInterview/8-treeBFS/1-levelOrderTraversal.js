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
      let dequeuedNode = queue.dequeue(); 
      if (dequeuedNode.left) {
        queue.enqueue(dequeuedNode.left);
      }
      if (dequeuedNode.right) {
        queue.enqueue(dequeuedNode.right)
      }
      levelArr.push(dequeuedNode.value);
    }

    levelOrderArr.push(levelArr);
  }
  // console.log('levelOrderArr: ', levelOrderArr);
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