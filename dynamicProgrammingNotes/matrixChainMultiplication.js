/*
Problem Statement

Given a chain of n matrices, <A_1, A_2, ..., A_n>, where for
i = 1, 2, ..., n, matrix A_i has dimensions p_(i-1) x p_i, 
fully parenthesize the product A_1*A_2*...*A_n in a way that
minimizes the number of scalar multiplications. 

A product of matrices is fully parenthesized if it is either a 
single matrix or the product of two fully parenthesized matrix products, 
surrounded by parentheses. For example, if the chain of matrices is 
<A_1, A_2, A_3, A_4>, then we can fully parenthesize the product
A_1*A_2*A_3*A_4 in five distinct ways:

(A1(A2(A3*A4))) ;
(A1((A2*A3)A4)) ;
((A1*A2)(A3*A4)) ;
((A1(A2*A3))A4) ;
(((A1*A2)A3)A4) :
*/

let matrixMultiply = (A,B) => {
    if (A[0].length !== B.length) { // if (A.cols !== B.rows)
        return "incompatible dimensions"
    } else {
        // let C be a new A.rows * B.columns matrix
        let C = new Array(A.length).fill(null).map(arrItem => new Array(B[0].length).fill(0));
        for (let i = 0; i< A.length ;i++) {
            for (let j = 0; j <B[0].length; j++) {
                C[i][j] = 0;
                for (k = 0; k < A[0].length; k++) {
                    C[i][j] = C[i][j] + A[i][k]*B[k][j]; // number of scalar multiplications = A.length* B[0].length* A[0].length
                }
            }
        }
        return C
    }
}

let A = [[1, 2, 3], [4, 5, 6]]; // 2x3 matrix
let B = [[7, 8, 9], [10, 11, 12], [13, 14, 15]]; // 3 x 3 matrix

// console.log('matrixMultiply(A,B): ', matrixMultiply(A,B)); // yields a 2 x 3 matrix

/*
-let's use notation A_i...j for i<= j for mtx that results from 
A_i*A_(i+1)*...*A_j
-to paranthesize, we must split the product b/t A_k and A_(k+1) for 
some k, i<=k<j
-that is, for some k, we 1st compute A_i...k & A_(k+1)...j and then 
we multiply them together for final product A_i...j
-to find the min cost to multiply we find the min cost of two smaller 
subprobs: 
    A_i*A_(i+1)*...*A_k,  & 
    A_(k+1)*A_(k+2)*...*A_j
-we have (j-i) choices as to where we can make the split

-we define the cost of optimal soln in terms of optimal solns to subprobs
-let m[i,j] be the min num of multiplications needed to compute A_i...j which
implies that for the full problem, the lowest cost way to compute A_1...n would 
be m[1,n]
-if i=j, the problem is trivial because we only have one mtx (A_i...i = A_i) => 
m[1,1] = 0 for (i = 1, 2, ...,n)
-recalling that each mtx A_i is p_(i-1) x p_i, we know that computing
A_i...k * A_(k+1)...j takes p_(i-1)*p_k*p_j scalar multiplications, we can say that

    m[i,j] = m[i,k] + m[k+1,j] + p_(i-1)*p_k*p_j

but we don't know k, so we must check the above for all k, k = i, i+1, ..., j-1; i.e., 

    m[i,j] = min(m[i,j] = m[i,k] + m[k+1,j] + p_(i-1)*p_k*p_j for i<=k<j  (15.7)

-to help with reconstructing sol'n, we define s[i,j] to be the value k @ which 
we split the product in an optimal parenthesization

-we start with the bottom-up approach where we'll use auxillary table, 
m[1...n, 1...n] for storing m[i,j] costs and another table, s[1...(n-1), 2...n] 
that records which index k achieved the optimal cost in computing m[i,j]

-eqn 15.7 shows that the cost of m[i,j] of computing mtx chain product of j-i+1
matrices depends only on the costs of computing mtx chain products fewer than 
j-i+1 matrices
-that is, for k = i, i+1, ..., j-1, mtx A_i...k is a product of 
k-i+1 < j-i+1 matrices and A_(k+1)...j a product of j-k < j-i+1 matrices, 
implying that we should fill in the table in a manner corresponding to 
solving the parenthesization problem on mtx chains of increasing length
-for subproblem of optimally parenthesizing A_i*A_(i+1)*...*A_j, we consider
the subproblem size to be the length j-i+1 of the chain

-This procedure assumes that matrix A_i has dimensions p_(i-1) x p_i 
for i = 1, 2, ..., n. And the input is the sequence p = [p_0, p_1, ..., p_n]
where p.length = n+1.
*/

