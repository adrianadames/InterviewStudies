/*
(easy)

Problem Statement:
Given a string, determine the maximum number of times the 
word "balloon" can be formed using the characters from the 
string. Each character in the string can be used only once.

Example 1:
Input: "balloonballoon"
Expected Output: 2
Justification: The word "balloon" can be formed twice from the given string.

Example 2:
Input: "bbaall"
Expected Output: 0
Justification: The word "balloon" cannot be formed from the given string as 
we are missing the character 'o' twice.
*/

// time: O(n);
// space: O(1);
function maxNumBalloons(str) {
    if (str.length < 7) {
        return 0;
    }
    let balloonCharCount = {};
    'balloon'.split('').forEach(char => {
        if (!balloonCharCount[char]) {
            balloonCharCount[char] = 0;
        }
        balloonCharCount[char]++;
    });

    let charCount = {};

    for (let i = 0; i < str.length; i++) {
        if (!balloonCharCount[str[i]]) {
            continue;
        } else if (!charCount[str[i]]) {
            charCount[str[i]] = 0;
        }
        charCount[str[i]]++;
    }

    let result = Infinity;
    // console.log("charCount: ", charCount)
    for (key in balloonCharCount) {
        if (!charCount[key]) {
            return 0
        } else if (charCount[key]/balloonCharCount[key] < result) {
            result = charCount[key]/balloonCharCount[key];
        }
    }
    return Math.floor(result);
}

console.log('maxNumBalloons: ', maxNumBalloons('bbaallloooonn'));
console.log('maxNumBalloons: ', maxNumBalloons('bbaallloooonnl'));