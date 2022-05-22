/*

(medium)

Introduction:  
- Given the weights and profits of ‘N’ items, we are asked to put these 
items in a knapsack which has a capacity ‘C’. The goal is to get the 
maximum profit out of the items in the knapsack. Each item can only be 
selected once, as we don’t have multiple quantities of any item.
- Let’s take the example of Merry, who wants to carry some fruits in the 
knapsack to get maximum profit. Here are the weights and profits of the 
fruits:
    Items: { Apple, Orange, Banana, Melon }
    Weights: { 2, 3, 1, 4 }
    Profits: { 4, 5, 3, 7 }
    Knapsack capacity: 5
- Let’s try to put various combinations of fruits in the knapsack, such 
that their total weight is not more than 5:
    Apple + Orange (total weight 5) => 9 profit
    Apple + Banana (total weight 3) => 7 profit
    Orange + Banana (total weight 4) => 8 profit
    Banana + Melon (total weight 5) => 10 profit
- This shows that Banana + Melon is the best combination as it gives us 
the maximum profit and the total weight does not exceed the capacity.

Problem Statement: 
- Given two integer arrays to represent weights and profits of ‘N’ items, 
we need to find a subset of these items which will give us maximum profit 
such that their cumulative weight is not more than a given number ‘C’. Each 
item can only be selected once, which means either we put an item in the 
knapsack or we skip it.
*/

// -most concise and straightforward (2^n) recursive approach
// -doesn't return set of weights associated with highest profit; only the largest profit itself
let knapsack0 = (weights, profits, capacity, index = 0) => {
    // base case
    if (index === profits.length || capacity === 0) {
        return 0;
    }

    // if weight weights[index] greater than capacity, don't include in optimal sol'n
    if (weights[index] > capacity) {
        return knapsack0(weights, profits, capacity, index+1)
    } else {
        // return maximum between the subsets associated with the included item
        // and the subsets without the included item
        return Math.max(
            knapsack0(weights, profits, capacity, index+1),  // without weights[index]
            profits[index] + knapsack0(weights, profits, capacity-weights[index], index + 1) // with weights[index]
        )
    }
}

//-more wordy but straightforward (2^n) recursive approach
let knapsack1 = (weights, profits, capacity, index = 0, maxProfit = [0]) => {
    // base case
    if (index === profits.length || capacity === 0) {
        return 0;
    }

    // if weight weights[index] greater than capacity, don't include in optimal sol'n
    if (weights[index] > capacity) {
        return knapsack1(weights, profits, capacity, index+1, maxProfit)
    } else {
        let withoutItemProfit = -1;
        let withItemProfit = -1;

        for (let k = 0; k <= 1; k++) {
            // item at index (i.e. weights[index]) not included 
            if (k === 0) {
                withoutItemProfit = knapsack1(weights, profits, capacity, index+1, maxProfit);
            }
            // item at index included in the knapsack
            if (k === 1) {
                withItemProfit = profits[index] + knapsack1(weights, profits, capacity-weights[index], index + 1, maxProfit);
                // console.log('withItemProfit: ', withItemProfit);
                // subset.pop(index);
            }
        }

        let currentMaxProfit = Math.max(withoutItemProfit, withItemProfit);
        if (currentMaxProfit > maxProfit[0]) {
            maxProfit[0] = currentMaxProfit;
            // console.log('new maxProfit[0]: ', maxProfit[0]);
        } 

        return currentMaxProfit
    }
}

// -approach where I tried (and failed) to get the subset associated with the highest profit;
// using the 2^n recursive approach from above
// -don't understand how to deal with the subset.pop() for going back up the recursion tree
let maxProfitKnapsackWrapper1 = (weights, profits, capacity) => {
    let maxProfit = [0];
    let subset = [];
    let maxSubset = [];
    let index = 0;
    let allSubsets = [];
    maxProfitKnapsack1(weights, profits, capacity, index, subset, maxSubset, maxProfit, allSubsets); 
    return [maxProfit, maxSubset]
}
let maxProfitKnapsack1 = (weights, profits, capacity, index, subset, maxSubset, maxProfit, allSubsets) => {
    // base case
    if (index === profits.length || capacity === 0) {
        allSubsets.push(subset.slice());
        // console.log('allSubsets: ', allSubsets);
        return 0;
    }

    // if weight weights[index] greater than capacity, don't include in optimal sol'n
    if (weights[index] > capacity) {
        // console.log('adding weight ', weights[index] ,' will exceed capacity');
        return maxProfitKnapsack1(weights, profits, capacity, index+1, subset, maxSubset, maxProfit, allSubsets)
    } else {
        let withoutItemProfit = -1;
        let withItemProfit = -1;

        for (let k = 0; k <= 1; k++) {
            // item at index (i.e. weights[index]) not included 
            if (k === 0) {
                withoutItemProfit = maxProfitKnapsack1(weights, profits, capacity, index+1, subset, maxSubset, maxProfit, allSubsets);
            }
            // item at index included in the knapsack
            if (k === 1) {
                console.log('withItemProfit1: ', withItemProfit);
                console.log('subset1a: ', subset);
                subset.push(index);
                console.log('subset1b: ', subset);
                withItemProfit = profits[index] + maxProfitKnapsack1(weights, profits, capacity-weights[index], index + 1, subset, maxSubset, maxProfit, allSubsets);
                
                console.log('withItemProfit2: ', withItemProfit);
                console.log('subset2: ', subset);
                // subset.pop();
            }
        }

        let currentMaxProfit = Math.max(withoutItemProfit, withItemProfit);
        
        if (currentMaxProfit > maxProfit[0]) {
            maxProfit[0] = currentMaxProfit;
            // console.log('new maxProfit[0]: ', maxProfit[0]);
            maxSubset[0] = subset.slice();
            // console.log('new maxSubset: ', maxSubset);
            subset.pop();
        } 

        return currentMaxProfit
    }
}


