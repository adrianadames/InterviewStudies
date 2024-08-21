/*
(medium)

Problem Statement:

Given the head of a LinkedList and a number ‘k’, reverse 
every ‘k’ sized sub-list starting from the head.

If, in the end, you are left with a sub-list with less 
than ‘k’ elements, reverse it too.

original list: k = 3
head ->1 ->2 ->3 ->4 ->5 ->6 ->7 ->8 ->null

reversed sub-list: 
head ->3 ->2 ->1 ->6 ->5 ->4 ->8 ->7 ->null

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
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

function reverseEveryKSizeSubList(head, k) {
    if (head === null || head.next === null || k <= 1) {
        return head;
    }
    let prev = null; 
    let current = head; 

    while (current !== null) {    
        let position = 1; 
        let frontNode = prev;     
        let lastNodeOfReversedSublist = current;

        while (position <= k && current !== null) {
            let next = current.next;
            current.next = prev; 
            prev = current; 
            current = next;
            position++;
        }

        let backNode = current;

        if (frontNode !== null) {
            frontNode.next = prev;
        } else {
            head = prev;
        }

        lastNodeOfReversedSublist.next = backNode;
        prev = lastNodeOfReversedSublist; 
    }
    return head
}

let node = reverseEveryKSizeSubList(head, 3); 
// console.log('node: ', node);
// console.log('node.next.: ', node.next);
// console.log('node.next.next: ', node.next.next);
// console.log('node.next.next.next: ', node.next.next.next);
// console.log('node.next.next.next.next: ', node.next.next.next.next);
// console.log('node.next.next.next.next.next: ', node.next.next.next.next.next);
// console.log('node.next.next.next.next.next.next: ', node.next.next.next.next.next.next);
// console.log('node.next.next.next.next.next.next.next: ', node.next.next.next.next.next.next.next);


while (node) {
    console.log('node: ', node);
    node = node.next;
}
