// .chartAt() returns a new string consisting of the single UTF-16 code
// unit located at the specified offset into the string

const str1 = 'beep boop bop 0';

// console.log(str1.chartAt(4))
console.log(str1)

console.log(str1.charAt(1))
console.log(str1.charAt()) //without input, defaults to return char at 0 index


// The charCodeAt() method returns an integer between 0 and 65535 representing
// the UTF-16 code unit at the given index.

console.log(str1.charCodeAt(1))

console.log(str1.charCodeAt(str1.length-1))


// The concat() method concatenates the string arguments to the calling string
// and returns a new string. If arguments not of type string, they're converted
// to type string before concatenation. 

// Performance note: It is strongly recommended that the assignment operators 
// (+, +=) are used instead of the concat() method. According to this 
// performance test, the assignment operators are several times faster.

console.log(str1.concat('string to concatenate'))
console.log(str1.concat('1', '2', '3', ' ', '', 'c', '', 'C'))

const str2 = 'string2'
let str3 = str1;
str3+= str2;
console.log(str3)


// The includes() method determines whether one string may be found within another 
// string, returning true or false as appropriate. The syntax is as follows: 
//
//      str.includes(searchString, positionToStartSearching(OPTIONAL))

const str4 = 'Hello. My name is Adrian.'
console.log(str4.includes('hello'))
console.log(str4.includes('Hello'))
console.log(str4.includes('. My'))
console.log(str4.includes('Hello',1))
console.log(str4.includes('Adrian',10))
console.log(str4.includes('Adrian',21))


// The endsWith() method determines whether a string ends with the characters of 
// a specified string, returning true or false as appropriate. The syntax is as
// follows: 
//             str.endsWith(searchString, length(OPTIONAL)) 
// With the length, the method will consider the length input as the last char
// in the string. 

console.log(str4.endsWith('Adrian.'))
console.log(str4.endsWith('Adrian.',21))
console.log(str4[21],str4[22])
console.log(str4.endsWith('Hello',5));
console.log(str4.endsWith('.', str4.length))
console.log(str4.endsWith('H', 1))

// The indexOf() method returns the index within the calling String object 
// of the first occurrence of the specified value, starting the search at 
// fromIndex. Returns -1 if the value is not found. The syntax is as
// follows: 
//             str.indexOf(searchString, fromIndex(OPTIONAL)) 
// Where the search will start from the fromIndex parameter. If string
// not in string, returns -1. -1 or 0 doesn't evaluate to true or false,
// so to check if other string exists, make sure to check that the 
// equality checks if the returned value is -1 and not false

let str5 = 'slingshot'
console.log(str5.indexOf('shot.'))
console.log(str5.indexOf('shot'))
console.log(str5[5])
console.log(str5.indexOf('s'))
console.log(str5.indexOf('s',1))
console.log(str5.indexOf('slingshot')!== -1)
console.log(str5.indexOf('slingshots')!== -1) //returns true if equality equals false instead
