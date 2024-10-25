/*
(medium)

You are given a string s and an integer k, a k duplicate removal 
consists of choosing k adjacent and equal letters from s and removing 
them, causing the left and the right side of the deleted substring to 
concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. 
It is guaranteed that the answer is unique.

Example 1:
Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.

Example 2:
Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation: 
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"

Example 3:
Input: s = "pbbcggttciiippooaais", k = 2
Output: "ps"

Constraints:
1 <= s.length <= 105
2 <= k <= 104
s only contains lowercase English letters.
*/

function removeAdjacentDupsII(str, k) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (stack.length > 0 && str[i] === stack[stack.length -1].char) {
            stack[stack.length -1].count++;
            if (stack[stack.length -1].count === k) {
                stack.pop();
            } 
        } else {
            stack.push({char: str[i], count: 1});
        }
    }
    let result = '';
    while (stack.length > 0) {
        let next = stack.pop();
        for (let j = 0; j < next.count;j++) {
            result = next.char + result;
        }
    }
    return result;
}

console.log('removeAdjacentDupsII: ', removeAdjacentDupsII("abcd", 2)); // abcd
console.log('removeAdjacentDupsII: ', removeAdjacentDupsII("deeedbbcccbdaa", 3)); // aa
console.log('removeAdjacentDupsII: ', removeAdjacentDupsII("pbbcggttciiippooaais", 2)); // ps
console.log('removeAdjacentDupsII: ', removeAdjacentDupsII("pbbcggttciiippoo", 2)); // ps
console.log('removeAdjacentDupsII: ', removeAdjacentDupsII("aaabaaaabbba", 4)); // ''


