/*

(hard)

Problem Statement:
- Given a set of positive numbers, find the total number of subsets 
whose sum is equal to a given number ‘S’.

Example 1: 
    Input: {1, 1, 2, 3}, S=4
    Output: 3
    The given set has '3' subsets whose sum is '4': {1, 1, 2}, {1, 3}, {1, 3}
    Note that we have two similar sets {1, 3}, because we have two '1' in our input.

Example 2:  
    Input: {1, 2, 7, 1, 5}, S=9
    Output: 3
    The given set has '3' subsets whose sum is '9': {2, 7}, {1, 7, 1}, {1, 2, 1, 5}
*/

// -given set of positive numbers, find the total number of subsets who sum 
// is equal to a given number 'S'

let countOfSubsetSum = (seq, target) => {
    let subset = []; 
    let subsetSum = 0;
    let allSubsets = [];
    let targetSubsets = [];
    let index = 0;  

    let findSubsetsSummingToTarget = (seq, target, subset = [], subsetSum= 0, allSubsets = [], targetSubsets = [], index = []) => {
        // base cases
        if (subsetSum === target) {
            if (index === seq.length) {
                allSubsets.push(subset.slice());
            }
            return targetSubsets.push(subset.slice());
            // push to targetSubsets
        }
        if (index === seq.length) {
            return allSubsets.push(subset.slice());
        }

        let withoutElement = findSubsetsSummingToTarget(seq, target, subset, subsetSum, allSubsets, targetSubsets, index + 1);
        
        subset.push(seq[index]);
        let withElement = findSubsetsSummingToTarget(seq, target, subset, subsetSum += seq[index], allSubsets, targetSubsets, index+1);
        subset.pop();
    }
    findSubsetsSummingToTarget(seq, target, subset, subsetSum, allSubsets, targetSubsets, index);
    return targetSubsets
}

console.log('countOfSubsetSum: ', countOfSubsetSum([1, 2, 7, 1, 5], 9))