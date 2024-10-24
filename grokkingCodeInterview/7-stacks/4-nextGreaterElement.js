/*
(easy)

Problem Statement:
Given an array, print the Next Greater Element (NGE) for every 
element. The Next Greater Element for an element x is the first 
greater element on the right side of x in the array. Elements 
for which no greater element exist, consider the next greater 
element as -1.

Example 1:
Input: [4, 5, 2, 25]
Output: [5, 25, 25, -1]

Example 2:
Input: [13, 7, 6, 12]
Output: [-1, 12, 12, -1]

Example 3:
Input: [1, 2, 3, 4, 5]
Output: [2, 3, 4, 5, -1]

Constraints:
1 <= arr.length <= 104
*/


/*
// time: O(n); 
"The inner while loop also runs at most n times in total, but 
not for each iteration of the outer loop. Each element is pushed 
onto the stack once, and popped from the stack once. The popping 
occurs only when the current element is greater than the element 
at the index stored in the stack. Therefore, across the entire 
algorithm, the stack operations (push + pop) will also occur at 
most n times." -chatgpt
*/
// space: O(n); 
function nextGreaterElement(arr) {
    if (!arr || arr.length === 0) {
        return []
    }

    let stack = []; // - here we will store the array indices for which we are looking for the NGE
    let result = new Array(arr.length).fill(-1);
    for (let i = 0; i < arr.length; i++) {
        // - while arr[i] is the greatest NGE for each most recent member in the in the stack
        while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
            result[stack.pop()] = arr[i];
        }
        stack.push(i); // - we push in the index of the number who's NGE we are looking for
    }
    return result;
}

console.log('nextGreaterElement: ', nextGreaterElement([4, 5, 2, 25]));
console.log('nextGreaterElement: ', nextGreaterElement([13, 7, 6, 12]));
console.log('nextGreaterElement: ', nextGreaterElement([1, 2, 3, 4, 5]));