// -similar approach where I tried (and failed even more badly) to get the subset associated with the highest profit;
// using the 2^n recursive approach from above
// -don't understand how to deal with the subset.pop() for going back up the recursion tree
let maxProfitKnapsackWrapper2 = (weights, profits, capacity) => {
    let maxProfit = [0];
    let subset = [];
    let maxSubset = [];
    let index = 0;
    let allSubsets = [];
    maxProfitKnapsack2(weights, profits, capacity, index, subset, maxSubset, maxProfit, allSubsets); 
    return [maxProfit, maxSubset]
}
let maxProfitKnapsack2 = (weights, profits, capacity, index, subset, maxSubset, maxProfit, allSubsets) => {
    // base case
    if (index === profits.length || capacity === 0) {
        allSubsets.push(subset.slice());
        console.log('subset base case: ', subset);
        console.log('base case maxProfit: ', maxProfit);
        return 0;
    }

    // if weight weights[index] greater than capacity, don't include in optimal sol'n
    if (weights[index] > capacity) {
        // console.log('adding weight ', weights[index] ,' will exceed capacity');
        return maxProfitKnapsack2(weights, profits, capacity, index+1, subset, maxSubset, maxProfit, allSubsets)
    } else {
        let withoutItemProfit = -1;
        let withItemProfit = -1;

        for (let k = 0; k <= 1; k++) {
            // item at index (i.e. weights[index]) not included 
            if (k === 0) {
                withoutItemProfit = maxProfitKnapsack2(weights, profits, capacity, index+1, subset, maxSubset, maxProfit, allSubsets);
                console.log('withoutItemProfit: ', withoutItemProfit);

                if (withoutItemProfit > maxProfit[0]) {
                    maxProfit[0] = withoutItemProfit;
                    console.log('subset without: ', subset);
                    console.log('maxProfit[0]: ', maxProfit[0]);
                }
            }
            // item at index included in the knapsack
            if (k === 1) {
                console.log('withItemProfit1: ', withItemProfit);
                console.log('subset1a: ', subset);
                subset.push(index);
                console.log('subset1b: ', subset);
                withItemProfit = profits[index] + maxProfitKnapsack2(weights, profits, capacity-weights[index], index + 1, subset, maxSubset, maxProfit, allSubsets);
                
                console.log('withItemProfit2: ', withItemProfit);
                if (withItemProfit > maxProfit[0]) {
                    maxProfit[0] = withItemProfit;
                    maxSubset[0] = subset.slice();
                    subset.pop();
                } else {
                    continue
                }
                console.log('maxProfit[0]: ', maxProfit[0]);
                console.log('subset2: ', subset);
                console.log('maxSubset: ', maxSubset);
                subset.pop();
            }
        }

        let currentMaxProfit = Math.max(withoutItemProfit, withItemProfit);
        
        if (currentMaxProfit > maxProfit[0]) {
            maxProfit[0] = currentMaxProfit;
            // console.log('new maxProfit[0]: ', maxProfit[0]);
            maxSubset[0] = subset.slice();
            // console.log('new maxSubset: ', maxSubset);
            subset.pop();
        } 

        return currentMaxProfit
    }
}


// max profit = 10
let weights1 = [2, 3, 1, 4]; 
let profits1 = [4, 5, 3, 7];
let capacity1 = 5;

// max profit = 220
let weights2 = [10, 20, 30]; 
let profits2 = [60, 100, 120];
let capacity2 = 50;

let weights3 = [1, 4, 3, 2]; 
let profits3 = [3, 7, 5, 4];
let capacity3 = 5;


// console.log('knapsack0: ', knapsack0(weights1, profits1, capacity1));

// console.log('knapsack1: ', knapsack1(weights1, profits1, capacity1));
// console.log('maxProfitKnapsackWrapper1: ', maxProfitKnapsackWrapper1(weights2, profits2, capacity2));
// console.log('maxProfitKnapsackWrapper1: ', maxProfitKnapsackWrapper1(weights1, profits1, capacity1));
// console.log('maxProfitKnapsackWrapper1: ', maxProfitKnapsackWrapper1(weights3, profits3, capacity3));

console.log('maxProfitKnapsackWrapper2: ', maxProfitKnapsackWrapper2(weights3, profits3, capacity3));
console.log('maxProfitKnapsackWrapper2: ', maxProfitKnapsackWrapper2(weights2, profits2, capacity2));
