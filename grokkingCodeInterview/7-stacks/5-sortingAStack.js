/*
(easy)

Problem Statement:
Given a stack, sort it using only stack operations (push and pop).
You can use an additional temporary stack, but you may not copy the 
elements into any other data structure (such as an array). The values 
in the stack are to be sorted in descending order, with the largest 
elements on top.

Example 1
Input: [34, 3, 31, 98, 92, 23]
Output: [3, 23, 31, 34, 92, 98]

Example 2
Input: [4, 3, 2, 10, 12, 1, 5, 6]
Output: [1, 2, 3, 4, 5, 6, 10, 12]

Example 3
Input: [20, 10, -5, -1]
Output: [-5, -1, 10, 20]
*/
// time: O(n)

/*
- Inner loop (while tempStack.length > 0 && tempStack[tempStack.length -1] > temp): 
In the worst case, every element might be pushed back into inputStack from tempStack 
to maintain order. But crucially, each element is moved between stacks at most twice: 
once from inputStack to tempStack, and potentially back from tempStack to inputStack 
before finally being placed in tempStack in the correct order.

- The outer loop always runs n times because it processes each element in the 
inputStack exactly once, regardless of the inner loop's behavior.
- The inner loop adjusts the positions of elements but does not change the 
number of times the outer loop runs.
*/

// space: O(n)
function sortingAStack(inputStack) {
    let tempStack = [];
 
    while (inputStack.length > 0) {
        let temp = inputStack.pop();
        while (tempStack.length > 0 && tempStack[tempStack.length -1] > temp) {
            inputStack.push(tempStack.pop());
        }
        tempStack.push(temp);
    }
    return tempStack;
}

console.log('sortingAStack: ', sortingAStack([34, 3, 31, 98, 92, 23]));
console.log('sortingAStack: ', sortingAStack([4, 3, 2, 10, 12, 1, 5, 6]));
console.log('sortingAStack: ', sortingAStack([20, 10, -5, -1]));