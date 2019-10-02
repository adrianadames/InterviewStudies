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

    // QQQQQQQQQQQQQQQ: Do I need to use path as a parameter for this algorithm? Does visited on its own suffice?
    // I'm getting the same answer either way. Will revisit at a later time. 
    dfsRecursivePath(start_vert_id, target_vert_id, visited = [], path = []) {
        visited.push(start_vert_id);
        path.push(start_vert_id);

        if (start_vert_id === target_vert_id) {
            console.log('visited: ', visited)
            return path // OR return visited??????????
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

    // QQQQQQQQQQQQQQQ: Do I need to use path as a parameter for this algorithm? I don't think so. 
    dfsStackPath(start_vert_id, target_vert_id) {
        let stack = new Stack();
        let visited = [];
        stack.push(start_vert_id);

        while (stack.size>0) {
            let currentVertId = stack.pop();
            if (!visited.includes(currentVertId)) {
                visited.push(currentVertId);
                if (currentVertId === target_vert_id) {
                    return visited
                }
                for (let edge of this.vertices[currentVertId].edges) {
                    stack.push(edge);
                }
            }
        }
        return null
    }
    
    bft(start_vert_id) {
        let visited = [];
        let queue = new Queue();
        queue.enqueue(start_vert_id);
        
        while (queue.size>0) {
            let currentVertId = queue.dequeue();
            if (!visited.includes(currentVertId)) {
                visited.push(currentVertId)
                for (let edge of this.vertices[currentVertId].edges) {
                    queue.enqueue(edge)
                }
            }
        }
        return visited
    }




    bfsPath() {} 

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

console.log(g1.bft(0,7))