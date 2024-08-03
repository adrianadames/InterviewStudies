/*
(medium)

Problem Statement: 
-Given the head of a Singly LinkedList that contains a cycle, 
write a function to find the starting node of the cycle.
*/

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}


// strategy 
// -first use the strategy from problem 1 to detect the cycle (i.e. when fast 
// pointer (p2 here) equals slow pointer(p1 here))
// -pause
// -keeping p1 where it is, move p2 until it points to p1; the number of steps
//  for p2 to reach p1 is the size of the cycle

// -now put the two pointers at the start of the list again; 
// -increment p1 the size of the cycle; 
// -now increment both pointer 1 and 2 until they both point at the same node 
// (you've traversed the size of the cycle in the previous step, so whatever
// slack or length remains is the length of the list when the cycle begins (l_exludingCycle))

// time: O(n) = n;
// space: O(n) = 1;
function startOfLinkedListCycle(head) {
    let p1 = head; 
    let p2 = head.next;

    // -we know the list has a cycle; 
    // -we move the pointers until we detect the cycle 
    while (p2 !== p1) {
        p2 = p2.next.next; // fast pointer
        p1 = p1.next; // slow pointer
    }    
    // -we move the fast pointer to start to determine the size of the cycle;
    p2 = p2.next.next;
    let l_cycle = 2;

    while (p2 !== p1) {   
        if (p2.next === p1) {  
            p2 = p2.next;
            l_cycle +=1;
        } else {
            p2 = p2.next.next;
            l_cycle +=2
        }
    } 
    //-at this point both pointers are on the same spot
    // and l_cycle equals the length of the list's cycle
    
    //-we move p1 and put it at the beginning of the list
    // and step through the list for the length of the cycle
    p1 = head;
    for (let i = 0; i < l_cycle; i++) {
        p1 = p1.next; 
    }
    //-we move p2 back to the front of the list

    //-with p2 at the head and p1 at a displacement l_cycle steps
    // from the head, we simulataneously step each pointer until 
    // they equal each other
    // -this length is the amount of length on the track sans the 
    // cycle, i.e., the length until the cycle begins
    let l_excludingCycle = 0; // l_excludingCycle + l_cycle = total number of nodes plus 1
    p2 = head; 

    while (p2 !== p1) {
        l_excludingCycle += 1;
        p2 = p2.next;
        p1 = p1.next;
    }
    // console.log('l_cycle: ', l_cycle);
    // console.log('l_excludingCycle: ', l_excludingCycle);
    return p1.value
}


let head = new Node(1);
head.next = new Node(2); 
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

// // 6th node points to null
// console.log('startOfLinkedListCycle: ', startOfLinkedListCycle(head));

// 7th node = 3rd node
// head.next.next.next.next.next.next = head.next.next;
// console.log('startOfLinkedListCycle: ', startOfLinkedListCycle(head));

// // 7th node = 2nd node
// head.next.next.next.next.next.next = head.next;
// console.log('startOfLinkedListCycle: ', startOfLinkedListCycle(head));
