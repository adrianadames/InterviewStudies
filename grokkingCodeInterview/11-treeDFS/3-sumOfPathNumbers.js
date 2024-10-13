/*

(medium)

Problem Statement

Given a binary tree where each node can only have a digit (0-9) value, 
each root-to-leaf path will represent a number. Find the total sum of 
all the numbers represented by all paths.

Ex1

        1
    7      9
          2  9

Output: 408 
Explanation: The sum of all path numbers: 17 + 192 + 199

Ex2
        1
    0      1
    1      6  5

Output: 332 
Explanation: The sum of all path numbers: 101 + 116 + 115
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
bt1.right.left = new BinaryTree(2);
bt1.right.right = new BinaryTree(9);
// console.log('bt1: ', bt1);

// ex 2 BT
let bt2 = new BinaryTree(1);
bt2.left = new BinaryTree(0);
bt2.right = new BinaryTree(1);
bt2.left.right = new BinaryTree(1);
bt2.right.left = new BinaryTree(6);
bt2.right.right = new BinaryTree(5);
// console.log('bt2: ', bt2);

// Given a binary tree where each node can only have a digit (0-9) value, 
// each root-to-leaf path will represent a number. Find the total sum of 
// all the numbers represented by all paths.

function sumOfPathNumbers(binaryTree) {
    let allPathsSum = [0];
    traverseTree(binaryTree, allPathsSum);
    return allPathsSum
}

function traverseTree(binaryTree, allPathsSum, currentPath = []) {
    if (binaryTree === null) {
        return
    }

    currentPath.push(binaryTree.value); 
    // console.log('currentPath: ', currentPath);

    if (binaryTree.left === null && binaryTree.right === null) {
        let path = '';

        currentPath.forEach(digit => path += String(digit));
        // console.log('path: ', path);
        allPathsSum[0] += Number(path);
        // console.log('allPathsSum: ', allPathsSum);
    }

    traverseTree(binaryTree.left, allPathsSum, currentPath);
    traverseTree(binaryTree.right, allPathsSum, currentPath);

    currentPath.pop();
}

console.log('sumOfPathNumbers: ', sumOfPathNumbers(bt1));
console.log('sumOfPathNumbers: ', sumOfPathNumbers(bt2));