// Arrays are list-like objects whose prototype has methods to perform traversal
// and mutation operations. Neither the length of a JavaScript array nor the types
// of its elements are fixed. 

// MUTATOR METHODS: These methods modify the array: 

// The copyWithin() method shallow copies part of an array to another location in the
// same array and returns it without modifying its length. The syntax is as follows: 
//             arr.copyWithin(target[, start(OPTIONAL)[, end(OPTIONAL)]])
// where the target is the index that you want to copy to. If negative, it will be 
// counted from the end. If target is greater than the length, nothing will be copied. 
// If target positioned after start, the copied sequence will be trimmed to fit 
// arr.length. The start parameter is the index from which to start copying elements
// (default is zero) and the end parameter is when to end the copying (default is the end). 

// The copyWithin works like C and C++'s memmove, and is a high-performance method to 
// shift the data of an Array. This especially applies to the TypedArray method of the 
// same name. The sequence is copied and pasted as one operation; pasted sequence will 
// have the copied values even when the copy and paste region overlap.

const arr1 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr1.copyWithin(2))
console.log(arr1)

// The fill() method fills (modifies) all the elements of an array from a start index 
// (default zero) to an end index (default array length) with a static value. It returns
// the modified array. The syntax is as follows: 
//             arr.fill(value[, start (OPTIONAL)[, end(OPTIONAL)]])
// 

const arr2 = [];
console.log(arr2.fill('asdasd'))

const arr3 = ['a', 'b', 'c', 'd'];
console.log(arr3.fill('i'))
console.log(arr3)

console.log(arr3.fill('p', 0,2))
console.log(arr3.fill())

// The pop() method removes the last element from an array and returns that element. 
// This method changes the length of the array. Returns the removed element from the array. 

const arr4 = [1,2,3]
console.log(arr4.pop())
console.log(arr4)

// The push() method adds one or more elements to the end of an array and returns the
// new length of the array.

console.log(arr4.push(4))
console.log(arr4)

// The reverse() method reverses an array in place. The first array element becomes the 
// last, and the last array element becomes the first.

console.log(arr4.reverse())
console.log(arr4)

// The shift() method removes the first element from an array and returns that removed 
// element. This method changes the length of the array.

console.log(arr4.shift())
console.log(arr4)

// The sort() method sorts the elements of an array in place and returns the sorted array. 
// The default sort order is built upon converting the elements into strings, then 
// comparing their sequences of UTF-16 code units values. The syntax is as follows: 
//             arr.sort([compareFunction(OPTIONAL)])
// where compareFunction specifies a function that defines the sort order. If omitted, the array 
// elements are converted to strings, then sorted according to each character's 
// Unicode code point value. If compareFunction supplied, the elements are sorted according
// to the return value of the compareFunction. If a and b are two elements being compared, then:
//      -if compareFunction(a,b) < 0, sort a to an index lower than b (i.e. a comes before b)
//      -if compareFunction(a,b) = 0, leave a and b unchanged with respect to each other, but sorted
//      with restpect to all different elements
//      -if compareFunction(a,b) > 0, sort b to an index lower than a (i.e. b comes before a)



const arr5 = ['aaa', 'aa', 'a', 'bbb', 'bb', 'b', 'ccc', 'cc', 'c']
console.log(arr5.sort())

let compareFunction1 = (a,b) => {
    return a - b
}
const arr51 = [0, 3, 5, 6, 1, 191, 34, 12];
console.log(arr51.sort(compareFunction1))


// The splice() method changes the contents of an array by removing or replacing existing 
// elements and/or adding new elements in place. The syntax is as follows: 
//       var arrDeletedItems = array.splice(start[, deleteCount(OPTIONAL)[, item1[, item2[, ...](OPTIONAL)]]])
// where start is the index where to start changing the array, deleteCount is the number
// of elements in the array to remove from start (if ommitted, then all elements from start
// to end will be deleted). If 0, no elements removed (in which case you should specify array
// item to add). The parameters item1, item2, ... are the elements to add to the array beginning
// from start. If not specified, splice will only remove elements from the array. 

// This method returns an array containing the deleted elements

console.log(arr5.splice(0,1))
console.log(arr5)
console.log(arr5.splice(0,1,'x', 'y','z'))
console.log(arr5)
console.log(arr5.splice(0,0,'q','r','s'))
console.log(arr5)
console.log(arr5.splice(5))
console.log(arr5)
console.log(arr5.splice(1,0,'p','2','3','4','5'))
console.log(arr5)

