// Quick Sort Notes 

// References
// -Goodrich 12.3
// -Necaise 12.2
// -Corbin Ch. 7




/*
3 step divide and conquer process: 

// from Goodrich 12.3

Main Idea: Divide S into subsequences, recur to sort each subsequence, and then combine
the sorted subsequences by a simple concatenation. 

1. Divide: If S has at least 2 elements (nothing needs to be done if S has zero or one element),
select a specific element x from S which is called the pivot. The last element in S is 
commonly chosen as the pivot, so we will choose that as the pivot. Remove all elements from S
and put into 3 subsequences: 
- L, elements in S < x
- E, elements in S = x
- G, elements in S > x

2. Conquer: Recursively sort sequences L and G. 

3. Combine: Put back elements into S in order by first inserting the elements of L, then 
those of E, then those of G. 
*/

// -in what follows we give implementation of quick-sort algorithm that operates on any
// sequence type that operates as a queue (FIFO);
// -this particular version relies on the LinkedQueue class from section 7.1.2;

// LINKED LIST QUEUE IMPLEMENTATION

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null; 
        this.tail = null; 
        this.size = 0;
    }

    addToTail(nodeValue) {
        if (this.size === 0) {
            this.head = new Node(nodeValue);
            this.size +=1;
        } else if (this.size === 1) {
            this.head.next = new Node(nodeValue);
            this.tail = this.head.next;
            this.size +=1; 
        } else {
            let oldTail = this.tail; 
            let newTail = new Node(nodeValue);
            oldTail.next = newTail;
            this.tail = newTail;
            this.size += 1;
        }
    }

    removeHead() {
        if (this.size === 0) {
            return null
        } else if (this.size === 1) {
            let removedHead = this.head; 
            this.head = null; 
            this.tail = null;
            this.size -= 1;
            return removedHead; 
        } else {
            let removedHead = this.head; 
            let newHead = this.head.next; 
            this.head = newHead 
            this.size -= 1;
            return removedHead
        }
    }
}

class LinkedQueue {
    constructor() {
        this.items = new LinkedList();
        this.size = this.items.size;
    }

    enqueue(value) {
        if (value === null) {
            return Error('The item passed into this function must be a non-null value.')
        } else if (value === undefined) {
            return Error('The item passed into the function is undefined.')
        } else {
            this.items.addToTail(value);
            this.size = this.items.size;
        }
    }

    dequeue() {
        if (this.size < 1) {
            return 'queue is empty'
        } else {
            this.size -= 1;
            return this.items.removeHead();
        }
    }
}

// -our implementation chooses the first item of the queue as the pivot (since it's 
// easily accessible), and then it divides the sequence S into L, E, and G. 

// sort elements of queue S using quick sort algorithm
function generalQuickSort(S) {
    let n = S.size;

    if (n < 2) {
        return // list already sorted
    }

    // divide
    let pivot = S.items.head.value;
    let L = new LinkedQueue;
    let E = new LinkedQueue;
    let G = new LinkedQueue;

    while (S.size>0) {
        if (S.items.head.value < pivot) {
            L.enqueue(S.dequeue().value);
        } else if (pivot < S.items.head.value) {
            G.enqueue(S.dequeue().value);
        } else {
            E.enqueue(S.dequeue().value);
        }
    } 

    // conquer (w/ recursion)
    generalQuickSort(L);
    generalQuickSort(G);

    // concatenate results;
    while (L.size > 0) {
        S.enqueue(L.dequeue().value);
    }
    while (E.size > 0) {
        S.enqueue(E.dequeue().value);
    }
    while (G.size >0) {
        S.enqueue(G.dequeue().value);
    }

}

// let arr1 = [2, 8, 7, 1, 3, 5, 6, 4];

// let linkedQueue1 = new LinkedQueue;

// arr1.forEach(value => linkedQueue1.enqueue(value));

// console.log('linkedQueue1: ', linkedQueue1);

// console.log('generalQuickSort: ', generalQuickSort(linkedQueue1));

// console.log('linkedQueue1: ', linkedQueue1);

// while (linkedQueue1.size> 0) {
//     console.log('linkedQueue.dequeue() :',linkedQueue1.dequeue().value )
// }

