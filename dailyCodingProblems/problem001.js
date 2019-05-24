/* 
This problem was recently asked by Google: 
    Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
    For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17. (Bonus: Can you do this in one pass?) 
*/

// ********FIRST ATTEMPT ***************
function twoElementSumCheck1(arrayOfNumbers, k) {
    for (let n = 0; n < arrayOfNumbers.length; n++) {
        for (let m = 0; m < arrayOfNumbers.length; m++) {
            if (n !== m && arrayOfNumbers[n]+arrayOfNumbers[m] === k) {
                return true
            }
        }
    }
    return false
}

// ******** SECOND ATTEMPT (one-pass-attempt) ********
function twoElementSumCheck2(arrayOfNumbers, k) {
    if (arrayOfNumbers.filter((number) => {
        return arrayOfNumbers.includes(k-number)
    }).length) {
        return true
    }
    else {
        return false
    }
}

// ******* TESTS *********
//ex1
const list1 = [10, 15, 3, 14];
const k1= 17;
console.log('ex1');
console.log('check1: ', twoElementSumCheck1(list1, k1));
console.log('check2: ', twoElementSumCheck2(list1, k1));

//ex2
const list2 = [-1, -2, 4, 8, -83.2, Math.sqrt(3), Math.sqrt(16), 87.2];
const k2= 4;
console.log('ex2')
console.log('check1: ', twoElementSumCheck1(list2, k2));
console.log('check2: ', twoElementSumCheck2(list2, k2));


// ******* ADDITIONAL QUESTIONS and NOTES ********* 
/*
QUESTIONS
1) Am I missing any edge cases?
- I don't think so. This should work fine with negative numbers, floats, irrational numbers. 
    - What about imaginary numbers?

2) Runtime complexity? 
- Attempt1: O(n*m)
- Attempt2: ?

3) Spacetime complexity (Attempt1)?
- Attempt1: O(1)
- Attempt2: ?

NOTES:
-need to learn the runtime and spacetime complexities of the map, filter, reduce, and includes array methods 
-need to get more comfortable/faster using map, filter, reduce methods

*/