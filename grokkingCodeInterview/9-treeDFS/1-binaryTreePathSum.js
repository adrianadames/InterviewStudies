/*

(easy)

Problem Statement

Given a binary tree and a number ‘S’, find if the tree has a path 
from root-to-leaf such that the sum of all the node values of that 
path equals ‘S’.

Ex1

        1*
    2      3*
  4   5   6*  7

S: 10
Output: true
Explanation: The path with sum '10' is highlighted 

Ex2
        12*
      7     1*
    9      10*  5

S: 23
Output: true
Explanation: The path with sum '23' is highlighted  
 
S: 16
Output: false
Explanation: There is no root-to-leaf path with sum '16'.
*/

class BinaryTree {
  constructor(value, left = null, right = null) {
    this.value = value; 
    this.left = left; 
    this.right = right; 
  }
};

// first try at the problem
function hasPathSum1(binaryTree, sum) {
    if (binaryTree === null) {
        return false
    }
    // if current node is leaf (i.e. no left or right child) and its 
    // value equal to sum, we have found a path
    if (binaryTree.left === null && binaryTree.right === null && binaryTree.value === sum) {
        return true
    }

    return hasPathSum1(binaryTree.left, sum - binaryTree.value) || hasPathSum1(binaryTree.right, sum - binaryTree.value)
}

// alternate solution 
function hasPathSum2(binaryTree, sum, currentPathSum = 0) {
    let pathSum = currentPathSum; 

    if (binaryTree === null) {
        return false
    } 

    pathSum += binaryTree.value; 

    if (binaryTree.left === null && binaryTree.right === null) {
        if (pathSum === sum) {
            return true
        }
    }

    return hasPathSum2(binaryTree.left, sum, pathSum) || hasPathSum2(binaryTree.right, sum, pathSum)
}

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

console.log(hasPathSum1(bt1, 10)); // returns true
console.log(hasPathSum1(bt1, 12)); // returns false
// console.log(hasPathSum1(bt2, 23)); // returns true
// console.log(hasPathSum1(bt2, 16)); // returns false


console.log(hasPathSum2(bt1, 10)); // returns true
console.log(hasPathSum2(bt1, 12)); // returns false
// console.log(hasPathSum2(bt2, 23)); // returns true
// console.log(hasPathSum2(bt2, 16)); // returns false



