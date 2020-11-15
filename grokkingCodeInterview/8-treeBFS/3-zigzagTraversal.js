/*
(medium)

Problem Statement

Given a binary tree, populate an array to represent its zigzag 
level order traversal. You should populate the values of all 
nodes of the first level from left to right, then right to left 
for the next level and keep alternating in the same manner for 
the following levels.

Ex1

       1
    2     3
 4    5   6  7

Zigzag Level Order Traversal: 
[[1],[3, 2],[4, 5, 6, 7]]   

Ex2
        12
      7    1
    9      10    5
         20 17

Zigzag Level Order Traversal:
[[12],[1,7],[9,10,5][17,20]] 

*/

// -similar to previous two problems. 
// -for every odd level, make the levelArr as usual
// -for every even level, use a stack to make a levelStack, and then pop items out the stack into levelArr, 
// so that the levelArr comes out in reverse order to what it would usually come out to; 
// -or could just skip the use of a distinct data structure and just use a placeholder array that i treat as a 
// stack with push/pop
// -note: need to compare the above methods to just using unshift for adding elements to levelArr when the level is even