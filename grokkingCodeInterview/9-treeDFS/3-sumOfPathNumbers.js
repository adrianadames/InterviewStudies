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

function sumOfPathNumbers1(binaryTree) {
    // need to first get all the paths and put them in an array 
    // then need to combine the digits in each path into a number 
    // then need to add up the resulting numbers that come from combining the digits
    let allPaths = [];

    findPathsRecursive(binaryTree, currentPath = [], allPaths);

    return allPaths
}

function findPathsRecursive(currentNode, currentPath, allPaths) {
    if (currentNode === null) {
        return
    }

    currentPath.push(currentNode.value);

    if (currentNode.left === null && currentNode.right === null) {
        allPaths.push(currentPath.slice());
    } else {
        findPathsRecursive(currentNode.left, currentPath, allPaths);
        findPathsRecursive(currentNode.right, currentPath, allPaths);
    }

    currentPath.pop();
}

console.log(sumOfPathNumbers1(bt1));
console.log(sumOfPathNumbers1(bt2));


/*
Given a binary tree where each node can only have a digit (0-9) value, 
each root-to-leaf path will represent a number. Find the total sum of 
all the numbers represented by all paths.
*/

function sumOfPathNumbers2(binaryTree) {
    let totalSum = [0];
    getPaths(binaryTree, totalSum);
    return totalSum[0]
}

function getPaths(binaryTree, totalSum, currentPathNumber = '') {
    if (binaryTree === null) {
        return 
    }

    currentPathNumber += String(binaryTree.value);

    if (binaryTree.left === null && binaryTree.right === null) {
        totalSum[0] += Number(currentPathNumber);
    }

    getPaths(binaryTree.left, totalSum, currentPathNumber);
    getPaths(binaryTree.right, totalSum, currentPathNumber);
}

console.log('sumOfPathNumbers2: ', sumOfPathNumbers2(bt1));