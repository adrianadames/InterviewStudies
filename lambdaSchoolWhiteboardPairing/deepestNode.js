/* 
This problem was asked by Google.

Given the root of a binary tree, return a deepest node. For example, in the following tree, return d.

    a
   / \
  b   c
 /
d


*/

class BinaryTree {
    constructor(value, left  = null, right  = null){
        this.value = value,
        this.left = left,
        this.right = right
    }

    // O(n) where n is number of nodes in tree
    deepestNode = () => {
        let currentNode = this;
        let visited = []; 
        let queue = []; //FIFO (shift to remove from front, push to add to back)

        if (currentNode) {
            queue.push(currentNode);
        }
        while (queue.length > 0) {
            currentNode = queue.shift();
            if (!visited.includes(currentNode)) {
                visited.push(currentNode);
                if (currentNode.left) {
                    queue.push(currentNode.left)
                }
                if (currentNode.right) {
                    queue.push(currentNode.right)
                }
            }
        }
        return visited[visited.length-1];
    }
}

let bt1=new BinaryTree('a')
bt1.left = new BinaryTree('b');
bt1.right = new BinaryTree('c');
bt1.left.left = new BinaryTree('d');
bt1.left.left.left = new BinaryTree('e');
bt1.left.left.left.right = new BinaryTree('f');
bt1.right.right = new BinaryTree('g');
bt1.right.right.right = new BinaryTree('h');
bt1.right.right.right.right = new BinaryTree('i');
bt1.right.right.right.right.left = new BinaryTree('j');


console.log(bt1.deepestNode())

