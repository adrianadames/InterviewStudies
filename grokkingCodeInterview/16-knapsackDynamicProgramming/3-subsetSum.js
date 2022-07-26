/*

(medium)

Problem Statement: 
- Given a set of positive numbers, determine if a subset exists whose 
sum is equal to a given number ‘S’.

Example 1: 
    Input: {1, 2, 3, 7}, S=6
    Output: True
    The given set has a subset whose sum is '6': {1, 2, 3}

Example 2: 
    Input: {1, 2, 7, 1, 5}, S=10
    Output: True
    The given set has a subset whose sum is '10': {1, 2, 7}

Example 3: 
    Input: {1, 3, 4, 8}, S=6
    Output: False
    The given set does not have any subset whose sum is equal to '6'.
*/

let subsetSumRec = (seq, targetSum) => {
    let targetSubsets = [];
    let findSubsetsSummingToTargetSum = (seq, targetSum,targetSubsets, index=0, subset=[], subsetSum=0, allSubsets=[]) => {
        // console.log('subset: ', subset);
        // console.log('subsetSum: ', subsetSum);
        // base cases
        if (subsetSum === targetSum) {
            if (index === seq.length) {
                allSubsets.push(subset.slice());
            }
            targetSubsets.push(subset.slice());
            return true
        }
        if (index === seq.length) {
            allSubsets.push(subset.slice());
            return false
        }

        // if including the element at index will put us over target sum, skip associated subset
        if (subsetSum + seq[index] > targetSum) {
            findSubsetsSummingToTargetSum(seq, targetSum, targetSubsets, index+1, subset, subsetSum, allSubsets);
        } else {
            // without element at index
            let withoutElement = findSubsetsSummingToTargetSum(seq, targetSum, targetSubsets, index+1, subset, subsetSum, allSubsets);
            // with element at index
            subset.push(seq[index]);
            let withElement = findSubsetsSummingToTargetSum(seq, targetSum, targetSubsets, index+1, subset, subsetSum + seq[index], allSubsets);
            subset.pop();

            return withoutElement || withElement
        }
    }
    findSubsetsSummingToTargetSum(seq, targetSum, targetSubsets);
    console.log('targetSubsets: ', targetSubsets);
    return targetSubsets.length > 0
}

// console.log('subsetSumRec: ', subsetSumRec([1, 2, 3, 4, 5], 12)); // true
// console.log('subsetSumRec: ', subsetSumRec([1, 2, 3, 4, 5], 16)); //false

let subsetSumRec2 = (seq, targetSum) => {
    let targetSubsets = [];
    let findSubsetsSummingToTargetSum = (seq, targetSum,targetSubsets, index=0, subset=[], subsetSum=0, allSubsets=[]) => {
        // console.log('subset: ', subset);
        // console.log('subsetSum: ', subsetSum);
        // base cases
        if (subsetSum === targetSum) {
            targetSubsets.push(subset.slice());
            return true
        }
        if (index === seq.length) {
            return false
        }

        // if including the element at index will put us over target sum, skip associated subset
        if (subsetSum + seq[index] > targetSum) {
            findSubsetsSummingToTargetSum(seq, targetSum, targetSubsets, index+1, subset, subsetSum, allSubsets);
        } else {
            // without element at index
            let withoutElement = findSubsetsSummingToTargetSum(seq, targetSum, targetSubsets, index+1, subset, subsetSum, allSubsets);
            // with element at index
            subset.push(seq[index]);
            let withElement = findSubsetsSummingToTargetSum(seq, targetSum, targetSubsets, index+1, subset, subsetSum + seq[index], allSubsets);
            subset.pop();

            return withoutElement || withElement
        }
    }
    findSubsetsSummingToTargetSum(seq, targetSum, targetSubsets);
    console.log('targetSubsets: ', targetSubsets);
    return targetSubsets.length > 0
}

