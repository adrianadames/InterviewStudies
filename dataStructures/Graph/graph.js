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
        this.items = [];
        this.size = 0;
    }

    enqueue(item) {
        if (item === null) {
            return Error('The item passed into this function must be a non-null value.')
        } else if (item === undefined) {
            return Error('The item passed into the function is undefined.')
        } else {
            this.items.push(item);
            this.size = this.items.length;
        } 
    }

    dequeue() {
        if (this.items.length < 1) {
            return 'queue is empty'
        } else {
            this.items.shift();
            this.size = this.items.length;
        }
    }
}

class Stack {
    constructor() {
        this.items = [];
        this.size = 0;
    }

    push(item) {
        if (item === null) {
            return Error('The item passed into this function must be a non-null value.')
        } else if (item === undefined) {
            return Error('The item passed into the function is undefined.')
        } else {
            this.items.push(item);
            this.size = this.items.length;
        } 
    }

    pop() {
        if (this.items.length < 1) {
            return 'stack is empty'
        } else {
            this.size = this.items.length-1;
            return this.items.pop();
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
            this.vertices[v1_id].edges.add(v2_id);
            this.vertices[v2_id].edges.add(v1_id);
            // console.log('this.vertices[v1_id].edges: ', this.vertices[v1_id].edges)
        } else {
            return ReferenceError('v1 or v2 is not a vertex in this graph')
        }
    }
   
    addDirectedEdge(v1_id, v2_id) {
        if (this.vertices[v1_id] && this.vertices[v2_id]) {
            this.vertices[v1_id].edges.add(v2_id);
        } else {
            return ReferenceError('v1 or v2 is not a vertex in this graph')
        }
    }

    dftRecursive(start_vert_id, visited = []) {
        // 1) push start_vert to visited
        // 2) for each start_vert edge, if it hasn't been visited, run dftRecursive on that

        visited.push(start_vert_id);

        for (let edge of this.vertices[start_vert_id].edges) {
            if (!visited.includes(edge)) {
                this.dftRecursive(edge, visited);
            }
        }
        return visited
    } 

    dftStack(start_vert_id) {
        let visited = [];
        let stack = new Stack();

        stack.push(start_vert_id);

        while (stack.size > 0) {
            let currentVertId = stack.pop();
            if (!visited.includes(currentVertId)) {
                for (let edge of this.vertices[currentVertId].edges) {
                    stack.push(edge);    
                }
                visited.push(currentVertId); 
            }
        }
        return visited
    }

    dfsRecursivePath(start_vert_id, target_vert_id, visited = [], path = []) {
        visited.push(start_vert_id);
        path.push(start_vert_id);

        if (start_vert_id === target_vert_id) {
            return path
        }
        for (let edge of this.vertices[start_vert_id].edges) {
            if (!visited.includes(edge)) {
                let newPath = this.dfsRecursivePath(edge, target_vert_id, visited, path);
                if (newPath) {
                    return newPath
                }
            }
        }
        return null        
    } 


    dfsStackPath() {}   //include path to target
    bft() {}
    bfsPath() {} //include path to target

}



let g1 = new Graph();

function addTestVertices(graph) {
    for (let i = 0; i<10;i++) {
        graph.addVertex(i);
    }
}

addTestVertices(g1);
// console.log(g1);


g1.addEdge(0,1);
g1.addEdge(0,3);
g1.addEdge(1,2);
g1.addEdge(2,5);
g1.addEdge(2,4);
g1.addEdge(4,9);
g1.addEdge(3,7);
g1.addEdge(3,6);
g1.addEdge(7,9);

// console.log(g1.dftRecursive(0))
// console.log(g1.dftStack(0))

console.log(g1.dfsRecursivePath(0,7))