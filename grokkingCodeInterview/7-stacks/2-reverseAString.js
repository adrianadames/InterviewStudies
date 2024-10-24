/*
(easy)

Problem Statement:
Given a string, write a function that uses a stack to 
reverse the string. The function should return the reversed 
string.

Example 1:
Input: "Hello, World!"
Output: "!dlroW ,olleH"

Example 2:
Input: "OpenAI"
Output: "IAnepO"

Example 3:
Input: "Stacks are fun!"
Output: "!nuf era skcatS"

Constraints:
1 <= s.length <= 105
s[i] is a printable ascii character.
*/

// time: O(n);
// space: O(n); 
function reverseString(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    let reversedString = '';
    while (stack.length > 0) {
        reversedString += stack.pop();
    }
    return reversedString
}

console.log('reverseString: ', reverseString("Hello, World!"));
console.log('reverseString: ', reverseString("OpenAI"));
console.log('reverseString: ', reverseString("Stacks are fun!"));