/*
DYNAMIC PROGRAMMING
- Main reference: Corbin, Ch. 15

When developing a dynamic-programming algorithm, we follow a sequence of
four steps:
1. Characterize the structure of an optimal solution.
2. Recursively define the value of an optimal solution.
3. Compute the value of an optimal solution, typically in a bottom-up fashion.
4. Construct an optimal solution from computed information.

*/

/*
Dynamic Programming Problems to Solve
-knapsack (in grokking knapsack problem set)
-subset sum (in grokking knapsack problem set)
-equal sum partition (in grokking knapsack problem set)
-rod cutting (corbin 15.1)
-matrix chain (corbin 15.2)
-longest common subsequence (corbin ch 15.4) 
-longest increasing subsequence (https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/)
-longest palindrome subsequence (p. 322 in Intro to Rec by Sanchez)
-find continguous array with max sum 
-minimum number of jumps
-given matrix of 0s and 1s, find max size submatrix of only 1s
-climbing stairs
-coin change

-optimal binary tree (corbin 15.5)

*/

/*

******15.1 Rod Cutting********

-Given: 
    -rod of length n inches 
    -table of prices, p_i for i = 1,2,...,n,
determine max revenue, r_n, obtainable by cutting up rod and selling pieces

-We can cut up rod of length n in 2^(n-1) different ways, since we have an 
independent option of cutting or not cutting at distance i from the left end
for i=1,2,...,n-1. 

-If optimal soln cuts rod into k pieces for some 1<=k<=n then an optimal
decomposition of the rod into pieces of lengths i_1, i_2, ..., i_k, 
    n_optimal = i_1 + i+2 + ... + i_k
provides max revenue, 
    r_n = p_i_1+ p_i_2+ ... + p_i_k

-We can frame value r_n for n>=1 in terms of optimal revenue from the shorter
rods: 
    r_n = max(p_n, r_1 + r_(n-1), r_2 + r_(n-2), ..., r_(n-1) + r_1) 
where: 
    p_n:  price for the rod without any cuts
    r_i + r_(n-i): max revenue obtained by making initial cut of size i for two
    pieces of size i and n-i, and then optimally cutting those pieces further, 
    obtaining revenues r_i and r_(n-i) from those two pieces

-We have to consider all possible values for i and pick the max

-In related but simpler way to arrange recursive structure of the problem, we 
view decomposition as piece of length i cut from the left and a right-hand 
remainder of length n-i where only remainder may be further subdivided. We
couch solution with no cuts as saying first piece has size i = n and revenue
p_n and that remainder has size 0 with revenue r_0 = 0. We obtain simpler 
version of eqn above: 
    r_n = max(p_1 + r_(n-1), p_2 + r_(n-2), ..., p_n + r_0)

-In this formulation, optimal soln embodies soln to only one related subprob--
the remainder--rather than two
*/

// Recursive top-down implementation:
let cutRod = (prices, n) => {
    if (n === 0) {
        return 0
    }
    let q = -Infinity;  
    for (let i = 1; i <= n; i++) {
        q = Math.max(q, prices[i] + cutRod(prices, n-i));
    }
    return q
}

// revenue for rod of size 0 = 0
// prices arr index = length of rod
let prices1 = [0, 1, 4, 8, 9, 10, 17, 20, 24, 30, 32];
console.log('cutRod1, n = 3: ', cutRod(prices1, 3));

// for moderately sized n, program takes long time. it's inefficient. 
let prices2 = [0, 1, 4, 8, 9, 10, 17, 20, 24, 30, 32, 0, 1, 4, 8, 9, 10, 17, 20, 24, 30, 32, 0, 1, 4, 8, 9, 10, 17, 20, 24, 30, 32];
console.log('cutRod2, n = 10: ', cutRod(prices2, 10));
console.log('cutRod2, n = 27: ', cutRod(prices2, 27));

/*
-Why cutRod inefficient?
-for n = 4, cutRod(p, n) calls cutRod(p, n-i) for i = 1, 2, ..., n
-equivalently, cutRod(p,n) calls cutRod(p, j) for j = 0, 1, ..., n-1;
-to analyze run-time, let T(n) denote number of calls made to cutRod(p,n); 
-T(n) equals the number of nodes in a subtree whose root is labeled n in 
the recursion tree; count includes call to root so T(0) = 1;
-exercise 15.1 asks you to show that 
    T(n) = 2^n
-cut-rod explicitly considers all the 2^(n-1) possible ways of cutting up rod
of length n; 
-the tree of recursive calls has 2^(n-1) leaves, one for each way of cutting rod
-the labels on the path from root to leaf give the sizes of the remaining right-hand
piece before making each cut; i.e., the labels give the corresponding cut points
measured from right-hand end of rod


USING DYNAMIC PROGRAMMING FOR OPTIMAL ROD CUTTING
-tl;dr: save solutions to subproblems so you only solve them once
-two approaches: 
    -top-down w/ memoization
    -bottom-up method
*/

let memoizedCutRod = (prices, n) => {
    let r = new Array(n+1).fill(-Infinity);
    memoizedCutRodAux(prices, n, r);
    return [r[n], r]
}

let memoizedCutRodAux = (prices, n, r) => {
    if (r[n] >= 0) {
        return r[n]
    }
    let q;    
    if (n === 0) {
        q = 0;
    } else {
        q = -Infinity;
        for (let i = 1; i <=n; i++) {
            q = Math.max(q, prices[i]+ memoizedCutRodAux(prices, n-i, r));
        }
    }
    r[n] = q;
    return q
}

console.log('memoizedCutRod, n = 27: ', memoizedCutRod(prices2, 27))

let bottomUpCutRod = (prices, n) => {
    let r = new Array(n+1).fill(-Infinity);
    r[0] = 0;
    let q;
    for (let j = 1; j<=n; j++) {
        q = -Infinity;
        for (let i = 1; i<=j; i++) {
            q = Math.max(q, prices[i] + r[j-i]);
        }
        r[j] = q;
    }
    return [r[n], r]
}

console.log('bottomUpCutRod, n = 27: ', bottomUpCutRod(prices2, 27));
