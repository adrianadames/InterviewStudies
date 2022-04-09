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

allDistinctSubsets = (index, sol, allSubsets, elements) => {
    // -base case is when we've gone through all the elements 
    // and made all the subsets with and without the elements
    // ending with the last element in the array elements
    // -NOTE: THE ABOVE IS CONFUSING, AND IDK WHAT I WAS TRYING TO SAY. 

    if (index === elements.length) {
        allSubsets.push(sol.slice()); // O(n) = n upper bound for space and for time
    } else {
        for (let k = 0; k <=1; k++) {
            
            // if k=0, don't include candidate element: element[index]
            if (k === 0) {
                allDistinctSubsets(index+1, sol, allSubsets, elements);
            }

            // if k=1, include the candidate element: element[index]
            if (k === 1) {
                sol.push(elements[index]); // O(n) = 1ish
                allDistinctSubsets(index+1, sol, allSubsets, elements);
                sol.pop(); // O(n) = 1ish
            }
        }
    }
}

// time: O(n) = 2^(n+1) + 2^n *n = 2^n*2^1 + 2^n *n = 2^n * (2+n) => O(n) = 2^n * n;
// space: O(n) = 2^n * n; (less in reality because not all subsets use n spots in candidate solutions)
allDistinctSubsetsWrapper = (elements) => {
    let sol = [];
    let allSubsets = [];
    allDistinctSubsets(0, sol, allSubsets, elements);
    return allSubsets
}

console.log('allDistinctSubsetsWrapper: ', allDistinctSubsetsWrapper([1, 5, 3]))

// console.log('allDistinctSubsetsWrapper: ', allDistinctSubsetsWrapper([1, 3, 3]))