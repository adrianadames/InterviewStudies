/*
(medium)

Problem Statement: 
- Given the head of a Singly LinkedList that contains a cycle, 
write a function to find the starting node of the cycle.
*/

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// Strategy 
// - first use the strategy from problem 1 to detect the cycle (i.e. when fast 
// pointer (p2 here) equals slow pointer(p1 here))
// - keeping p1 where it is, move p2 until it points to p1; the number of steps
// for p2 to reach p1 is the size of the cycle
// - now move the two pointers at the start of the list again; 
// - increment p1 the size of the cycle; 
// - now increment both pointer 1 and 2 until they both point at the same node 
// (you've traversed the size of the cycle in the previous step, so whatever
// slack or length remains is the length of the list when the cycle begins (
// l_cycle + l_nonCycle = total number of nodes))

// time: O(n) = n;
// space: O(n) = 1;
function startOfLinkedListCycle(head) {
    let p1 = head; 
    let p2 = head.next; 

    // - we know the list has a cycle; 
    // - we move the pointers until we detect the cycle 
    while (p2 !== p1) {
        p2 = p2.next.next; // fast pointer
        p1 = p1.next; // slow pointer
    } 

    // - now that we're in the cycle, we move the fast pointer 
    // to determine the size of the cycle;
    p2 = p2.next.next;
    let l_cycle = 2;

    while (p2 !== p1) {   
        if (p2.next === p1) { // - condition for odd number of nodes in the cycle
            p2 = p2.next;
            l_cycle +=1;
        } else {
            p2 = p2.next.next;
            l_cycle +=2
        }
    } 
    //- at this point both pointers are on the same spot
    // and l_cycle equals the length of the list's cycle
    
    //- we move p1 back to the beginning of the list, and 
    // we step through the nodes l_cycle times; 
    p1 = head;
    for (let i = 0; i < l_cycle; i++) {
        p1 = p1.next; 
    }

    //-we move p2 back to the front of the list so that the distance
    // between p1 and p2 is now l_cycle steps
    p2 = head; 

    //-with p2 at the head and p1 at a displacement l_cycle steps
    // from the head, if we move each pointer one at a time, there
    // will come a time when they equal each other; this still obeys that constraint
    // that they are l_cycle steps apart but now they're pointing to the same
    // node; however many steps it took to get to this point gives you the starting
    // node location of the cycle; 

    
    let l_nonCycle = 0;  // note: l_cycle + l_nonCycle = total number of nodes

    while (p2 !== p1) {
        l_nonCycle += 1;
        p2 = p2.next;
        p1 = p1.next;
    }

    return p1
};

let head = new Node(1);
head.next = new Node(2); 
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

// 7th node = 3rd node
// head.next.next.next.next.next.next = head.next.next;
// console.log('startOfLinkedListCycle: ', startOfLinkedListCycle(head));

// // 7th node = 2nd node
head.next.next.next.next.next.next = head.next;
console.log('startOfLinkedListCycle: ', startOfLinkedListCycle(head));
