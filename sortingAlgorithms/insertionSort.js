

// Sorting Algorithms to review: insertion -> selection -> bubble -> merge -> heap -> quick sort

// insertion sort
// References
// -Corbin 2.1
// -Goodrich 5.5.2 (for array), 7.5 (for linked list), 9.4.1
// -Necaise 5.2.3

// runtime: O(n^2) (best case = O(n))
// spacetime: O(n)

// using es6 destructuring assignment
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        while (arr[i] < arr[i-1] && i >= 1) {
            [arr[i], arr[i-1]] = [arr[i-1], arr[i]];
            i--;
        }
    }
    return arr
}

// // not using es6 destructuring assignment
// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         while (arr[i] < arr[i-1] && i >= 1) {
//             let beingSorted = arr[i];
//             let numberToLeft = arr[i-1];

//             arr[i] = numberToLeft;
//             arr[i-1] = beingSorted;
//             i--;
//         }
//     }
//     return arr
// }

console.log('insertionSort: ', insertionSort([2, 5, 1, 9, 6]));
console.log('insertionSort: ', insertionSort([10, 51, 2, 18, 4, 31, 13, 5, 23, 64, 29]));