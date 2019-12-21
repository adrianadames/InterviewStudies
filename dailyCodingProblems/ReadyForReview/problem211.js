/*
This problem was asked by Microsoft.

Given a string and a pattern, find the starting indices of 
all occurrences of the pattern in the string. For example, 
given the string "abracadabra" and the pattern "abr", you 
should return [0, 7].
*/

function findAllStartingIndices(str, pattern) {
    let str1 = str;
    let regex = new RegExp(pattern);
    let outputArr = [];
    let lengthToCut = 0;

    while (str1.match(regex)) {
    
        let regexReturn = str1.match(regex);
        //console.log('regexReturn: ', regexReturn);

        // the index of the first matching pattern in the string
        let matchIndex = regexReturn.index;
        //console.log('matchIndex: ', matchIndex);

        outputArr.push(matchIndex+lengthToCut);
        //console.log('outputArr: ', outputArr);

        // lengthToCut is the number of characters cut from string after the first match is found
        // this variable keeps track of how many characters we've cut from the original string as we keep slicing the string down
        // we add pattern.length because when we do the slice, we're slicing out the first occurance of the pattern and the pattern itself
        lengthToCut = lengthToCut+matchIndex+pattern.length;
        //console.log('lengthToCut: ', lengthToCut);

        // returns a new string that only includes the characters after the matching pattern
        str1 = str1.slice(regexReturn.index+pattern.length,str1.length);
        //console.log('str1: ', str1)
    }
    return outputArr
}


console.log(findAllStartingIndices('01234abracadabraabr123123123123321afaeffaefabrabr', 'abr')) // [ 5, 12, 16, 43, 46 ]
