/*
This problem was asked by Dropbox.

Given the root to a binary search tree, find the second largest node in the tree.
*/

 

// the largest node occurs when the node doesn't have a right hand side subtree

// two variables - set var 'largest' = root; var = 'secondLargest'
// if you come across node that is larger than the root, set largest to that value


// -first check if tree has RHS; if not, the tree root is the largest
// -then look to the LHS subtree, and set that as the secondLargest
// -if the secondLargest doesn't have a RHS subtree, then that means 
//  that that value is the second largest


// -if tree does have a RHS, set the var secondLargest to the subtree root
//  and set the RHS subtree root as the largest
// -if this largest node has a RHS subtree, set the secondLargest var to that,
//  and set its RHS subtree as the largest
// -if the current largest doesn't have a RHS, return secondLargest

class BST {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    insert(val) {
        let currentBSTRoot = this;
        let newBSTRoot = new BST(val);

        if (newBSTRoot.val >= currentBSTRoot.val) {
            if (!this.right) {
                this.right = newBSTRoot;
            } else {
                currentBSTRoot = this.right;
                currentBSTRoot.insert(val)
            }
        } 
        else if (newBSTRoot.val < currentBSTRoot.val) {
                if (!this.left) {
                    this.left = newBSTRoot;
                } else {
                    currentBSTRoot = this.left;
                    currentBSTRoot.insert(val)
                }
        }  
    }
}

function secondLargestVal(bst) {
    if (!bst.right) {
        return bst.left
    }
    let largest = bst.right;
    let secondLargest = bst;

    if (largest.right === null) {
        return secondLargest.val
    } else {
        return secondLargestVal(largest)
    }
} 




// example tree
let bst1 = new BST(10);
// console.log(bst1.val)

bst1.insert(20);
// console.log(bst1.right.val)

bst1.insert(25);
// console.log(bst1.right.right.val)

bst1.insert(13);
// console.log(bst1.right.left.val)

bst1.insert(26);
 



console.log(secondLargestVal(bst1))