/*
NOTE: 
-See chapter 7 (Linked Lists) in Goodrich text.
-There are different ways to implement the graph data structure. Implement another version. 

Data structures to use in implementation of graph data structure: 
-Queue
-Stack
-Vertex
-Graph

Methods: 
-addVertex
-addEdge
-addDirectedEdge
-dftRecursive
-dftStack
-dfsRecursive
-dfsStack
-bft
-bfs

NOTE: 
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