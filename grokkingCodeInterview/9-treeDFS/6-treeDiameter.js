/*

(medium)

Problem Statement

Given a binary tree, find the length of its diameter. The diameter of 
a tree is the number of nodes on the longest path between any two leaf 
nodes. The diameter of a tree may or may not pass through the root.

Note: You can always assume that there are at least two leaf nodes in 
the given tree.

Ex1

        1*
    2*      3*
    4*     5   6* 

Output: 5
Explanation: The diameter of the tree is: [4, 2, 1, 3, 6]

Ex2
            1
        2       3*
              5*    6*
            7  8*    9*
              10*    11*
Output: 7
Explanation: The diameter of the tree is: [10, 8, 5, 3, 6, 9, 11]   
*/

class BinaryTree {
    constructor(value, left = null, right = null) {
      this.value = value; 
      this.left = left; 
      this.right = right; 
    }
  };
  
  // ex 1 BT
  /*
        1*
    2*      3*
    4*     5   6* 
  */
  let bt1 = new BinaryTree(1);
  bt1.left = new BinaryTree(2);
  bt1.right = new BinaryTree(3);
  bt1.left.right = new BinaryTree(4);
  bt1.right.left = new BinaryTree(5);
  bt1.right.right = new BinaryTree(6);
  // console.log('bt1: ', bt1);
  
  
  // ex 2 BT
   /*
            1
        2       3*
              5*    6*
            7  8*    9*
              10*    11*
  */
  let bt2 = new BinaryTree(1);
  bt2.left = new BinaryTree(2);
  bt2.right = new BinaryTree(3);
  bt2.right.left = new BinaryTree(5);
  bt2.right.right = new BinaryTree(6);
  bt2.right.left.left = new BinaryTree(7);
  bt2.right.left.right = new BinaryTree(8);
  bt2.right.left.right.left = new BinaryTree(10);
  bt2.right.right.right = new BinaryTree(9);
  bt2.right.right.right.right = new BinaryTree(11);
  // console.log('bt2: ', bt2);