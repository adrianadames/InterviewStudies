/*

(medium)

Problem Statement

Given a binary tree, connect each node with its level
order successor. The last node of each level should 
point to a null node.

Ex1

       1->N
    2-----3->N
4-->5--->6--->7->N


Ex2
       12->N
     7----1->N
    9-->10-->5->N

*/

/*
-As a refresher, I'm first going to write the code for a 
level order traversal of a binary tree. 
-Then after that, I'll work on the actual problem. 
*/

class BinaryTree {
    constructor (value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// Queue => FIFO
class Queue {
    constructor(items = []) {
        this.items = items;
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.items.length === 0) {
            return 'queue is empty'
        } else {
            return this.items.shift();
        }
    }
}

let levelOrderTraversal = (binaryTree) => {
    let levelOrderTraversalArr = [];
    let level = 1;
    let queue = new Queue();
    queue.enqueue(binaryTree);

    while (queue.items.length > 0) {
        let numOfLevelNodes = queue.items.length;
        
        let levelNodesArr = [];

        for (let i = 0; i < numOfLevelNodes; i++) {
            let levelNode = queue.dequeue();

            levelNodesArr.push(levelNode.value);
            if (levelNode.left) {
                queue.enqueue(levelNode.left);
            }
            if (levelNode.right) {
                queue.enqueue(levelNode.right);
            }
        }
        levelOrderTraversalArr.push(levelNodesArr);
    }
    return levelOrderTraversalArr
}

let bt1 = new BinaryTree(1); 
bt1.left = new BinaryTree(2);
bt1.right = new BinaryTree(3);
bt1.left.left = new BinaryTree(4);
bt1.left.right = new BinaryTree(5);
bt1.right.left = new BinaryTree(6);
bt1.right.right = new BinaryTree(7);

// console.log('levelOrderTraversal(bt1): ', levelOrderTraversal(bt1));


let bt2 = new BinaryTree(12);
bt2.left = new BinaryTree(7);
bt2.right = new BinaryTree(1);
bt2.left.left = new BinaryTree(9);
bt2.right.left = new BinaryTree(10);
bt2.right.right = new BinaryTree(5);

console.log('levelOrderTraversal(bt2): ', levelOrderTraversal(bt2));

/*
Alrighty then. I've refreshed my memory of how to do a regular level order
traversal on a binary tree. Now I will work on the problem at hand which 
requires that level order siblings be connected to one another. 
*/

// So I'm thinking that an easy way to do this would be to push the siblings
// into an array first and then connect them. 

// time O(n) = n
// space O(n) = n
let connectOrderLevelSiblings = binaryTree => {

    let queue = new Queue();
    queue.enqueue(binaryTree); // add the root to the queue
    let level = 1; 

    let levelOrderTraversalArr = [];
    
    let numberOfNodesInLevel = 1;
    while (queue.items.length > 0) {
        console.log('level: ', level);
        console.log('numberOfNodesInLevel: ', numberOfNodesInLevel);
        
        let levelOrderArr = [];
        for (let i = 0; i < numberOfNodesInLevel; i++) {
            let node = queue.dequeue();
            // console.log('node: ', node);
            levelOrderArr.push(node); 

            if (node.left) {
                queue.enqueue(node.left);
            }
            if (node.right) {
                queue.enqueue(node.right);
            }
            // console.log('queue.items: ', queue.items);
        }

        numberOfNodesInLevel = queue.items.length;
        // console.log('numberOfNodesInLevel: ', numberOfNodesInLevel);

        for (let i = 0; i < levelOrderArr.length-1; i++) {
            levelOrderArr[i].next = levelOrderArr[i+1];
        }

        levelOrderArr[levelOrderArr.length-1].next = null;

        for (let i = 0; i < levelOrderArr.length; i++) {
            console.log('node.value: ', levelOrderArr[i].value);
            console.log('node.next', levelOrderArr[i].next)
        }

        levelOrderTraversalArr.push(levelOrderArr);

        level += 1;
    }

    // console.log('levelOrderTraversalArr: ', levelOrderTraversalArr)
}

// console.log('connectOrderLevelSiblings(bt1): ', connectOrderLevelSiblings(bt1));

console.log('connectOrderLevelSiblings(bt2): ', connectOrderLevelSiblings(bt2));

