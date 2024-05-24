/*
(easy)

Problem Statement: 
-Given the head of a Singly LinkedList, write a method 
to return the middle node of the LinkedList. If the total 
number of nodes in the LinkedList is even, return the 
second middle node.

Example 1:
    Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
    Output: 3
Example 2:
    Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
    Output: 4
Example 3:
    Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> null
    Output: 4
*/

// -start with slow and fast pointer p1 and p2 respectively 
// pointing at the head
// -p1 moves one step at a time and p2 moves two steps at a time
// -I drew it out and proved to myself that if p2.next === null, 
// p1 will be pointing at the middle node; and if p2.next.next === null,
// p1.next will be the 2nd middle node