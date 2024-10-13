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

/*
TO DO: 
- time and space complexity 
*/

// // Recursive approach
function allDistinctSubsetsRecursive(elements) {
    let currentSubset = [];
    let allSubsets = [];

    function generateSubsets(index) {
        if (index === elements.length) {
            allSubsets.push(currentSubset.slice()); // O(n) = n for time and space
            return;
        }  
        // - without element at elements[index]
        generateSubsets(index+1);

        // - with element at elements[index]
        currentSubset.push(elements[index]); 
        generateSubsets(index + 1);
        currentSubset.pop(); 
    };
    generateSubsets(0);
    return allSubsets;
};
console.log('allDistinctSubsetsRecursive: ', allDistinctSubsetsRecursive([1, 5, 3]));

// // Iterative (BFS) Approach 
function allDistinctSubsetsIterative(elements) {
    let allSubsets = [[]];
    for (let i = 0; i < elements.length; i++) {
        let currentElement = elements[i];
        let n = allSubsets.length; 
        
        // - for every subset in allSubsets, make a copy, and include 
        // the new letter in it; add it to all subsets
        for (let j = 0; j < n; j++) { 
            let newSubset = allSubsets[j].slice();
            newSubset.push(currentElement);
            allSubsets.push(newSubset);
        };
    };
    return allSubsets;
};
console.log('allDistinctSubsetsIterative: ', allDistinctSubsetsIterative([1, 5, 3]));


console.log('allDistinctSubsetsIterativeTest: ', allDistinctSubsetsIterative(['a', 'b']));