// The unshift() method adds one or more elements to the beginning of an array and
// returns the new length of the array. 

// Please note that, if multiple elements are passed as parameters, they're inserted
// in chunk at the beginning of the object, in the exact same order they were passed
// as parameters. Hence, calling unshift with n arguments once, or calling it n times
// with 1 argument (with a loop, for example), don't yield the same results.

const arr6 = ['a','b','c'];
console.log(arr6.unshift('x'))
console.log(arr6)
console.log(arr6.unshift('x', 'y', 'z'))
console.log(arr6)


// ACCESSOR METHODS: These methods do not modify the array and return some 
// representation of the array.

// The concat() method is used to merge two or more arrays. This method does
// not change the existing arrays, but instead returns a new array.

// If all valueN parameters are omitted, concat returns a shallow copy of 
// the existing array on which it is called.

const arr7 = ['a','b','c']
const arr8 = ['x', 'y', 'z']
console.log(arr7.concat())
console.log(arr7.concat(arr8))
console.log(arr7.concat(1,2,3,4,5))

// The includes() method determines whether an array includes a certain value
// among its entries, returning true or false as appropriate. The syntax is as 
// follows: 
//             arr.includes(valueToFind[, fromIndex(OPTIONAL)])
// where fromIndex is the index at which to start searching for the value. Defaults
// to zero if ommitted. 

console.log(arr7.includes('a'))
console.log(arr7.includes('d'))
console.log(arr7.includes('a',1))

// The indexOf() method returns the first index at which a given element can be 
// found in the array, or -1 if it is not present. The syntax is as follows: 
//             arr.indexOf(searchElement[, fromIndex(OPTIONAL)])

const arr9 = ['apple', 'orange', 'cucumber'];
console.log(arr9.indexOf('apple'))
console.log(arr9.indexOf('apple',1))

// The join() method creates and returns a new string by concatenating all of the
// elements in an array (or an array-like object), separated by commas or a specified
// separator string. If the array has only one item, then that item will be returned 
// without using the separator. The syntax is as follows:
//             arr.join([separator(OPTIONAL)])
// where the seperator parameter specifies the string to seperate each pair of adjacent
// elements of the array. If ommitted, the default will be a comma ','. 

console.log(arr9.join())
console.log(arr9.join(''))
console.log(arr9.join(' seperator '))

// The lastIndexOf() method returns the last index at which a given element can be found
// in the array, or -1 if it is not present. The array is searched backwards, starting at
// fromIndex. The syntax is as follows:
//             arr.lastIndexOf(searchElement[, fromIndex(OPTIONAL)])
// where the default for fromIndex is arr.length-1 (i.e. whole array searched). Note that
// even if fromIndex is negative, the array is still searched from the back to the front
const arr10 = ['a', 'b', 'c', 'd', 'e', 'a', 'b']
console.log(arr10.lastIndexOf('a'))
console.log(arr10.lastIndexOf('a',4))
console.log(arr10.lastIndexOf('ab'))

// The slice() method returns a shallow copy of a portion of an array into a new array 
// object selected from begin to end (end not included). The original array will not be
// modified. The syntax is as follows:
//             arr.slice([begin(OPTIONAL)[, end(OPTIONAL)]])

console.log(arr10.slice())
console.log(arr10.slice(1))
console.log(arr10.slice(0,1))

// The toString() method returns a string representing the specified array and its elements.

const arr11 = [1, 2, 'a', '1a'];
const arr12 = arr11.toString();
console.log(arr12)
console.log(arr12[0])
console.log(arr12[1])


// ITERATION METHODS: Several methods take as arguments functions to be called back 
// while processing the array. When these methods are called, the length of the 
// array is sampled, and any element added beyond this length from within the callback
// is not visited. While the specific behavior of these methods in such cases is 
// well-defined, you should not rely upon it so as not to confuse others who might 
// read your code. If you must mutate the array, copy into a new array instead.

// The entries() method returns a new Array Iterator object that contains the key/value
// pairs for each index in the array.

const arr13 = ['square', 'circle', 'rectangle', 'hexagon', 'octagon'];
const iterator1 = arr13.entries()
console.log(iterator1)

for (const [index,element] of arr13.entries()) {
    console.log(index,element)
}

for (const [i,e] of iterator1) {
    console.log(i,e)
}

