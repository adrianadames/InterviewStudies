/*
(easy)

Problem Statement:
You are given a string s consisting of lowercase English letters. 
A duplicate removal consists of choosing two adjacent and equal 
letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been 
made.

Examples

Input: s = "abccba"
Output: ""
Explanation: First, we remove "cc" to get "abba". Then, we remove 
"bb" to get "aa". Finally, we remove "aa" to get an empty string.

Input: s = "foobar"
Output: "fbar"
*/