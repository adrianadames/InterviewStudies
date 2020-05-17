/*
(medium)

Problem Statement: 
Given the head of a Singly LinkedList that contains a cycle, 
write a function to find the starting node of the cycle.
*/

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function linkedListCycle(head) {
    if (head.next === null) {
        return false
    }
    let slow = head;
    let fast = head.next;

    while (fast !== null && fast.next !== null) {
        if (slow.value === fast.value) {
            return true
        } else {
            slow = slow.next;
            fast = fast.next.next;
        }
    }
    return false
}

let head = new Node(1);
head.next = new Node(2); 
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

// // 6th node points to null
// console.log('linked list has cycle: ', linkedListCycle(head));

// // 7th node = 3rd node
// head.next.next.next.next.next.next = head.next.next;
// console.log('linked list has cycle: ', linkedListCycle(head));

// // 7th node = 2nd node
// head.next.next.next.next.next.next = head.next.next.next;
// console.log('linked list has cycle: ', linkedListCycle(head));

