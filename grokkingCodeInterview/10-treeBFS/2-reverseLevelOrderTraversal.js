/*
(easy)

Problem Statement

Given a binary tree, populate an array to represent its 
level-by-level traversal in reverse order, i.e., the lowest 
level comes first. You should populate the values of all 
nodes in each level from left to right in separate sub-arrays.

Ex1

       1
    2      3
 4    5   6  7

Reverse Level Order Traversal: 
[[4,5,6,7],[2,3],[1]]    

Ex2
        12
      7    1
    9      10  5

Reverse Level Order Traversal: 
[[9,10,5],[7,1],[12]]

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
bt1.right.left = new BinaryTree(6);
bt1.right.right = new BinaryTree(7);
// console.log('bt1: ', bt1);

// ex 2 BT
let bt2 = new BinaryTree(12);
bt2.left = new BinaryTree(7);
bt2.right = new BinaryTree(1);
bt2.left.left = new BinaryTree(9);
bt2.right.left = new BinaryTree(10);
bt2.right.right = new BinaryTree(5);
// console.log('bt2: ', bt2);


class DoublyLinkedList {
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
            let oldTail = this.tail;
            this.tail.next = node;
            this.tail = node;
            this.tail.prev = oldTail;
        }
        this.size++;
    }

    addNewHead(node) {
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            let oldHead = this.head;
            oldHead.prev = node;
            node.next = oldHead;
            this.head = node;
        }
        this.size++
    }

    removeHead() {
        if (this.head === null) {
            return null
        }
        let oldHead = this.head;
        this.head = oldHead.next;
        this.size--;
        return oldHead
    }

    removeTail() {
        if (this.head === null) {
            return null
        }
        let oldTail = this.tail;
        this.tail = oldTail.prev;
        this.size--;
        return oldTail
    }
}

// - items added to the Dequeue are stored inside nodes
class Dequeue {
    constructor(items = new DoublyLinkedList()) {
        this.items = items;
    }

    push(item) {
        let node = new Node(item);
        this.items.addToTail(node);
    }

    shift() {
        return this.items.removeHead();
    }

    unshift(item) {
        let node = new Node(item);
        this.items.addNewHead(node);
    }

    pop() {
        return this.items.removeTail();
    }
}

// - time complexity: O(N)
// - space complexity: O(N)
function reverseLevelOrderTraversal(binaryTree) {
    let allLevelsNodes = new Dequeue();
    
    let queue = new Dequeue();
    queue.push(binaryTree)
    while (queue.items.size > 0) {
        let levelSize = queue.items.size;
        let levelNodes = [];
        for (let i = 0; i < levelSize; i++) {
            let current = queue.shift();
            levelNodes.push(current.value.value);
            if (current.value.left) {
                queue.push(current.value.left);
            }
            if (current.value.right) {
                queue.push(current.value.right);
            }
        }
        levelSize = queue.items.size;
        allLevelsNodes.push(levelNodes);
    }

    let allLevelsNodesArr = [];
    while (allLevelsNodes.items.size > 0) {
        allLevelsNodesArr.push(allLevelsNodes.pop().value);
    }
    return allLevelsNodesArr
}

console.log(reverseLevelOrderTraversal(bt1));
console.log(reverseLevelOrderTraversal(bt2));







// // // - my original approach
// class BinaryTree {
//   constructor(value, left = null, right = null) {
//     this.value = value; 
//     this.left = left; 
//     this.right = right; 
//   }
// };

// // -in the previous problem the output arrays for the examples above are: 
// // [[1],[2,3],[4,5,6,7]] & [[12],[7,1],[9,10,5]]
// // -to get the desired output array, I could just grab the output array
// // from the previous problem, and reverse it; 

// // LINKED LIST QUEUE IMPLEMENTATION
// class Node {
//     constructor(value = null, next = null) {
//         this.value = value;
//         this.next = next;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null; 
//         this.tail = null; 
//         this.size = 0;
//     }

//     addToTail(nodeValue) {
//         if (this.size === 0) {
//             this.head = new Node(nodeValue);
//             this.size +=1;
//         } else if (this.size === 1) {
//             this.head.next = new Node(nodeValue);
//             this.tail = this.head.next;
//             this.size +=1; 
//         } else {
//             let oldTail = this.tail; 
//             let newTail = new Node(nodeValue);
//             oldTail.next = newTail;
//             this.tail = newTail;
//             this.size += 1;
//         }
//     }

//     removeHead() {
//         if (this.size === 0) {
//             return null
//         } else if (this.size === 1) {
//             let removedHead = this.head; 
//             this.head = null; 
//             this.tail = null;
//             this.size -= 1;
//             return removedHead 
//         } else {
//             let removedHead = this.head; 
//             let newHead = this.head.next; 
//             this.head = newHead; 
//             this.size -= 1;
//             return removedHead
//         }
//     }
// }

// class Queue {
//     constructor() {
//         this.items = new LinkedList();
//         this.size = this.items.size;
//     }

//     enqueue(value) {
//         if (value === null) {
//             return Error('The item passed into this function must be a non-null value.')
//         } else if (value === undefined) {
//             return Error('The item passed into the function is undefined.')
//         } else {
//             this.items.addToTail(value);
//             this.size = this.items.size;
//         }
//     }

//     dequeue(value) {
//         if (this.size < 1) {
//             return 'queue is empty'
//         } else {
//             this.size -= 1;
//             return this.items.removeHead();
//         }
//     }
// }

// // // REVERSE ARRAY HELPER FUNCTION
// // time complexity: O(n)
// // space complexity: O(1)
// function reverseArr(arr) {
//   let frontIndex = 0; 
//   let backIndex = arr.length - 1; 

//   for (let i = 0; i < Math.floor(arr.length/2);i++) {
//     [arr[frontIndex], arr[backIndex]] = [arr[backIndex], arr[frontIndex]];
//     frontIndex += 1;
//     backIndex -= 1;
//   }
//   return arr
// }

// // time complexity: O(n)
// // space complexity: O(n)
// function reverseLevelOrderTraversal(binaryTreeRoot) {
//   let queue = new Queue(); 
//   queue.enqueue(binaryTreeRoot); 
//   let reverseLevelOrderArr = [];

//   while (queue.size > 0) {
//     let levelSize = queue.size;
//     let levelArr = [];

//     for (let i = 0; i < levelSize; i++) {
//       let levelNode = queue.dequeue(); // returns a node whose value property is the binary tree node
      
//       // we reassign the levelNode variable to equal the binary tree node stored in the Node dequeued above
//       levelNode = levelNode.value;

//       if (levelNode.left) {
//         queue.enqueue(levelNode.left);
//       }
//       if (levelNode.right) {
//         queue.enqueue(levelNode.right);
//       }
//       levelArr.push(levelNode.value);
//     }
//     reverseLevelOrderArr.push(levelArr)
//   }
//   reverseLevelOrderArr = reverseArr(reverseLevelOrderArr)

//   return reverseLevelOrderArr
// }
