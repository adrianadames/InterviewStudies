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