/*

-let's step through the algorithm for the linkedQueue, lq1 = 2->8->7->1->3->5->6->4->N

n = lq1.size = 8;
pivot = 2;
L= 1->N;
E= 2->N;
G= 8->7->3->5->6->4->N;

-then the recursive action is called upon for LQ L and G starting with L; 
    generalQuickSort(L); // returns right away 
    generalQuickSort(G); // doesn't return right away; establishes new context which i'll note below

-n = lq.size = 6;
pivot = 8;
L = 7->3->5->6->4->N;
E = 8->N;
G = N;

-then the recursive action is called for LQ L and G starting with L; 
    generalQuickSort(L); // creates new context
    n = 5; 
    pivot = 7; 
    L = 3->5->6->4->N;
    E = 7->N; 
    G = N; 

    -then the recursive action is called for LQ L and G starting w/ L: 
        n = 4; 
        pivot = 3; 
        L = N; 
        E = 3->N;
        G= 5->6->4->N;

        -then recursive action called again: 
            n = 3;
            pivot = 5;
            L = 4->N;
            E = 5->N;
            G = 6->N; 


-the recursive action ends; now we combine, concatenating with each subproblem; 
-first, we have: 
    S = 4->5->6->N; (for the G side of the list)

-then we have: 
    S = 3->4->5->6->N; (for the G side of the list)

-then we have: 
    S = 3->4->5->6->7->N; (for the L side of the list);

-then we have: 
    S = 3->4->5->6->7->8->N; (for the G side of the list);

-and then we're at the topmost level and we have: 
    S = 1->2->3->4->5->6->7->8->N; (for the whole list)
*/





// -ok. the above is fine, but it creates new lists L, E, G with each recursive call. 
// -we can instead do quicksort in place by using an array 

// -below I will show two methods. one where last value chosen as pivot, and one where
// first value chosen as pivot

// sort from arr[a] to arr[b] using last element as pivot
function lastElementPivotQuickSort(arr, a, b) {
    if (a >= b) {
        return // range trivially sorted
    }

    let pivot = arr[b]; // last element in array chosen as pivot
    let left = a; // left marker for scanning through array values
    let right = b-1; // right marker for scanning through array values

    while (left <= right) {
        // -scan left marker to right until you find first value greater than or equal to pivot
        // (or until you reach the right marker)
        while (left <= right && arr[left] < pivot) {
            left ++;
        }
        // -scan right marker to left until you find first value less than or equal to pivot
        // (or until you reach the left marker)
        while (left <= right && arr[right] > pivot) {
            right --;
        }
        // -if the left and right markers didn't cross
        if (left <= right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]; // swap values
            left ++; // move left marker to the right
            right --; // move right marker to left
        }
    }

    // -put the pivot value into its final place (currently marked by left marker)
    [arr[left], arr[b]] = [arr[b], arr[left]];
    lastElementPivotQuickSort(arr, a, left-1);
    lastElementPivotQuickSort(arr, left+1, b);
};

// sort from arr[a] to arr[b] using first element as pivot
function firstElementPivotQuickSort(arr, a, b) {
    if (a >= b) {
        return // range trivially sorted
    }

    let pivot = arr[a]; // first element in array chosen as pivot
    let left = a+1; // left marker for scanning through array values
    let right = b; // right marker for scanning through array values

    while (left <= right) {
        // -scan left marker to right until you find first value greater than or equal to pivot
        // (or until you reach the right marker)
        while (left <= right && arr[left] < pivot) { // naceim text has first inequality as < (i think this is error because it gives wrong result...)
            left ++;
        }
        // -scan right marker to left until you find first value less than than or equal to pivot
        // (or until you reach the left marker)
        while (left <= right && arr[right] > pivot) { // naceim text has second inequality as >=
            right --;
        }
        // -if the left and right markers didn't cross
        if (left <= right) { // naceim text has inequality as <
            [arr[left], arr[right]] = [arr[right], arr[left]]; // swap values
            left ++; // move left marker to the right
            right --; // move right marker to left
        }
    }

    // -put the pivot value into its final place (currently marked by right marker) // naceim text has if condition here and explains reasoning for it on pg. 353 
    [arr[a], arr[right]] = [arr[right], arr[a]];
    firstElementPivotQuickSort(arr, a, right-1);
    firstElementPivotQuickSort(arr, right+1, b);
};






let arr2 = [2, 8, 7, 1, 3, 5, 6, 4];

function testQuickSort(arr) {
    let arrCopy1 = arr.slice();
    let arrCopy2 = arr.slice();
    lastElementPivotQuickSort(arrCopy1, 0, arrCopy1.length-1);
    firstElementPivotQuickSort(arrCopy2, 0, arrCopy2.length-1);

    console.log('arrCopy1: ', arrCopy1);
    console.log('arrCopy2: ', arrCopy2);
}

// testQuickSort([1, 1, 1, 1, -1, -1, 2, 3, 4, 3, 2, 1, 0, -1])

function corbinQuickSort(arr, a, b) {
    if (a >= b) {
        return // range trivially sorted
    }

    let pivot = arr[b];
    let left = a-1;
    let right = a;

    while (right <= b-1) {
        if (arr[right] <= pivot) {
            left++;
            [arr[left], arr[right]] = [arr[right], arr[left]];
        }
        right++;
    }

    [arr[left+1], arr[b]] = [arr[b], arr[left+1]];
    corbinQuickSort(arr, a, left);
    corbinQuickSort(arr, left+2, b);
}






function testQuickSort2(arr) {
    let arrCopy1 = arr.slice();
     
    corbinQuickSort(arrCopy1, 0, arrCopy1.length-1);
     

    console.log('arrCopy1: ', arrCopy1);
     
}

testQuickSort2(arr2)