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
    constructor(value = null) {
        this.value = value;
        this.right = right;
        this.left = left;
    }
}
