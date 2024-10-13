/*
Given an integer array nums, return the leftmost middleIndex (i.e., the smallest amongst all the possible ones).

A middleIndex is an index where the sum of the numbers to the left of this index is equal to the sum of the numbers to the right of this index.

You can consider the left sum 0 for middleIndex == 0, and right sum 0 for middleIndex == nums.length - 1.

If no middleIndex exists in nums, return -1.

Examples
Example 1:
Input: nums = [1, 7, 3, 6, 5, 6]
Expected Output: 3
*/