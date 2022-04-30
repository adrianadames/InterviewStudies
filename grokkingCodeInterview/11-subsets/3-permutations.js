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

let allPermutationsWrapper = (elements) => {
    let permutation = [];
    let allPerms = [];
    let availableElements = new Array(elements.length).fill(true);
    allPermutations(0, permutation, allPerms, availableElements, elements);
    return allPerms
}

let allPermutations = (index, permutation, allPerms, availableElements, elements) => {
    if (index === elements.length) {
        allPerms.push(permutation.slice());
    } else {
        for (let k=0; k < elements.length; k++) {
            // check if element at index k, elements[k], has yet 
            // to be included in the permutation
            if (availableElements[k]) {
                permutation[index] = elements[k];

                availableElements[k] = false;
                allPermutations(index + 1, permutation, allPerms, availableElements, elements);

                availableElements[k] = true;
                permutation[index] = null; 
            }
        }
    }
}

console.log('allPermutationsWrapper: ', allPermutationsWrapper([1, 3, 5]));
