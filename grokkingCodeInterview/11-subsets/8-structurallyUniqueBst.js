/*
(hard)

Problem Statement:
- Given a number ‘n’, write a function to return all structurally 
unique Binary Search Trees (BST) that can store values 1 to ‘n’?

Example 1:

Input: 2
Output: 2
Explanation: Here are all the structurally unique BSTs storing 
all numbers from 1 to 2:

    1        
     \      
      v      
      2 
      
    2
    /      
   v     
   1       


Example 2:

Input: 3
Output: 5
Explanation: Here are all the structurally unique BSTs storing all numbers from 1 to 3:

    1        
     \      
      v     
      2
       \      
        v     
        3    

    1        
     \      
      v     
      3
     /        
    v     
    2 

    2
   / \
  v   v
  1    3

    3
   /  
  v    
  1 
    \
     v
     2


       3
      /  
     v    
    2
   /
  v
  1

*/

/*
Problem Statement:
- Given a number ‘n’, write a function to return all structurally 
unique Binary Search Trees (BST) that can store values 1 to ‘n’?

Approach: 
-I thought of two ways to approach this. 

-one way is to make a node for each value added to the bst that in addition 
to storing the value also stores the index of the node if the binary search 
tree were to be represented by an array. As you build the binary search tree, 
you can make an object for each tree whose key-value pairs are the index of 
the node in an array representation of the binarty tree and the value of the 
node, respectively. 

-the other approach i thought of was to, for all the trees who's root start
with the same value, do a tree traversal to check for uniqueness. while doing
the traversal, if one of the values comes up different, add that binary tree to 
the unique bts array; then at the end, add one of the duplicates to the unique 
bts array

-I like the first approach, but it uses up extra space, so I'm gonna go with the 
second approach. 

*/

