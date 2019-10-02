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



//when we did it in python, we had the graph represented by a dictionary of all the vertices in the graph
// the vertices had their own data structure. one of the vertices' properties was edges, 

class Vertex {
    constructor(vertex_id, value = null, color = "white") {
        this.id = vertex_id;  //unique id for each vertex
        this.value = value;
        this.color = color;
        this.edges = new Set();
    }
}

class Graph {
    // Graph to be represented as an object of vertices mapping each vertex to its edges
    constructor(vertices = {}) {
        this.vertices = vertices;
    }
    
    addVertex(vertex_id) {
        this.vertices[vertex_id] = new Vertex(vertex_id);
    }

    addEdge(v1_id, v2_id) {
        if (this.vertices[v1_id] && this.vertices[v2_id]) {
            this.vertices[v1_id].edges.push(v2_id);
            this.vertices[v2_id].edges.push(v1_id);
        } else {
            return ReferenceError('v1 or v2 is not a vertex in this graph')
        }
    }
   
    addDirectedEdge(v1_id, v2_id) {
        if (this.vertices[v1_id] && this.vertices[v2_id]) {
            this.vertices[v1_id].edges.push(v2_id);
        } else {
            return ReferenceError('v1 or v2 is not a vertex in this graph')
        }
    }



    dftRecursive() {}
    dftStack() {}
    dfsRecursive() {}
    dfsStack() {}
    bft() {}
    bfs() {}

}


let v1 = new Vertex(3);

let g1 = new Graph();

console.log(v1,g1)

console.log(g1.addEdge(v1))