//Destructuring is a convenient way of creating new variables by extracting some
// values from data stored in objects or arrays.

const person = {
    firstName: "Nick",
    lastName: "Anderson",
    age: 35,
    sex: "M"
}

// // // // EX 1
// // // Without destructuring
// // const first = person.firstName;
// // const age = person.age;
// // const city = person.city || "Paris";

// // With destructuring:
// const { firstName: first, age, city = "Paris" } = person; // That's it !
// console.log(age) // 35 -- A new variable age is created and is equal to person.age
// console.log(first) // "Nick" -- A new variable first is created and is equal to person.firstName
// console.log(firstName)   // ReferenceError -- person.firstName exists BUT the new variable created is named first
// console.log(city) // "Paris" -- A new variable city is created and since person.city is undefined, city is equal to the default value provided "Paris".


// // // // EX 2
// //Destructuring is often used to destructure objects parameters in functions.

// // Without destructuring
// function joinFirstLastName1(person) {
//   const firstName = person.firstName;
//   const lastName = person.lastName;
//   return firstName + '-' + lastName;
// }

// // With destructuring:
// function joinFirstLastName2({firstName, lastName}) {
//     return firstName + '-' + lastName;
// } // here, the firstName and lastName paramaters are defined via the destructuring syntax

// console.log('1 ', joinFirstLastName1(person)); // "Nick-Anderson"
// console.log('2 ', joinFirstLastName1(person)); // "Nick-Anderson"


// // // // EX 3
// // Destructuring is even more pleasant to use with arrow functions:
// const joinFirstLastName3 = ({ firstName, lastName }) => firstName + '-' + lastName;
// console.log('3 ', joinFirstLastName1(person)); // "Nick-Anderson"



//// Destructuring arrays
//Let's consider the following array:
const myArray = ["a", "b", "c"];

//Without destructuring
const x = myArray[0];
const y = myArray[1];

//With destructuring
const [x, y] = myArray; // That's it !

console.log(x) // "a"
console.log(y) // "b"