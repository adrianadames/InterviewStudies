/*
Smallest String

Write a function that takes two strings and returns the "smallest" string. 
If both strings are equal, you may return either string. Strings will only 
consist of lowercase letters and numbers: [a - z][0 - 9]. Letters earlier in
the alphabet are considered smaller. Consecutive digits in the string are 
considered a single number. Analyze the time and space complexity of your 
solution.

NOTE: You can consider numbers to be less than letters. (e.g. console.log("a">"10") = true)
NOTE: Code up solution for situations when numbers and letters are interleaved inside the string. Current
solution doesn't cover this situation

Examples:

    input: "a", "b"
    expected output: "a" since "a" comes before "b" alphabetically 

    input: "a1", "a2"
    expected output: "a1" since 1 comes before 2

    input: "a10", "a2"
    expected output: "a2" since 2 comes before 10 

*/

let smallestString = (str1,str2) => {
    //regex rules
    var regexLetters = /[a-z]/g;
    var regexNumbers = /[0-9]/g;
    
    // getting the letters part of the strings
    if (str1.match(regexLetters) !== null) {
        str1Letters = str1.match(regexLetters).join('');
    } else {str1Letters = null}; 
    console.log('str1Letters: ', str1Letters);

    if (str2.match(regexLetters) !== null) {
        str2Letters = str2.match(regexLetters).join('');
    } else {str2Letters = null}; 
    console.log('str2Letters: ',str2Letters);

    // getting the numbers part of the strings
    if (str1.match(regexNumbers) !== null) {
        str1Numbers = Number(str1.match(regexNumbers).join(''));
    } else {str1Numbers = null};
    console.log('str1Numbers: ',str1Numbers);

    if (str2.match(regexNumbers) !== null) {
        str2Numbers = Number(str2.match(regexNumbers).join(''));
    } else {str2Numbers = null};
    console.log('str2Numbers: ',str2Numbers);

    //comparing the letters and numbers parts of the string
    if (str1Letters.localeCompare(str2Letters) === 0) {
        if (Number(str1Numbers) === Number(str2Numbers)) {
            return str1
        } else if (Number(str1Numbers) > Number(str2Numbers)) {
            return str2
        } else {
            return str1
        }
    } else if (str1Letters.localeCompare(str2Letters) < 0) {
        return str1
    } else {
        return str2
    };
}

console.log(smallestString("a", "b"))
console.log(smallestString("aa", "ab"))
console.log(smallestString("aaa", "aa1"))
console.log(smallestString("123", "a"))
console.log(smallestString("abc", "abc1"))
console.log(smallestString("abc1", "abc10"))