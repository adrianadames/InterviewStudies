/*
(medium)

Problem Statement: 

Given the head of a LinkedList and two positions ‘p’ and ‘q’, 
reverse the LinkedList from position ‘p’ to ‘q’.

original list: p = 2, q = 4

head ->1 ->2 ->3 ->4 ->5 ->null
head ->1 ->4 ->3 ->2 ->5 ->null
*/

// - keep track of position on the linked list; 
// - note: i'm going to make an assumption; I'm going to assume that the position 
// indexing starts with the number 1 at the head; 

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

function reverseSubList(head, p, q) {
    if (p === q || head === null || head.next === null) {
        return head
    }

    let position = 1;
    let current = head;
    let prev = null; 

    // - skip the first p - 1 nodes
    while (position < p) {
        prev = current;
        current = current.next;
        position++;  
    }
    // - at this point, current is at position p and prev is at position p - 1; we need to  
    // keep track of the node at prev because when we reverse p through q, we need the node 
    // at q to be the next of this node
    let frontNode = prev; 

    // - we also keep track of the node at p; this node will the be last node in the reversed sublist
    let lastNodeOfSublist = current; 

    // - we reverse the sublist from p to q; 
    while (position <= q) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        position++;
    }

    // - at the end of the reversal, current is the node right after q (i.e. at the position q + 1), and no 
    // nodes have it as the next node; we need to keep track of this node because this is what the node that 
    // was originally at p needs to have as the next node
    let backNode = current;

    // - and prev is now the node at q which is now the head of the sublist we just reversed
    if (frontNode !== null) {
        frontNode.next = prev;
    } else {
        head = prev;
    }    

    lastNodeOfSublist.next = backNode

    return head
}

// console.log('reverseSubList: ', reverseSubList(head, 1, 4));

let node = reverseSubList(head, 2, 4);

while (node) {
    console.log('node: ', node.value);
    node = node.next;
}