class BST {
    constructor(value = null, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    add(value) {
        if (this.value === null) {
            this.value = value;
        } else {
            if (value > this.value) {
                if (this.right === null) {
                    this.right = new BST(value);
                } else {
                    this.right.add(value);
                }
            } else {
                if (this.left === null) {
                    this.left = new BST(value);
                } else {
                    this.left.add(value);
                }
            }
        }  
    }
}

let bst1 = new BST(1);
bst1.add(2);
bst1.add(3);
// console.log('bst1: ', bst1)

// breadthFirstTraversal

//        2
//      /   \
//     v     v
//     1      3
//    / \     / \
//   v   v   v   v
//   4   5   6   7

// breadth first traversal: 
// [2, 1, 3, 4, 5, 6, 7]

class BT {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

let bt1 = new BT(2);
bt1.left = new BT(1);
bt1.right = new BT(3);
bt1.left.left = new BT(4);
bt1.left.right = new BT(5);
bt1.right.left = new BT(6);
bt1.right.right = new BT(7);
// bt1.right.right.right = new BT(8);
// bt1.left.left.left = new BT(9);

let breadthFirstTraversal = (binaryTree) => {
    let path = [];
    
    if (binaryTree.value === null) {
        return path
    } else if (binaryTree.left === null && binaryTree.right === null) {
        return path.push(binaryTree.value);;
    }

    let nodeQueue = [binaryTree];
    while (nodeQueue.length > 0) {
        let currentNode = nodeQueue.shift();
        console.log('currentNode: ', currentNode)
        path.push(currentNode.value); 

        if (currentNode.left) {
            nodeQueue.push(currentNode.left);
        }
        if (currentNode.right) {
            nodeQueue.push(currentNode.right);
        }
    }
    // console.log('path: ', path)

    return path
}

// console.log('breathFirstTraversal: ', breadthFirstTraversal(bt1))



let structurallyUniqueBSTs = n => {
    console.log('test')
    // -we first generate all permutations of the set of numbers from 1 to n
    // -we create an elements array and use our generate permutations algorithm
    // to get an object whose key value pairs are the first value of permutation
    // and all the permutations that with that start value, respectively
    let elements = [];
    for (let i = 1; i <= n; i++) {
        elements.push(i)
    }
    let allPermutationsObject = generatePermutationsWrapper(elements);
    // console.log('allPermutationsObject: ', allPermutationsObject);

    // -then after that, we go through each key in the object, and
    // check if all the corresponding permutations generate unique trees

    let uniqueBinaryTrees = [];
    for (let i = 1; i <= n; i++) {        
        // get all permutations starting with i 
        let permutationsStartingWithi = allPermutationsObject[i]; 
        let binaryTrees = [];

        // loop through these permutations and create a binary search tree for each one
        for (let j = 0; j < permutationsStartingWithi.length; j++) {
            let permutation = permutationsStartingWithi[j];
            let bt = new BST();
            permutation.forEach(permutationValue => bt.add(permutationValue));
            binaryTrees.push(bt);
        }
        // console.log('binaryTrees: ', binaryTrees);

        // add structurally unique bst's to uniqueBinaryTrees
        // -how do I do this?
        // -well, let's say you're given an array with some duplicate values; 
        //  how do you go about making a new array from this one with no duplicates?
        // -sort, then only push into new array value oldArray[i] if oldArray[i] !== oldArray[i-1];
        
        // -what about for the binary trees?
        // -for each binary tree, create an object where the keys are the levels of the tree
        // and the values are the values at that level.
        // -not sure how I'd calculate that; i'd have to get a count of how many 
        // nodes are in the next level; then only increase the level after getting through that many nodes

        // -another naive way is for each tree, check if it's equal to the other trees one node at a time
        while (binaryTrees.length > 0) {
            let binaryTreeA = binaryTrees[binaryTrees.length-1];

            for (let q=0; q <binaryTrees.length-1; q++) {
                let unique = false;
                let binaryTreeB = binaryTrees[q];
                let nodeQueueA = [binaryTreeA]; 
                let nodeQueueB = [binaryTreeB];

                while (nodeQueueA.length > 0) {
                    let currentNodeA = nodeQueueA.shift();
                    let currentNodeB = nodeQueueB.shift();

                    if (currentNodeA.left) {
                        nodeQueueA.push(currentNodeA.left);
                        nodeQueueB.push(currentNodeB.left);
                    }
                    if (currentNodeA.right) {
                        nodeQueueA.push(currentNodeA.right);
                        nodeQueueB.push(currentNodeB.right);
                    }
                    // console.log('nodeQueueA: ', nodeQueueA)
                    // console.log('nodeQueueB: ', nodeQueueB)
                    for (let i = 0; i < nodeQueueA.length; i++) {
                        if (nodeQueueB[i] === null || nodeQueueA[i].value !== nodeQueueB[i].value) {
                            unique = true;
                            uniqueBinaryTrees.push(binaryTrees.pop());
                            break;
                        }
                    }

                    if (unique === true) {
                        // console.log('break!!!')
                        break
                    }
                }

                

                if (unique === false) {
                    // console.log('test fale  ')
                    binaryTrees.pop()
                    continue
                } 
            }
            uniqueBinaryTrees.push(binaryTrees.pop())
        }
        
    }
    return uniqueBinaryTrees
    
} 


// let me recall the permutations algorithm right quick

let generatePermutationsWrapper = (elements) => {
    let availableElements = new Array(elements.length).fill(true);
    let permutation = [];
    let allPermutations = [];
    let allPermutationsObject = {};
    generatePermutations(elements, 0, availableElements, permutation, allPermutations, allPermutationsObject);
    // return allPermutations
    return allPermutationsObject
}

let generatePermutations = (elements, index, availableElements, permutation, allPermutations, allPermutationsObject) => {
    if (index === elements.length) {
        // console.log('permutation: ', permutation);
        if (allPermutationsObject[permutation[0]]) {
            allPermutationsObject[permutation[0]].push(permutation.slice());
        } else {
            allPermutationsObject[permutation[0]] = [permutation.slice()];
        }
        return allPermutations.push(permutation.slice());
    } else {
        for (let i = 0; i < elements.length; i++) {
            if (availableElements[i]) {
                permutation.push(elements[i]);
                availableElements[i] = false;
                generatePermutations(elements, index+1, availableElements, permutation, allPermutations, allPermutationsObject);
                availableElements[i] = true;
                permutation.pop();
            }
        }
    }
}

// console.log('generatePermutationsWrapper: ', generatePermutationsWrapper([1, 2, 3]))

console.log('structurallyUniqueBSTs: ', structurallyUniqueBSTs(3))

