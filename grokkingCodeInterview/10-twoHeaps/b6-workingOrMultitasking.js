/*
You are given a shcedule of tasks to work on. Each tasks 
has a start and an end time [start, end] where end > start. 
Find out for the given schedule:

In what intervals you are working (at least 1 task ongoing)?
In what intervals you are multitasking (at least 2 tasks ongoing)?
In other words, find union and intersection of a list of intervals. 
The input is sorted by start time.

Example:
Input: [[1, 10], [2, 6], [9, 12], [14, 16], [16, 17]]

Output union: [[1, 12], [14, 17]]
Explanation: We just need to merge overlapping intervals

Output intersection: [[2, 6], [9, 10]]
*/