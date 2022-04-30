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

allDistinctSubsetsWithDups = (index, distinctSubset, allSubsets, elements) => {
    // -base case: when distinctSubset becomes complete (i.e. when all elements 
    // in elements array have been established to be included or not included
    // in the distinctSubset array)
    // -until then, we move closer and closer to the base case by guessing yes 
    // or no for the presence of each element in elements in the 
    // partial solution that is the distinctSubject array; if element at index x 
    // of elements is/isn't in the partial solution that is the 
    // distinctSubject array, we put push/don't push into the distinctSubset array 
    
    // console.log('index: ', index);
    // if (index === elements.length) {
    //     allSubsets.push(distinctSubset.slice());
    // } else {
    //     [0,1].forEach(val => {
    //         if (val === 0) {
    //             if (elements[index] === elements[index+1]) {
    //                 allSubsets.push(distinctSubset.slice());
    //             } else {
    //                 allDistinctSubsetsWithDups(index+1, distinctSubset, allSubsets, elements);
    //             }
    //         } else {
    //             distinctSubset.push(elements[index]); 
    //             allDistinctSubsetsWithDups(index+1, distinctSubset, allSubsets, elements);
    //             distinctSubset.pop(); 
    //         }
    //     })
    // }
    console.log('index: ', index);
    if (index === elements.length) {
        allSubsets.push(distinctSubset.slice());
    } else if (elements[index] === elements[index+1]) {
        [0,1].forEach(val => {
            if (val === 0) {
                allSubsets.push(distinctSubset.slice());
            } else {
                distinctSubset.push(elements[index]); 
                allDistinctSubsetsWithDups(index+1, distinctSubset, allSubsets, elements);
                distinctSubset.pop(); 
            }
        })
    } else {
        [0,1].forEach(val => {
            if (val === 0) {
                allDistinctSubsetsWithDups(index+1, distinctSubset, allSubsets, elements);
            } else {
                distinctSubset.push(elements[index]); 
                allDistinctSubsetsWithDups(index+1, distinctSubset, allSubsets, elements);
                distinctSubset.pop(); 
            }
        })
    }
}

allDistinctSubsetsWithDupsWrapper = (elements) => {
    let distinctSubset = [];
    let allSubsets = [];
    allDistinctSubsetsWithDups(0, distinctSubset, allSubsets, elements);
    return allSubsets
}


// console.log('allDistinctSubsetsWithDupsWrapper: ', allDistinctSubsetsWithDupsWrapper([1, 3]))
// console.log('allDistinctSubsetsWithDupsWrapper: ', allDistinctSubsetsWithDupsWrapper([3, 3]))
// console.log('allDistinctSubsetsWithDupsWrapper: ', allDistinctSubsetsWithDupsWrapper([1, 3, 3]))
console.log('allDistinctSubsetsWithDupsWrapper1: ', allDistinctSubsetsWithDupsWrapper([3, 3, 1]))

console.log('allDistinctSubsetsWithDupsWrapper2: ', allDistinctSubsetsWithDupsWrapper([1, 3, 3]))
