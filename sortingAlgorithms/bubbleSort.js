/*
BUBBLE SORT

References
-Goodrich Ex C-7.38 in Section 7.8
-Necaise 5.2.1
-Corbin Problem 2.2 in Ch 2 problems

Performance: 
-runtime: O(n^2)  (best case = worst case = O(n^2))
-spacetime: O(1)

TDs: 
-Bubble sort for linked list. 

------------------------ Description ----------------------------
-"(algorithm) repeatedly steps through the list, compares adjacent 
elements and swaps them if they are in the wrong order."

-Algorithm completes for loop through the array n times, each time looping 
through 1 less element until it only loops through the 1st element
- (n-1) + (n-2) + ... + 1 =~ n*(n-1)/2 => O(n^2)

-first loop places largest value in the array at the end
-second loop places 2nd largest value in the array
-...
-last loop places (n-1)th largest value in the array (loop will compare first
two items and swap if 2nd item is smaller)

// 1st for loop (n=4): i < n-1 = 4 => i = 0, 1, 2, 3

i=0
[2, 5, 1, 9, 6]

i=1
[2, 1, 5, 9, 6]

i=2
[2, 1, 5, 9, 6]

i=3
[2, 1, 5, 6, 9]

// 2nd for loop (n=3): i < n -1  => i = 0, 1, 2

i=0
[1, 2, 5, 6, 9]

i= 1
[1, 2, 5, 6, 9]

...

*/

function bubbleSort(arr) {
    let n = arr.length;

    while (n > 1) {
        for (let i = 0; i < n-1; i++) {
            // if current element greater than next element, swap
            if (arr[i]> arr[i+1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
            }
        }
        // -largest of remaining values placed at n and to the right of n, 
        // so don't need to do comparisons after n cause we know everything 
        // larger there; so we decrement n so we do fewer comparisons next loop
        n--;
    }
    return arr
};

console.log('bubbleSort: ', bubbleSort([2, 5, 1, 9, 6]));
console.log('bubbleSort: ', bubbleSort([10, 51, 2, 18, 4, 31, 13, 5, 23, 64, 29]));