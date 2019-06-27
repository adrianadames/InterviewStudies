/*

Kth to Last Node in a Singly-Linked List

Given a pointer to the head element of a linked list, write a function that also 
takes an integer parameter k and returns the kth to last node of the list.


NOTE: I FINISHED PROBLEM BUT HAVEN'T FULLY ANALYZED PROS/CONS (space and time complexity) of EACH APPROACH.

For example:

class ListNode {
 constructor(value) {
   this.value = value;
   this.next = null;
 }
}

let a = new ListNode("Australian Sheperd");
let b = new ListNode("Beagle");
let c = new ListNode("Cairne Terrier");
let d = new ListNode("Dobermann");
let e = new ListNode("English Mastiff");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

kthToLastNode(2, a);  // returns the node with value "Dobermann" (the 2nd to last node)

*/


/* 
Approach: 
1) Go through each node and count how many nodes are in the linked list
2) The kth to the last node in the linked list is then the node at position ((length of linked list) - (k))

*/


// //ARRAY APPROACH
let returnKthToLastNodeArray = (k,head) => {
    let count = 1;
    let store = [head];
    let currentNode = head;

    while (currentNode.next !== null) {
        count +=1;
        currentNode = currentNode.next;
        store.push(currentNode)
    }
    console.log('kthToLastNode: ', store[store.length-k])
}

//COUNTING APPROACH
let returnKthToLastNodeCounting = (k,head) => {
    let count = 1;
    let currentNode = head;

    while (currentNode.next !== null) {
        count +=1;
        currentNode = currentNode.next;
    }

    console.log('number of nodes in linked list: ', count);
    let numberOfNodes = count;

    currentNode = head;
    for (let i = 0; i<numberOfNodes-k;i++) {
        currentNode = currentNode.next;
    }
    console.log('kthToLastNode ', currentNode);
    return currentNode
}



class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}
   
let a = new ListNode("Australian Sheperd");
let b = new ListNode("Beagle");
let c = new ListNode("Cairne Terrier");
let d = new ListNode("Dobermann");
let e = new ListNode("English Mastiff");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

//kthToLastNode(2, a);  // returns the node with value "Dobermann" (the 2nd to last node)


returnKthToLastNodeCounting(2, a);
returnKthToLastNodeArray(2, a);



