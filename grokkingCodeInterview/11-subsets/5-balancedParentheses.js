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

/*
TO DO: 
- time and space complexity;
- iterative version of the solution;
*/


// - allParenthesesCombosRecursive1: dynamic size partial solution for allParenthesesCombosRecursive1; 
// - allParenthesesCombosRecursive2: static size partial soln for allParenthesesCombosRecursive2
// - allParenthesesCombosRecursive3:  using string concatenation instead of an array for manipulating comboInProgress
//  because string immutable in js; also passing in new parenthesis count object to recursive 
// function so that variable isn't shared between recursive calls
function allParenthesesCombosRecursive1(N) {
    let allCombos = [];
    let comboInProgress = [];  
    let parenthesesCount = {
        'open': 0,
        'closed': 0
    };

    function generateAllParenthesesCombos(index) {
        if (index === N*2) {
            allCombos.push(comboInProgress.join(''));  
        } else {
            if (parenthesesCount['open'] < N) {
                comboInProgress.push('(');
                parenthesesCount['open']++;
                generateAllParenthesesCombos(index+1);
                comboInProgress.pop();
                parenthesesCount['open']--;
            } 
            if (parenthesesCount['closed'] < parenthesesCount['open']) {
                comboInProgress.push(')');
                parenthesesCount['closed']++;
                generateAllParenthesesCombos(index+1);
                comboInProgress.pop(); // O(n)
                parenthesesCount['closed'] -=1;
            };
        };
    };
    generateAllParenthesesCombos(0);
    return allCombos;
};
console.log('allParenthesesCombosRecursive1: ', allParenthesesCombosRecursive1(2));


function allParenthesesCombosRecursive2(N) {
    let allCombos = [];
    let comboInProgress = new Array(N*2).fill(null); // time: O(n) = N, space: O(n) = N 
    let parenthesesCount = {
        'open': 0,
        'closed': 0
    };

    function generateAllParenthesesCombos(index) {
        if (index === N*2) {
            allCombos.push(comboInProgress.join(''));  
        } else {
            if (parenthesesCount['open'] < N) {
                comboInProgress[index] = '(';
                parenthesesCount['open']++;
                generateAllParenthesesCombos(index+1);
                comboInProgress[index] = null;;
                parenthesesCount['open']--;
            } 
            if (parenthesesCount['closed'] < parenthesesCount['open']) {
                comboInProgress[index] =')';
                parenthesesCount['closed']++;
                generateAllParenthesesCombos(index+1);
                comboInProgress[index] = null;;
                parenthesesCount['closed'] -=1;
            };
        };
    };
    generateAllParenthesesCombos(0);
    return allCombos;
};
console.log('allParenthesesCombosRecursive2: ', allParenthesesCombosRecursive2(2));


function allParenthesesCombosRecursive3(N) {
    let allCombos = [];

    function generateAllParenthesesCombos(index, comboInProgress, parenthesesCount) {
        if (index === N*2) {
            allCombos.push(comboInProgress);  
        } else {
            if (parenthesesCount['open'] < N) {
                // comboInProgress +='(';
                generateAllParenthesesCombos(index+1, comboInProgress + '(', 
                {'open':  parenthesesCount['open'] + 1,'closed': parenthesesCount['closed']});
            } 
            if (parenthesesCount['closed'] < parenthesesCount['open']) {
                // comboInProgress +=')';
                generateAllParenthesesCombos(index+1, comboInProgress + ')', 
                {'open':  parenthesesCount['open'], 'closed': parenthesesCount['closed'] + 1});
            };
        };
    };

    let parenthesesCount = {
        'open': 0,
        'closed': 0
    };
    generateAllParenthesesCombos(0, '', parenthesesCount);
    return allCombos;
};

function allParenthesesCombosIterative1(N) {
    let allCombos = [];
    let combosInProgress = [];

    combosInProgress.push({combo: [], open: 0, closed:0,});

    while (combosInProgress.length > 0) {
        let {combo, open, closed} = combosInProgress.shift();
        if (open === N && closed === N) {
            allCombos.push(combo.join(''));
        } else {
            if (open < N) {
                combosInProgress.push({
                    combo: [...combo, '('],
                    open: open + 1,
                    closed,
                });
            };

            if (closed < open) {
                combosInProgress.push({
                    combo: [...combo, ')'],
                    open,
                    closed: closed + 1,
                });
            };
        };
    };
    return allCombos;
};

console.log('allParenthesesCombosIterative1: ', allParenthesesCombosIterative1(3));

function allParenthesesCombosIterative2(N) {
    let allCombos = [];
    let combosInProgress = [];
    let comboInProgress = {
        combo: [], 
        open: 0, 
        closed: 0,
    };

    combosInProgress.push(comboInProgress);

    while (combosInProgress.length > 0) {
        let comboInProgress = combosInProgress.shift();
        if (comboInProgress['open'] === N && comboInProgress['closed'] === N) {
            allCombos.push(comboInProgress['combo']);
        } else {
            if (comboInProgress['open'] < N) {
                let updatedComboInProgress = {
                    combo: comboInProgress['combo'] + '(', 
                    open: comboInProgress['open'] + 1,
                    closed: comboInProgress['closed'],
                };
                combosInProgress.push({...updatedComboInProgress});
            };
            if (comboInProgress['closed'] < comboInProgress['open']) {
                let updatedComboInProgress = {
                    combo: comboInProgress['combo'] + ')', 
                    open: comboInProgress['open'],
                    closed: comboInProgress['closed'] + 1,
                };
                combosInProgress.push({...updatedComboInProgress});
            };
        };
    };
    return allCombos;
};

console.log('allParenthesesCombosIterative2: ', allParenthesesCombosIterative2(3));





