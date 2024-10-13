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

/*
TO DO: 
- time and space complexity 
- replace charIsLetter check with something better
*/

// if char is a letter, char.toLowerCase() won't equal char.toUpperCase();
let charIsLetter = (char) => {
    return char.toLowerCase() !== char.toUpperCase();
}

let stringPermutationChangingCaseRecursive = (elements) => {
    let allPerms = [];
    let permInProgress = [];

    function generatePerms(index) {
        if (index === elements.length) {
            allPerms.push(permInProgress.slice()); // note; do I need a slice here? when I run it without slice, answer the same;
        } else {
            if (charIsLetter(elements[index]) === false) {
                permInProgress.push(elements[index]);
                generatePerms(index+1);
                permInProgress.pop();
            } else {
                // lower case perm
                permInProgress.push(elements[index].toLowerCase());
                generatePerms(index+1);
                permInProgress.pop();

                // upper case perm
                permInProgress.push(elements[index].toUpperCase());
                generatePerms(index+1);
                permInProgress.pop();
            };
        };
    };
    generatePerms(0);
    return allPerms;
};
console.log('stringPermutationChangingCaseRecursive: ', stringPermutationChangingCaseRecursive('ab7c'));


function stringPermutationChangingCaseIterative(str) {
    let allPerms = [];
    let permsInProgress = [[]];

    for (let i = 0; i < str.length; i++) {
        let currentElement = str[i];
        let n = permsInProgress.length; 

        // - if currentElement is a number, add it to all sets
        if (charIsLetter(currentElement) === false) {
            permsInProgress.forEach(permInProgress => permInProgress.push(currentElement));
        } else {
            // - for each permInProgress in permsInProgress, shift one out and 
            // then add two new ones (one with lowerCase element and one with upperCase)
            for (let j = 0; j < n; j++) {
                let oldPermInProgress = permsInProgress.shift();

                if (oldPermInProgress.length + 1 === str.length) {
                    allPerms.push([...oldPermInProgress, currentElement.toLowerCase()]);
                    allPerms.push([...oldPermInProgress, currentElement.toUpperCase()]);
                } else {
                    permsInProgress.push([...oldPermInProgress, currentElement.toLowerCase()]);
                    permsInProgress.push([...oldPermInProgress, currentElement.toUpperCase()]);
                };
            };
        };
    };
    return allPerms;
};
console.log('stringPermutationChangingCaseIterative: ', stringPermutationChangingCaseIterative('ab7c'));