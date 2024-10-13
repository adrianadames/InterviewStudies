/*
(easy)

Problem Statement:
- Given a set of numbers that might contain duplicates, 
find all of its distinct subsets.

Example 1:

Input: [1, 3, 3]
Output: [], [1], [3], [1,3], [3,3], [1,3,3]


Example 2:

Input: [1, 5, 3, 3]
Output: [], [1], [5], [3], [1,5], [1,3], [5,3], 
[1,5,3], [3,3], [1,3,3], [3,3,5], [1,5,3,3] 
*/

/*
TO DO: 
- time and space complexity 
*/

function allDistinctSubsetsWithDupsRecursive(elements) {
    elements.sort((a,b) => a-b);
    let currentSubset = [];
    let allSubsets = [];

    function generateSubsets(index) {
        if (index === elements.length) {
            allSubsets.push(currentSubset.slice());
            return;
        }; 
        
        // - with element at elements[index]
        currentSubset.push(elements[index]); 
        generateSubsets(index+1);
        currentSubset.pop(); 

        // - without element at elements[index]
        while (index + 1 < elements.length && elements[index] === elements[index+1]) { // - to avoid duplicate distinct subsets
            index++;
        };
        generateSubsets(index+1);

        // NOTE: If I want to start by excluding elements first, I would need to use
        // this variation of the above to account for the duplicate elements
        
        // // - without element at elements[index]
        // let nextIndex = index;
        // while (nextIndex < nums.length && nums[nextIndex] === nums[index]) {
        //     nextIndex++;
        // };
        // backtrack(nextIndex); // - by skipping some indices for duplicates, we avoid adding duplicate subsets
        
        // // - with element at elements[index]
        // currentSubset.push(nums[index]);
        // backtrack(index + 1);
        // currentSubset.pop();
    };
    generateSubsets(0);
    return allSubsets;
};
console.log('allDistinctSubsetsWithDupsRecursive: ', allDistinctSubsetsWithDupsRecursive([1,3,3, 4]));


// // Iterative (BFS) Approach  per grokking
function allDistinctSubsetsWithDupsIterative(elements) {
    elements.sort((a,b) => a-b);
    let allSubsets = [[]];
    let endIndex = 0;
    for (let i = 0; i < elements.length; i++) {
        let startIndex = 0;

        // - if current and previous element are the same, only use subsets generated
        // from the previous step (to avoid duplicates) to generate more sets; if you 
        // instead use all the sets, you will generate duplicates; 
        // - endIndex + 1 is the start location of the subsets added in the previous steps
        if (i > 0 && elements[i] === elements[i - 1]) {
            startIndex = endIndex + 1;
        };
        endIndex = allSubsets.length - 1;

        // - add current number to all subsets formed so far
        for (let j = startIndex; j <= endIndex; j++) {
            let newSubset = allSubsets[j].slice();
            newSubset.push(elements[i]); // Add current number
            allSubsets.push(newSubset);
        };
    };
    return allSubsets;
};
console.log('allDistinctSubsetsWithDupsIterative: ', allDistinctSubsetsWithDupsIterative([3, 3, 1, 4]));
// console.log('allDistinctSubsetsWithDupsIterative: ', allDistinctSubsetsWithDupsIterative([1, 3, 3, 4]));

// alternate (per chatgpt) (NOTE: Still not totally clear on how this one works...)
function allDistinctSubsetsWithDupsAlternate(elements) {
    function backtrack(start, current, result, elements) {
        result.push([...current]); // Capture a copy of the current subset
    
        for (let i = start; i < elements.length; i++) {
            if (i > start && elements[i] === elements[i - 1]) continue; // Skip duplicates
            current.push(elements[i]);
            backtrack(i + 1, current, result, elements);
            current.pop();
        }
    }
    const result = [];
    elements.sort((a, b) => a - b);
    backtrack(0, [], result, elements);
    return result;
}
console.log('allDistinctSubsetsWithDupsAlternate: ', allDistinctSubsetsWithDupsAlternate([1, 3, 3, 4]));

