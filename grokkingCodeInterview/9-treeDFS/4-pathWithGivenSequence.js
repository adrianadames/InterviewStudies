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