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

    deepestNode = () => {
        let deepestNode = this;
        let deepestLeftNode, deepestRightNode;
        let depth, right_depth,left_depth=0;

        while (this.left !== null && this.right !== null) {
            if (this.left === null && this.right === null) {
                return (this, depth)
            } else if (this.left && this.right === null) {
                left_depth+=1;
                deepestLeftNode = this.left;
            } else if (this.left === null && this.right) {
                right_depth+=1;
                deepestRightNode = this.right;
            } else {
                left_depth+=1;
                right_depth+=1;
                deepestLeftNode = this.left;
                deepestRightNode = this.right;
            }
            this.deepestNode()
        }

        if (left_depth>right_depth) {
            return (deepestLeftNode, left_depth)
        } else if (right_depth>= left_depth) {
            return (deepestRightNode, right_depth)
        }
    }
}

let bt1=new BinaryTree(5)

bt1.right = new BinaryTree(7);
bt1.left = new BinaryTree(6);

console.log(bt1.deepestNode())

