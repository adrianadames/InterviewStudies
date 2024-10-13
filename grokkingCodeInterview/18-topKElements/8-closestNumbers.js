/*
Problem Statement (medium)

Given a sorted number array and two integers ‘K’ and ‘X’, 
find ‘K’ closest numbers to ‘X’ in the array. Return the 
numbers in the sorted order. ‘X’ is not necessarily present 
in the array.

Example 1:
Input: [5, 6, 7, 8, 9], K = 3, X = 7
Output: [6, 7, 8]

Example 2:
Input: [2, 4, 5, 6, 9], K = 3, X = 6
Output: [4, 5, 6]

Example 3:
Input: [2, 4, 5, 6, 9], K = 3, X = 10
Output: [5, 6, 9]
*/

// - the array is initially sorted; 
// - we are given an integer X that we're looking to target;

/*
- my initial approach was to use a maxHeap to store the four closest numbers; 
- and then go through all the array and get the k numbers; 
- the issue is that this doesn't take advantage of the fact that the array is sorted; 
- this approach would be O(n) = n*log(k)

- if instead I were to first find the number closest to the X, and then I were to inspect
the numbers on either side for proximity to X, I would be able to find the solution faster; 
- this approach would be: O(n)= log(n) + k to find the middle element and then to find the 
remaining k items
- the problem with this approach is that it doesn't use a heap; 

- NOTE: I looked at the solution, and it starts by finding number closest to x, but after that
it uses a minHeap to store k numbers on either side of number closest to x, which I don't get. 
It also shows an alternative solution which is the one I describe above. The binarySearch plus
Two Pointers approach they call it. I'm going to say I'm done with this problem because I don't 
like how the heap data structure is used to help out here when the two pointer approach makes 
more sense to me. For now I will leave it as undone. 
*/