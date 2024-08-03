/*
(medium)

Problem Statement: 
-Given the head of a Singly LinkedList, write a method to check 
if the LinkedList is a palindrome or not.
-Your algorithm should use constant space and the input 
LinkedList should be in the original form once the algorithm is 
finished. The algorithm should have O(N) time complexity 
where ‘N’ is the number of nodes in the LinkedList.

Example 1:
    Input: 2 -> 4 -> 6 -> 4 -> 2 -> null
    Output: true
Example 2:
    Input: 2 -> 4 -> 6 -> 4 -> 2 -> 2 -> null
    Output: false
*/

// -palindrome: a word, phrase, or sequence that reads the 
// same backward as forward, e.g., madam or nurses run.

class Node {
    constructor(value, next = null) {
        this.value = value; 
        this.next = next;
    }
};

function reverseLinkedList(head) {
    let currentNode = head;  // points to head node 1
    let nextNode = head.next;  // points to node 2
    let newNextNode = null; // points to null

    while (nextNode) {
        currentNode.next = newNextNode; // node 1 next is now null; null <- 1  2 -> null
        newNextNode = currentNode;  // newNext now point to 1;
        currentNode = nextNode // currentNode now points to 2; 
        nextNode = currentNode.next // nextNode now point to 3; 
    }

    currentNode.next = newNextNode;

    return currentNode; 
};



// - first find the middle of the linked list; 
// - then reverse the second half of the list; 
// - then check if the first half and the reversed second half match; 
// - if they match, palidromeCheck = true, else palindromeCheck = false;
// - re-reverse the second half of the list to bring it back to original form; 

function palindromeLinkedList(head) {
    let fast = head; 
    let slow = head; 
    let count = 0; 

    // - if the number of nodes is odd, when at the end, fastPointer points to a node, and
    //   fastpointer.next points to null; 
    // - if the number of nodes is even, when at the end, fastPointer points to null;
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next; 
        count++;
    }

    // - if number of nodes is odd, slow is pointing to middle node
    // - if number of nodes is even, slow pointing to first of the two middle nodes; 
    let middlePointer = slow; 

    let palindromeCheck = true; 

    // - if number of nodes is even;
    if (fast.next && fast.next.next === null) {  
        // - the two middle nodes must equal each other for it to be a palindrome; 
        if (middlePointer.value === middlePointer.next.value) {
            // - if the two middle nodes are equal, advance the middle pointer by one; 
            middlePointer = middlePointer.next; 
        } else {
            palindromeCheck = false;
        }
    }

    // - if number of nodes odd, leave middle pointer where it is; 


    // - now, to check if the list is a palindrome we reverse the second half of the list by 
    // passing the middle node to the reverseLinkedList function; we check if the two sides of 
    // the list are equal, and then we reverse the linked list again starting with the middle node

    let firstHalf = head; 
    let secondHalfReversed = reverseLinkedList(middlePointer);
    // console.log('secondHalfReversed: ', secondHalfReversed);

    // -having reversed the second half of the list, we now check if it's equal to first half

    let leftPointer = head; 
    let rightPointer = secondHalfReversed;
    for (let i = 0; i < count ; i++) {
        if (leftPointer.value !== rightPointer.value) {
            palindromeCheck = false;
        }
        leftPointer = leftPointer.next;
        rightPointer = rightPointer.next
    }

    // - then we need to re-reverse the second half of the linked list so that the original 
    // linked list stays the same as it was originally 
    reverseLinkedList(secondHalfReversed);

    // -original linked list: 
    // console.log('original linked list: ', head)

    // // - checking to make sure linkedlist is the same as original 
    // let nodes = [];
    // let node = head; 
    // while (node !== null) {
    //     nodes.push(node.value);
    //     node = node.next;
    // }
    // // console.log('nodes: ', nodes)

    return palindromeCheck;
}



// let head = new Node(1);
// head.next = new Node(2); 
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);
// head.next.next.next.next.next = new Node(6);

// let head = new Node(1);
// head.next = new Node(2); 
// head.next.next = new Node(3);
// head.next.next.next = new Node(3);
// head.next.next.next.next = new Node(2);
// head.next.next.next.next.next = new Node(1);
// head.next.next.next.next.next.next = new Node(1);

// let head = new Node(1);
// head.next = new Node(2); 
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(3);
// head.next.next.next.next.next = new Node(2);
// head.next.next.next.next.next.next = new Node(1);
// head.next.next.next.next.next.next.next = new Node(1);


let head = new Node(2);
head.next = new Node(4); 
head.next.next = new Node(6);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(2);
head.next.next.next.next.next = new Node(2);

// console.log('reverseLinkedList: ', reverseLinkedList(head));
console.log('palindromeLinkedList: ', palindromeLinkedList(head));