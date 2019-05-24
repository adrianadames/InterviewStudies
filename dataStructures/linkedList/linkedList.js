/*
NOTE: 
-See chapter 10 in Cormen and chapter 7 (Linked Lists) in Goodrich. 

Methods: 
-addToTail (replaces the tail with a new value that is passed in)
-removeHead (deletes head)
-addToHead (puts a new head node in front of the current head)
-contains (should search through the linked list and return true 

if a matching value is found)
-getMax (returns the maximum value in the linked list)
-containsSequence (?)

Apply knowledge:
-Implement a stack with a singly linked list.
-Implement a queue with a singly linked list.
-Reverse a singly linked list
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




// // //  ADD TO TAIL tests

// // test #1
// let n1 = new Node(3);
// let n2 = new Node(4);
// let n3 = new Node(5);
// console.log('n1: ', n1, 'n2: ', n2, 'n3: ', n3);

// let l1 = new LinkedList();
// l1.addToTail(n1)
// l1.addToTail(n2)
// l1.addToTail(n3)
// console.log('l1: ', l1)

// console.log('n1.value: ', n1.value);
// console.log('n1.next.value: ', n1.next.value);
// console.log('n1.next.next.value: ', n1.next.next.value);
// console.log('n1.next.next.next: ', n1.next.next.next);


// // test #2 (making sure a linked list of null-valued nodes works as expected)
// let n1 = new Node();
// let n2 = new Node();
// let n3 = new Node();
// console.log('n1: ', n1, 'n2: ', n2, 'n3: ', n3);

// let l1 = new LinkedList();
// l1.addToTail(n1)
// l1.addToTail(n2)
// l1.addToTail(n3)
// console.log('l1: ', l1)
// console.log('n1: ', n1, 'n2: ', n2, 'n3: ', n3);

// console.log('n1.value: ', n1.value);
// console.log('n1.next.value: ', n1.next.value);
// console.log('n1.next.next.value: ', n1.next.next.value);
// console.log('n1.next.next.next: ', n1.next.next.next);