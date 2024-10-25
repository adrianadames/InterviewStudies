/*
(medium)

Given the head node of a singly linked list, modify 
the list such that any node that has a node with a 
greater value to its right gets removed. The function 
should return the head of the modified list.

Example 1
Input: 5 -> 3 -> 7 -> 4 -> 2 -> 1
Output: 7 -> 4 -> 2 -> 1
Explanation: 5 and 3 are removed as they have nodes with larger values to their right.

Example 2
Input: 1 -> 2 -> 3 -> 4 -> 5
Output: 5
Explanation: 1, 2, 3, and 4 are removed as they have nodes with larger values to their right.

Example 3
Input: 5 -> 4 -> 3 -> 2 -> 1
Output: 5 -> 4 -> 3 -> 2 -> 1
*/

class Node {
    constructor(value, next = null) {
        this.value = value; 
        this.next = next;
    }
}

function removeNodesFromLinkedList(head) {
    let nextNode = head; 
    let stack = [];
    while (nextNode !== null) {
        while (stack.length > 0 && nextNode.value > stack[stack.length -1].value) {
            stack.pop();
        }
        stack.push(nextNode);
        nextNode = nextNode.next;
    }
   
    nextNode = null;
    while (stack.length > 0) {
        let prev = stack.pop();
        prev.next = nextNode; 
        nextNode = prev;
    }

    return nextNode;
}


let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);
let n6 = new Node(6);
let n7 = new Node(7);

// // // ex 1: Input: 5 -> 3 -> 7 -> 4 -> 2 -> 1
// n5.next = n3;
// n3.next = n7;
// n7.next = n4;
// n4.next = n2;
// n2.next = n1;
// console.log('removeNodesFromLinkedList(ll.head): ', removeNodesFromLinkedList(n5));

// // ex 2:  1 -> 2 -> 3 -> 4 -> 5
// n1.next = n2;
// n2.next = n3;
// n3.next = n4;
// n4.next = n5;
// console.log('removeNodesFromLinkedList(l2.head): ', removeNodesFromLinkedList(n1));


// // ex 3:  5 -> 4 -> 3 -> 2 -> 1
// n5.next = n4;
// n4.next = n3;
// n3.next = n2;
// n2.next = n1;
// console.log('removeNodesFromLinkedList(l3.head): ', removeNodesFromLinkedList(n5));


