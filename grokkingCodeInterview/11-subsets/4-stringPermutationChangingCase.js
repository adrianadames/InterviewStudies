/*
(medium)

Problem Statement:
- Given a string, find all of its permutations preserving 
the character sequence but changing case.

Example 1:

Input: "ad52"
Output: "ad52", "Ad52", "aD52", "AD52" 
Example 2:

Input: "ab7c"
Output: "ab7c", "Ab7c", "aB7c", "AB7c", "ab7C", 
"Ab7C", "aB7C", "AB7C"
*/

let stringPermutationChangingCaseWrapper = (elements) => {
    let permutation = '';
    let allPerms = [];
    stringPermutationChangingCase(0, permutation, allPerms, elements);
    return allPerms
}

// if char is a letter, char.toLowerCase() won't equal char.toUpperCase();
let charIsLetter = (char) => {
    return char.toLowerCase() !== char.toUpperCase();
}

let stringPermutationChangingCase = (index, permutation, allPerms, elements) => {
    if (index === elements.length) {
        allPerms.push(permutation)
    } else {
        if (charIsLetter(elements[index])) {
            [0,1].forEach(val => {
                if (val === 0) {
                    permutation += elements[index].toLowerCase();
                    stringPermutationChangingCase(index+1, permutation, allPerms, elements);
                    permutation = permutation.slice(0, -1);
                } else {
                    permutation += elements[index].toUpperCase();
                    stringPermutationChangingCase(index+1, permutation, allPerms, elements);
                    permutation = permutation.slice(0, -1);
                }
            })
        } else {
            permutation += elements[index];
            stringPermutationChangingCase(index+1, permutation, allPerms, elements);
            permutation = permutation.slice(0, -1);
        }
    }
}


console.log('stringPermutationChangingCaseWrapper: ', stringPermutationChangingCaseWrapper('ab7c'))