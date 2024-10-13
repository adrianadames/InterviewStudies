/*
(medium)

Problem Statement: 

Given the head of a Singly LinkedList and a number ‘k’, 
rotate the LinkedList to the right by ‘k’ nodes.

Ex 1: 

original list: k = 3
head ->1 ->2 ->3 ->4 ->5 ->6 ->null

rotated linked list: 
head ->4 ->5 ->6 ->1 ->2 ->3 ->null

Ex 2: 

original list: k = 8
head ->1 ->2 ->3 ->4 ->5 ->null

rotated linked list: 
head ->3 ->4 ->5 ->1 ->2 ->null

*/

class Node {
    constructor(value, next = null) {
        this.value = value; 
        this.next = next;
    }
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);
// head.next.next.next.next.next.next = new Node(7);
// head.next.next.next.next.next.next.next = new Node(8);

function rotateLinkedList(head, k) {
    if (head === null || head.next === null || k <= 0) {
        return head
    }

    let prev = null;
    let current = head;
    let size = 0; // - size of linked list

    while (current !== null) {
        prev = current;
        current = current.next;
        size++;
    }

    // - at this point, current should be null; prev at the last node;
    prev.next = head // - making a circular LL
    current = head;

    // - at this point, current at original head node, 
    // and prev at original last node; 

    // - now we find the desired position for the original head node; 
    let position = 1; // we are at original head node; 
    let stepsToTraverse = k % size;

    let desiredPosition = position + stepsToTraverse;

    // - if the desiredPosition is as above, how many nodes do we have left before
    // we should hit null?
    let remainingNodes = size - desiredPosition;

    for (let i = 0; i <= remainingNodes; i++) {
        prev = current;
        current = current.next;
        position++;
    }
    // - here prev is at the position where the next node should be null, and 
    // current should be the new head
    prev.next = null;
    head = current;
    return head
} 

// console.log('rotateLinkedList: ', rotateLinkedList(head, 3))

let node = rotateLinkedList(head, 8); 

while (node) {
    console.log('node: ', node.value);
    node = node.next;
}