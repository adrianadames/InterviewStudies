/*

(medium)

Problem Statement

Given a binary tree and a number sequence, find if the 
sequence is present as a root-to-leaf path in the given tree.

Ex1

        1*
    7      9*
          2  9*

Sequence: [1, 9, 9]
Output: true 
Explanation: The tree has a path 1 -> 9 -> 9.

Ex2
        1*
      0     1*
    1      6*  5

Sequence: [1, 0, 7]
Output: false 
Explanation: The tree does not have a path 1 -> 0 -> 7.  

Sequence: [1, 1, 6]
Output: true 
Explanation: The tree has a path 1 -> 1 -> 6. 

*/

class BinaryTree {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.right = right;
        this.left = left;
    }
}

let bt1 = new BinaryTree(1);
bt1.left = new BinaryTree(7);
bt1.right = new BinaryTree(9);
bt1.right.left = new BinaryTree(2);
bt1.right.right = new BinaryTree(9);

let bt2 = new BinaryTree(1);
bt2.left = new BinaryTree(0);
bt2.right = new BinaryTree(1);
bt2.right.left = new BinaryTree(6);
bt2.right.right = new BinaryTree(5);


// Given a binary tree and a number sequence, find if the 
// sequence is present as a root-to-leaf path in the given tree.

function pathWithGivenSequence(binaryTree, desiredSequenceArr) {
    let qualifyingPaths = [];
    let desiredSequenceStr = '';
    desiredSequenceArr.forEach(nodeValue => desiredSequenceStr += '-' + String(nodeValue));

    // console.log('desiredSequenceStr: ', desiredSequenceStr);

    traverseTree(binaryTree, desiredSequenceStr, qualifyingPaths);

    return (qualifyingPaths.length >= 1 ? true: false)
}

function traverseTree(binaryTree, desiredSequenceStr,qualifyingPaths, currentPath =[]) {
    if (binaryTree === null) {
        return 
    }

    currentPath.push(binaryTree.value);

    if (binaryTree.left === null && binaryTree.right === null) {
        let pathSequenceStr = '';
        currentPath.forEach(nodeValue => pathSequenceStr += '-' + String(nodeValue));
        
        // console.log('pathSequenceStr: ', pathSequenceStr);

        if (pathSequenceStr === desiredSequenceStr) {
            qualifyingPaths.push(currentPath.slice());
        }
    }

    traverseTree(binaryTree.left, desiredSequenceStr,qualifyingPaths, currentPath);
    traverseTree(binaryTree.right, desiredSequenceStr,qualifyingPaths, currentPath);

    currentPath.pop();
}

console.log('pathWithGivenSequence: ', pathWithGivenSequence(bt1, [1, 9, 9]));
console.log('pathWithGivenSequence: ', pathWithGivenSequence(bt2, [1, 0, 7]));
console.log('pathWithGivenSequence: ', pathWithGivenSequence(bt2, [1, 1, 6]));