/*
Problem Statement

Given rod of length n inches and a table of prices p_i for
i= 1, 2, ..., n, determine the max revenue r_n obtainable
by cutting up rod and selling the pieces. If price p_n for
rod of length n large enough, optimal solution may require
no cutting at all. 

Also return the size of the cut-up rod pieces corresponding
to this max revenue. 
*/

/*
-we can cut rod of length n in 2^(n-1) different ways since 
we have the independent option of cutting or not cutting
at distance i inches from the left for i = 1, 2, ..., n-1
-if optimal soln cuts rod into k pieces for some 1 <= k <=n, 
an optimal decomposition: 
    n_optimal = i_1 + i_2 + ... + i_k
of the rod into pieces of length i_1, i_2, ..., i_k, provides
max revenue, 
    r_n = p_i_1 + p_i_2 + ... + p_i_k

-we may view the decomposition as consisting of a 1st piece
of length i cut from the left and then a right-hand remainder
of length n-i, where only the remainder may be further divided
-when viewed like this, we can say, 
    r_n = max(p_i + r_(n-i)) for 1<=i<=n
where for i=n (no cuts at all), 
    r = p_n + r_0 = p_n + 0
*/

let rodCuttingRec = (prices, n) => { // p: array of prices; n: length of rod
    if (n === 0) {
        return 0
    }
    let q = -Infinity;
    for (let i = 1; i <= n; i++) { // i = n => no cuts at all
        q = Math.max(q, prices[i-1] + rodCuttingRec(prices, n-i));
    }
    return q
}

let prices1 = [1, 5, 8, 9, 10, 17, 17, 20, 24, 30];

// console.log('rodCuttingRec: ', rodCuttingRec(prices1, prices1.length));

let rodCuttingRecMemoized = (prices, n, maxRevenue, optimalFirstCuts) => {
    if (maxRevenue[n] > -1) {
        return maxRevenue[n]
    } else if (n === 0) {
        maxRevenue[n] = 0;
    } else {
        for (let i = 1; i <=n; i++) {
            if (maxRevenue[n] < Math.max(maxRevenue[n], prices[i-1] + rodCuttingRecMemoized(prices, n-i, maxRevenue, optimalFirstCuts))) {
                maxRevenue[n] = Math.max(maxRevenue[n], prices[i-1] + rodCuttingRecMemoized(prices, n-i, maxRevenue, optimalFirstCuts));
                optimalFirstCuts[n] = i;
            }    
        }
    }
    return maxRevenue[n]
}

let rodCuttingRecMemoizedWrapper = (prices, n) => {
    let maxRevenue = Array(prices.length+1).fill(-1);
    let optimalFirstCuts = Array(prices.length+1).fill(-1);
    rodCuttingRecMemoized(prices, n, maxRevenue, optimalFirstCuts);
    return [maxRevenue, optimalFirstCuts]
}

// console.log('rodCuttingRecMemoizedWrapper: ', rodCuttingRecMemoizedWrapper(prices1, prices1.length));

let printOptimalDecomposition = (optimalFirstCuts, n, optimalDecomposition) => {
    // base case is when optimal first cut is equal to the size of the rod (i.e. no more cutting)
    if (optimalFirstCuts[n] === n) {
        return `${optimalFirstCuts[n]}`
    } else {
        let nextCut = printOptimalDecomposition(optimalFirstCuts, n-optimalFirstCuts[n], optimalDecomposition);
        optimalDecomposition[0] += `${optimalFirstCuts[n]} + ${nextCut}`;
        return optimalDecomposition[0]
    }
}

let printOptimalDecompositionWrapper = (prices, n) => {
    let [maxRevenue, optimalFirstCuts] = rodCuttingRecMemoizedWrapper(prices, n);
    console.log('optimalFirstCutsTEEST: ', optimalFirstCuts);
    let optimalDecomposition = [''];
    return printOptimalDecomposition(optimalFirstCuts, n, optimalDecomposition);
}

console.log('printOptimalDecompositionWrapper: ', printOptimalDecompositionWrapper(prices1, prices1.length));
console.log('printOptimalDecompositionWrapper: ', printOptimalDecompositionWrapper(prices1, 9));

let rodCuttingBottomUp = (prices, n) => {
    // set up auxillary tables
    let maxRevenues = Array(prices.length +1).fill(-Infinity);
    let optimalFirstCuts = Array(prices.length +1).fill(-Infinity);
    maxRevenues[0] = 0;
    for (let l = 1; l<=n; l++) {
        let q = -Infinity;
        for (let i=1; i<=l; i++) {            
            if (q < prices[i-1] + maxRevenues[l-i]) {
                q = prices[i-1] + maxRevenues[l-i];
                optimalFirstCuts[l] = i;
            }
        }
        maxRevenues[l] = q;
    }
    return [maxRevenues, optimalFirstCuts]
}

console.log('rodCuttingBottomUp: ', rodCuttingBottomUp(prices1, 9));
