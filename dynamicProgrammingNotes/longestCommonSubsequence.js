/*

Longest-common-subsequence problem

A subsequence of a given sequence is just the given sequence with zero or
more elements left out. Formally, given a sequence X = <x_1, x_2, ..., x_m>, 
another sequence Z = <z_1, z_2, ..., z_k> is a subsequence of X if there exists
a strictly increasing sequence <i_1, i_2, ..., i_k> of indices of X such that 
for all j = 1, 2, ..., k, we have x_i_j = z_j. For example, Z = <B, C, D, B> is a 
subsequence of X = <A, B, C, B, D, A, B> with corresponding index sequence <2, 3, 5, 7>. 

Given two sequences X and Y , we say that a sequence Z is a common subsequence
of X and Y if Z is a subsequence of both X and Y . For example, if
X = <A, B, C, B, D, A, B> and Y = <B, D, C, A, B, A>, the the sequence <B, C, A> is
a common subsequence of both X and Y . The sequence <B, C, A> is not a longest
common subsequence (LCS) of X and Y , however, since it has length 3 and the
sequence <B, C, B, A>, which is also common to both X and Y , has length 4. The
sequence <B, C, B, A> is an LCS of X and Y , as is the sequence <B, D, A, B>,
since X and Y have no common subsequence of length 5 or greater.

In the longest-common-subsequence problem, we are given two sequences
X = <x_1, x_2, ..., x_m>  and Y = <y_1, y_2, ..., y_n> and wish to find a maximum length
common subsequence of X and Y .
*/