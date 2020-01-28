/*
This problem was asked by Google.

Given the head of a singly linked list, swap every two nodes 
and return its head.

For example, given 1 -> 2 -> 3 -> 4, return 2 -> 1 -> 4 -> 3.

NOTE: THE APPROACH BELOW ISN'T WORKING. THINK SMARTER. 
*/

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);

// console.log(n1, n2)

n1.next = n2;
n2.next = n3;
n3.next = n4;

console.log(n1.next)

function swapEveryTwoNodes(head) {
    let count = 0;
    let currentNode = head;
    let newHead = currentNode.next;
    let temp1, temp2;

    while (count < 1) {
        if (count % 2 === 0) {
            temp1 = currentNode;
            console.log('temp1: ', temp1);
            temp2 = currentNode.next;
            console.log('temp2: ', temp2);
            console.log('temp2.next: ', temp2.next);
            
            currentNode = temp2;
            currentNode.next = temp1;
            console.log('currentNode.next: ', currentNode.next);
            currentNode.next.next = temp2.next;
            console.log('currentNode.next.next: ', currentNode.next.next);

            count +=1;
        } else {
            count +=1;
            currentNode = currentNode.next
        }
    }

    return newHead
}

console.log(swapEveryTwoNodes(n1))