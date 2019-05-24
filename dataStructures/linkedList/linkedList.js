/*
NOTE: 
-See chapter 10 in Cormen and chapter 7 (Linked Lists) in Goodrich. 

Methods: 
-addToTail (replaces the tail with a new value that is passed in)
-removeHead (deletes head)
-addNewHead (puts a new head node in front of the current head)
-contains (should search through the linked list and return true if a matching value is found)
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
    
    removeHead() {
        let currentNode = this.head;
        let next = null;
        let prev = null;

        if (currentNode === null) {
            return null;
        } else {
            this.head = currentNode.next;
            //free memory from former head node
            return this.head;
        }
    }

    addNewHead(node) {
        const newHead = node;

        if (this.head === null) {
            this.head = newHead;
            return newHead
        } else {
            newHead.next = this.head;
            this.head = newHead;
            return newHead
        }
    }

    contains(value) {
        // if (this.head === null) {
        //     return false
        // }
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return true
            }
            else {
                currentNode = currentNode.next
            }
        }
        return false
    }

    getMax() {
        if (this.head === null) {
            return null
        }
        let currentNode = this.head;
        let maxValue = null;

        while (currentNode !== null) {
            if (currentNode.value > maxValue) {
                maxValue = currentNode.value;
                currentNode = currentNode.next;
            }
            else {
                continue;
            }
        }
        return maxValue
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



// // //  REMOVE HEAD tests
// // test #1
// let n1 = new Node(3);
// let n2 = new Node(4);
// let n3 = new Node(5);
// let l1 = new LinkedList();

// l1.addToTail(n1)
// l1.addToTail(n2)
// l1.addToTail(n3)

// console.log(l1.head.value);
// l1.removeHead();
// console.log(l1.head.value);


// // //  ADD NEW HEAD tests
// // test #1
// let n1 = new Node(3);
// let n2 = new Node(4);
// let n3 = new Node(5);
// let n4 = new Node(14);
// let l1 = new LinkedList();

// l1.addToTail(n1)
// l1.addToTail(n2)
// l1.addToTail(n3)

// console.log(l1.head.value); // 3
// l1.addNewHead(n4);
// console.log(l1.head.value); // 14

// l1.addNewHead(new Node(213213)) 
// console.log(l1.head.value); // 213213

// l1.addNewHead(new Node()) 
// console.log(l1.head.value); // null 


// // //  CONTAINS tests
// // test #1
// let n1 = new Node(3);
// let n2 = new Node(4);
// let n3 = new Node(5);
// let n4 = new Node(14);
// let l1 = new LinkedList();

// l1.addToTail(n1)
// l1.addToTail(n2)
// l1.addToTail(n3)
// l1.addToTail(n4)

// console.log(l1.contains(6)); // false
// console.log(l1.contains(14)); // true

// // test #2
// let l2 = new LinkedList();
// console.log(l2.contains()); // false
// console.log(l2.contains(null)); // false
// console.log(l2.contains(5)); // false




// // //  GET MAX tests
// // test #1
// let n1 = new Node(3);
// let n2 = new Node(4);
// let n3 = new Node(5);
// let n4 = new Node(14);
// let l1 = new LinkedList();

// l1.addToTail(n1)
// l1.addToTail(n2)
// l1.addToTail(n3)
// console.log(l1.getMax()) // 5
// l1.addToTail(n4)
// console.log(l1.getMax()) // 14

// // test #2
// let l2 = new LinkedList();
// console.log(l2.getMax()); // null