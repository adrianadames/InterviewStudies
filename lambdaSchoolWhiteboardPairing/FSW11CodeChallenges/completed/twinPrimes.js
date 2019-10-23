/*
A twin prime is a prime number that differs from another prime number by two. 
Write a function called isTwinPrime which takes an integer and returns true 
if it is a twin prime, or false if it is not.

Example:

5 is a prime, and 5 + 2 = 7, which is also a prime, so returns true.

9 is not a prime, and so does not need checking, so it returns false.

7 is a prime, but 7 + 2 = 9, which is not a prime. However, 7 - 2 = 5, 
which is a prime, so it returns true.

23 is a prime, but 23 + 2 is 25, which is not a prime.  23 - 2 is 21, 
which isn't a prime either, so 23 is not a twin prime.
*/

function isTwinPrime(int) {

    let isPrime = (int) => {
        let x = 2;
        while (int % x > 0) {
            let y = Math.floor(int/x);
            if (x >= y) {
                return true
            } else {
                x++;
            }
        }
        return false
    }

    if (isPrime(int) === true && (isPrime(int+2) === true || isPrime(int-2) === true)) {
        return true
    } else {
        return false
    }
}

console.log(isTwinPrime(5));
console.log(isTwinPrime(9));
console.log(isTwinPrime(7));
console.log(isTwinPrime(23));