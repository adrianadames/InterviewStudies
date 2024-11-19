/*
(easy)
(https://leetcode.com/problems/find-if-path-exists-in-graph/description/)

There is a bi-directional graph with n vertices, where each vertex 
is labeled from 0 to n - 1 (inclusive). The edges in the graph are 
represented as a 2D integer array edges, where each edges[i] = [ui, vi] 
denotes a bi-directional edge between vertex ui and vertex vi. Every 
vertex pair is connected by at most one edge, and no vertex has an 
edge to itself.

You want to determine if there is a valid path that exists from vertex 
source to vertex destination.

Given edges and the integers n, source, and destination, return true 
if there is a valid path from source to destination, or false otherwise.

Example 1:
Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
Output: true
Explanation: There are two paths from vertex 0 to vertex 2:
- 0 → 1 → 2
- 0 → 2

Example 2:
Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
Output: false
Explanation: There is no path from vertex 0 to vertex 5.

Constraints:

1 <= n <= 2 * 105
0 <= edges.length <= 2 * 105
edges[i].length == 2
0 <= ui, vi <= n - 1
ui != vi
0 <= source, destination <= n - 1
There are no duplicate edges.
There are no self edges.
*/


class Vertex {
    constructor(id) {
        this.id = id;
        this.edges = new Set();
    }
}

class Graph {
    constructor() {
        this.vertices = {}; // key: vertex, value: vertex object; 
    }

    addVertex(id) {
        this.vertices[id] = new Vertex(id);
    }

    addEdge(v1_id, v2_id) {
        if (this.vertices[v1_id] && this.vertices[v2_id]) {
            this.vertices[v1_id].edges.add(v2_id);
            this.vertices[v2_id].edges.add(v1_id);
        } else {
            return ReferenceError('v1 or v2 not a vertex in this graph');
        }
    }

    dfsRecursive(start_vert_id, target_vert_id, visited = new Set()) {
        if (start_vert_id === target_vert_id) {
            return true;
        }
        visited.add(start_vert_id);

        for (let edge of this.vertices[start_vert_id].edges) {
            if (!visited.has(edge)) {
                if (this.dfsRecursive(edge, target_vert_id, visited)) {
                    return true;
                }
            }
        }
        return false;
    }
}

function findIfPathExists(n, edges, source,dest) {
    let graph = new Graph();
    for (let i = 0; i < n; i++) {
        graph.addVertex(i);
    }

    for (let i = 0; i < edges.length; i++) {
        graph.addEdge(edges[i][0], edges[i][1]);
    }

    return graph.dfsRecursive(source, dest); 
}

console.log('findIfPathExists: ', findIfPathExists(10, [[0,2],[1,2],[2,1],[2,4],[3,6], [4,7], [5,6], [5,8], [5,7]], 4, 3));
console.log('findIfPathExists: ', findIfPathExists(10, [[0,2],[1,2],[2,1],[2,4],[3,6], [4,7], [5,6], [5,8]], 4, 3));