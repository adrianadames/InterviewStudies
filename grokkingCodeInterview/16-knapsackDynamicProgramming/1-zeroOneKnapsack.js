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

// -recursive approach (time O(n) = 2^n) 
// -note: doesn't return set of weights associated with highest profit; only the largest profit itself
let knapsackRec = (weights, profits, capacity, index = 0) => {
    // base case
    // -if number of items remaining is zero (i.e. index = num of items), no more profits
    // -if remaining capacity is zero, no more profits
    if (index === weights.length || capacity === 0) {
        return 0
    }
    // if item weights[index] greater than capacity, skip it (i.e. don't include in optimal sol'n)
    if (weights[index] > capacity) {
        return knapsackRec(weights, profits, capacity, index+1)
    } else {
        // return larger b/t profit for subsets including item and 
        // profit for subsets excluding item
        let profitExcludingItem = knapsackRec(weights, profits, capacity, index + 1);
        let profitIncludingItem = profits[index] + knapsackRec(weights, profits, capacity-weights[index], index + 1);
        let maxProfit = Math.max(profitExcludingItem, profitIncludingItem);
        return maxProfit
    }
}

// top-down memoized solution
// -store computed values 
// -two changing parameters: index and capacity => store will be 2d mtx
// -store[index][capacity] will contain answer for function call 
// knapsack(weights, profits, capacity, index)

// -since memoization arr stores results for all subprobs, we can conclude
// that we won't have more than numItems * Capacity subprobs => time O(n) = numItems * Capacity
// -O(numItems * capacity) space for memoization arr and O(numItems) for recursive stack 
// => space O(n) =  O(numItems * capacity + numItems) = O(numItems * capacity)
let knapsackRecMemoizedWrapper = (weights, profits, capacity) => {
    let store = new Array(weights.length + 1).fill(null).map(arrItem => new Array(capacity+1).fill(-1));
    return knapsackRecMemoized(weights, profits, capacity, 0, store)
}

let knapsackRecMemoized = (weights, profits, capacity, index = 0, store) => {
    // base case
    // -if number of items remaining is zero (i.e. index = num of items), no more profits
    // -if remaining capacity is zero, no more profits
    if (index === weights.length || capacity === 0) {
        return 0
    }

    // check if answer already present in store
    if (store[index][capacity] !== -1) {
        // console.log('index: ', index, ' capacity: ', capacity);
        // console.log('stored: ', store[index][capacity]);
        return store[index][capacity]
    }

    // if item weights[index] greater than capacity, skip it (i.e. don't include in optimal sol'n)
    if (weights[index] > capacity) {
        store[index][capacity] = knapsackRecMemoized(weights, profits, capacity, index+1, store);
        return store[index][capacity]
    } else {
        // return larger b/t profit for subsets including item and 
        // profit for subsets excluding item
        let profitExcludingItem = knapsackRecMemoized(weights, profits, capacity, index+1, store);
        let profitIncludingItem = profits[index] + knapsackRecMemoized(weights, profits, capacity-weights[index], index+1, store);
        let maxProfit = Math.max(profitExcludingItem, profitIncludingItem);
        store[index][capacity] = maxProfit;
        return store[index][capacity]
    }
}

// bottom-up tabulated approach
// -time and space O(n) = O(numItems * capacity)
// -see grokking solution and https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/ for similar algorithm
// with space O(n) = 2* numItems
// -see https://www.es.ele.tue.nl/education/5MC10/Solutions/knapsack.pdf and
// http://cse.unl.edu/~goddard/Courses/CSCE310J/Lectures/Lecture8-DynamicProgramming.pdf 
// for solution showing how to get list of items corresponding to the optimal solution
let knapsackTabulated = (weights, profits, capacity) => {
    // create store matrix dimensions i (rows) by j (columns)
    // store[i][j] = max profit given up to i items and j capacity
    // store[0][j] (zero items) and store[i][0] (zero capacity) will always be zero
    let store = new Array(weights.length + 1).fill(null).map(arrItem => new Array(capacity+1).fill(0));

    for (let i = 1; i <= weights.length; i++) {
        for (let j = 1; j <= capacity; j++) {
            if (weights[i-1] > j) {
                store[i][j] = store[i-1][j];
            } else {
                let profitExcludingItem = store[i-1][j]; // same as max profit given i-1 items
                let profitIncludingItem = profits[i-1] + store[i-1][j-weights[i-1]];
                let maxProfit = Math.max(profitExcludingItem, profitIncludingItem);
                store[i][j] = maxProfit;
            }
        }
    }
    return store[weights.length][capacity]
}

// max profit = 10
let weights1a = [2, 3, 1, 4]; 
let profits1a = [4, 5, 3, 7];
let capacity1a = 5;

// max profit = 10 (same as above, but items in different order)
let weights1b = [1, 4, 3, 2]; 
let profits1b = [3, 7, 5, 4];
let capacity1b = 5;

// max profit = 220
let weights2 = [10, 20, 30]; 
let profits2 = [60, 100, 120];
let capacity2 = 50;

// max profit = 17
let weights3 = [3, 6, 9, 5]; 
let profits3 = [7, 2, 10, 4];
let capacity3 = 15;

console.log('knapsackRec: ', knapsackRec(weights1a, profits1a, capacity1a));
console.log('knapsackRec: ', knapsackRec(weights1b, profits1b, capacity1b));
console.log('knapsackRec: ', knapsackRec(weights2, profits2, capacity2));
console.log('knapsackRec: ', knapsackRec(weights3, profits3, capacity3));

console.log('knapsackRecMemoizedWrapper: ', knapsackRecMemoizedWrapper(weights1a, profits1a, capacity1a));
console.log('knapsackRecMemoizedWrapper: ', knapsackRecMemoizedWrapper(weights1b, profits1b, capacity1b));
console.log('knapsackRecMemoizedWrapper: ', knapsackRecMemoizedWrapper(weights2, profits2, capacity2));
console.log('knapsackRecMemoizedWrapper: ', knapsackRecMemoizedWrapper(weights3, profits3, capacity3));

console.log('knapsackTabulated: ', knapsackTabulated(weights1a, profits1a, capacity1a));
console.log('knapsackTabulated: ', knapsackTabulated(weights1b, profits1b, capacity1b));
console.log('knapsackTabulated: ', knapsackTabulated(weights2, profits2, capacity2));
console.log('knapsackTabulated: ', knapsackTabulated(weights3, profits3, capacity3));

