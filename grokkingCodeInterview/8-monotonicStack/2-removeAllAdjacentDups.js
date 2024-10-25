/*
(easy)

Problem Statement:
You are given a string s consisting of lowercase English letters. 
A duplicate removal consists of choosing two adjacent and equal 
letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been 
made.

Examples

Input: s = "abccba"
Output: ""
Explanation: First, we remove "cc" to get "abba". Then, we remove 
"bb" to get "aa". Finally, we remove "aa" to get an empty string.

Input: s = "foobar"
Output: "fbar"
*/

function removeAdjacentDups(str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (stack.length > 0 && str[i] === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(str[i]);
        }
    }
    return stack.join('');
}
console.log('removeAdjacentDups: ', removeAdjacentDups('abccba'));
console.log('removeAdjacentDups: ', removeAdjacentDups('foobar'));