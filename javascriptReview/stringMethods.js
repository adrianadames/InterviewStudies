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

// The lastIndexOf() method returns the index within the calling String object 
// of the last occurrence of the specified value, searching backwards from 
// fromIndex. Returns -1 if the value is not found. The syntax is as
// follows: 
//             str.lastIndexOf(searchString, fromIndex(OPTIONAL)) 
// Where the fromIndex parameter is the index of the last character to be considered as the
// beginning of a match. The default value is +Infinity. If fromIndex >= str.length, the whole
// string is searched. If fromIndex < 0, it will behave as if the fromIndex = 0. 

// The string is searched backwards starting from the fromIndex parameter. 

console.log(str5.lastIndexOf('o'))
console.log(str5.lastIndexOf('g',3))
console.log(str5.lastIndexOf('g',4))

// The localeCompare() method returns a number indicating whether a reference 
// string comes before or after or is the same as the given string in sort order.
// The syntax is as follows: 
//             referenceStr.localeCompare(compareString[, locales[, options]])

console.log('a'.localeCompare('b')) //a is less than b
console.log('a'.localeCompare('A')) //a is less than A
console.log('b'.localeCompare('A')) //b is greater than A

// The match() method retrieves the result of matching a string against a regular 
// expression.

// SKIPPING FOR NOW

// The matchAll() method returns an iterator of all results matching a string against a 
// regular expression, including capturing groups.

// SKIPPING FOR NOW

// The padEnd() method pads the current string with a given string (repeated, if needed)
// so that the resulting string reaches a given length. The padding is applied from the 
// end (right) of the current string. The syntax is as follows: 
//             str.padEnd(targetLength [, padString(OPTIONAL)])
// where targetLength is the length of the resulting string once the current string
// has been padded. If the value is lower than the current string's length, the current
// string will be returned as is. And the OPTIONAL padString is the string to pad the string
// with. The default padString is a space, " ".

const str6 = 'bleep bloop blap';
console.log(str6.padEnd())
console.log(str6.padEnd(0,'hello'))
console.log(str6.padEnd(20,'hello'))
console.log(str6.padEnd(40,'hello'))
console.log(str6.padEnd(40)) // "bleep bloop blap                 "
console.log(str6.padEnd(40).length)
console.log(str6.padEnd(1)) //string returned as is because targetLength smaller than string length

// The padStart() method pads the current string with another string 
// (multiple times, if needed) until the resulting string reaches the given length. The 
// padding is applied from the start (left) of the current string. The syntax is as follows: 
//             str.padStart(targetLength [, padString(OPTIONAL)])
// The default padString is a space, " ".

console.log('a'.padStart(0))
console.log('a'.padStart(1))
console.log('a'.padStart(2))
console.log('a'.padStart(20))
console.log('a'.padStart(20).length)

// The repeat() method constructs and returns a new string which contains the specified 
// number of copies of the string on which it was called, concatenated together. The syntax
// is as follows: 
//             str.repeat(count)

console.log('adrian'.repeat(0))
console.log('adrian'.repeat(1))
console.log('adrian'.repeat(10))


// The replace() method returns a new string with some or all matches...

// SKIPPING FOR NOW

// The search() method executes a search for a match between a regular expression 
// and this String object.

// SKIPPING FOR NOW

// The slice() method extracts a section of a string and returns it as a new string, 
// without modifying the original string. The syntax is as follows: 
//             str.slice(beginIndex[, endIndex(OPTIONAL)])
// where beginIndex is the index at which to begin extraction. If negative, treated
// as strLength + (beginIndex), so if beginIndex = -3, start extraction at index
// strLength - 3. endIndex is the index before which to end extraction. So if you
// input endIndex = 7, the extraction will end at 6 (i.e. The character at this index
// will not be included.). If endIndex omitted, slice extracts to end of string.

const str7 = 'string7';
console.log(str7.slice())
console.log(str7.slice(0))
console.log(str7.slice(1))
console.log(str7.slice(-1))
console.log(str7.slice(0,3))
console.log(str7.slice(0,-1))

// The split() method splits a String object into an array of strings by separating
// the string into substrings, using a specified separator string to determine where
// to make each split. The syntax is as follows: 
//             str.split([separator(OPTIONAL)[, limit(OPTIONAL)]])
// where the seperator denotes where each split should occur and limit specifies 
// a limit to the number of splits to be found

console.log(str7.split())
console.log(str7.split(''))
console.log(str7.split('i'))
console.log(str7.split('', 1))

// The startsWith() method determines whether a string begins with the characters of 
// a specified string, returning true or false as appropriate. The syntax is as follows: 
//             str.startsWith(searchString[, position(OPTIONAL)])
// where position is where you begin searching (defaults to 0).

console.log('blah'.startsWith('b'))
console.log('blah'.startsWith('b',1))
console.log('blah'.startsWith('l',1))

// The substring() method returns the part of the string between the start and end indexes,
// or to the end of the string.The syntax is as follows: 
//             str.substring(indexStart[, indexEnd(OPTIONAL)])
// where indexEnd is the index of the first char to exclude from the returned substring. 

const str8 = 'Another one.'
console.log(str8.substring(0))
console.log(str8.substring(0,40))
console.log(str8.substring(0,4))

// The toLowerCase() method returns the calling string value converted to lower case.
// (the value will be converted to a string if it isn't one).

// SKIPPING 

// The toString() method returns a string representing the specified object. Overrides
// the Object.prototype.toString() method. For String objects, the toString() method 
// returns a string representation of the object and is the same as the 
// String.prototype.valueOf() method.

const stringObj = new String('foo');
console.log(stringObj)
console.log(stringObj.toString())

const n1 = null;
console.log(n1)
// console.log(n1.toString())   //<----- Cannot read property 'toString' of null
console.log(String(n1))

const n2 = 1/0;
console.log(n2.toString())
console.log(String(n2))

const n3 = undefined;
// console.log(n3.toString()) //<----- Cannot read property 'toString' of null
console.log(String(n3))

// The toUpperCase() method returns the calling string value converted to lower case.
// (the value will be converted to a string if it isn't one).

// SKIPPING 

// The trim() method removes whitespace from both ends of a string. Whitespace in this
// context is all the whitespace characters (space, tab, no-break space, etc.) and all
// the line terminator characters (LF, CR, etc.). I will include the separate 
// .trimLeft/.trimStart/.trimRight/.trimEnd methods with this one since they're so similar. 

const str9 = '        hello world                     ';
console.log(str9.length)
console.log(str9.trim())
console.log(str9.trim().length)

console.log(str9.trimLeft())
console.log(str9.trimLeft().length)

console.log(str9.trimRight())
console.log(str9.trimRight().length)

// The valueOf() method returns the primitive value of a String object. The valueOf() 
// method returns the primitive value of a String object. This method is usually 
// called internally by JavaScript and not explicitly in code.

const str10 = new String('string number 10');
console.log(str10)
console.log(str10.valueOf())

// The [@@iterator]() method returns a new Iterator object that iterates over the 
// code points of a String value, returning each code point as a String value.

// SKIPPING FOR NOW