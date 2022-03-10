// selection sort

// References
// -Goodrich 9.4.1
// -Necaise 5.2.2
// -Corbin Ex. 2.2-2 in Section 2.3 Exercises


// runtime:O(n^2)  (best case = worst case = O(n^2))
// spacetime: O(n)

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