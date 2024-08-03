/*
(medium)

Problem Statement 
-Any number will be called a happy number if, after repeatedly 
replacing it with a number equal to the sum of the square of 
all of its digits, leads us to number ‘1’. All other (not-happy) 
numbers will never reach ‘1’. Instead, they will be stuck in a 
cycle of numbers which does not include ‘1’. Determine if the 
number 'num' is a happy number. 

Example 1:
    Input: 23   
    Output: true (23 is a happy number)  
Example 2:
    Input: 12   
    Output: false (12 is not a happy number)  
*/

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function sumOfDigitsSquared(num) {
    let numInStringForm = String(num);
    let sum = 0;
    for (let i = 0; i < numInStringForm.length; i++) {
        sum = sum + Math.pow(Number(numInStringForm[i]), 2);
    }
    return sum
}


function happyNumber(num) {
    // - how should I approach this problem? 
    // - we have an algorithm to make the linked list; the next node value is the sum of the 
    // node's value's digits
    // - but how we create the linked list while simultaneously moving the pointers?
    // - i'm thinking we have have the fast pointer be the one to create all the nodes; and the
    // slow pointer will trail behind it. 
    
    let node = new Node(num);// - head of the list 

    let slowPointer = node; 
    let fastPointer = node; 

    // and how do we detect there's a cycle again? whenever the pointers are pointing to the same node; 
    while (fastPointer) {

        // console.log('node: ', node)
        // - step 1; create the next two nodes so that the fastpointer can point to every 2nd node; 
        node.next = new Node(sumOfDigitsSquared(node.value));
        node.next.next = new Node(sumOfDigitsSquared(sumOfDigitsSquared(node.value)));

        // point the pointers to the new nodes; 
        fastPointer = fastPointer.next.next; 
        slowPointer = slowPointer.next;

        // console.log('fastPointer: ', fastPointer)
        // console.log('slowPointer: ', slowPointer)

        if (fastPointer.value === slowPointer.value) {
            // console.log('cycle detected');
            if (fastPointer.value === 1) {
                return true
            } else {
                return false
            }
        }
        node = node.next.next;
    }
}
// let num = 23;
// for (let i = 0; i < 25; i++) {
//     console.log('num: ', num);
//     num = sumOfDigitsSquared(num)
// }
console.log('happyNumber: ', happyNumber(23));
console.log('happyNumber: ', happyNumber(12));
console.log('happyNumber: ', happyNumber(123));