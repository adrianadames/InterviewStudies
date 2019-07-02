// https://github.com/mbeaudru/modern-js-cheatsheet


// Scoping can be confusing because JavaScript looks like a C-family language

/*
Consider the following C program:

#include <stdio.h>
int main() {
	int x = 1;
	printf("%d, ", x); // 1
	if (1) {
		int x = 2;
		printf("%d, ", x); // 2
	}
    printf("%d\n", x); // 1
}

C has block-level scope. When control enters a block, new vars can be declared within that
scope without affecting outer scope. Not true in JS as shown by the following example: */

    var x = 1;
    console.log(x); //1
    if (true) {
        var x = 2;
        console.log(x); //2  
    }
    console.log(x); // 2 if var is used inside the block, 1 if let is used inside the bloxk

// This is because JS has function-level scope. Var has function level scope. Let has
// block level scope 


// 


// var vs let

// The last i is 3 at the end because we use var here, and when we use var
// inside a function it's hoisted to the top (i.e. the global scope). The var leaks
// to global scope. The value of i is 3 because i was incremented by 1 after i = 2, 
// and at that point the loop stopped. 
for (let i = 0; i <= 2; i += 1) {
    console.log('current: ', i); // current i: 0, 1, 2
}
console.log('last: ', i); // last i: 3

// let takes care of that problem for us. compare and contrast when we use var vs let in
// the function below: If we use var inside the if statement, it leaks to the global scope. 
let foo = true;
if  (foo) {
    // var bar = 'baz'; //var bar is in global scope, but val doesn't get assigned until here
    let bar = 'baz'; 
    console.log('bar1: ', bar); // outputs 'baz'
}

try {
    console.log('bar2: ',bar);
} catch (e) {
    console.log("bar doesn't exist");
}

// if we replace var with let in the for loop, we get a typeError saying i is not defined.
// This is good. It means that let localizes the scope of the variable to the block it's declared in. 



//Consider this example: 
var x = 'outer scope';
(function() {
    console.log(x); // undefined
    var x = 'inner scope';
}());

// the console log says undefined. Why? The var x is hoisted before console.log. If we used
// let we would get thrown an error saying that x is not defined. This behavior is dictated
// by the Temporal Dead Zone semantics which say, "constrained by the Temporal Dead Zone 
// semantics, meaning they will throw a ReferenceError when accessed (read/write) before being
// initialized, instead of returning undefined as a var-declared variable would". 

// The Temporal Dead Zone semantics can be very useful by providing error feedback to the developer
// instead of yielding unexpected results (as ES5 code may currently do) in cases where your code 
// may accidentally access uninitialized bindings. Just be aware of these semantics when using a 
// transpiler that does not enforce TDZ, as you may be writing broken code without knowing it.

//-http://jsrocks.org/2015/01/temporal-dead-zone-tdz-demystified
