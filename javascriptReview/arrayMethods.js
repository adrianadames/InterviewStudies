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
// comparing their sequences of UTF-16 code units values.

const arr5 = ['aaa', 'aa', 'a', 'bbb', 'bb', 'b', 'ccc', 'cc', 'c']
console.log(arr5.sort())

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

// ITERATION METHODS: Several methods take as arguments functions to be called back 
// while processing the array. When these methods are called, the length of the 
// array is sampled, and any element added beyond this length from within the callback
// is not visited. While the specific behavior of these methods in such cases is 
// well-defined, you should not rely upon it so as not to confuse others who might 
// read your code. If you must mutate the array, copy into a new array instead.