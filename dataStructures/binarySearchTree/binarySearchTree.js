// Binary search tree
//
// properties - value, left_child, right_child
// methods - insert, getMax, contains, BFT, DFT (stack + recursive)


class Queue {
    constructor(items) {
        this.items = []
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        return this.items.shift()
    }
}

class Stack {
    constructor(items) {
        this.items = []
    }
    push(item) {
        this.items.push(item);
    }
    pop(item) {
        return this.items.pop();
    }
}

class BinarySearchTree {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }

    insert(value) {
        let newBST = new BinarySearchTree(value);
        let currentNode = this;
        
        if (newBST.value >= currentNode.value) {
            if (!this.right) {
                this.right = newBST;
            } else {
                currentNode = this.right;
                currentNode.insert(value)
            }
        } 
        else if (newBST.value < currentNode.value) {
            if (!this.left) {
                this.left = newBST;
            } else {
                currentNode = this.left;
                currentNode.insert(value)
            }
        }
    }

    bft(){
        let traversed = [];
        let queue = new Queue();
        let currentNode = this;

        queue.enqueue(currentNode);

        while (queue.items.length>0) {
            currentNode = queue.dequeue();
            traversed.push(currentNode.value);

            if (currentNode.right) {
                queue.enqueue(currentNode.right);
            }
            if (currentNode.left) {
                queue.enqueue(currentNode.left);
            }
        }
        return traversed
    }

    dft_stack(){
        let traversed = [];
        let stack = new Stack();
        let currentNode = this;

        stack.push(currentNode);

        while (stack.items.length>0) {
            currentNode = stack.pop();
            traversed.push(currentNode.value);

            if (currentNode.right) {
                stack.push(currentNode.right)
            }
            if (currentNode.left) {
                stack.push(currentNode.left)
            }
        }
        return traversed
    }

    dft_recursive() {}

    getMax() {}

    contains() {}
}

bst1 = new BinarySearchTree(10);
bst1.insert(12);
bst1.insert(5);
bst1.insert(4);
bst1.insert(20);
bst1.insert(8);
bst1.insert(7);
bst1.insert(15);
bst1.insert(13);

console.log(bst1.bft());
console.log(bst1.dft_stack());
