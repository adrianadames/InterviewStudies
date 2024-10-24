/*
(medium)

Problem Statement
Given an absolute file path in a Unix-style file system, 
simplify it by converting ".." to the previous directory and 
removing any "." or multiple slashes. The resulting string 
should represent the shortest absolute path.

Example 1 
Input: "/a//b////c/d//././/.."
Output: "/a/b/c"

Example 2 
Input: "/../"
Output: "/"

Example 3 
Input: "/home//foo/"
Output: "/home/foo"

Constraints:
1 <= path.length <= 3000
path consists of English letters, digits, period '.', slash '/' or '_'.
path is a valid absolute Unix path.
*/

// time: O(n);
// space: O(n);
function simplifyPath(pathStr) {
    let stack = [];
    let currentDir = '';
    
    for (let i = 0; i < pathStr.length; i++) {
        let nextChar = pathStr[i];
        if (nextChar === '/') {
            if (currentDir === '..') {
                if (stack.length > 0) {
                    stack.pop();
                }
            } else if (currentDir !== '' && currentDir !== '.') {
                stack.push(currentDir);
            }
            currentDir = '';
        } else {
            currentDir += nextChar;
        }
    }

    if (currentDir === '..') {
        if (stack.length > 0) {
            stack.pop();
        }
    } else if (currentDir !== '' && currentDir !== '.') {
        stack.push(currentDir);
    }

    return '/' + stack.join('/');
}

console.log('simplifyPath: ', simplifyPath("/a//b///../c/d//././/.."));
console.log('simplifyPath: ', simplifyPath("/../"));
console.log('simplifyPath: ', simplifyPath("/home//foo/"));

// time: O(n);
// space: O(n);
function simplifyPath2(pathStr) {
    let pathStrArray = pathStr.split('/');
    let stack = [];

    for (let i = 0; i < pathStrArray.length; i++) {
        if (pathStrArray[i] === '' || pathStrArray[i] === '.') {
            continue;
        } else if (pathStrArray[i] === '..') {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(pathStrArray[i]);
        }
    }

    return '/' + stack.join('/');
}

console.log('simplifyPath2: ', simplifyPath2("/a//b////c/d//././/.."));
console.log('simplifyPath2: ', simplifyPath2("/../"));
console.log('simplifyPath2: ', simplifyPath2("/home//foo/"));