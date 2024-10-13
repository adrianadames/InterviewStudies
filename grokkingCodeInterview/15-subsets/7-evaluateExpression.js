/*
(hard)

Problem Statement:
- Given an expression containing digits and operations (+, -, *), 
find all possible ways in which the expression can be evaluated by 
grouping the numbers and operators using parentheses.

Example 1:

Input: "1+2*3"
Output: 7, 9
Explanation: 1+(2*3) => 7 and (1+2)*3 => 9


Example 2:

Input: "2*3-4-5"
Output: 8, -12, 7, -7, -3 
Explanation: 2*(3-(4-5)) => 8, 2*(3-4-5) => -12, 2*3-(4-5) => 7, 
2*(3-4)-5 => -7, (2*3)-4-5 => -3
*/

/*
-------ORIGINAL STRATEGY (that I didn't follow through with)------
Looked at soln. Different than strategy described below. 
Not sure if strategy below has merit. Does it have merit if
we were looking to generate the actual expressions as strings?
Or would the other approach work better?

-let's say we have an expression with 3 digits (implying two 
operators): a + b * c
-then we can place parentheses at any of the spots with an 
underscore (i.e. before or after any of the digits): _a_+_b_*_c_

-we need to generate all the expressions that can be made with 
different combinations of parentheses
-let's examine the three types of expressions that can be made 
by choosing what goes on the first open spot: 
    1) no parenthesis a_+_b_*_c_
    2) single open parenthesis (a_+_b_*_c_
    3) double open parentheses ((a_+_b_*_c_

-let's look at the different expressions that can be made for #3 above, 
the double parentheses expression: ((a_+_b_*_c_
    1) no parenthesis ((a +_b_*_c_
    2) single closed parentheis: ((a)+_b_*_c_
    3) double closed parenthesis: ((a))+_b_*_c_

-from here, we can see that depending on what came prior, certain combinations
of parenthesis are valid and some aren't; when generating possible combinations, 
we must dismiss any combinations that won't result in a valid expression. 
-Rules: 
    -number of closed parenthesis must be less than or equal to number of open 
    parenthesis at any given point
    -number of closed and open must be equal by the end
    -can't place an open parenthesis right after a digit/before an operator
    -can't place a closed parenthesis right before a digit/after an operator
*/

function evaluateExpression(expression) {
    if (expression.length === 1) {
        return [Number(expression)];
    };

    let operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
    };

    let allEvaluations = [];

    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '+' || expression[i] === '-' || expression[i] === '*') {
            let lhs = evaluateExpression(expression.slice(0,i));
            let rhs = evaluateExpression(expression.slice(i+1, expression.length));
            
            for (let left of lhs) {
                for (let right of rhs) {
                    let result = operators[expression[i]](left, right);
                    allEvaluations.push(result);
                    // console.log('allEvaluations: ', allEvaluations)
                };
            };
        };    
    };

    return allEvaluations;
};
console.log('evaluateExpression: ', evaluateExpression('2*3-4-5'));

























// let generateExpressionSolutionsWrapper = (expression) => {
//     let allSolutions = [];
//     generateExpressionSolutions(expression, allSolutions);
//     return allSolutions
// }

// let operatorFunctions = {
//     '+': (a, b) => a+b, 
//     '-': (a, b) => a-b,
//     '*': (a, b) => a*b,
// };

// // let me keep in mind example of 2*3+4*5
// let generateExpressionSolutions = (expression, allSolutions) => {
//     // I'm given the expression. 
//     // I step through the string and find the first operator. 
//     // At that point, what happens?
    
//     // I create an array called solutions.

//     // I create two arrays called lhsSolutions and rhsSolutions. 

//     // solutions is equal to all combos of lhsSolutions (operator function) rhsSolutions

//     // base case: expression is a single digit (will assume only 0-9 used as digits for now)
//     // console.log('expression: ', expression)
//     let solutions = [];
//     if (expression.length === 1) {
//         solutions.push(Number(expression));
//         return solutions;
//     } else {
//         for (let i = 0; i < expression.length; i++) {
//             if (expression[i] === '+' || expression[i] === '-' || expression[i] === '*') {
//                 let lhs = expression.slice(0,i);
//                 let rhs = expression.slice(i+1, expression.length);

//                 let lhsSolutions = [...generateExpressionSolutions(lhs, allSolutions)];
//                 let rhsSolutions = [...generateExpressionSolutions(rhs, allSolutions)];

//                 for (let k=0; k < lhsSolutions.length;k++) {
//                     for (let q= 0; q<rhsSolutions.length;q++) {
//                         solutions.push(operatorFunctions[expression[i]](lhsSolutions[k],rhsSolutions[q]));
//                     };
//                 };
//             };
//         };
//         allSolutions = solutions.slice();
//         // console.log('solutions: ', solutions);
//         // console.log('allSolutions: ', allSolutions);
//         return solutions;
//     };
// };

// console.log('generateExpressionSolutionsWrapper: ', generateExpressionSolutionsWrapper('2*3+4*5'));
// console.log('generateExpressionSolutionsWrapper: ', generateExpressionSolutionsWrapper('2*3-4-5'));