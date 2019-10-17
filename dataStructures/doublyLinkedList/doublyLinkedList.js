/*
NOTE: 
-See chapter 10 in Cormen and chapter 7 (Linked Lists) in Goodrich. 
-Need to look up common methods for linked lists in case there are some I'm unware of

Methods: 
-addToTail
-addNewHead
-removeHead (NOT WORKING)

*/

class Node {
    constructor(value = null, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor(headerSentinel = null, trailerSentinel = null) {
        this.headerSentinel = new Node(headerSentinel);
        this.trailerSentinel = new Node(trailerSentinel);
        this.headerSentinel.next = this.trailerSentinel;
        this.trailerSentinel.prev = this.headerSentinel;
    }

    //helper method
    insertBetween(value, prevNode,nextNode) {
        // add element between the nodes prevNode and nextNode
        const newNode = new Node(value, prevNode, nextNode);
        prevNode.next = newNode;
        nextNode.prev = newNode;
        // return newNode
    }

    addNewHead(value) {
        if (this.headerSentinel.next === this.trailerSentinel) {
            this.insertBetween(value, this.headerSentinel, this.trailerSentinel);
        } else {
            const oldHead = this.headerSentinel.next; 
            this.insertBetween(value, this.headerSentinel, oldHead);
        }
    }

    addToTail(value) {
        if (this.headerSentinel.next === this.trailerSentinel) {
            this.insertBetween(value, this.headerSentinel, this.trailerSentinel);
        } else {
            const oldTail = this.trailerSentinel.prev;
            this.insertBetween(value, oldTail, this.trailerSentinel);
        }
    }

    //helper function
    removeNode(node) {
        const prevNode = node.prev;
        const nextNode = node.next;
        
        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        node.next = null;
        node.prev = null;
    }

    removeHead() {
        if (this.headerSentinel.next === this.trailerSentinel) {
            return 'Error: The linked list is empty';
        } else {
            const currentHead = this.headerSentinel.next;
            this.removeNode(currentHead);
        }
    }
}


let d1 = new DoublyLinkedList();
let n1 = new Node(2);
let n2 = new Node(3);
// d1.insertBetween(8, d1.headerSentinel, d1.trailerSentinel);
// d1.addNewHead(n1);
// d1.addNewHead(n2);
d1.addToTail(2);
// console.log('d1: ', d1.trailerSentinel.prev)
d1.addToTail(3);
// console.log('d1: ', d1.trailerSentinel.prev)
console.log('d1: ', d1.headerSentinel.next)
d1.removeHead(d1);
// d1.removeHead(d1);
console.log('d1: ', d1.headerSentinel.next)