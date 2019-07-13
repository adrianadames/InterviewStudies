// I googled most common javascript object methods and came accross three articles
// that I will use as a reference from which to select the object methods I'll review. These
// three articles were the only ones in the first 4 pages of the google search for "most 
// common javascript object methods" that seemed to have what I was looking for.  

// https://medium.com/youstart-labs/javascript-object-methods-every-developer-should-know-c68c132a658
// https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript
// https://codeburst.io/useful-javascript-array-and-object-methods-6c7971d93230

// According to the articles above, the methods below are the most common/important/relevant(?) 
// object methods. The number of stars next to each method corresponds to the number of the
// above articles that the method is mentioned in. 

// Object.assign()***
// Object.create()**
// Object.entries()***
// Object.freeze()***
// Object.fromEntries()
// Object.getPrototypeOf()*
// Object.is()
// Object.keys()***
// Object.seal()**
// Object.values()***


// The Object.assign() method is used to copy the values of all enumerable own properties from one
// or more source objects to a target object. It will return the target object. The syntax is as 
// follows: 
//              Object.assign(target, ...sources)
// where target is the target object and sources are the source object(s). Properties in the target 
// object will be overwritten by properties in the sources if they have the same key. Later sources'
// properties will similarly overwrite earlier ones.

let obj1 = {a:1,b:2,c:3};
let obj2 = {c:4,d:5};

Object.assign(obj1, obj2)
console.log(obj1)

let obj_copy1 = Object.assign({}, obj1)
console.log(obj_copy1)

