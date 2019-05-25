/*
NOTE: 
-see chapter 10 (Elementry Data Structures) in Cormen and chapter 6 (Stacks, Queues, and Dequeus) in Goodrich

Methods:
-push (add item to the the end of the stack (items at end of stack are the first to be removed)) (i.e. push(item))
-pop (remove the most recently added item from the stack) (i.e. pop())

*/

class Stack {
    constructor() {
        this.stack = [];
        this.size = 0;
    }

    push(item) {
        if (item === null) {
            return Error('The item passed into this function must be a non-null value.')
        } else if (item === undefined) {
            return Error('The item passed into the function is undefined.')
        } else {
            this.stack.push(item);
            this.size = this.stack.length;
        } 
    }

    pop() {
        if (this.stack.length < 1) {
            return 'stack is empty'
        } else {
            this.stack.pop();
            this.size = this.stack.length;
        }
    } 
}


// // // PUSH tests
// // test #1
// let s1 = new Stack;
// s1.push(2);
// s1.push(3);
// s1.push(5);
// s1.push(7);
// s1.push(11);
// s1.push(13);
// s1.push(17);
// console.log('s1: ', s1)

// // test #2 
// let s1 = new Stack;
// s1.push(2);
// s1.push(3);
// s1.push(5);
// s1.push(7);
// console.log('s1.push(undefined): ', s1.push(undefined)); // Error: The item passed into the function is undefined.
// console.log('s1.push(null): ', s1.push(null)); // Error: The item passed into this function must be a non-null value.
// s1.push(17);
// console.log('s1: ', s1); // Stack { stack: [ 2, 3, 5, 7, 17 ], size: 5 }


// // // POP tests
// // test #1
// let s1 = new Stack;
// s1.push(2);
// s1.push(3);
// s1.push(5);
// s1.push(7);
// s1.push(11);
// s1.push(13);
// s1.push(17);
// console.log('s1: ', s1)
// s1.pop();
// console.log('s1: ', s1)
// s1.pop();
// console.log('s1: ', s1)
// s1.pop();
// console.log('s1: ', s1)
// s1.pop();

// // test #2
// let s1 = new Stack;
// s1.push(2);
// s1.push(3);
// s1.push(5);
// s1.push(7);
// s1.push(11);
// s1.push(13);
// s1.push(17);
// console.log('s1: ', s1); // Stack { stack: [ 2, 3, 5, 7, 11, 13, 17 ], size: 7 }
// console.log(s1.pop('3434')); // undefined
// console.log('s1: ', s1); // Stack { stack: [ 2, 3, 5, 7, 11, 13, 17 ], size: 7 }
// console.log(s1.pop(234234)); // undefined
// console.log('s1: ', s1); //  Stack { stack: [ 2, 3, 5, 7, 11 ], size: 5 }
// console.log(s1.pop(undefined)); // undefined
// console.log('s1: ', s1); // Stack { stack: [ 2, 3, 5, 7 ], size: 4 }
// console.log(s1.pop(null)); // undefined
// console.log('s1: ', s1); // Stack { stack: [ 2, 3, 5 ], size: 3 }
