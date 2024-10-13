/*
Problem 9:

Given a list of processes that can run in parallel. Each 
process is represented by a triplet [id, startTime, endTime].

A process’s exclusive time is the time spent to execute this 
process. Note that this does not include the time while multiple 
processes run simultaneously. Return the exclusive time of each 
process in the form [id, duration].

Example 1:
Input: [[1, 150, 300], [2, 100, 200], [3, 300, 350]]
Output: [[1, 100], [2, 50], [3, 50]]
*/