let subsetSumMemoized = (seq, targetSum) => {
    let targetSubsets = [];
    let store = Array(seq.length+1).fill(null).map(() => Array(targetSum+1).fill(-1));
    let findSubsetsSummingToTargetSum = (seq, targetSum,targetSubsets, index=0, subset=[], subsetSum=0, allSubsets=[]) => {
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
            // -if store[index][subsetSum] = true, a subset comprising the current subset
            // plus more elements (possibly) will add up to the target sum
            // -we use the store table to find these elements 
            // -we check if including the number at the current index in our subset
            // will lead us to the subset and subsetSum we're looking for; 
            // -we lookup store[index+1][subsetSum+seq[index]]; if this is true, 
            // then we know that given the starting subsetSum =subsetSum+seq[index] and the 
            // numbers at or past index+1, the targetSum is reachable 
            // -we keep looking to this table in this manner, building up the subsetSum and subset
            // as we go; 
            // -if including the number at the index results in a false in the store table, then 
            // we skip it and keep looking to include elements to the right of it
            // -for example, if store[(index=3)+1][seq[index=3]+subsetSum] = false, 
            // we increase the index and check store[(index=4)+1][seq[index=4]+subsetSum]
            // -we continue doing this until the subsetSum equals the targetSum     
            if (store[index][subsetSum] === true) {
                if (subsetSum === targetSum) {
                    targetSubsets.push(subset.slice());
                    return store[index][subsetSum]
                } else {
                    let currentSubsetSum = subsetSum;
                    let currentSubset = subset.slice();
                    let currentIndex = index;
                    
                    while (currentSubsetSum !== targetSum || currentIndex < seq.length) {
                        // console.log('currentIndex: ', currentIndex);
                        // console.log('currentSubset: ', currentSubset);
                        // console.log('currentSubsetSum: ', currentSubsetSum);
                        // console.log('store[currentIndex][currentSubsetSum]: ', store[currentIndex][currentSubsetSum]);
                        // -include element at index and then check table to see if including that 
                        // element makes the target reachable

                        // -if the below is true, then we know that including the element at index
                        // makes the target reachable
                        if (store[currentIndex+1][currentSubsetSum + seq[currentIndex]]) {
                            currentSubset.push(seq[currentIndex]);
                            // if the currentSubsetSum plus the element at the index equals the target
                            // we're done; 
                            currentSubsetSum += seq[currentIndex];
                            // else, we need to keep checking the table to see how many 
                            // more elements to the right of the one at index we have to include
                            currentIndex +=1;
                        } else {
                            // -if we include the element at the index and see if the new subsetSum
                            // together with index + 1 in the store is false, we know that we don't include
                            // the number, but we do include some elements downstream it
                            // -increase the index and check if including that number in the subsetSum
                            // and the index for the element past it (i.e. currentIndex + 1) together
                            // in the store is true or false; if true, then that number is included; 
                            // -we continue this process until we reach the target sum
                            currentIndex +=1;
                        }
                    }
                    targetSubsets.push(currentSubset.slice());
                }
            } 
            return store[index][subsetSum]   
        }

        // if including the element at index will put us over target sum, skip associated subset
        if (subsetSum + seq[index] > targetSum) {
            store[index][subsetSum] = false;
            return findSubsetsSummingToTargetSum(seq, targetSum, targetSubsets, index+1, subset, subsetSum, allSubsets);
        } else {
            // without element at index
            let withoutElement = findSubsetsSummingToTargetSum(seq, targetSum, targetSubsets, index+1, subset, subsetSum, allSubsets);
            // with element at index
            subset.push(seq[index]);
            let withElement = findSubsetsSummingToTargetSum(seq, targetSum, targetSubsets, index+1, subset, subsetSum + seq[index], allSubsets);
            subset.pop();

            return store[index][subsetSum] = withoutElement || withElement 
        }
    }
    findSubsetsSummingToTargetSum(seq, targetSum, targetSubsets);
    console.log('store: ', store);
    console.log('targetSubsets: ', targetSubsets);
    return store[0][0]
}

// console.log('subsetSumMemoized: ', subsetSumMemoized([1, 2, 3, 4, 5], 12));  
// console.log('subsetSumMemoized: ', subsetSumMemoized([1, 2, 3, 4, 5], 16));  



// let subsetSumMemoizedForPythonTutor = (seq, targetSum) => {
//     let targetSubsets = [];
//     let store = Array(seq.length+1).fill(null).map(() => Array(targetSum+1).fill(-1));
//     let findSubsetsSummingToTargetSum = (seq, targetSum,targetSubsets, index=0, subset=[], subsetSum=0, allSubsets=[]) => {
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
//             if (store[index][subsetSum] === true) {
//                 if (subsetSum === targetSum) {
//                     targetSubsets.push(subset.slice());
//                     return store[index][subsetSum]
//                 } else {
//                     let currentSubsetSum = subsetSum;
//                     let currentSubset = subset.slice();
//                     let currentIndex = index;
//                     while (currentSubsetSum !== targetSum || currentIndex < seq.length) {
//                         if (store[currentIndex+1][currentSubsetSum + seq[currentIndex]]) {
//                             currentSubset.push(seq[currentIndex]);
//                             currentSubsetSum += seq[currentIndex];
//                             currentIndex +=1;
//                         } else {
//                             currentIndex +=1;
//                         }
//                     }
//                     targetSubsets.push(currentSubset.slice());
//                 }
//             } 
//             return store[index][subsetSum]   
//         }
//         if (subsetSum + seq[index] > targetSum) {
//             store[index][subsetSum] = false;
//             return findSubsetsSummingToTargetSum(seq, targetSum, targetSubsets, index+1, subset, subsetSum, allSubsets);
//         } else {
//             let withoutElement = findSubsetsSummingToTargetSum(seq, targetSum, targetSubsets, index+1, subset, subsetSum, allSubsets);
//             subset.push(seq[index]);
//             let withElement = findSubsetsSummingToTargetSum(seq, targetSum, targetSubsets, index+1, subset, subsetSum + seq[index], allSubsets);
//             subset.pop();
//             return store[index][subsetSum] = withoutElement || withElement 
//         }
//     }
//     findSubsetsSummingToTargetSum(seq, targetSum, targetSubsets);
//     console.log('store: ', store);
//     console.log('targetSubsets: ', targetSubsets);
//     return store[0][0]
// }
// console.log('subsetSumMemoizedForPythonTutor: ', subsetSumMemoizedForPythonTutor([1, 2, 3, 4, 5], 12));  