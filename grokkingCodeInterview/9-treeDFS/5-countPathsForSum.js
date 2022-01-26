/*

(medium)

Problem Statement

Given a binary tree and a number ‘S’, find all paths in the tree 
such that the sum of all the node values of each path equals ‘S’. 
Please note that the paths can start or end at any node but all 
paths must follow direction from parent to child (top to bottom).

Ex1

        1
    7      9
  6   5   2  3

S: 12
Output: 3
Explanation: There are three paths with sum '12':7 -> 5, 1 -> 9 -> 2, and 9 -> 3 

Ex2
        12
      7     1
    4      10  5

S: 11
Output: 2
Explanation: Here are the two paths with sum '11':7 -> 4 . and 1 -> 10.  
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
bt1.left.left = new BinaryTree(6);
bt1.left.right = new BinaryTree(5);
bt1.right.left = new BinaryTree(2);
bt1.right.right = new BinaryTree(3);
// console.log('bt1: ', bt1);


// ex 2 BT
let bt2 = new BinaryTree(12);
bt2.left = new BinaryTree(7);
bt2.right = new BinaryTree(1);
bt2.left.left = new BinaryTree(4);
bt2.right.left = new BinaryTree(10);
bt2.right.right = new BinaryTree(5);
// console.log('bt2: ', bt2);