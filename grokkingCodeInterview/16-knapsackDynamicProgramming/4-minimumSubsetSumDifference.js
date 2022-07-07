/*

(hard)

Problem Statement: 
- Given a set of positive numbers, partition the set into two subsets 
with minimum difference between their subset sums.

Example 1: 
    Input: {1, 2, 3, 9}
    Output: 3
    Explanation: We can partition the given set into two subsets where 
    minimum absolute difference between the sum of numbers is '3'. Following 
    are the two subsets: {1, 2, 3} & {9}.

Example 2:  
    Input: {1, 2, 7, 1, 5}
    Output: 0
    Explanation: We can partition the given set into two subsets where minimum 
    absolute difference between the sum of number is '0'. Following are the two 
    subsets: {1, 2, 5} & {7, 1}.

Example 3:  
    Input: {1, 3, 100, 4}
    Output: 92
    Explanation: We can partition the given set into two subsets where minimum 
    absolute difference between the sum of numbers is '92'. Here are the two 
    subsets: {1, 3, 4} & {100}.
*/

// -so the way i'm thinking about this, i'd have to what? 
// -for every subset, i'd need to calculate the difference between that subset sum
// and the sum of every element that isn't in that subset
// -if a subset's sum is X, then the sum of the other subset is totalSubset-X

let minimumSubsetSumDifferenceRec = (seq) => {
    let totalSubsetSum = seq.reduce((prev, curr) => prev + curr);
    let index = 0;
    let targetSubset = [];
    let subset = [];
    let subsetSum = [0];
    let minDifference = [Infinity];

    let findMinimumSubsetSumDifference = (seq, index, subset, subsetSum, targetSubset, totalSubsetSum, minDifference) => {
        // base case
        if (index === seq.length) {
            return 
        }

        if (subset.length > 0) {
            let complementSubsetSum = totalSubsetSum-subsetSum; 
    
            if (Math.abs(complementSubsetSum-subsetSum[0]) < minDifference[0]) {
                minDifference[0] = Math.abs(complementSubsetSum-subsetSum[0]);
                targetSubset.pop();
                targetSubset.push(subset.slice());
            }
        }
        
        // not including element at index
        findMinimumSubsetSumDifference(seq, index+1, subset, subsetSum, targetSubset, totalSubsetSum, minDifference);            
        
        // including element at index
        subset.push(seq[index]);
        subsetSum[0] += seq[index];
        findMinimumSubsetSumDifference(seq, index+1, subset, subsetSum, targetSubset, totalSubsetSum, minDifference);
        subset.pop();
        subsetSum[0] -= seq[index];     
    }
    findMinimumSubsetSumDifference(seq, index+1, subset, subsetSum, targetSubset, totalSubsetSum, minDifference);
    return targetSubset
}

console.log('minimumSubsetSumDifferenceRec: ', minimumSubsetSumDifferenceRec([1, 3, 100, 4]))

console.log('minimumSubsetSumDifferenceRec: ', minimumSubsetSumDifferenceRec([1, 2, 7, 1, 5]))


// let minimumSubsetSumDifferenceMemoized = (seq) => {
//     let totalSubsetSum = seq.reduce((prev, curr) => prev + curr);
    
//     // we are looking for the subset who's sum is closest to totalSubsetSum/2; 
//     targetSum = totalSubsetSum/2;
//     let index = 0;
//     let targetSubset = [];
//     let subset = [];
//     let store = new Array(seq.length + 1).fill(null).map(() => new Array(targetSum+1).fill(-1));

//     // -as we go through each subset, we pass along the difference between the subsetSum
//     // and the targetSum
//     // -if the absolute value of that difference is smaller than that passed down, that
//     // subset becomes the new targetSubset
//     let findMinimumSubsetSumDifference = (seq, index, targetSum, targetSubset, subset, store) => {
//         // base cases
//         if (targetSum === 0) {
//             return true
//         }
//         if (index === seq.length) {
//             return false
//         }

//         // if problem previously solved
//         if (store[index][targetSum] !== -1) {
//             return store[index][targetSum]
//         }
        
//         // if targetSum less than next element, any sets downstream recursion tree
//         // not eligible as a targetSubset (i.e. don't search downstream sets w/ element)
//         if (targetSum < seq[index]) {
//             store[index][targetSum] = false;
//             return findMinimumSubsetSumDifference(seq, index + 1, targetSum, store);
//         } else {
//             // not including element at index
//             let withoutElement = findMinimumSubsetSumDifference(seq, index + 1, targetSum, store);            
//             // including element at index
//             let withElement = findMinimumSubsetSumDifference(seq, index + 1, targetSum - seq[index], store);

//             return store[index][targetSum] = withoutElement || withElement
//         }     
//     }
//     return findMinimumSubsetSumDifference(seq, index, targetSum, store);
// }

// console.log('minimumSubsetSumDifferenceMemoized: ', minimumSubsetSumDifferenceMemoized([1,2,3]))