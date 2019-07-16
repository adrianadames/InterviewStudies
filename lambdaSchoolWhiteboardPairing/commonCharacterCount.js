/*
2) Common Character Count: Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".
*/

// Off the top I'm thinking that, for each input string, we create an 
// object where the char is the key. If the objects corresponding to the two strings
// have the same key:value pair, then those characters are common to both strings. 

function commonCharCount(str1, str2) {
    let obj1 = {};
    let obj2 = {}

    let arr1 = str1.split('');
    let arr2 = str2.split('');

    // first I initialize the object
    for (let i = 0; i < arr1.length; i++) {
        obj1[arr1[i]] = 0
    }
    for (let i = 0; i < arr2.length; i++) {
        obj2[arr2[i]] = 0
    }
    // then I populate the object
    for (let i = 0; i < arr1.length; i++) {
        obj1[arr1[i]] += 1
    }
    for (let i = 0; i < arr2.length; i++) {
        obj2[arr2[i]] += 1
    }

    // then I check if there are common key:value pairs, and add up the 
    // values of those common key:value pairs
    let commonCharCount = 0;

    let obj1_entries = Object.entries(obj1);
    let obj2_entries = Object.entries(obj2);

    for (let i = 0; i < obj1_entries.length; i++) {
        for (let j = 0; j < obj2_entries.length; j++) {
            if (obj1_entries[i][0] === obj2_entries[j][0]) {
                commonCharCount += Math.min(obj1_entries[i][1], obj2_entries[j][1]);
            } else {
                continue
            }
        }
    }

    return commonCharCount
}

console.log(commonCharCount('adrianrrrrr', 'sumooarr'))