/*

(medium)

Problem Statement

Given a binary tree and a number ‘S’, find all paths from 
root-to-leaf such that the sum of all the node values of 
each path equals ‘S’.

Ex1

        1
    7      9
  4   5   2  7

S: 12
Output: 2
Explanation: There are the two paths with sum '12':1 -> 7 -> 4 and 1 -> 9 -> 2

Ex2
        12
      7     1
    4      10  5

S: 23
Output: 2
Explanation: Here are the two paths with sum '23':12 -> 7 -> 4 and 12 -> 1 -> 10  
*/

class BinaryTree {
  constructor(value, left = null, right = null) {
    this.value = value; 
    this.left = left; 
    this.right = right; 
  }
};

// ex 1 BT
let bt1 = new BinaryTree(1);
bt1.left = new BinaryTree(7);
bt1.right = new BinaryTree(9);
bt1.left.left = new BinaryTree(4);
bt1.left.right = new BinaryTree(5);
bt1.right.left = new BinaryTree(2);
bt1.right.right = new BinaryTree(7);
// console.log('bt1: ', bt1);

// ex 2 BT
let bt2 = new BinaryTree(12);
bt2.left = new BinaryTree(7);
bt2.right = new BinaryTree(1);
bt2.left.left = new BinaryTree(4);
bt2.right.left = new BinaryTree(10);
bt2.right.right = new BinaryTree(5);
// console.log('bt2: ', bt2);
