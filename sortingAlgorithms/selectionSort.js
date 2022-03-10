// selection sort

// References
// -Goodrich 9.4.1
// -Necaise 5.2.2
// -Corbin Ex. 2.2-2 in Section 2.3 Exercises

// runtime:O(n^2)  (best case = worst case = O(n^2))
// spacetime: O(1)

/*
TD: selection sort for linked list. 
*/

/*
-first compare 1st element and every number its right; switch if other number larger
-at this point we know smallest number in array is first

-then compare 2nd element and every number to its right; switch if other number larger
-at this point we know 2nd smallest number in array is second

-and so on

ex: [2, 5, 1, 9, 6]

first loop: n= 0
sub-loops: 
i=0
[2, 5, 1, 9, 6]
i=1
[2, 5, 1, 9, 6]
i=2
[1, 5, 2, 9, 6]
i=3
[1, 5, 2, 9, 6]
i=4
[1, 5, 2, 9, 6]

2nd loop: n= 1
sub-loops: 
i=1
[1, 5, 2, 9, 6]
i=2
[1, 2, 5, 9, 6]
i=3
[1, 2, 5, 9, 6]
i=4
[1, 2, 5, 9, 6]

3rd loop: n= 2
sub-loops: 
i=2
[1, 2, 5, 9, 6]
i=3
[1, 2, 5, 9, 6]
i= 4
[1, 2, 5, 9, 6]

4th loop: n= 3
sub-loops: 
i=3
[1, 2, 5, 9, 6]
i= 4
[1, 2, 5, 6, 9]
*/

// using es6 destructuring assignment
function selectionSort(arr) {
    let n = 0;

    while (n < arr.length - 1) {
        for (let i = n; i < arr.length; i++) {
            if (arr[i] < arr[n]) {
                [arr[i], arr[n]] = [arr[n], arr[i]]
            }
        }
        n++;
    }
    return arr
}

// // not using es6 destructuring assignment
// function selectionSort(arr) {
//     let n = 0;

//     while (n < arr.length - 1) {
//         let smallestKey = arr[n];
//         let smallestKeyIndex = n;
//         for (let i = n; i < arr.length; i++) {
//             let curr = arr[i];
//             if (curr < smallestKey) {
//                 smallestKey = curr;
//                 smallestKeyIndex = i;
//             }
//         }
//         arr[smallestKeyIndex] = arr[n];
//         arr[n] = smallestKey;

//         n++;
//     }
//     return arr
// }



console.log('selectionSort: ', selectionSort([2, 5, 1, 9, 6]));
console.log('selectionSort: ', selectionSort([10, 51, 2, 18, 4, 31, 13, 5, 23, 64, 29]));