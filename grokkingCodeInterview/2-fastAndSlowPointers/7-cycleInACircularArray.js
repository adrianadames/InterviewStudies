/*
(hard)

Problem Statement:
-We are given an array containing positive and negative numbers. 
Suppose the array contains a number ‘M’ at a particular index. 
Now, if ‘M’ is positive we will move forward ‘M’ indices and if 
‘M’ is negative move backwards ‘M’ indices. 
-You should assume that the array is circular which means two things:
    1) If, while moving forward, we reach the end of the array, we will 
    jump to the first element to continue the movement.
    2) If, while moving backward, we reach the beginning of the array, 
    we will jump to the last element to continue the movement.
-Write a method to determine if the array has a cycle. The cycle 
should have more than one element and should follow one direction 
which means the cycle should not contain both forward and backward 
movements.

Example 1:
    Input: [1, 2, -1, 2, 2]
    Output: true
    Explanation: The array has a cycle among indices: 0 -> 1 -> 3 -> 0
Example 2:
    Input: [2, 2, -1, 2]
    Output: true
    Explanation: The array has a cycle among indices: 1 -> 3 -> 1
Example 3:
    Input: [2, 1, -1, -2]
    Output: false
    Explanation: The array does not have any cycle.
*/

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// - what if I build the linked list first; then detect if there's 
// a cycle with no sign changes

function cycleInACircularArray(arr) {
    // - make nodes for each value in the array
    let nodes = [];
    for (let i = 0; i < arr.length; i++) {
        nodes.push(new Node(i));
    }

    // - start with the first value in the array
    let currentIndex = 0;
    let currentNode = nodes[currentIndex];

    // - make the linked list
    for (let i = 0; i < arr.length; i++) {
        // - to create the linked list, the next node is that 
        // which is arr[currentIndex] indices away
        let indicesAway = arr[currentIndex];;

        // - we take the current index and add the indices away to find the 
        // next node; this sum needs to be normalized because it's a 
        // circular array
        let nextIndex = (currentIndex + indicesAway) % arr.length;
        
        // we attach the next node to current node
        currentNode.next = nodes[nextIndex];

        // - assign currentNode to the node we just added; 
        // - assign currentIndex to the index of the node we just added
        currentNode = nodes[nextIndex];
        currentIndex = nextIndex;
    }

    // head of the created linked list
    let head = nodes[0];

    // - need to get in the cycle;  
    let p1 = head;
    let p2 = head.next;
    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next.next; 
    }

    // - the two pointers point at the same location now and we are in the cycle;  
    // - to determine size of cycle we increment p1 until it reaches p2 again;
    p1 = p1.next; 
    let l_cycle = 1;
    
    while (p2 !== p1) {
        l_cycle++;
        p1 = p1.next;
    }

    //-at this point both pointers are on the same spot
    // and l_cycle equals the length of the list's cycle

    // - now we check to see if the cycle only goes in one direction; if it does, 
    // return true; else return false
    let currentCycleNode = p1; 
    let currentCycleDirection = arr[p1.value]/Math.abs(arr[p1.value]);

    for (let i = 0; i < l_cycle; i++) {
        let nextNode = currentCycleNode.next;
        let nexDirection = arr[nextNode.value]/Math.abs(arr[nextNode.value]);

        if ((currentCycleDirection > 0 && nexDirection > 0) || (currentCycleDirection < 0 && nexDirection < 0)) {
            currentCycleNode = nextNode; 
        } else {
            return false
        }
    }
    return true

}

// console.log('cycleInACircularArray: ', cycleInACircularArray([1, 2, -1, 2, 2])); // true
// console.log('cycleInACircularArray: ', cycleInACircularArray([2, 2, -1, 2])); // true
// console.log('cycleInACircularArray: ', cycleInACircularArray([2, 1, -1, -2])); // false 
// console.log('cycleInACircularArray: ', cycleInACircularArray([2, 2, -1, 2, 2])); // false

