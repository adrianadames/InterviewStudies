// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

// CREATING A REGULAR EXPRESSION - TWO WAYS

// 1) Using a regular expression literal, which consists of a pattern enclosed between slashes,
// as follows:
//              var re = /ab+c/;
// Regular expression literals provide compilation of the regular expression when the script
// is loaded. If the regular expression remains constant, using this can improve performance.
// 
// 2) Calling the constructor function of the RegExp object, as follows:
//              var re = new RegExp('ab+c');
// Using the constructor function provides runtime compilation of the regular expression. Use
// the constructor function when you know the regular expression pattern will be changing, or
// you don't know the pattern and are getting it from another source, such as user input.
//

// WRITING A REGULAR EXPRESSION PATTERN

// Simple patterns are constructed of characters for which you want to find a direct match. 
// For example, the pattern /abc/ matches character combinations in strings only when exactly
// the characters 'abc' occur together and in that order.  

// When the search for a match requires something more than a direct match, such as finding 
// one or more b's, or finding white space, you can include special characters in the pattern.
// For example, to match a single 'a' followed by zero or more 'b's followed by 'c', you'd use
// the pattern /ab*c/: the * after 'b' means "0 or more occurrences of the preceding item." In
// the string "cbbabbbbcdebc," the pattern matches the substring 'abbbbc'.



// // THE BELOW IS SCRATCH WORK FOR MY LambdaMUD project. Might use these as examples later. 

let move1 = '/m';
let move2 = '/move';

let say1 = '/s';
let say2 = '/say';

// the ^ character in regex means that the regex matches the beginning of the input

let move1Regex= /abc/;
let move1RegexAlternative = new RegExp('^abc');

let str1 = 'abcdefg';
let str2 = 'addabcad';

console.log(move1Regex.test(str1))
console.log(move1Regex.test(str2))

console.log(move1RegexAlternative.test(str1))
console.log(move1RegexAlternative.test(str2))

let exMoveCommand1 = '/m north';
let exMoveCommand2 = '/move south';

// (?<=y)x
// 
let moveRegex1 = new RegExp('(?<=\/m |\/move ).*');
let moveRegex2 = /(?<=\/m |\/move ).*/;

console.log(exMoveCommand1.match(moveRegex1));
console.log(exMoveCommand1.match(moveRegex2));







