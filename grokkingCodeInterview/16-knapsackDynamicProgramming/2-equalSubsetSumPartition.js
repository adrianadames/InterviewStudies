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

let equalSubsetSumPartitionRec1 = (seq) => {
    let targetSum = seq.reduce((prev, curr) => prev + curr);
    if (targetSum % 2 !== 0) {
        return false
    } 
    targetSum = targetSum/2;

    let equalSubsetSumPartitionCheck = (seq, targetSum, index = 0) => {
        // base cases
        if (targetSum === 0) {
            return true
        }
        if (index === seq.length) {
            return false
        }

        if (targetSum - seq[index] < 0) {
            // not including element at index
            return equalSubsetSumPartitionCheck(seq, targetSum, index + 1);
        } else {
            // not including element at index
            let withoutElement = equalSubsetSumPartitionCheck(seq, targetSum, index + 1);
            // including element at index
            let withElement = equalSubsetSumPartitionCheck(seq, targetSum - seq[index], index + 1);

            return withoutElement || withElement
        }
    }
    return equalSubsetSumPartitionCheck(seq, targetSum)
}

// console.log('equalSubsetSumPartitionRec1: ', equalSubsetSumPartitionRec1([1,2,3]))

let equalSubsetSumPartitionRec2 = (seq) => {
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

// console.log('equalSubsetSumPartitionRec2: ', equalSubsetSumPartitionRec2([1,2,3]))

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

    let findEqualSubsetSumPartition = (seq, index, subset, subsetSum, targetSum, targetSubsets, store) => {
        // base cases
        if (subsetSum === targetSum) {
            targetSubsets.push(subset.slice());
            return true
        } else if (index === seq.length) {
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
            return findEqualSubsetSumPartition(seq, index+1, subset, subsetSum, targetSum, targetSubsets, store, allSubsets);
        } else {
            // not including element at index
            let withoutElement = findEqualSubsetSumPartition(seq, index + 1, subset, subsetSum, targetSum, targetSubsets, store, allSubsets);            

            // including element at index
            subset.push(seq[index]);
            let withElement = findEqualSubsetSumPartition(seq, index + 1, subset, subsetSum+seq[index], targetSum, targetSubsets, store, allSubsets);
            subset.pop();
            
            // -stores whether the target sum can be reached given the starting subsetSum below 
            // and the addition of elements at or to the right of the index below
            // -if true, we know that, given this subsetSum and the current index we're at, the target sum is reachable
            // -if false, we know that, given this subsetSum, the target sum isn't reachable by including/excluding elements at or to the right of index
            return store[index][subsetSum] = withoutElement || withElement;
        }
    }
    findEqualSubsetSumPartition(seq, index, subset, subsetSum, targetSum, targetSubsets, store);
    // console.log('store: ', store);
    console.log('targetSubsets: ', targetSubsets);
    return store[0][0]
}

// console.log('equalSubsetSumPartitionMemoized: ', equalSubsetSumPartitionMemoized([1,2,3]));
// console.log('equalSubsetSumPartitionMemoized: ', equalSubsetSumPartitionMemoized([3,1,2]));
// console.log('equalSubsetSumPartitionMemoized: ', equalSubsetSumPartitionMemoized([3,2,1]));
// console.log('equalSubsetSumPartitionMemoized: ', equalSubsetSumPartitionMemoized([5, 7, 2, 10]));
// console.log('equalSubsetSumPartitionMemoized: ', equalSubsetSumPartitionMemoized([1,2,3,4,5,1]));

let equalSubsetSumPartitionTabulated = (seq) => {
    let targetSum = seq.reduce((prev, curr) => prev + curr);
    if (targetSum % 2 !== 0) {
        return false
    }
    targetSum = targetSum/2;
    let store = new Array(seq.length).fill(null).map(() => new Array(targetSum +1).fill(-1));

    // -can always find a subset that sums to zero (the empty set)
    for (let i = 0; i < seq.length; i++) {
        store[i][0] = true;
    }
    console.log('store: ', store);

    // -with only one number, can form a subset only when required sum is equal to its value
    for (let s = 1; s <= targetSum; s++) {
        store[0][s] = seq[0] === s;
    }
    
    let subsetSum = 0;
    for (let index = 1; index < seq.length; index++) {
        for (let target = 1; target <= targetSum; target++) {
        }
    }
    console.log('store: ', store)
    return store[seq.length-1][targetSum]
    // for (let index = 1; index <= seq.length; index++) {
    //     for (let subsetSum = 1; subsetSum <= targetSum; subsetSum++) {
    //         if (seq[index-1] + subsetSum > targetSum) {
    //             // if subsetSum = 3
    //             store[index][subsetSum] = store[index-1][subsetSum];
    //         } else {
    //             store[index][subsetSum] = seq[index-1] + subsetSum;
    //         }
    //     }
    // }
    // console.log('store: ', store)
    // return store[seq.length][0]
}

// console.log('equalSubsetSumPartitionTabulated: ', equalSubsetSumPartitionTabulated([1,2,3]));
// console.log('equalSubsetSumPartitionTabulated: ', equalSubsetSumPartitionTabulated([3,1,2]));
console.log('equalSubsetSumPartitionTabulated: ', equalSubsetSumPartitionTabulated([3,1,6,2]));

// console.log('equalSubsetSumPartitionTabulated: ', equalSubsetSumPartitionTabulated([3,2,1]));
// console.log('equalSubsetSumPartitionTabulated: ', equalSubsetSumPartitionTabulated([5, 7, 2, 10]));
// console.log('equalSubsetSumPartitionTabulated: ', equalSubsetSumPartitionTabulated([1,2,3,4,5,1]));