/*
NOTE: 
-See chapter 7 (Linked Lists) in Goodrich text.
-There are different ways to implement the graph data structure. Implement another version. 

Data structures to use in implementation of graph data structure: 
- [x] Queue
- [x] Stack
- [x] Vertex
- [x] Graph

Methods: 
- [x] addVertex
- [x] addEdge
- [x] addDirectedEdge
- [x] dftRecursive
- [x] dfsRecursivePath
- [x] dftStack
- [x] dfsStackPath
- [x] bft
- [x] bfsPath

NOTE: 
*/

class Queue {
    constructor() {
        this.items = [];
        this.size = 0;
    }

    enqueue(item) {
        if (item === null) {
            return Error('The item passed into this function must be a non-null value.');
        } else if (item === undefined) {
            return Error('The item passed into the function is undefined.');
        } else {
            this.items.push(item);
            this.size = this.items.length;
        } 
    }

    dequeue() {
        if (this.items.length < 1) {
            return 'queue is empty';
        } else {
            this.size = this.items.length -1;
            return this.items.shift();
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
            return Error('The item passed into this function must be a non-null value.');
        } else if (item === undefined) {
            return Error('The item passed into the function is undefined.');
        } else {
            this.items.push(item);
            this.size = this.items.length;
        } 
    }

    pop() {
        if (this.items.length < 1) {
            return 'stack is empty';
        } else {
            this.size = this.items.length-1;
            return this.items.pop();
        }
    } 
}

class Vertex {
    constructor(vertex_id, value = null, color = "white") {
        this.id = vertex_id;  // - unique id for each vertex
        this.value = value;
        this.color = color;
        // - Q: pros and cons of using an object instead of a set here; 
        this.edges = new Set();
    }
}

class Graph {
    // - Graph represented as an object (called vertices) mapping each vertex id 
    // (the key) to its respective instantiated vertex class representation (the 
    // key value);
    // - Q: What are the pros and cons of using a Set data structure here instead 
    // of an object?
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
        } else {
            return ReferenceError('v1 or v2 is not a vertex in this graph');
        }
    }
   
    addDirectedEdge(v1_id, v2_id) {
        if (this.vertices[v1_id] && this.vertices[v2_id]) {
            this.vertices[v1_id].edges.add(v2_id);
        } else {
            return ReferenceError('v1 or v2 is not a vertex in this graph');
        }
    }

    dftRecursive(start_vert_id, visited = []) {
        // 1) push start_vert to visited
        // 2) for each start_vert edge, if it hasn't been visited, run 
        // dftRecursive on that
        visited.push(start_vert_id); 
        for (let edge of this.vertices[start_vert_id].edges) {
            if (!visited.includes(edge)) {
                this.dftRecursive(edge, visited);
            }
        }
        return visited;
    } 
    
    dfsRecursivePath(start_vert_id, target_vert_id, visited = [], path = []) {
        visited.push(start_vert_id);
        
        // - spread operator used so that each call of dfsRecursivePath
        // gets the version of path that was being built up when it was called 
        // (versus visited above which is shared across calls)
        // - note: chatgpt says we can also just pop it off when we backtrack...
        path = [...path, start_vert_id];

        if (start_vert_id === target_vert_id) {
            console.log('target found: ');
            return path;
        }
        for (let edge of this.vertices[start_vert_id].edges) {
            if (!visited.includes(edge)) {
                let newPath = this.dfsRecursivePath(edge, target_vert_id, visited, path);
                if (newPath) {
                    return newPath;
                }
            }
        }
        return null;        
    } 

    dftStack(start_vert_id) {
        let visited = [];
        let stack = new Stack();
        stack.push(start_vert_id);

        while (stack.size > 0) {
            let current_vert_id = stack.pop();
            if (!visited.includes(current_vert_id)) {
                visited.push(current_vert_id);
                for (let edge of this.vertices[current_vert_id].edges) {
                    stack.push(edge);    
                }
            }
        }
        return visited;
    }

    dfsStackPath(start_vert_id, target_vert_id) {
        let stack = new Stack();
        let visited = [];
        stack.push([start_vert_id, [start_vert_id]]); // arr[0]: start_vert_id, arr[1]: [associated path]

        while (stack.size > 0) {
            let [current_vert_id, path] = stack.pop();
            if (current_vert_id === target_vert_id) {
                return path;
            }
            if (!visited.includes(current_vert_id)) {
                visited.push(current_vert_id);
                for (let edge of this.vertices[current_vert_id].edges) {
                    // Q: should I add conditition to ignore edge if already in visited?
                    stack.push([edge, [...path, edge]]);
                }
            }
        }
        return null;
    }
    
    bft(start_vert_id) {
        let visited = [];
        let queue = new Queue();
        queue.enqueue(start_vert_id);
        
        while (queue.size>0) {
            let currentVertId = queue.dequeue();
            if (!visited.includes(currentVertId)) {
                visited.push(currentVertId);
                for (let edge of this.vertices[currentVertId].edges) {
                    queue.enqueue(edge);
                }
            }
        }
        return visited;
    }

    bfsPath(start_vert_id, target_vert_id) {
        let visited = [];
        let queue = new Queue();
        queue.enqueue([start_vert_id]);

        while (queue.size>0) {
            let dequeuedPath = queue.dequeue();
            // console.log('dequeuedPath: ', dequeuedPath);
            let dequeuedVertId = dequeuedPath[dequeuedPath.length-1];

            if (!visited.includes(dequeuedVertId)) {
                if (dequeuedVertId === target_vert_id) {
                    let visitedVertices = visited.slice();
                    visitedVertices.push(dequeuedVertId); 
                    console.log('visitedVertices: ', visitedVertices);
                    return dequeuedPath;
                } 
                visited.push(dequeuedVertId);
                for (let edge of this.vertices[dequeuedVertId].edges) {
                    let newPath = dequeuedPath.slice();
                    newPath.push(edge);
                    queue.enqueue(newPath);
                }
            }
        }
        return null;
    } 
}

// NOTE!!!!!!!!! Still need to validate various bft/dft methods on graphs with directed edges. 
let g1 = new Graph();

function addTestVertices(graph) {
    for (let i = 0; i<10;i++) {
        graph.addVertex(i);
    }
}

addTestVertices(g1);

g1.addEdge(0,1);
g1.addEdge(0,3);
g1.addEdge(1,2);
g1.addEdge(2,5);
g1.addEdge(2,4);
g1.addEdge(4,9);
g1.addEdge(3,7);
g1.addEdge(3,6);
g1.addEdge(7,9);

console.log('g1: ', g1);

// // NOTE: all below return expected values
// console.log('g1.dftRecursive(0): ', g1.dftRecursive(0));
// console.log('g1.dfsRecursivePath(0,9): ', g1.dfsRecursivePath(0,9));
// console.log('g1.dfsStackPath(0,9): ', g1.dfsStackPath(0,9))
// console.log(g1.bfsPath(0,7))
// console.log(g1.bft(0))