/*
(easy)

Problem Statement: 
Given the head of a Singly LinkedList, write a function to 
determine if the LinkedList has a cycle in it or not.
*/

class Node {
    constructor(id, next = null) {
        this.id = id; 
        this.next = next;
    }
}

// time complexity: O(n)
// space complexity: O(2) = O(1);
function linkedListCycle(head) {
    if (head === null || head.next === null) {
        return false
    }
    let slowPointer = head; 
    let fastPointer = head; 

    // - if fastPointer is null, we don't have a cycle
    // - if fastPointer.next is null, we don't have a cycle;
    while (fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
        if (fastPointer === slowPointer) {
            return true; 
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
console.log('linked list has cycle: ', linkedListCycle(head));

// // 7th node = 3rd node (i.e. have 6th node point to the 3rd node)
// head.next.next.next.next.next.next = head.next.next;
// console.log('linked list has cycle: ', linkedListCycle(head));

// // 7th node = 2nd node (i.e. have 6th node point to the 2nd node)
// head.next.next.next.next.next.next = head.next.next.next;
// console.log('linked list has cycle: ', linkedListCycle(head));