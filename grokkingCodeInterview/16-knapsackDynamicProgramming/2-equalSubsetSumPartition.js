/*

(medium)

Problem Statement: 
- Given a set of positive numbers, find if we can partition it into 
two subsets such that the sum of elements in both subsets is equal.

Example 1:
    Input: {1, 2, 3, 4}
    Output: True
    Explanation: The given set can be partitioned into two subsets with 
    equal sum: {1, 4} & {2, 3}

Example 2:
    Input: {1, 1, 3, 4, 7}
    Output: True
    Explanation: The given set can be partitioned into two subsets with 
    equal sum: {1, 3, 4} & {1, 7}

Example 3:
    Input: {2, 3, 4, 6}
    Output: False
    Explanation: The given set cannot be partitioned into two subsets with 
    equal sum.
*/

let equalSubsetSumPartitionRec = (seq) => {
    let targetSum = seq.reduce((prev, curr) => prev + curr);
    if (targetSum % 2 !== 0) {
        return false
    } 
    targetSum = targetSum/2;
    let targetSubsets = [];
    let subset = [];
    let subsetSum = 0;
    let index = 0;

    let findEqualSubsetSumPartition = (seq, index, subset, subsetSum, targetSum, targetSubsets) => {
        // base cases
        if (subsetSum === targetSum) { // if subset sum equals target sum, equal partition possible exists
            return targetSubsets.push(subset.slice())
        }
        if (index === seq.length) {
            return 
        }
        
        // -if current subset sum plus current element greater than targetSubset,
        // any sets downstream in the recursion tree not eligible as a targetSubset
        if (subsetSum + seq[index] > targetSum) {
            // not including element at index
            findEqualSubsetSumPartition(seq, index +1, subset, subsetSum, targetSum, targetSubsets);
        } else {
            // not including element at index
            findEqualSubsetSumPartition(seq, index +1, subset, subsetSum, targetSum, targetSubsets);

            // including element at index
            subset.push(seq[index]);
            findEqualSubsetSumPartition(seq, index +1, subset, subsetSum + seq[index], targetSum, targetSubsets);
            subset.pop();
        }     
    }
    findEqualSubsetSumPartition(seq, index, subset, subsetSum, targetSum, targetSubsets);
    return [targetSubsets.length > 0, targetSubsets]
}

// console.log('equalSubsetSumPartitionRec: ', equalSubsetSumPartitionRec([1,2,3]))

let equalSubsetSumPartitionMemoized = (seq) => {
    let targetSum = seq.reduce((prev, curr) => prev + curr);
    if (targetSum % 2 !== 0) {
        return false
    }
    targetSum = targetSum/2;
    let targetSubsets = [];
    let subset = [];
    let subsetSum = 0;
    let allSubsets = [];
    let index = 0;
    let store = new Array(seq.length + 1).fill(null).map(() => new Array(targetSum+1).fill(-1));

    let findEqualSubsetSumPartition = (seq, index, subset, subsetSum, targetSum, targetSubsets, store, allSubsets) => {
        // base cases
        if (subsetSum === targetSum) {
            targetSubsets.push(subset.slice());
            if (index === seq.length) {
                allSubsets.push(subset.slice());
            }
            return true
        } else if (index === seq.length) {
            allSubsets.push(subset.slice());
            return false
        }

        // check if problem previously solved
        if (store[index][subsetSum] !== -1) {
            return store[index][subsetSum]
        }
        // -check if including element at index will put us over the target sum
        // -if so, including the element at index given the subsetSum will not produce the targetSum
        // -move on to checking subsets that don't include that element
        if (subsetSum + seq[index] > targetSum) {
            store[index][subsetSum] = false;
            return findEqualSubsetSumPartition(seq, index+1, subset, subsetSum, targetSum, targetSubsets, store, allSubsets);
        } else {
            // not including element at index
            let withoutElement = findEqualSubsetSumPartition(seq, index + 1, subset, subsetSum, targetSum, targetSubsets, store, allSubsets);            

            // including element at index
            subset.push(seq[index]);
            let withElement = findEqualSubsetSumPartition(seq, index + 1, subset, subsetSum+seq[index], targetSum, targetSubsets, store, allSubsets);
            subset.pop();
            
            // -stores whether the target sum can be reached given the starting subsetSum below 
            // and any subsets that can be made with any of the elements at or to the right of the index below
            return store[index][subsetSum] = withoutElement || withElement;
        }
    }
    findEqualSubsetSumPartition(seq, index, subset, subsetSum, targetSum, targetSubsets, store, allSubsets);
    console.log('store: ', store);
    console.log('targetSubsets: ', targetSubsets);
    return store[0][0]
}

// console.log('equalSubsetSumPartitionMemoized: ', equalSubsetSumPartitionMemoized([1,2,3]));
// console.log('equalSubsetSumPartitionMemoized: ', equalSubsetSumPartitionMemoized([3,1,2]));
// console.log('equalSubsetSumPartitionMemoized: ', equalSubsetSumPartitionMemoized([3,2,1]));
console.log('equalSubsetSumPartitionMemoized: ', equalSubsetSumPartitionMemoized([5, 7, 2, 10]));
// console.log('equalSubsetSumPartitionMemoized: ', equalSubsetSumPartitionMemoized([1,2,3,4,5,1]));

// // same function as above, but deleted all comments for easy viewing on python tutor
// let equalSubsetSumPartitionMemoizedForPythonTutor = (seq) => {
//     let targetSum = seq.reduce((prev, curr) => prev + curr);
//     if (targetSum % 2 !== 0) {
//         return false
//     }
//     targetSum = targetSum/2;
//     let store = new Array(seq.length + 1).fill(null).map(() => new Array(targetSum+1).fill(-1));
//     let findEqualSubsetSumPartition = (seq, targetSum,store, index = 0, subset = [], subsetSum =0,  targetSubsets =[],  allSubsets=[]) => {
//         if (subsetSum === targetSum) {
//             targetSubsets.push(subset.slice());
//             if (index === seq.length) {
//                 allSubsets.push(subset.slice());
//             }
//             return true
//         } else if (index === seq.length) {
//             allSubsets.push(subset.slice());
//             return false
//         }
//         if (store[index][subsetSum] !== -1) {
//             return store[index][subsetSum]
//         }
//         if (subsetSum + seq[index] > targetSum) {
//             store[index][subsetSum] = false;
//             return findEqualSubsetSumPartition(seq, targetSum,store, index+1, subset, subsetSum,  targetSubsets,  allSubsets);
//         } else {
//             let withoutElement = findEqualSubsetSumPartition(seq, targetSum,store, index+1, subset, subsetSum,  targetSubsets,  allSubsets);            
//             subset.push(seq[index]);
//             let withElement = findEqualSubsetSumPartition(seq, targetSum,store, index+1, subset, subsetSum + seq[index],  targetSubsets,  allSubsets);
//             subset.pop();  
//             return store[index][subsetSum] = withoutElement || withElement;
//         }
//     }
//     findEqualSubsetSumPartition(seq, targetSum,store);
//     return store[0][0]
// }
// console.log('equalSubsetSumPartitionMemoizedForPythonTutor: ', equalSubsetSumPartitionMemoizedForPythonTutor([1,2,3,4,5,1]));