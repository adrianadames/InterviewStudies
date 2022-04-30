/*
(hard)

Problem Statement:
- For a given number ‘N’, write a function to generate 
all combination of ‘N’ pairs of balanced parentheses.

Example 1:

Input: N=2
Output: (()), ()()

Example 2:

Input: N=3
Output: ((())), (()()), (())(), ()(()), ()()()
*/

allParenthesesCombinations = (N, index, allCombos, combination, parenthesesCount) => {
    /*
    let's think about constraints these combinations must abide by: 
    -if number of open parenthesis === number of closed parenthesis, 
    the next character must be an open parenthesis
    -if number of open parenthesis === N/2, the rest of the characters
    are all closed parenthesis
    */
   // base case is when we've filled all N*2 spots
   if (index === N*2) {
       allCombos.push(combination.slice()); // O(n)
   } else {
       if (parenthesesCount['open'] === parenthesesCount['closed']) {
           combination[index] = '(';
           parenthesesCount['open'] +=1;
           allParenthesesCombinations(N, index+1, allCombos, combination, parenthesesCount);
           combination[index] = null;
           parenthesesCount['open'] -=1;
       } else if (parenthesesCount['open'] === N) {
           combination[index] = ')';
           parenthesesCount['closed'] +=1;
           allParenthesesCombinations(N, index+1, allCombos, combination, parenthesesCount);
           combination[index] = null;
           parenthesesCount['closed'] -=1;
       } else {
            for (let k = 0; k<=1; k++) {
                if (k === 0) { // open parenthesis
                    combination[index] = '(';
                    parenthesesCount['open'] +=1;
                    allParenthesesCombinations(N, index+1, allCombos, combination, parenthesesCount);
                    combination[index] = null;
                    parenthesesCount['open'] -=1;
                }

                if (k === 1) { // closed parenthesis
                    combination[index] = ')';
                    parenthesesCount['closed'] +=1;
                    allParenthesesCombinations(N, index+1, allCombos, combination, parenthesesCount);
                    combination[index] = null;
                    parenthesesCount['closed'] -=1;
                }
            }
       }
   }
}

allParenthesesCombinationsWrapper = (N) => {
    let allCombos = [];
    let combination = new Array(N*2).fill(null); // time: O(n) = N, space: O(n) = N
    combination[0] = '('; // all combinations start with open parenth

    let parenthesesCount = {
        'open': 1,
        'closed': 0
    }

    // -using similar analysis to that done for allParenthesesCombinationsWrapper2, 
    // time and space: O(n) = N * 2^N
    allParenthesesCombinations(N, 1, allCombos, combination, parenthesesCount);

    for (let i = 0; i < allCombos.length; i++) { // time: O(n) = (number of combinations = 2^N)*(join function big O = N) = N* 2^N; space: O(n) = N;
        allCombos[i] =  allCombos[i].join('');
    }
    return allCombos
}

console.log('allParenthesesCombinationsWrapper: ', allParenthesesCombinationsWrapper(4));



allParenthesesCombinations2 = (N, index, allCombos, combination, parenthesesCount) => {
    /*
    let's think about constraints these combinations must abide by: 
    -if number of open parenthesis === number of closed parenthesis, 
    the next character must be an open parenthesis
    -if number of open parenthesis === N/2, the rest of the characters
    are all closed parenthesis
    */
   // base case is when we've filled all N*2 spots
   if (index === N*2) {
       allCombos.push(combination); // O(n)
   } else {
       if (parenthesesCount['open'] === parenthesesCount['closed']) {
           combination += '(';
           parenthesesCount['open'] +=1;
           allParenthesesCombinations2(N, index+1, allCombos, combination, parenthesesCount);
           combination = combination.slice(0,-1); // O(n)
           parenthesesCount['open'] -=1;
       } else if (parenthesesCount['open'] === N) {
           combination += ')';
           parenthesesCount['closed'] +=1;
           allParenthesesCombinations2(N, index+1, allCombos, combination, parenthesesCount);
           combination = combination.slice(0,-1);
           parenthesesCount['closed'] -=1;
       } else {
            for (let k = 0; k<=1; k++) {
                if (k === 0) { // open parenthesis
                    combination += '(';
                    parenthesesCount['open'] +=1;
                    allParenthesesCombinations2(N, index+1, allCombos, combination, parenthesesCount);
                    combination = combination.slice(0,-1);
                    parenthesesCount['open'] -=1;
                }

                if (k === 1) { // closed parenthesis
                    combination += ')';
                    parenthesesCount['closed'] +=1;
                    allParenthesesCombinations2(N, index+1, allCombos, combination, parenthesesCount);
                    combination = combination.slice(0,-1);
                    parenthesesCount['closed'] -=1;
                }
            }
       }
   }
}

allParenthesesCombinationsWrapper2 = (N) => {
    let allCombos = [];
    let combination = '('; // all combinations start with open parenth
    let parenthesesCount = {
        'open': 1,
        'closed': 0
    }
    // -depth of recursion tree no more than log(n) implying O(n) <= log(n) 
    ///-depth of recursion tree no more than N*2 (one additional level for every open spot)
    // -log(n) = N*2 implies that n = (2*N)^2 = 4*N^2?
    // -number of nodes = 2 ^ (height + 1) - 1 = 2 ^ (2N+1) -1
    // -if above true, O(n) = 2 ^(N*2)*N - N= N(2^(N)-1)=  
    //          = N * 2^N for space and time complexity
    
    allParenthesesCombinations2(N, 1, allCombos, combination, parenthesesCount); 
    return allCombos
}

console.log('allParenthesesCombinationsWrapper2: ', allParenthesesCombinationsWrapper2(4));
