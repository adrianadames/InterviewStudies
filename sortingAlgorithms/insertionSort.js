/*
INSERTION SORT

References
-Corbin 2.1
-Goodrich 5.5.2 (for array), 7.5 (for linked list), 9.4.1
-Necaise 5.2.3

Performance: 
-runtime: O(n^2) (best case = O(n))
-spacetime: O(1)

TDs: 
-insertion sort for linked list. 

---------------------- Description --------------------------
-Similar to how one would sort deck of cards as you flipped over 
each card from down facing deck. As you flip over each card, it starts at the 
rightmost position (e.g. when you flip over the 5th card, it will be in the 
position of where the greatest of the 5 cards should be); you move it leftward 
if its smaller to the number to its left and you keep going until it's in its 
correct position. At that point the cards are sorted. 

"The algorithm proceeds as follows for an array based sequence. We start with 
the first element in the array. One element by itself is already sorted. Then 
we consider the next element in the array. If it is smaller than the first, we 
swap them. Next we consider the third element in the array. We swap it leftward 
until it is in its proper order with the first two elements. We then consider 
the fourth element, and swap it leftward until it is in the proper order with 
the first three. We continue in this manner with the fifth element, the sixth, 
and so on, until the whole array is sorted." (Goodrich)

ex: [2, 5, 1, 9, 6]

1st loop: i = 1
[2, 5, 1, 9, 6]

2nd loop: i = 2
[2, 1, 5, 9, 6]
[1, 2, 5, 9, 6]

3rd loop: i = 3
[1, 2, 5, 9, 6]

4th loop: i = 4
[1, 2, 5, 6, 9]

*/

function insertionSort(arr) {
    // -starting with the second element in the list (at position i = 1), 
    // we continually check if that element is smaller than the number to 
    // its left; if so, swap
    for (let i = 1; i < arr.length; i++) {
        while (arr[i] < arr[i-1] && i >= 1) {
            [arr[i], arr[i-1]] = [arr[i-1], arr[i]];
            i--;
        }
    }
    return arr
}

console.log('insertionSort: ', insertionSort([2, 5, 1, 9, 6]));
console.log('insertionSort: ', insertionSort([10, 51, 2, 18, 4, 31, 13, 5, 23, 64, 29]));