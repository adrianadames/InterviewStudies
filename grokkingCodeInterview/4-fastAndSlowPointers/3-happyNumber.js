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

function sumOfDigitsSquared(num) {
    let numInStringForm = String(num);
    let sum = 0;
    for (let i = 0; i < numInStringForm.length; i++) {
        sum = sum + Math.pow(Number(numInStringForm[i]), 2);
    }
    return sum
}

function happyNumber2(num) {
    let slow = num; 
    let fast = num; 

    while (fast) {
        slow = sumOfDigitsSquared(slow);
        fast = sumOfDigitsSquared(sumOfDigitsSquared(fast));

        if (slow === fast) {
            if (slow === 1) {
                return true
            } else {
                return false
            }
        }
    }
}

console.log('happyNumber2: ', happyNumber2(23));
console.log('happyNumber2: ', happyNumber2(12));
console.log('happyNumber2: ', happyNumber2(123));


class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function happyNumber(num) {    
    let node = new Node(num);// - head of the list 

    let slowPointer = node; 
    let fastPointer = node; 

    // - we detect a cycle whenever the pointers are pointing to the same node; 
    while (fastPointer) {
        // - step 1: create the next two nodes so that the fastpointer can point to every 2nd node; 
        node.next = new Node(sumOfDigitsSquared(node.value));
        node.next.next = new Node(sumOfDigitsSquared(sumOfDigitsSquared(node.value)));

        // - point the pointers to the newly created nodes; 
        fastPointer = fastPointer.next.next; 
        slowPointer = slowPointer.next;

        if (fastPointer.value === slowPointer.value) {
            if (fastPointer.value === 1) {
                return true
            } else {
                return false
            }
        }
        node = node.next.next;
    }
}

console.log('happyNumber1: ', happyNumber1(23));
console.log('happyNumber1: ', happyNumber1(12));
console.log('happyNumber1: ', happyNumber1(123));