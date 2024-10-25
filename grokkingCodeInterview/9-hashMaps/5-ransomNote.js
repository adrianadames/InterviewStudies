/*
(easy)

Problem Statement:
Given two strings ransomNote and magazine, return true if 
ransomNote can be constructed by using the letters from 
magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true

Constraints:
1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
*/

// time: O(m + n);
// space: O(1) (26 letters worst case)
function ransomNote(ransomNote, magazine) {
    let magazineCharCount = {};
    for (let i = 0; i < magazine.length; i++) {
        magazineCharCount[magazine[i]] = (magazineCharCount[magazine[i]] || 0) + 1;
    }
    
    for (let i = 0; i < ransomNote.length; i++) {
        if (!magazineCharCount[ransomNote[i]]) {
            return false;
        }
        magazineCharCount[ransomNote[i]]--;
    }

    return true;
}

console.log('ransomNote: ', ransomNote("a", "b"));
console.log('ransomNote: ', ransomNote("aa", "ab"));
console.log('ransomNote: ', ransomNote("aa", "aab"));