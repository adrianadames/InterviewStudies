/*

(hard)

Problem Statement

Find the path with the maximum sum in a given binary tree. Write a 
function that returns the maximum sum. A path can be defined as a 
sequence of nodes between any two nodes and doesn’t necessarily pass 
through the root.

Ex1

        1*
    2*      3*
    4*     5   6*   

Output: 16
Explanation: The path with maximum sum is: [4, 2, 1, 3, 6]

Ex2
            1
        2         3*
      1  3      5*    6*
              7  8*     9*

Output: 31
Explanation: The path with maximum sum is: [8, 5, 3, 6, 9]
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
// bt2.right.left.right.left = new BinaryTree(10);
bt2.right.right.right = new BinaryTree(9);
// bt2.right.right.right.right = new BinaryTree(11);
// console.log('bt2: ', bt2);


// Find the path with the maximum sum in a given binary tree. Write a 
// function that returns the maximum sum. A path can be defined as a 
// sequence of nodes between any two nodes and doesn’t necessarily pass 
// through the root.

function pathWithMaximumSum(binaryTree) {
    let maxSumPath = [];
    getMaxSumPath(binaryTree, maxSumPath);
    // let maxSum = maxSumPath.reduce((previousValue, currentValue) => previousValue + currentValue);
    // return {maxSumPath: maxSumPath, maxSum: maxSum}
    return maxSumPath
}

function getMaxSumPath(binaryTree, maxSumPath, maxSum = 0) {
    if (binaryTree === null) {
        return 
    }

    // -max sum of a given node is the max sum path of its left child 
    // plus the max sum path of its right child plus value of node
    let maxSumPathLeftChild = getMaxNodeToLeafSumPath(binaryTree.left);
    // console.log('maxSumPathLeftChild: ', maxSumPathLeftChild);
    let maxSumPathRightChild = getMaxNodeToLeafSumPath(binaryTree.right);
    // console.log('maxSumPathRightChild: ', maxSumPathRightChild);
    let maxPathSumForNode = 
        maxSumPathLeftChild.reduce((previousValue, currentValue) => previousValue + currentValue, 0) + 
        maxSumPathRightChild.reduce((previousValue, currentValue) => previousValue + currentValue, 0) + 
        binaryTree.value;

    if (maxPathSumForNode > maxSum) {
        maxSum = maxPathSumForNode;
        // console.log('maxSum: ', maxSum);
        maxSumPath.length = 0;
        maxSumPath.push([...maxSumPathLeftChild], [binaryTree.value], [...maxSumPathRightChild]);
        // maxSumPath = [[...maxSumPathLeftChild], [binaryTree.value], [...maxSumPathRightChild]];
        // console.log('maxSumPath: ', maxSumPath);
    }

    getMaxSumPath(binaryTree.left, maxSumPath, maxSum);
    getMaxSumPath(binaryTree.right, maxSumPath, maxSum);
}

function getMaxNodeToLeafSumPath(binaryTree) {
    let maxNodeToLeafSumPath = [];
    getMaxNodeToLeafSumPathTraversal(binaryTree, maxNodeToLeafSumPath);
    // console.log('maxNodeToLeafSumPath: ', maxNodeToLeafSumPath);
    return maxNodeToLeafSumPath
}


function getMaxNodeToLeafSumPathTraversal(binaryTree, maxNodeToLeafSumPath, currentPath = [], maxNodeToLeafSum = 0) {
    if (binaryTree === null) {
        return 
    }

    currentPath.push(binaryTree.value);

    if (binaryTree.left === null && binaryTree.right === null) {
        let pathSum = currentPath.reduce((previousValue, currentValue) => previousValue + currentValue);
        if (pathSum > maxNodeToLeafSum) {
            maxNodeToLeafSum = pathSum;
            maxNodeToLeafSumPath.length = 0;
            maxNodeToLeafSumPath.push(...currentPath);
        }
    }

    getMaxNodeToLeafSumPathTraversal(binaryTree.left, maxNodeToLeafSumPath, currentPath, maxNodeToLeafSum);
    getMaxNodeToLeafSumPathTraversal(binaryTree.right, maxNodeToLeafSumPath, currentPath, maxNodeToLeafSum);

    currentPath.pop();
}

console.log('pathWithMaximumSum: ', pathWithMaximumSum(bt2));