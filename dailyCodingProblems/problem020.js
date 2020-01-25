/*
This problem was asked by Google.

Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

In this example, assume nodes with the same value are the exact same node objects.

Do this in O(M + N) time.
*/

class Node {
    constructor(value = null, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
        // this.tail = tail;
        // this.size = size;
    }

    addToTail(node) {
        const newTail = node;
        newTail.next = null;
        if (this.head === null) {
            this.head = newTail;
            return newTail
        } else {
            let currentNode = this.head;
            while (currentNode) {
                if (currentNode.next !== null) {
                    currentNode = currentNode.next;
                } else {
                    currentNode.next = newTail;
                    return newTail
                }
            }
        }
    }

}

let n1 = new Node(3);
let n2 = new Node(7);
let n3 = new Node(8);
let n4 = new Node(10);
let n5 = new Node(99);
let n6 = new Node(1);

let l1 = new LinkedList();
let l2 = new LinkedList();

l1.addToTail(n1);
l1.addToTail(n2);
l1.addToTail(n3);
l1.addToTail(n4);

l2.addToTail(n5);
l2.addToTail(n6);
l2.addToTail(n3);
l2.addToTail(n4);

console.log('l1: ', l1)
console.log('l2: ', l2)


// let n1 = new Node(3);
// let n2 = new Node(4);
// let n3 = new Node(5);
// console.log('n1: ', n1, 'n2: ', n2, 'n3: ', n3);

// let l1 = new LinkedList();
// l1.addToTail(n1)
// l1.addToTail(n2)
// l1.addToTail(n3)
// console.log('l1: ', l1)

function findIntersectingNode(l1, l2) {
    let l1Dependencies = {};
    let currentNode = l1.head;

    while (currentNode.next) {
        l1Dependencies[currentNode.next.value] = currentNode.value;
        currentNode = currentNode.next
    }

    console.log('l1Dependencies: ', l1Dependencies)

    currentNode = l2.head;
    while(currentNode.next) {
        if (l1Dependencies[currentNode.next.value]) {
            console.log('currentNode.next: ', currentNode.next)
            return currentNode.next
        } else {
            currentNode = currentNode.next
        }
    }
    
}

findIntersectingNode(l1,l2)