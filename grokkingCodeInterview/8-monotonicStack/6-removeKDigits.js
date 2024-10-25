/*
(hard)

Given string num representing a non-negative integer num, and an 
integer k, return the smallest possible integer after removing k 
digits from num.

Example 1:
Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

Example 2:
Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.

Example 3:
Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.

Constraints:
1 <= k <= num.length <= 105
num consists of only digits.
num does not have any leading zeros except for the zero itself.
*/

function removeKDigits(num, k) {
    let stack = [];
    let count = 0;
    
    for (let i = 0; i < num.length; i++) {
        while (stack.length > 0 && Number(num[i]) < stack[stack.length -1] && count < k) {
            stack.pop();
            count++;
        } 
        stack.push(Number(num[i]));
    }

    while (count < k) {
        stack.pop();
        count++;
    }


    let leadingZero = true; 
    let result = '';

    for (let i = 0; i < stack.length; i++) {
        if (stack[i] === 0) {
            if (leadingZero === true) {
                continue;
            } else {
                result += stack[i].toString();
            }
        } else {
            leadingZero = false;
            result += stack[i].toString();
        }
    }

    return result.length ? result : '0';
}

console.log('removeKDigits: ', removeKDigits("1432219",3));
// console.log('removeKDigits: ', removeKDigits("10200",1));
// console.log('removeKDigits: ', removeKDigits("10",2))

// console.log('removeKDigits: ', removeKDigits("1234567",3))

// Test Case 1: Numbers where larger digits come after smaller ones
console.log(removeKDigits("112", 1));  // Should be "11" but might output "12"

// Test Case 2: Strictly increasing sequence
console.log(removeKDigits("1234", 2));  // Should be "12" but might keep "34"

// Test Case 3: Multiple leading zeros
console.log(removeKDigits("10001", 1));  // Should be "1"

// Test Case 4: All zeros except one
console.log(removeKDigits("10000", 1));  // Should be "0"

// Test Case 5: When k equals length
console.log(removeKDigits("123", 3));  // Should be "0"
