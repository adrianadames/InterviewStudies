/*
Good morning! Implement a method to perform basic 
string compression using the counts of repeated characters.

For example, the string  'aabcccccaaa' would become a2b1c5a3.

If the "compressed" string would not become smaller than the 
original string, then your method should return the original 
string.

You can assume the string has only uppercase and lowercase 
letters (a - z).
*/

function compressString(str) {
    let strArr = str.split('');
    console.log('strArr: ',strArr );
    let currentLetter = strArr[0];
    let currentLetterCount = 1;
    let strArrCompressed = [];
    strArrCompressed.push(currentLetter);

    for (let i = 1; i < strArr.length; i++) {
        if (currentLetter === strArr[i]) {
            currentLetterCount++;
        } else {
            strArrCompressed.push(currentLetterCount);
            currentLetter = strArr[i];
            strArrCompressed.push(currentLetter);
            currentLetterCount = 1;
        }
        if (i === strArr.length-1) {
            strArrCompressed.push(currentLetterCount);
        }
    }

    if (strArrCompressed.length < strArr.length) {
        return strArrCompressed.join('');
    } else {
        return str
    }
}

console.log(compressString('aaaaabbccdddeeffghhhi'));