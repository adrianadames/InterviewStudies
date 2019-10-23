/*
Good morning! Write a "First In, Last Out" Stack class. Do not modify the 
Stack class's constructor, or it's length "getter" method.

Once you're done with the F.I.L.O. Stack class, implement a "First In, 
First Out" Queue class using two of your stacks.

The "queue" data structure is like customers waiting in line at the 
grocery store. Each customer gets in line, or "enqueue"s. Customers 
are served in the order they joined the line - "first come, first 
serve." When they are done paying for their groceries they "dequeue"
from the cashier's line.

Here's how you can check if your code works:
const stack = new Stack();
console.log(stack.length);  // <--- 0
stack.add('first'); stack.add('second'); stack.add('third');
console.log(stack.length);  // <--- 3
console.log(stack.storage); // <--- [ 'first', 'second', 'third' ]
console.log('FILO Stack:', stack.remove(), stack.remove(), stack.remove()); // <--- FILO: third second first

const queue = new Queue();
queue.enqueue(1); queue.enqueue(2); queue.enqueue(3);
const val1 = queue.dequeue();
const val2 = queue.dequeue();
const val3 = queue.dequeue();
console.log('FIFO Queue:', val1, val2, val3); // <--- FIFO: 1 2 3
*/

class Stack {
  constructor() {
    this.storage = [];
  }

  // note: both approaches have same desired FILO behavior, but the order of storage at any given time
  // is different depending on which of the approaches below are used. Approach II gives you the stack.storage()
  // example test case value that came with the problem statement.
  add(item) {
    // //Approach I
    // this.storage.unshift(item); //adds to beginning of storage array and returns new length of array

    //Approach II
    this.storage.push(item);
  }

  remove() {
    // //Approach I
    // return this.storage.shift(); //removes and returns first element from array

    //Approach II
    return this.storage.pop(); // removes and returns last element from storage array
  }

  get length() {
    return this.storage.length; //The get syntax binds an object property to a function that will be called when that property is looked up
  }
}

class Queue {
  constructor() {
    // this.storage= []; <-- came with problem statement
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.storage = [this.stack1.storage]
  }

  enqueue(item) {
    // this.storage.push(item); <-- came with problem statement
    this.stack1.add(item);
  }

  dequeue() {
    while (this.stack1.length>0) {
      this.stack2.add(this.stack1.remove());
    }
    return this.stack2.remove()
  }
}

// Do not modify the following code:
const stack = new Stack();
console.log(stack.length);  // <--- 0
stack.add('first'); stack.add('second'); stack.add('third');
console.log(stack.length);  // <--- 3
console.log(stack.storage); // <--- [ 'first', 'second', 'third' ]  
console.log('FILO Stack:', stack.remove(), stack.remove(), stack.remove()); // <--- FILO: third second first

const queue = new Queue();
queue.enqueue(1); queue.enqueue(2); queue.enqueue(3);
const val1 = queue.dequeue();
const val2 = queue.dequeue();
const val3 = queue.dequeue();
console.log('FIFO Queue:', val1, val2, val3); // <--- FIFO: 1 2 3
