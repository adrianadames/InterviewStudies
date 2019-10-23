/*
Write a function balancedBrackets that accepts a string and returns true ifthe parentheses are balanced and false otherwise.

Example:
 balancedBrackets('(');  // false
  balancedBrackets('()'); // true
  balancedBrackets(')(');  // false
  balancedBrackets('(())');  // true

Step 2:  make the solution work for all types of brackets

Example:
balancedBrackets('[](){}'); // true
 balancedBrackets('[({})]');   // true
 balancedBrackets('[(]{)}'); // false

Step 3: ignore other characters

balancedBrackets(' const obj  = { x: someFunction() }'); // true

NOTE: To make this problem a little bit harder, also take into consideration the inclusion of || as 
one of the possible pairs of balanced brackets. Unlike the other brackets, the same symbol represents 
the closing and opening bracket. 

Basically, the problem statement is, given a string, check if the brackets are matching. 
*/