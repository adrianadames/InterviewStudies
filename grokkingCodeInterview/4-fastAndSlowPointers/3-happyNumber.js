/*
(medium)

Problem Statement 
-Any number will be called a happy number if, after repeatedly 
replacing it with a number equal to the sum of the square of 
all of its digits, leads us to number ‘1’. All other (not-happy) 
numbers will never reach ‘1’. Instead, they will be stuck in a 
cycle of numbers which does not include ‘1’. Determine if the 
number 'num' is a happy number. 

Example 1:
    Input: 23   
    Output: true (23 is a happy number)  
Example 2:
    Input: 12   
    Output: false (12 is not a happy number)  
*/

// Strategy
// -use fast and slow pointer strategy
// -start both at the head
// -for the slow node, only move one step at a time (i.e. execution of sum
// of digits squared algorithm once)
// -for the fast node, move two steps at a time (i.e. execution of sum of digits 
// squared algorithm two times)
// -when slow pointer = fast pointer, we have detected our cycle
// -if at this point, the pointers equal 1, it's a happy number; else it's not 