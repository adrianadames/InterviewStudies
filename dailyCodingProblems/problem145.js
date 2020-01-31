/*
This problem was asked by Google.

Given the head of a singly linked list, swap every two nodes 
and return its head.

For example, given 1 -> 2 -> 3 -> 4, return 2 -> 1 -> 4 -> 3.

NOTE: I eventually gave up and looked up solution. Solution is below, but
I still don't understand it. Will come back to this at a later time. 
*/

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

function swapTwoHelper(node) {

    let first, second, tail;
    if (!node || !node.next) {
        return node
    }

    first = node;
    second = node.next;
    tail = swapTwoHelper(second.next)

    second.next = first;
    first.next = tail;

    return second
}

function swapTwo(head) {
    let dummyHead = new Node(null);
    dummyHead.next = head;

    return swapTwoHelper(head)
}


let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);
let n6 = new Node(6);
let n7 = new Node(7);
let n8 = new Node(8);
let n9 = new Node(9);

// console.log(n1, n2)

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;
n7.next = n8;
n8.next = n9;
// console.log(swapEveryTwoNodes(n1))


let swappedLinkedList = swapTwo(n1)

console.log(swappedLinkedList.next.next.next)



// console.log(n1.next.next.next)














// function swapEveryTwoNodes(head) {
//     if (!head) {
//         return null
//     }

//     let curr = head;
//     let next = head.next;
//     let newHead = next;

//     let i = 0;
//     let j = 0;

//     while ( i < 2) {
//         // current node now points two nodes down
//         curr.next = next.next;

//         // node that curr node was originally pointing to, now points to the original node 
//         next.next = curr;

//         // curr node still refers to the original node we started with
//         // next node now refers to the node that the original pointer is pointing to now (the node two nodes down from where we started)
//         curr = curr;
//         next = curr.next;

//         //current node now points two nodes down
//         curr.next = next.next;

//         while (j < 2) {
//             curr = next;
//             next = curr.next;
            
//             curr.next = next.next;
//             next.next = next.next.next;
    
//             curr = curr.next;
//             curr.next = next;
            
//             j+=1
//         }
//         i+=1
//     }
//     return newHead
// }