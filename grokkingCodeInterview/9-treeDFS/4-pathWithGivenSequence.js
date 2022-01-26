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

function hasSequence(binaryTree, numberSequenceArr) {
    return getPath(binaryTree, numberSequenceArr)
}

function getPath(binaryTree, numberSequenceArr, currentPath = []) {

    if (binaryTree === null) {
        return 
    } 

    currentPath = [...currentPath, binaryTree.value];

    if (binaryTree.left === null && binaryTree.right === null) {
        console.log('currentPath: ', currentPath);

        let sequencePresent = true; 

        for (let i = 0; i < numberSequenceArr.length; i++) {
            // console.log('i: ', i)
            // console.log('currentPath[i]: ', currentPath[i]);
            console.log('numberSequenceArr[i]: ', numberSequenceArr[i]);
            
            // if (currentPath[i] !== numberSequenceArr[i]) {
            //     console.log('test');
            //     sequencePresent = false;
            // }
        }
        console.log('sequencePresent: ', sequencePresent);
        return sequencePresent
    } else {
        getPath(binaryTree.left,numberSequenceArr, currentPath);
        getPath(binaryTree.right,numberSequenceArr, currentPath);
    }
}

console.log('hasSequence: ', hasSequence(bt1, [1,9]))

