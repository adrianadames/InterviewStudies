/*
(med)

Given a collection of pairs where each pair contains two elements [a, b] and a < b, find the maximum length of a chain you can form using pairs.

A pair [a, b] can follow another pair [c, d] in the chain if b < c.

You can select pairs in any order and don't need to use all the given pairs.

Examples
Example 1:

Input: [[1,2], [3,4], [2,3]]
Expected Output: 2
Justification: The longest chain is [1,2] -> [3,4]. The chain [1,2] -> [2,3] is invalid because 2 is not smaller than 2.
*/