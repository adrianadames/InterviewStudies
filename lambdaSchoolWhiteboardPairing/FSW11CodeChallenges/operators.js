/*
Good morning! Implement four functions called multiply, divide, modulo, and negCheck.
The first three functions should multiply, divide, or return the remainder of two arguments.
Now for the tricky part: you can only use + and - to implement these functions.
Do not use the JavaScript operators for multiply, divide and modulo: * / %
Lastly, negCheck needs to indicate whether or not the resulting product, quotient and remainder would be positive or negative.
Use a Boolean value to indicate this.
You can use the not operator to toggle the Boolean value: !
Return an array with that Boolean value having converted num1 and num2 into positive integers.

Hint: divide should drop the remainder.

For example:

console.log(negCheck(12, 34)); //   <--- [ false, 12, 34 ]
console.log(negCheck(-12, 34)); //  <--- [ true, 12, 34 ]
console.log(negCheck(12, -34)); //  <--- [ true, 12, 34 ]
console.log(negCheck(-12, -34)); // <--- [ false, 12, 34 ]
console.log(multiply(3, 4)); //     <--- 12
console.log(multiply(-3, 4)); //    <--- -12
console.log(multiply(3, -4)); //    <--- -12
console.log(multiply(-3, -4)); //   <--- 12
console.log(divide(10, 3)); //      <--- 3
console.log(divide(-10, 3)); //     <--- -3
console.log(divide(10, -3)); //     <--- -3
console.log(divide(-10, -3)); //    <--- 3
console.log(modulo(10, 3)); //      <--- 1
console.log(modulo(-10, 3)); //     <--- -1
console.log(modulo(10, -3)); //     <--- 1
console.log(modulo(-10, -3)); //    <--- -1

*/