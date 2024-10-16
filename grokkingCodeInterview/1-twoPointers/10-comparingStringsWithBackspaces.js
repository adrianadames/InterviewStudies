/*
(medium)

Problem - Comparing Strings containing Backspaces

Given two strings s and t, return true if they are equal when both are 
typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
 
Constraints:
1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.

Follow up: Can you solve it in O(n) time and O(1) space?
*/

// time: O(n)
// space: O(1)
function comparingStringsWithBackspaces(str1, str2) {
    let p1 = str1.length-1;
    let p2 = str2.length-1;

    // - we put a pointer at the end of the string and then
    // process all backspaces until we hit a letter
    let backspaceCount1 = 0;
    let backspaceCount2= 0;
    while (p1 >=0 || p2 >=0) {
        while (p1 >= 0) {
            if (str1[p1] === '#') {
                backspaceCount1++;
                p1--;
            } else if (backspaceCount1 > 0) {
                p1--;
            } else {
                break
            }
        }

        while (p2 >= 0) {
            if (str2[p2] === '#') {
                backspaceCount2++;
                p2--;
            } else if (backspaceCount2 > 0) {
                p2--;
            } else {
                break
            }
        }

        if (p1 <0 && p2 <0) {
            return true
        } else if ((p1 < 0 && p2>=0) || (p2 < 0 && p1 >= 0)) {
            return false
        } else if (str1[p1] !== str2[p2]) {
            return false
        } else { // str1[p1] === str2[p2]
            p1--;
            p2--;
        }
    }
    return true;    
}

console.log('comparingStringsWithBackspaces: ', comparingStringsWithBackspaces("ab#c", "ad#c" ));
console.log('comparingStringsWithBackspaces: ', comparingStringsWithBackspaces("ab##", "c#d#" ));
console.log('comparingStringsWithBackspaces: ', comparingStringsWithBackspaces("a#c", "b" ));