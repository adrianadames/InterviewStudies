/*

(hard)

Problem Statement:
- You are given a set of positive numbers and a target sum ‘S’. Each 
number should be assigned either a ‘+’ or ‘-’ sign. We need to find 
the total ways to assign symbols to make the sum of the numbers equal 
to the target ‘S’.

Example 1:
    Input: {1, 1, 2, 3}, S=1
    Output: 3
    Explanation: The given set has '3' ways to make a sum of '1': 
    {+1-1-2+3} & {-1+1-2+3} & {+1+1+2-3}

Example 2:
    Input: {1, 2, 7, 1}, S=9
    Output: 2
    Explanation: The given set has '2' ways to make a sum of '9': 
    {+1+2+7-1} & {-1+2+7+1}
*/

let targetSumRec = (seq, target) => {
    let allSubsets = [];
    let subset = [];
    let subsetSum = 0;
    let targetSubsets = [];
    let index = 0;

    let findTargetSubsets = (seq, target, allSubsets, subset, subsetSum, targetSubsets, index) => {
        // base cases
        if (index === seq.length) {
            allSubsets.push(subset.slice())
            if (subsetSum === target) {
                targetSubsets.push(subset.slice());
            }
            return 
        }

        // -each number can be assigned a positive or negative sign
        subset.push(seq[index]);
        findTargetSubsets(seq, target, allSubsets, subset, subsetSum + seq[index], targetSubsets, index+1);
        subset.pop();

        subset.push(-1*seq[index]);
        findTargetSubsets(seq, target, allSubsets, subset, subsetSum- seq[index], targetSubsets,index + 1);
        subset.pop();
    }

    findTargetSubsets(seq, target, allSubsets, subset, subsetSum, targetSubsets, index);
    console.log('allSubsets: ', allSubsets)
    return targetSubsets
}

console.log('targetSumRec: ', targetSumRec([1, 1, 2, 3], 1))
console.log('targetSumRec: ', targetSumRec([1, 2, 7, 1], 9))


let targetSumMemoized = (seq, target) => {
    let allSubsets = [];
    let subset = [];
    let subsetSum = 0;
    let targetSubsets = [];
    let index = 0;

    let findTargetSubsets = (seq, target, allSubsets, subset, subsetSum, targetSubsets, index) => {
        // base cases
        if (index === seq.length) {
            allSubsets.push(subset.slice())
            if (subsetSum === target) {
                targetSubsets.push(subset.slice());
            }
            return 
        }

        // -each number can be assigned a positive or negative sign
        subset.push(seq[index]);
        findTargetSubsets(seq, target, allSubsets, subset, subsetSum + seq[index], targetSubsets, index+1);
        subset.pop();

        subset.push(-1*seq[index]);
        findTargetSubsets(seq, target, allSubsets, subset, subsetSum- seq[index], targetSubsets,index + 1);
        subset.pop();
    }

    findTargetSubsets(seq, target, allSubsets, subset, subsetSum, targetSubsets, index);
    console.log('allSubsets: ', allSubsets)
    return targetSubsets
}

console.log('targetSumMemoized: ', targetSumMemoized([1, 1, 2, 3], 1))
console.log('targetSumMemoized: ', targetSumMemoized([1, 2, 7, 1], 9))