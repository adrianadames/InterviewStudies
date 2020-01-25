/*
This problem was asked by Google.

Given a singly linked list and an integer k, remove the kth last element from 
the list. k is guaranteed to be smaller than the length of the list.

The list is very long, so making more than one pass is prohibitively expensive.

Do this in constant space and in one pass.

NOTE: I'm making a tweak to this problem. In addition to removing the kth to the last node, 
also return what the kth to last node is. 
*/

// so, my solution works, but the way I'm making my linked list data structure might be
// a little weird because in the python solution the input to the function wasn't a 
// linked list data structure, per sae, but instead the head to the data structure

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

// first i'll generate a linked list from an array 

function generateLinkedList(arr) {
    let nodes = [];
    for (let i = 0; i < arr.length; i++) {
        nodes[i] = new Node(arr[i])
    }
    // at this point the nodes are in an array, 
    // then i need to connect the nodes

    let nodeHead = nodes.shift();
    let currentNode = nodeHead;
    while (nodes.length !== 0) {
        currentNode.next = nodes.shift();
        currentNode = currentNode.next;
    }
    currentNode.next = null;

    return new LinkedList(nodeHead)
}



function removeKthToLastNode(linkedList, k) {
    if (!linkedList.head || !k) {
        return linkedList.head
    }
    let linkedListHead = linkedList.head;
    // console.log('linkedListHead: ', linkedListHead);

    let runner = linkedListHead;
    // console.log('runner: ', runner);

    for (let i = 0; i < k; i++) {
        runner = runner.next;
    }

    let dummyNode = new Node(null);

    dummyNode.next = linkedListHead;

    let currentNode = dummyNode;

    while (runner !== null) {
        runner = runner.next;
        currentNode = currentNode.next;
    }

    let nodeToRemove = currentNode.next;
    // console.log('nodeToRemove: ', nodeToRemove);

    currentNode.next = currentNode.next.next;

    // console.log('nodeToRemove: ', nodeToRemove);

    return linkedList 
}

// // EXAMPLE 1
// let exampleLinkedList = generateLinkedList([5, 10, 3, 4, 19, 6]);
// // console.log(exampleLinkedList)
// // console.log(exampleLinkedList.head)
// let newLinkedList = removeKthToLastNode(exampleLinkedList, 2);

// console.log('newLinkedList: ', newLinkedList)

// console.log('newLinkedList.head.next.next.next.next: ', newLinkedList.head.next.next.next.next)

// Example 2
let exampleLinkedList2 = generateLinkedList([5,13]);
// console.log(exampleLinkedList)
// console.log(exampleLinkedList.head)
let newLinkedList2 = removeKthToLastNode(exampleLinkedList2);

console.log('newLinkedList2: ', newLinkedList2.head);

// console.log('newLinkedList2.head.next.next.next.next: ', newLinkedList2.head.next.next.next.next)