/*
(medium)

Problem Statement:
- Given a set of distinct numbers, find all of its permutations.

Permutation is defined as the re-arranging of the elements of the set. 
For example, {1, 2, 3} has the following six permutations:

{1, 2, 3}
{1, 3, 2}
{2, 1, 3}
{2, 3, 1}
{3, 1, 2}
{3, 2, 1}

If a set has ‘n’ distinct elements it will have n! permutations.

Example 1:

Input: [1,3,5]
Output: [1,3,5], [1,5,3], [3,1,5], [3,5,1], [5,1,3], [5,3,1]
*/

/*
TO DO: 
- time and space complexity 
*/
function allPermutationsRecursive(elements){
    let permInProgress = [];
    let allPerms = [];
    let availableElements = new Array(elements.length).fill(true);

    function generatePermutations() {
        if (permInProgress.length === elements.length) {
            allPerms.push(permInProgress.slice());
        } else {
            for (let k=0; k < elements.length; k++) {
                // - check if element at index k, elements[k], has yet 
                // to be included in the permutation
                if (availableElements[k] === true) {
                    permInProgress.push(elements[k]);
    
                    availableElements[k] = false;
                    generatePermutations();
    
                    availableElements[k] = true;
                    permInProgress.pop();
                };
            };
        };
    };
    generatePermutations();
    return allPerms;
};
console.log('allPermutationsRecursive: ', allPermutationsRecursive([1, 3, 5]));

function allPermutationsIterative(elements) {
    let allPermutations = [];
    let permsInProgress = [];
    permsInProgress.push([]);

    for (let i = 0; i < elements.length; i++) {
        let currentElement = elements[i];
        // - take all existing perms and add the current number to it to create new perms
        let n = permsInProgress.length; 
        for (let j = 0; j < n; j++) {
            let oldPermInProgress = permsInProgress.shift(); 
            // - create new perms by adding current element at each possible position
            for (let k = 0; k < oldPermInProgress.length + 1; k++) {
                let newPermInProgress = oldPermInProgress.slice();
                newPermInProgress.splice(k, 0, currentElement); // - insert currentElement at index k
                if (newPermInProgress.length === elements.length) {
                    allPermutations.push(newPermInProgress);
                } else {
                    permsInProgress.push(newPermInProgress);
                };
            };
        };
    };
    return allPermutations;
};

console.log('allPermutationsIterative: ', allPermutationsIterative([1, 3, 5]));