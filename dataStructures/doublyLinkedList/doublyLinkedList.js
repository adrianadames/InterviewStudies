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
        return node
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

// Methods To Test: 
// -addToTail
// -addNewHead
// -removeHead 


//// TESTS 
let d1 = new DoublyLinkedList();
d1.addNewHead(2);
console.log('d1 head: ', d1.headerSentinel.next)
d1.addNewHead(3);
console.log('d1 head: ', d1.headerSentinel.next)
d1.removeHead();
console.log('d1 head: ', d1.headerSentinel.next) //expect head to be 2 but get 3


let d2 = new DoublyLinkedList();
d2.addToTail(2);
console.log('d2: ', d2.trailerSentinel.prev)
d2.addToTail(3);
console.log('d2: ', d2.trailerSentinel.prev)
d2.removeHead();
console.log('d2 head: ', d2.headerSentinel.next) //expect head to be 2 and get 2