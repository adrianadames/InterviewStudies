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

// function countPathsForSum1(binaryTree, sum) {
//     // need to first get all the paths and put them in an array 
//     // then need to combine the digits in each path into a number 
//     // then need to add up the resulting numbers that come from combining the digits
//     let allPaths = [];

//     findPathsRecursive(binaryTree, currentPath = [], allPaths);

//     return allPaths
// }

// function findPathsRecursive(currentNode, currentPath, allPaths) {
//     if (currentNode === null) {
//         return
//     }

//     currentPath.push(currentNode.value);

//     if (currentNode.left === null && currentNode.right === null) {
//         allPaths.push(currentPath.slice());
//     } else {
//         findPathsRecursive(currentNode.left, currentPath, allPaths);
//         findPathsRecursive(currentNode.right, currentPath, allPaths);
//     }

//     currentPath.pop();
// }


// console.log(countPathsForSum1(bt1, 12));

// console.log(countPathsForSum1(bt2, 11));

/*
Given a binary tree and a number ‘S’, find all paths in the tree 
such that the sum of all the node values of each path equals ‘S’. 
Please note that the paths can start or end at any node but all 
paths must follow direction from parent to child (top to bottom).
*/

/*
Strategy 

-one way to do this is to first find all the paths in the tree
-then check each path to see if any sequences in the paths add up to the desired sum

*/

function countPathsForSum2(binaryTree, desiredSum) {

    let allRootToLeafPaths = []; 
    let allPaths = [];
    getAllPaths(binaryTree, allRootToLeafPaths, desiredSum, allPaths); 
    console.log('allRootToLeafPaths: ', allRootToLeafPaths)
    console.log('allPaths: ', allPaths)


    // return allPaths
}


// -the way I like to think about this problem is to first 
//  think about the case where there's only one node; 
// -in that case the only possible sequence is that single value

function getAllPaths(binaryTree, allRootToLeafPaths, desiredSum, allPaths, currentPath = []) {

    if (binaryTree === null) {
        return
    }

    currentPath = [...currentPath, binaryTree.value];
    console.log('currentPath: ', currentPath);

    let pathSum = 0;

    for (let i = currentPath.length-1; i>=0; i--) {
     console.log('currentPath[i]: ', currentPath[i])
     pathSum += currentPath[i];   
     console.log('pathSum[i]: ', pathSum)
     if (pathSum === desiredSum) {
        let identifiedPath = currentPath.slice(i, currentPath.length);
        allPaths.push(identifiedPath);
        console.log('allPaths: ', allPaths)
     }
    }

    // node is a leaf
    if (binaryTree.left === null && binaryTree.right === null) {
        // console.log('currentPath: ', currentPath)
        allRootToLeafPaths.push(currentPath);
        console.log('allRootToLeafPaths: ', allRootToLeafPaths)
    }



    // node not a leaf
    getAllPaths(binaryTree.left, allRootToLeafPaths, desiredSum, allPaths, currentPath);
    getAllPaths(binaryTree.right, allRootToLeafPaths, desiredSum, allPaths, currentPath);
}

// so for this one, let's say that one of the paths is [1, 7, 6];
// the possible paths that are eligible to add up to the desired sum are: 
//      [1], [1, 7], [7, 6], [1, 7, 6], [6]

// is there a way to easily identify which of these paths add up to desired path?
// in other words, is there a way to build the above array as I traverse the tree?

// let's think about it in terms of a node with only a root and two leaves; 

/*
    1
  7 
6
*/



function identifyPaths(allPaths, desiredSum) {

}

/*
             1
        7         9
    
    6       5        2   3
  8  11   19 22    30
*/

bt1.left.left.left = new BinaryTree(8);
bt1.left.left.right = new BinaryTree(11);

bt1.left.right.left = new BinaryTree(19);
bt1.left.right.right = new BinaryTree(22);

bt1.right.left.left = new BinaryTree(30);

/*

      1
    9   34
  2 

*/



let bt11 = new BinaryTree(1);
bt11.left = new BinaryTree(9);
bt11.right = new BinaryTree(34);
bt11.left.left = new BinaryTree(2);
bt11.left.right = new BinaryTree(5);

console.log(countPathsForSum2(bt2, 11))