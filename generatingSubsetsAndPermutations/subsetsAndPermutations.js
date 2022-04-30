
/*
NOTES ON GENERATING SUBSETS AND PERMUTATIONS
- Main Reference: Sanchez, Intro to Recursive Programming, Ch 12.


REMAINING TDS: 
-break down the base case and the decomposition recursive function
for generatingSubsets and generatingPermutations in a way similar 
to how it's done in Sanchez chapter 8. look to youtube videos as 
needed
-runtime and spacetime O(n) analysis (haven't done it for any of 
the implementations yet)



-------------------- NOTES ---------------------------------------
12.2 Generating Combinatorial Entities

-important to understand how to generate all the permutations and
all of the subsets of n distinct elements

-following algorithms won't store all n! permutations and 2^n 
subsets of n distinct elements; instead, methods use simple list 
(the partial solution) that represents only one of the subsets/permutations, 
but which gets modified along the way in order to contain all of the 
subsets/permutations (one at a time) as the algorithm executed; thus, the 
methods process every subset/permutation but won't return all of them 
in a single data structure

12.2.1 Subsets
-"section presents two strategies for generating all subsets of 
n (distinct) elements; in both methods the recursion tree binary, 
and solutions (subsets) are the leaves of the tree; 
    -one method uses partial solutions of (fixed) length n; 
    -other uses partial solutions who's lengths vary as procedure 
    carries out recursive calls"

12.2.1.1 Partial solutions of fixed length
"-Figure 12.4 shows binary recursion tree of algorithm that generates
the eight subsets possible to create with three distinct elements. 

-Each subset described through binary list of n zeros or ones. (e.g
for the list of elements [a, b, c], the list [1,0,1] denotes the 
subset {a, c}.) This binary list is the partial solution, which is 
complete when the method reaches a leaf. The binary digits are 
therefore the candidate elements that form it. 

-As the method carries out recursive calls it simply appends
a new candidate to the partial solution (the concrete binary value is
shown on the edges of the tree) which is passed as a parameter to the
method and shown next to the nodes of the recursion tree. 

-Initially that partial soln list has length n, but its entries are 
meaningless. When algorithm reaches a base case it will have generated 
one of the 2^n possible subsets at one of the leaves of the recursion tree. 
In those cases the lists contain n meaningful elements and will 
represent complete solutions."

12.2.1.2 Partial solutions of variable length
-pretty much same as strategy as above except soln's aren't of fixed length 
(implying possible inefficiencies due to having to dynamically add/remove 
elements from partial soln array (varying its length) during recursive calls)
*/

function generateSubsets(index, sol, elements) {
    // base case
    if (index === elements.length) {
        // complete solution found
        console.log('complete solution found: ', sol);
        // printSubsetBinary(sol, elements)
    } else {
        // generate candidate elements
        for (let k = 0; k < 2; k++) {
            // include candidate in partial sol'n (only two 
            // options: k=0 (candidate elem won't be included) 
            // or k=1 (candidate elem included))
            sol[index] = k;

            // expand partial solution at position i+1
            generateSubsets(index+1, sol, elements)

            // remove candidate from partial solution
            sol[index] = null; // optional 
        }
    }
}

function generateSubsetsWrapper(elements) {
    // initialize partial solution as empty array same length input elements
    let sol = new Array(elements.length).fill(null);
    generateSubsets(0, sol, elements);
}

function printSubsetBinary(sol, elements) {
    let noElements = true;
    for (let i = 0; i < sol.length; i++) {
        if (sol[i] === 1) {
            if (noElements) {
                console.log('soln: ', elements[i]);
                noElements = false;
            } else {
                console.log('+ ', elements[i])
            }
        } 
    }
}

let e1 = ['a', 'b', 'c'];
// generateSubsetsWrapper(e1);


function generateSubsetsAlt(sol, elements) {
    // base case
    if (sol.length === elements.length) {
        console.log('complete soln: ', sol);
        // printSubsetBinary(sol, elements)
    } else {
        // generate candidate elements
        for (let k = 0; k < 2; k++) {

            //include candidate elements in solution
            sol.push(k);

            //expand partial soln at position i+1
            generateSubsetsAlt(sol, elements); 

            //remove candidate from partial soln
            sol.pop();
        }
    }
}

