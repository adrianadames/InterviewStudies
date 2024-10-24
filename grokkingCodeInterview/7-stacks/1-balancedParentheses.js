/*
(easy)

Problem Statement: 
Given a string s containing (, ), [, ], {, and } characters. 
Determine if a given string of parentheses is balanced.

A string of parentheses is considered balanced if every opening 
parenthesis has a corresponding closing parenthesis in the correct 
order.

Example 1:
Input: String s = "{[()]}";
Expected Output: true
Explanation: The parentheses in this string are perfectly 
balanced. Every opening parenthesis '{', '[', '(' has a 
corresponding closing parenthesis '}', ']', ')' in the correct order.
*/

// - when we encounter an open parentheses, push to stack; 
// - when we encounter closed parentheses, pop from the stack and see if
// there's a match; if not, return false; if so, move on to the next char 

// time: O(n);
// space: O(n); 
function balancedParentheses(str) {
    let i = 0; 
    let stack = [];
    let parentheses = {
        '(':')',
        '[':']',
        '{':'}',
    };

    while (i < str.length) {
        if (parentheses[str[i]]) { // - if an open parentheses
            stack.push(str[i]);
            i++;
        } else {
            if (stack.length === 0) { // no more open parentheses; extra closings; 
                return false;
            }
            let nextOpen = stack.pop();
            if (parentheses[nextOpen] === str[i]) {
                i++;
            } else {
                return false;
            }
        }
    }

    return stack.length === 0; // if stack.length not zero there are extra opens;
}

console.log('balancedParentheses: ', balancedParentheses("{[()]}"));
console.log('balancedParentheses: ', balancedParentheses("{[()]"));
console.log('balancedParentheses: ', balancedParentheses("{[()])}"));