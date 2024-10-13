/*
Problem Statement
You are given a list of daily temperatures. Your task is to return an answer array such that answer[i] is the number of days you would have to wait until a warmer temperature for each of the days. If there is no future day for which this is possible, put 0 instead.

Examples
Input: [45, 50, 40, 60, 55]
Expected Output: [1, 2, 1, 0, 0]
Justification: The next day after the first day is warmer (50 > 45). Two days after the second day, the temperature is warmer (60 > 50).. The next day after the third day is warmer (60 > 40)
*/