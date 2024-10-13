/*

(easy)

Problem Statement

Find the minimum depth of a binary tree. The minimum depth 
is the number of nodes along the shortest path from the 
root node to the nearest leaf node.


Ex1

       1
    2     3
 4    5   

Minimum Depth:2 

Ex2
a)
        12
       7   1
          10  5

Minimum Depth:2

b)   
        12
      7     1
    9      10  5
           11

Minimum Depth:3        
*/

class Node {
    constructor(value, next = null, prev = null) {
        this.value = value;
        this.next = next;
        this.prev = prev; 
    }
}

class BinaryTree {
  constructor(value, left = null, right = null) {
    this.value = value; 
    this.left = left; 
    this.right = right; 
  }
};

// ex 1 BT
let bt1 = new BinaryTree(1);
bt1.left = new BinaryTree(2);
bt1.right = new BinaryTree(3);
bt1.left.left = new BinaryTree(4);
bt1.left.right = new BinaryTree(5);
// console.log('bt1: ', bt1);

// ex 2 BT
let bt2 = new BinaryTree(12);
bt2.left = new BinaryTree(7);
bt2.right = new BinaryTree(1);
bt2.right.left = new BinaryTree(10);
bt2.right.right = new BinaryTree(5);
// console.log('bt2: ', bt2);

// ex 3 BT
let bt3 = new BinaryTree(12);
bt3.left = new BinaryTree(7);
bt3.right = new BinaryTree(1);
bt3.left.left = new BinaryTree(9);
bt3.right.left = new BinaryTree(10);
bt3.right.right = new BinaryTree(5);
bt3.right.left.left = new BinaryTree(11);
// console.log('bt3: ', bt3);

// - first in, first out
// - add to tail for adding elements, remove head for removing elements
class LinkedList {
    constructor(head = null, tail = null, size = 0) {
        this.head = head;
        this.tail = tail;
        this.size = size;
    }

    addToTail(node) {
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    removeHead() {
        let oldHead = this.head;
        this.head = this.head.next;
        this.size--;
        return oldHead
    }
}

// - in the queue, the binaryTrees are stored in nodes; 
class Queue {
    constructor(items = new LinkedList()) {
        this.items = items;
    }

    enqueue(item) {
        let node = new Node(item);
        this.items.addToTail(node);
    }

    dequeu() {
        return this.items.removeHead();
    }
}

// - time complexity: O(N)
// - space complexity: O(N)
function minimumDepth(binaryTree) {
    let queue = new Queue();
    queue.enqueue(binaryTree);
    let levelDepth = 1;
    while (queue.items.size > 0) {
        let levelSize = queue.items.size;
        for (let i = 0; i < levelSize; i++) {
            let current = queue.dequeu(); // returns node who's value is a binaryTree
            if (current.value.left) {
                queue.enqueue(current.value.left);
            } 
            if (current.value.right) {
                queue.enqueue(current.value.right);
            } 
            if (current.value.left === null && current.value.right === null) {
                return levelDepth
            }
        }
        levelDepth++;
    }
}

console.log('minimumDepth: ', minimumDepth(bt1));
console.log('minimumDepth: ', minimumDepth(bt2));
console.log('minimumDepth: ', minimumDepth(bt3));







// // - my original approach
// class Node {
//    constructor(id, left = null, right = null) {
//       this.id = id;
//       this.left = null;
//       this.right = null;
//    }
// }

// class Queue {
//    constructor() {
//       this.items = [];
//       this.size = 0;
//    }

//    enqueue(item) {
//       this.items.push(item);
//       this.size += 1;
//    }

//    dequeue() {
//       if (this.size === 0) {
//          return Error('queue is empty')
//       } else {
//          this.size -= 1;
//          return this.items.shift();
//       }
//    }
// }

// // time complexity: O(n)
// // space complexity: O(n)
// function minDepth(binaryTreeRoot) {
//    let queue = new Queue(); 
//    let levelOrderArr = [];
//    let level = 0;
//    queue.enqueue(binaryTreeRoot);

//    while (queue.size > 0) {
//       level +=1;
//       let levelSize = queue.size;
//       console.log('level: ', level);
//       console.log('levelSize: ', levelSize);
//       let levelArr = [];
      
//       for (let i = 0; i < levelSize; i++) {
//          let levelNode = queue.dequeue();

//          // checks if node is a leaf node; if so, we're at lowest level where there's a leaf
//          if (levelNode.left === null && levelNode.right === null) {
//             console.log('level : ', level);
//             return level
//          } 

//          if (levelNode.left) {
//             queue.enqueue(levelNode.left);
//          }
//          if (levelNode.right) {
//             queue.enqueue(levelNode.right);
//          }
//          levelArr.push(levelNode.id);
//       }
//       console.log('levelArr: ', levelArr);
//       levelOrderArr.push(levelArr);
//       console.log('levelOrderArr : ', levelOrderArr);
//    } 
// }

// // binary tree root is the top-most node; 

// // // ex 1

// //        1
// //     2     3
// //  4    5   

// // Minimum Depth:2 

// // let [n1, n2, n3, n4, n5] = [new Node(1), new Node(2), new Node(3), new Node(4), new Node(5)]; 
// // n1.left = n2;
// // n1.right = n3; 
// // n2.left = n4;
// // n2.right = n5;
// // minDepth(n1);


// // ex 2

// // // Ex2
// // a)
// //         12
// //        7   1
// //           10  5

// // Minimum Depth:2

// // let [n12, n7, n1, n10, n5] = [12, 7, 1, 10, 5].reduce((accumulator, currentValue) => {
// //    accumulator.push(new Node(currentValue));
// //    return accumulator
// // }, []);

// // n12.left = n7;
// // n12.right = n1;
// // n1.left = n10;
// // n1.right = n5;

// // minDepth(n12)


// // b)   
// //         12
// //       7     1
// //     9      10  5
// //            11

// // Minimum Depth: 3

// let [n12, n7, n1, n9, n10, n5, n11] = [12, 7, 1, 9, 10, 5, 11].reduce((accumulator, currentValue) => {
//    accumulator.push(new Node(currentValue));
//    return accumulator
// }, []);

// n12.left = n7;
// n12.right = n1; 

// n7.left = n9;

// n1.left = n10;
// n1.right = n5;

// n10.left = n11;

// minDepth(n12);