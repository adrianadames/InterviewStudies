/*
(easy)

Problem Statement:
- Given a set with distinct elements, find all of its distinct subsets.

Example 1:

Input: [1, 3]
Output: [], [1], [3], [1,3]


Example 2:

Input: [1, 5, 3]
Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3]
*/

allDistinctSubsets = (index, distinctSubset, allSubsets, elements) => {
    // -base case: when distinctSubset becomes complete (i.e. when all elements 
    // in elements array have been established to be included or not included
    // in the distinctSubset array)
    // -until then, we move closer and closer to the base case by guessing yes 
    // or no for the presence of each element in elements in the 
    // partial solution that is the distinctSubject array; if element at index x 
    // of elements is/isn't in the partial solution that is the 
    // distinctSubject array, we put push/don't push into the distinctSubset array 
    if (index === elements.length) {
        allSubsets.push(distinctSubset.slice()); // O(n) = n upper bound for space and for time
    } else {
        [0,1].forEach(val => {
            if (val === 0) {
                allDistinctSubsets(index+1, distinctSubset, allSubsets, elements);
            } else {
                distinctSubset.push(elements[index]); // O(n) = 1ish
                allDistinctSubsets(index+1, distinctSubset, allSubsets, elements);
                distinctSubset.pop(); // O(n) = 1ish
            }
        })
    }
}


// time: O(n) = 2^(n+1) + 2^n *n = 2^n*2^1 + 2^n *n = 2^n * (2+n) => O(n) = 2^n * n;
// space: O(n) = 2^n * n; (less in reality because not all subsets use n spots in candidate solutions)
allDistinctSubsetsWrapper = (elements) => {
    let distinctSubset = [];
    let allSubsets = [];
    allDistinctSubsets(0, distinctSubset, allSubsets, elements);
    return allSubsets
}

console.log('allDistinctSubsetsWrapper: ', allDistinctSubsetsWrapper([1, 3, 5]))

// console.log('allDistinctSubsetsWrapper: ', allDistinctSubsetsWrapper([1, 3, 3]))





// // alternate method that I started but didnt finish 
// allDistinctSubsets2 = (index, distinctSubset, allSubsets, elements) => {
    
//     // -base case: when distinctSubset becomes complete (i.e. when all elements 
//     // at the indices of distinctSubset array have been established to include
//     // or not include an element from elements); 
//     // -until then, we move closer and closer to the base case by guessing yes 
//     // or no for whether each element in elements is present in the 
//     // partial solution that is the distinctSubject array; if element at index x 
//     // of elements is/isn't in the partial solution that is the 
//     // distinctSubject array, we put a 1/0 at index x of the distinctSubset array
//     if (index === elements.length) {
//         allSubsets.push(distinctSubset.slice()); // O(n) = n upper bound for space and for time
//     } else {
//         [0,1].forEach(val => {
//                 distinctSubset[index] = val;
//                 allDistinctSubsets(index+1, distinctSubset, allSubsets, elements);
//                 distinctSubset[index] = null;
//         })
//     }
// }

// // time: O(n) = 2^(n+1) + 2^n *n = 2^n*2^1 + 2^n *n = 2^n * (2+n) => O(n) = 2^n * n;
// // space: O(n) = 2^n * n; (less in reality because not all subsets use n spots in candidate solutions)
// allDistinctSubsetsWrapper2 = (elements) => {
//     let distinctSubset = new Array(elements.length).fill(null);
//     let allSubsets = [];
//     allDistinctSubsets2(0, distinctSubset, allSubsets, elements);
//     return allSubsets
// }

// console.log('allDistinctSubsetsWrapper2: ', allDistinctSubsetsWrapper2([1, 5, 3]));
// // console.log('allDistinctSubsetsWrapper2: ', allDistinctSubsetsWrapper2([1, 3, 3]));