function generateSubsetsAltWrapper(elements) {
    let sol = [];
    generateSubsetsAlt(sol, elements);
}

// generateSubsetsAltWrapper(e1);


// note: not including generatePermutations method (but I am including
// generatePermutationsAlt) because of the silly inefficiency in it
// that I noticed right away and that generatePermuationsAlt addresses

function generatePermutationsAlt(i, available, sol, elements) {
    // base case
    if (i === elements.length) {
        console.log('sol: ', sol);
    } else {
        for (let k = 0; k < elements.length; k++) {
            // check if candidate element already in partial solution
            if (available[k]) {
                // include candidate element in partial solution
                sol[i] = elements[k];

                // make k-th candidate unavailable to be used in generating 
                // more permutations for this partial soln
                available[k] = false;

                // expand partial soln at position i + 1
                generatePermutationsAlt(i+1, available, sol, elements);

                // make k-th candidate element available again for parent node
                available[k] = true;
                sol[i] = null; // optional in order to match recursion tree figure
            }
        }
    }
}

function generatePermutationsAltWrapper(elements) {
    let sol = new Array(elements.length).fill(null);
    let available = new Array(elements.length).fill(true);
    generatePermutationsAlt(0, available, sol, elements);
}

// generatePermutationsAltWrapper(e1);


// -same as generatePermutationsAlt except it doesn't use the i parameter at all
// -disadvantage is that partial soln is of variable length instead of fixed 
function generatePermutationsAlt2(available, sol, elements) {
    // base case
    if (sol.length === elements.length) {
        console.log('sol: ', sol);
    } else {
        for (let k = 0; k < elements.length; k++) {
            // check if candidate element already in partial solution
            if (available[k]) {
                // include candidate element in partial solution
                sol.push(elements[k]);

                // make k-th candidate unavailable to be used in generating 
                // more permutations for this partial soln
                available[k] = false;

                // expand partial soln 
                generatePermutationsAlt2(available, sol, elements);

                // make k-th candidate element available again for parent node
                // in recursion tree
                available[k] = true;

                // remove element added to partial solution by the child since
                // execution handed back to parent in recursion tree
                sol.pop();
            }
        }
    }
}

function generatePermutationsAltWrapper2(elements) {
    let sol = [];
    let available = new Array(elements.length).fill(true);
    generatePermutationsAlt2(available, sol, elements);
}

// generatePermutationsAltWrapper2(e1);


// Time: O(2^n);
// Space: O(n^2);

function generateSubsetsCoderbyte(elements) {
    // base case: elements = []
    if (elements.length === 0) {
        return [[]]
    };

    let firstEl = elements[0];
    let rest = elements.slice(1);
    console.log('rest: ', rest);

    // here we're reducing the input size to our recursive function
    // getting closer to base case
    let subsetsWithoutFirst = generateSubsetsCoderbyte(rest); 
    let subsetsWithFirst = [];

    subsetsWithoutFirst.forEach(subset => {
        let subsetWithFirst = [...subset, firstEl];
        subsetsWithFirst.push(subsetWithFirst);
    });

    console.log('[...subsetsWithoutFirst, ...subsetsWithFirst]: ', [...subsetsWithoutFirst, ...subsetsWithFirst]);


    return [...subsetsWithoutFirst, ...subsetsWithFirst];
}

console.log('generateSubsetsCoderbyte: ', generateSubsetsCoderbyte(['a', 'b', 'c', 'd']))


// time: O(n!)
// space: O(n^2)
function generatePermsCoderbyte(elements) {
    if (elements.length === 0) {
        return [[]]
    };
    let firstEl = elements[0];
    let rest = elements.slice(1);

    let allPermutations = [];
    
    let permsWithoutFirst = generatePermsCoderbyte(rest);
    permsWithoutFirst.forEach(perm => {
        for (let i = 0; i <= perm.length; i++) {
            let permWithFirst = [...perm.slice(0, i), firstEl, ...perm.slice(i)];
            allPermutations.push(permWithFirst);
        }
    })

    return allPermutations
}

console.log('generatePermsCoderbyte: ', generatePermsCoderbyte(['a', 'b', 'c', 'd']))
