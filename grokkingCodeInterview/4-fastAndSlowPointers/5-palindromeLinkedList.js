/*
(medium)

Problem Statement: 
-Given the head of a Singly LinkedList, write a method to check 
if the LinkedList is a palindrome or not. (palindrome: a word, phrase, 
or sequence that reads the same backward as forward, e.g., madam or 
nurses run.)
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

class Node {
    constructor(value, next = null) {
        this.value = value; 
        this.next = next;
    }
};

function reverseLinkedList(head) {
    let currentNode = head;
    let newNextNode = null;

    // - when newNext points to current and current points to null
    // is when we're done reversing and we return the head of the 
    // reversed linked list (what was supposed to be the newNext); 
    while (currentNode) {
        let nextNode = currentNode.next;
        currentNode.next = newNextNode;
        newNextNode = currentNode; 
        currentNode = nextNode;
    }

    return newNextNode; 
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
        count++; // -steps to the middle
    }

    // - if number of nodes is odd, slow is pointing to middle node
    // - if number of nodes is even, slow pointing to first of the two middle nodes; 
    let middlePointer = slow; 

    // - assume it's a palindrome
    let palindromeCheck = true; 

    // - if number of nodes is even (i.e. slow pointing to first of the two middle nodes);
    if (fast.next !== null && fast.next.next === null) {  
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
    // the list are equal by moving the pointers at the heads of each list inwards one at a time,
    // for a number of count times-- the number of steps to the middle
    let firstHalf = head; 
    let secondHalfReversed = reverseLinkedList(middlePointer);

    for (let i = 0; i < count ; i++) {
        if (firstHalf.value !== secondHalfReversed.value) {
            palindromeCheck = false;
        }
        firstHalf = firstHalf.next;
        secondHalfReversed = secondHalfReversed.next;
    };

    // - then we need to re-reverse the second half of the linked list so that the 
    // linked list is the same as it was originally 
    reverseLinkedList(secondHalfReversed);

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

console.log('palindromeLinkedList: ', palindromeLinkedList(head));