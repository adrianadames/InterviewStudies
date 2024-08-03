/*
(medium)

Problem Statement: 
-Given the head of a Singly LinkedList, write a method to modify 
the LinkedList such that the nodes from the second half of the 
LinkedList are inserted alternately to the nodes from the first 
half in reverse order. So if the LinkedList has 
nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should 
return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.

Your algorithm should not use any extra space and the input 
LinkedList should be modified in-place.

Example 1:
    Input: 2 -> 4 -> 6 -> 8 -> 10 -> 12 -> null
    Output: 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null 
Example 2:
    Input: 2 -> 4 -> 6 -> 8 -> 10 -> null
    Output: 2 -> 10 -> 4 -> 8 -> 6 -> null
*/

class Node {
    constructor(value, next = null) {
        this.value = value; 
        this.next = next;
    }
}


let n1 = new Node(2);
n1.next = new Node(4); 
n1.next.next = new Node(6);
n1.next.next.next = new Node(8);
n1.next.next.next.next = new Node(10);

let n2 = new Node(2);
n2.next = new Node(4); 
n2.next.next = new Node(6);
n2.next.next.next = new Node(8);
n2.next.next.next.next = new Node(10);
n2.next.next.next.next.next = new Node(12);

let n3 = new Node(1); 
n3.next = new Node(2); 
n3.next.next = new Node(3);
n3.next.next.next = new Node(4);
n3.next.next.next.next = new Node(5);



function reverseLinkedList(head) {
    let newNext = null;
    let current = head; 
    

    while (current !== null) {     
        let currentNext = current.next; // - points to the original next node
        current.next = newNext; // - change the next value of the current node to the newNext;
        newNext = current; // - point newNext to the current node; 
        current = currentNext; // - point current to the currentNext; 
    }

    return newNext;
}


function printLinkedList(head) {
    let node = head; 
    let linkedListString = '';

    while (node) {
        linkedListString = linkedListString + String(node.value)  + '-> '
        node = node.next;
    }
    return linkedListString
}
// console.log('printLinkedList: ', printLinkedList(n1));
// console.log('printLinkedList: ', printLinkedList(reverseLinkedList(n1)));



function rearrangeALinkedList(head) {
    // - first find the middle of the linked list; 
    // - if we have an even number of nodes, start the reverse on the second half;
    // - if we have an odd number of nodes, start the reverse in the latter half (not including middle node); 
    // in this case; the middle node will end up as the last node; 

    let fast = head; 
    let slow = head;

    // fast.next applies to odd number of nodes, fast.next.next applies to even number of nodes
    while (fast.next !== null && fast.next.next !== null ) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let secondHalfReversedHead;
    if (fast.next) { // - even number of nodes
        secondHalfReversedHead = reverseLinkedList(slow.next); 
    } else { // - odd number of nodes
        secondHalfReversedHead = reverseLinkedList(slow);
    }

    let insertPointer = head;
    let selectPointer = secondHalfReversedHead;

    while (selectPointer.next !== null) {
        let oldNext = insertPointer.next;
        let nextSelect = selectPointer.next;

        insertPointer.next = selectPointer; 
        selectPointer.next = oldNext;

        insertPointer = oldNext;
        selectPointer = nextSelect; 
    }

    return head
}

let rearranged1 =  rearrangeALinkedList(n1);
console.log('rearranged1: ', printLinkedList(rearranged1));

let rearranged2 =  rearrangeALinkedList(n2);
console.log('rearranged2: ', printLinkedList(rearranged2));

let rearranged3 =  rearrangeALinkedList(n3);
console.log('rearranged3: ', printLinkedList(rearranged3));
