/*
(easy)

Problem Statement
Given a string s which consists of lowercase or uppercase letters, 
return the length of the longest palindrome that can be built with 
those letters.

Letters are case sensitive, for example, "Aa" is not considered a 
palindrome.

Example 1:
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", 
whose length is 7.

Example 2:
Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", 
whose length is 1.

Constraints:
1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.
*/

// NOTE: THIS SOLUTION IS WRONG BECAUSE IT DOESN"T TAKE INTO ACCOUNT THAT 
// AN ODD NUMBER COUNT LIKE {'a': 5} can be used to construct palindrome
// by using four of the five letters;
// ALSO not sure about the letter case thing. I think I have it taken care of 
// because of how they are distinct when serving as object keys 
function longestPalindrome(str) {
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
        if (!charCount[str[i]]) {
            charCount[str[i]] = 0;
        }
        charCount[str[i]]++;
    }

    let largestOdd = ['', 0];
    let result = [];
    // - build (most of) the first half of the palindrome
    Object.entries(charCount).forEach(keyValuePair => {
        if (keyValuePair[1] % 2 === 0) {
            for (let i = 0; i < keyValuePair[1]/2; i++) {
                result.push(keyValuePair[0]);
            }
        } else {
            if (keyValuePair[1] > largestOdd[1]) {
                largestOdd[0] = keyValuePair[0];
                largestOdd[1] = keyValuePair[1];
            }
        }
    })

    let firstHalfLength = result.length;
    
    // - add the letter with the largest odd count; 
    for (let i = 0; i < largestOdd[1]; i++) {
        result.push(largestOdd[0]);
    };

    // - reverse the original first half and add it to the result
    for (let i = firstHalfLength - 1; i >= 0; i--) {
        result.push(result[i]);
    }

    return result.join('');
}
console.log('longestPalindrome: ', longestPalindrome('abccccdd'));
console.log('longestPalindrome: ', longestPalindrome('a'));
console.log('longestPalindrome: ', longestPalindrome('abcb'));
console.log('longestPalindrome: ', longestPalindrome('ballloommoolllab'));
