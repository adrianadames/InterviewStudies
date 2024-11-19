/*
(medium)
(https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/description/)

Given a directed acyclic graph, with n vertices numbered from 0 to n-1, 
and an array edges where edges[i] = [fromi, toi] represents a directed 
edge from node fromi to node toi.

Find the smallest set of vertices from which all nodes in the graph are 
reachable. It's guaranteed that a unique solution exists.

Notice that you can return the vertices in any order.

Example 1:
Input: n = 6, edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]
Output: [0,3]
Explanation: It's not possible to reach all the nodes from a single vertex. 
From 0 we can reach [0,1,2,5]. From 3 we can reach [3,4,2,5]. So we output 
[0,3].

Example 2:
Input: n = 5, edges = [[0,1],[2,1],[3,1],[1,4],[2,4]]
Output: [0,2,3]
Explanation: Notice that vertices 0, 3 and 2 are not reachable from any 
other node, so we must include them. Also any of these vertices can reach 
nodes 1 and 4.

Constraints:
2 <= n <= 10^5
1 <= edges.length <= min(10^5, n * (n - 1) / 2)
edges[i].length == 2
0 <= fromi, toi < n
All pairs (fromi, toi) are distinct.
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
        this.edges = new Set();
    }
}

class Graph {
    constructor() {
        this.vertices = new Set();
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

    dftRecursive(start_vert_id, visited = new Set()) {
        // 1) push start_vert to visited
        // 2) for each start_vert edge, if it hasn't been visited, run 
        // dftRecursive on that
        visited.add(start_vert_id); 
        for (let edge of this.vertices[start_vert_id].edges) {
            if (!visited.has(edge)) {
                this.dftRecursive(edge, visited);
            }
        }
        return visited;
    } 
    
}

function minNumVertices(n, edges) {
    let graph = new Graph();
    for (let i = 0; i < n; i++) {
        graph.addVertex(i);
    }

    for (let i = 0; i < edges.length; i++) {
        graph.addDirectedEdge(edges[i][0], edges[i][1]);
    }

    console.log('graph: ', graph);
    // return graph.dfsRecursive(source, dest); 

    let reachable = {};
    for (let i = 0; i < n; i++) {
        reachable[i] = graph.dftRecursive(i);
    }
    console.log('reachable: ', reachable);
}
minNumVertices(6,[[0,1],[0,2],[2,5],[3,4],[4,2]])