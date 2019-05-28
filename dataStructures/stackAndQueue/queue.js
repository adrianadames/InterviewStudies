/*
NOTE: 
-see chapter 10 (Elementry Data Structures) in Cormen and chapter 6 (Stacks, Queues, and Dequeus) in Goodrich

Methods:
-enqueue (add item to the the end of the queue (items at end of queue are the last to be removed)) (i.e. push(item))
-dequeue (remove least recently added item from the queue (items at beginning of queue are the first to be removed) (i.e. shift()))

*/

class Queue {
    constructor() {
        this.queue = [];
        this.size = 0;
    }

    enqueue(item) {
        if (item === null) {
            return Error('The item passed into this function must be a non-null value.')
        } else if (item === undefined) {
            return Error('The item passed into the function is undefined.')
        } else {
            this.queue.push(item);
            this.size = this.queue.length;
        } 
    }

    dequeue() {
        if (this.queue.length < 1) {
            return 'queue is empty'
        } else {
            this.queue.shift();
            this.size = this.queue.length;
        }
    }
}


// // // ENQUEUE tests
// // test #1
// let q1 = new Queue();
// q1.enqueue(2);
// q1.enqueue(3);
// q1.enqueue(5);
// q1.enqueue(7);
// q1.enqueue(11);
// console.log('q1: ', q1);

// //test #2 
// let q1 = new Queue();
// q1.enqueue(2);
// q1.enqueue(3);
// q1.enqueue(5);
// q1.enqueue(7);
// q1.enqueue(11);
// console.log('q1.enqueue(): ', q1.enqueue());
// console.log('q1.enqueue(null): ', q1.enqueue(null));
// console.log('q1: ', q1);


// // // DEQUEUE tests
// // test #1
// let q1 = new Queue();
// q1.enqueue(2);
// q1.enqueue(3);
// q1.enqueue(5);
// q1.enqueue(7);
// q1.enqueue(11);
// console.log('q1: ', q1);
// q1.dequeue();
// console.log('q1: ', q1);
// q1.dequeue();
// console.log('q1: ', q1);

// // test #2
// let q1 = new Queue();
// q1.enqueue(2);
// q1.enqueue(3);
// q1.enqueue(5);
// q1.enqueue(7);
// q1.enqueue(11);

// q1.dequeue();
// console.log('q1: ', q1);
// q1.dequeue();
// console.log('q1: ', q1);

// q1.dequeue('sdfs');
// console.log('q1: ', q1);
// q1.dequeue(0);
// console.log('q1: ', q1);
// console.log(q1.dequeue(undefined)); //dequeue works but returns undefined???????? 
// console.log('q1: ', q1);
// console.log(q1.dequeue(null));
// console.log('q1: ', q1);