const iterator2 = arr13.entries()
for (let e of iterator2) {
    console.log(e);
}


// The every() method tests whether all elements in the array pass the test implemented
// by the provided function. It returns a Boolean value. The syntax is as follows: 
//             arr.every(callback(element[, index(OPTIONAL)[, array(OPTIONAL)]])[, thisArg(OPTIONAL)])
// where the callback is the function to test for each element and where the callback takes three
// (OPTIONAL) arguments: element, the current element being processed, the index of the current element
// being processed, and the array every was called upon. The thisArg param is the value to use as this
// when executing callback. 

const cb = (element, index, array) => {return element>7};
const cb1 = (element) => {return element>7};
const arr14 = [1,2,3];
const arr15 = [11,12,13];

console.log(arr14.every(cb))
console.log(arr15.every(cb))
console.log(arr14.every(cb1))
console.log(arr15.every(cb1))

console.log([12, 5, 8, 130, 44].every(x => x >= 10));
console.log([12, 54, 18, 130, 44].every(x => x >= 10));

// The filter() method creates a new array with all elements that pass the test implemented by 
// the provided function. The syntax is as follows: 
//     var newArray = arr.filter(callback(element[, index(OPTIONAL)[, array(OPTIONAL)]])[, thisArg(OPTIONAL)])

const arr16 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let checkIfEven = (element) => {return element % 2 === 0}

console.log(arr16.filter(checkIfEven))

// The find() method returns the value of the first element in the array that satisfies 
// the provided testing function. Otherwise undefined is returned. See also the findIndex()
// method, which returns the index of a found element in the array instead of its value.
// The syntax is as follows: 
//             arr.find(callback(element[, index[, array]])[, thisArg])
// If no values in array pass the test, undefined is returned. 

let checkIfOdd = (element, index, array) => {return element % 2 !== 0}
console.log(arr16.find(checkIfOdd))

// The findIndex() method returns the index of the first element in the array that 
// satisfies the provided testing function. Otherwise, it returns -1, indicating that
// no element passed the test. Same syntaxt as find() method. 

console.log(arr16.findIndex(checkIfOdd))

// The forEach() method executes a provided function once for each array element.
// The syntax is as follows: 
//             arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);
// forEach() executes the callback function once for each array element; unlike map()
// or reduce() it always returns the value undefined and is not chainable. The typical
// use case is to execute side effects at the end of a chain.

// ******* NEED MORE REVIEW TIME FOR THIS METHOD *************

const arr17 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squareRoot = (element) => {return Math.sqrt(element)}
console.log(squareRoot(16.3))
for (let i = 0; i < arr17.length;i++) {
    console.log(squareRoot(arr17[i]))
}
console.log(arr17.forEach(squareRoot))


// The keys() method returns a new Array Iterator object that contains the keys for 
// each index in the array.

const arr18 = ['apple', 'pear', 'orange', 1, 2, 88];
let iterator3 = arr18.keys();
console.log(iterator3)
for (let key of iterator3) {
    console.log(key)
}

// The map() method creates a new array with the results of calling a provided 
// function on every element in the calling array. // The syntax is as follows: 
//      var new_array = arr.map(function callback(currentValue[, index[, array]]) {
//            // Return element for new_array
//      }[, thisArg])

const arr19 = [1,2,3,4,5];
console.log(arr19.map(squareRoot))
console.log(arr19.map(x => {return x*2}))

// The reduce() method executes a reducer function (that you provide) on each 
// element of the array, resulting in a single output value. The syntax is as follows:
//     arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
// where the accumulator accumulates the callback's return values, 

// ******* NEED MORE REVIEW TIME FOR THIS METHOD *************
console.log(arr19.reduce((element, accumulator, currentValue, index) => {return element + accumulator},0))

// The reduceRight() method applies a function against an accumulator and each value 
// of the array (from right-to-left) to reduce it to a single value.

// SKIPPING FOR NOW

// The some() method tests whether at least one element in the array passes the test 
// implemented by the provided function. It returns a Boolean value. The syntax is as follows:
//          arr.some(callback(element[, index[, array]])[, thisArg])

const arr20 = [21,23,25];
const arr21 = [2,4,6]
console.log(arr20.some(checkIfEven))
console.log(arr21.some(checkIfEven))

// The values() method returns a new Array Iterator object that contains the values 
// for each index in the array.

const iterator4 = arr20.values();
console.log(iterator4)

for (const value of iterator4) {
    console.log(value)
}