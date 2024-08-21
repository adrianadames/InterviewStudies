/*
(easy)

Problem Statement: 

Given the head of a Singly LinkedList, reverse the LinkedList. 
Write a function to return the new head of the reversed LinkedList.

original list: 2 ->4 ->6 ->8 ->10 ->null
reversed list: null<- 2<- 4<- 6<- 8<- 10

*/

class Node {
    constructor(value, next = null) {
        this.value = value; 
        this.next = next;
    }
}

let head = new Node(2);
head.next = new Node(4);  
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

function reverseLinkedList(head) {
    if (head === null || head.next === null) {
        return head
    }
    let current = head;
    let newNext = null;

    while (current) {
        let next = current.next;
        current.next = newNext;  
        newNext = current;
        current = next;
    }
    return newNext
}

console.log('reverseLinkedList: ', reverseLinkedList(head));