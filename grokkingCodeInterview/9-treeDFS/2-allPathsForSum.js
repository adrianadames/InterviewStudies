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

function allPathsForSum1(binaryTree, sum) {
    let allPaths = [];
    find_paths_recursive(binaryTree, sum, [], allPaths);
    return allPaths
}

function find_paths_recursive(currentNode, sum, currentPath, allPaths) {
    if (currentNode === null) {
        return
    }

    // add the current node to the path
    currentPath.push(currentNode.value);

    // if node a leaf and node value equals sum, save current path to all paths
    if (currentNode.value === sum && currentNode.left === null && currentNode.right === null) {
        allPaths.push(currentPath.slice());
    } else {
        find_paths_recursive(currentNode.left, sum-currentNode.value, currentPath, allPaths);
        find_paths_recursive(currentNode.right, sum-currentNode.value, currentPath, allPaths);
    }

    // need to remove current node from current path to backtrack to parent node
    currentPath.pop();
}

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

console.log('allPathsForSum1: ', allPathsForSum1(bt1, 12));
// console.log(allPathsForSum1(bt2, 23));
// console.log(allPathsForSum1(bt2, 18));


// SECOND TRY OFF THE TOP
function allPathsForSum2(binaryTree, desiredSum, allPaths = [], currentPath = [], currentPathSum = 0) {
    // -so for this problem, i have to calculate the sum of all the root to leaf paths
    // -as I traverse the tree, I have to save the numbers I have come across in an array, i.e. the path
    // -once I reach a leaf, if the pathSum = desiredSum, then I should add that path array to the 
    // allPaths array

    if (binaryTree === null) {
        return []
    }

    let path = [...currentPath, binaryTree.value];
    let pathSum = currentPathSum + binaryTree.value;

    if (binaryTree.left === null && binaryTree.right === null) {
        if (pathSum === desiredSum) {
            allPaths.push(path)
        }
    }

    allPathsForSum2(binaryTree.left, desiredSum, allPaths,path, pathSum);
    allPathsForSum2(binaryTree.right, desiredSum, allPaths,path, pathSum);

    return allPaths
}

console.log('allPathsForSum2: ', allPathsForSum2(bt1, 12))


// is there a better way I can do this problem?
// how can I avoid the use of those extra arguments I have: currentPath, currentPathSum, allPaths?
// are some avoidable? which ones?

// solution: use helper function getPaths. see below. 

function allPathsForSum3(binaryTree, desiredSum) {
    let allPaths = [];
    getPaths(binaryTree, desiredSum, allPaths); 
    return allPaths

}

function getPaths(binaryTree, desiredSum, allPaths, currentPath = [], currentPathSum= 0 ) {
    if (binaryTree === null) {
        return 
    }
    currentPath = [...currentPath, binaryTree.value];
    // // how does this approach differ from uncommented with respect to memory big O?
    // currentPath.push(binaryTree.value); // using this approach, need to pop from currentPath at end; compare to allPathsForSum1
    
    currentPathSum += binaryTree.value;

    if (binaryTree.left === null && binaryTree.right === null) {
        if (currentPathSum === desiredSum) {
            allPaths.push(currentPath);
            //allPaths.push(currentPath.slice());
        }
    }

    getPaths(binaryTree.left, desiredSum, allPaths, currentPath, currentPathSum);
    getPaths(binaryTree.right, desiredSum, allPaths, currentPath, currentPathSum);

    // currentPath.pop();
}

console.log('allPathsForSum3: ', allPathsForSum3(bt1, 12));
