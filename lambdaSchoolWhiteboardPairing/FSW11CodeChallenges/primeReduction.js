/*
Good morning! Consider the prime number 23.

If we sum the square of its digits we get: 2^2 + 3^2 = 13, then for 13: 1^2 + 3^2 = 10, and finally for 10: 1^2 + 0^2 = 1. We have reduced 23 to 1 by summing the square of it's digits, then summing the squares of the resulting sum's digits.

Similarly, if we start with prime number 7, the sequence is: 7-> 49-> 97-> 130-> 10-> 1.

When we have the prime number 37 however, the reduction will never happen because:
37->58->89->145->42->20->4->16->37, and at this point we made a circle (we are at 37 again).

Given a range of integers from a to b (but not including b, i.e. in mathematical notation: [a, b), e.g. [2, 8) would be the range 2, 3, 4, 5, 6, 7 ), primeReduction should return how many primes within that range are capable of being reduced to 1.

Note: If three digit or longer numbers are provided in the arguments to the primeReduction function, then square each of its digits. For example: 113 it will be 1^2 + 1^2 + 3^2 --> 13 and 13 will be 1^2 + 3^2, and so on.

Hint: Prime numbers within the range are not provided, so your function will need to check to see if a number within the range is a prime number.
*/

function primeReduction(a, b) {
  
}