let matrixChainOrderBottomUp = (p) => {
    let n = p.length -1; // number of matrices

    // setting up auxillary table, m[1...n][1...n] for storing m[i,j] costs
    let m = {};
    for (let i = 1; i<=n; i++) {
        for (let j = 1; j<= n; j++) {
            m[`${i},${j}`] = null;
        }
    }
    // setting up auxillary table s[1...(n-1), 2...n] that records index k 
    // where we split matrices for optimal cost in computing m[i,j]
    let s = {};
    for (let i = 1; i<=n-1; i++) {
        for (let j = 2; j<= n; j++) {
            s[`${i},${j}`] = null;
        }
    }
    // zero cost for single matrix
    for (let i = 1; i<=n; i++) {
        m[`${i},${i}`] = 0;
    }

    // calculating the minimum m[i,j]
    for (let l = 2; l <= n; l++) {
        for (let i=1; i<= n-l+1; i++) {
            let j = i + l - 1;
            m[`${i},${j}`] = Infinity;
            for (let k = i; k<= j-1; k++) {
                let q = m[`${i},${k}`]+ m[`${k+1},${j}`] + p[i-1]*p[k]*p[j];
                if (q < m[`${i},${j}`]) {
                    m[`${i},${j}`] = q;
                    s[`${i},${j}`] = k;
                }
            }
        }
    }
    return s
}

let printOptimalParenth = (s, i, j, optimalParenth) => {
    // base case is when no more splits are possible; i.e. we've reached a single matrix
    if (i === j) {
        return `A${i}`;
    } else {
        let firstHalf = printOptimalParenth(s, i, s[`${i},${j}`], optimalParenth);
        let secondHalf = printOptimalParenth(s,s[`${i},${j}`]+1, j, optimalParenth);
        optimalParenth[0] = '(' + firstHalf  + secondHalf + ')';
        return optimalParenth[0]
    }
}

let printOptimalParenthWrapper = (p) => { // p: array of matrix dimensions
    let s = matrixChainOrderBottomUp(p);
    console.log('s: ', s);
    let optimalParenth = [''];
    printOptimalParenth(s, 1, p.length-1, optimalParenth);
    return optimalParenth[0]
} 

console.log('printOptimalParenthWrapper: ', printOptimalParenthWrapper([30, 35, 15, 5, 10, 20, 25]));

let matrixChainOrderRec = (p, i, j, m, s) => {
    if (i === j) {
        return 0
    } else {
        m[`${i},${j}`] = Infinity;
        s[`${i},${j}`] = Infinity;
        for (let k = i; k <= j-1; k++) {
            let q = matrixChainOrderRec(p, i, k, m, s) + matrixChainOrderRec(p, k+1, j, m, s) + p[i-1]*p[k]*p[j];
            if (q < m[`${i},${j}`]) {
                m[`${i},${j}`] = q;
                s[`${i},${j}`] = k;
            }
        }
        return m[`${i},${j}`]
    }
}

let matrixChainOrderRecWrapper = (p) => {
    let n = p.length -1; // number of matrices
    let m = {};
    let s = {};
    matrixChainOrderRec(p, 1, n, m, s);
    return [m, s]
};

console.log('matrixChainOrderRecWrapper: ', matrixChainOrderRecWrapper([30, 35, 15, 5, 10, 20, 25]));

let matrixChainOrderRecMemoized = (p, i, j, m, s) => {
    if (m[`${i},${j}`] < Infinity) {
        return m[`${i},${j}`]
    } else if (i === j) {
        m[`${i},${j}`] = 0;
    } else {
        for (let k = i; k <= j-1; k++) {
            let q = matrixChainOrderRecMemoized(p, i, k, m, s) + 
                matrixChainOrderRecMemoized(p, k+1, j, m, s) + 
                p[i-1]*p[k]*p[j];
            if (q < m[`${i},${j}`]) {
                m[`${i},${j}`] = q;
                s[`${i},${j}`] = k;
            }
        }
    }
    return [m, s]
}

let matrixChainOrderRecMemoizedWrapper = (p) => {
    let n = p.length -1; // number of matrices
    let m = {};
    let s = {};
    for (let i = 1; i<=n; i++) {
        for (let j = 1; j<=n; j++) {
            m[`${i},${j}`] = Infinity;
            s[`${i},${j}`] = Infinity;
        }
    }
    return matrixChainOrderRecMemoized(p, 1, n, m, s)
}

console.log('matrixChainOrderRecMemoizedWrapper: ', matrixChainOrderRecMemoizedWrapper([30, 35, 15, 5, 10, 20, 25]));