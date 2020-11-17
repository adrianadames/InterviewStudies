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

class BinaryTree {
  constructor(value, left = null, right = null) {
    this.value = value; 
    this.left = left; 
    this.right = right; 
  }
};

// BFT => queue (FIFO)
class Queue {
  constructor(items = []) {
    this.items = items;
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    if (this.items.length < 1) {
      return 'queue is empty'
    } else {
      return this.items.shift()
    }
  }
}

// -in the previous problem the output arrays for the examples above are: 
// [[1],[2,3],[4,5,6,7]] & [[12],[7,1],[9,10,5]]

// -to get the desired output array, I could just grab the output array
// from the previous problem, and pop out each item in a new output array; 

// -is there a more efficienct way to reverse an array?
// -can it be done in place?
// -yes. I believe so. switch the items at the indices at opposite ends of the array
// and then increment the front index and decrement the back index. 
// -if number of items in the array is even (e.g. [1,2,3,4]), do this arr.length/2 many times
// -if number of items in array is odd (e.g. [1,2,3,4,5]), do this Math.floor(arr.length/2) many times

// -another way to do this would be to use a stack (i.e. levelOrderStack) to store each levelArray, and then at the end 
// pop out each element from the stack into the output array (i.e. levelOrderArr).  

// time complexity: O(n)
// space complexity: O(1)
function reverseArray(arr) {
  let frontIndex = 0; 
  let backIndex = arr.length - 1; 

  for (let i = 0; i < Math.floor(arr.length/2);i++) {
    [arr[frontIndex], arr[backIndex]] = [arr[backIndex], arr[frontIndex]];
    frontIndex += 1;
    backIndex -= 1;
  }
  return arr
}
