/*
Good morning! Complete the function so that it converts 
dash-delimited ("kebab" case) & underscore-delimited 
("snake" case) words into "camel" casing. The first word 
within the output should be capitalized only if the 
original word was capitalized.

toCamelCase("the-stealth-warrior")
// returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior")
// returns "TheStealthWarrior"
*/

// // Long way
// 1) split the string into an array
// 2) loop over the array so that when you encounter a dash or underscore
//    the following string char in the array is capitalized.
// 3) loop over the array and remove element if it's a dash or underscore
// 4) join the string chars in the array and return it

// // Shorter way 
// 1) split the string into an array
// 2) loop over the array. if you encounter a dash or underscore, at an index
//    splice(index, deleteCount = 1) and then array[index].toUpperCase();
// for example, if hello-world is the string, we splice at index = 5, 
// so that the array is now helloworld, and then we capitalize letter at
// index 5; 

function toCamelCase(str) {
    let stringArray = str.split("");
    // console.log('stringArray: ', stringArray);
    for (let i = 0; i < stringArray.length; i++) {
        // console.log('stringArray[i]: ', stringArray[i]);
        if (stringArray[i] === '_' || stringArray[i] === '-') {
            stringArray.splice(i,1);
            // console.log('stringArray: ', stringArray);
            stringArray[i] = stringArray[i].toUpperCase();
            // console.log('stringArray[i].toUpperCase(): ', stringArray[i].toUpperCase());
        }
    }
    return stringArray.join('');
}

console.log(toCamelCase("the-stealth-warrior"))
// returns "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior"))
// returns "TheStealthWarrior"
console.log(toCamelCase('hello-world-of-H'));
// returns 'helloWorldOfH'