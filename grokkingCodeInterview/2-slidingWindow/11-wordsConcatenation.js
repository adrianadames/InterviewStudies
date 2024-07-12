/*
(hard)
Problem - Words Concatenation 

Given a string and a list of words, find all the starting indices of 
substrings in the given string that are a concatenation of all the 
given words exactly once without any overlapping of words. It is given 
that all words are of the same length.

Example 1:

Input: String="catfoxcat", Words=["cat", "fox"]
Output: [0, 3]
Explanation: The two substring containing both the words are "catfox" & "foxcat".

Example 2:

Input: String="catcatfoxfox", Words=["cat", "fox"]
Output: [3]
Explanation: The only substring containing both the words is "catfox".
*/

// - Find all substrings in str that are a concatenation of the words in the wordsArr.
// - It is given that all words are of the same length.

function wordsConcatenation(str, wordsArr) {
 // - all of the words are the same length; hmmmmm; 
 // - that means if we have something like a window, and the size of the window
 // is the same size of the words in the wordsArr, then what we can do is, 
 // we can create a tracker that holds the words in the window in a dictionary
 // - we first have to increment the position of window until the beginning of the 
 // window has a match with any of the words in the wordsArr; 
 // - at that point, we check if the entries and counts in the wordsArr tracker
 // are equal to that in the windowTracker; if so, add that starting index to the 
 // indicesArr, and advance the window the size of each word; and check once again

 let wordsArrTracker = {};
 for (let i = 0; i < wordsArr.length; i++) {
    if (!wordsArrTracker[wordsArr[i]]) {
        wordsArrTracker[wordsArr[i]]=0;
    }
    wordsArrTracker[wordsArr[i]]++;
 }

 let wordLength = wordsArr[0].length;
 let numberOfWords = wordsArr.length;
 let wordsInWindowTracker = {};
 let windowStart = 0; 
 let windowEnd = 0;
 let indicesArr = [];

 while (windowEnd < str.length) {

    // - if the beginning of the substring matches one of the words in wordsArrTracker, 
    // then we can check if this substring is a concatenation of all the words in the wordsArrTracker
    if (str.slice(windowStart, windowStart +wordLength) in wordsArrTracker) {
        for (let i = windowStart; i < windowStart + wordLength* numberOfWords; i += wordLength) {
            if (!wordsInWindowTracker[str.slice(i, i + wordLength)]) {
                wordsInWindowTracker[str.slice(i, i + wordLength)] = 0;
            }
            wordsInWindowTracker[str.slice(i, i + wordLength)]++;
            
        }
        // - at this point, all words in the window are in the windowTracker
        // console.log('wordsInWindowTracker: ', wordsInWindowTracker);

        // - we then need to see if the count is identical to that in the wordsArrTracker
        let matchFound = true;
        for (let key in wordsArrTracker) {
            if (!wordsInWindowTracker[key] || wordsInWindowTracker[key] !== wordsArrTracker[key]) {
                matchFound = false;
            }
        }
        if (matchFound === true) {
            indicesArr.push(windowStart);
        }

        // - we then need to advance windowStart and windowEnd 
        wordsInWindowTracker = {};
        windowStart += wordLength;
        windowEnd += wordLength;
    } else {
        windowStart++;
        windowEnd++;
    }
 }
 return indicesArr
}

// console.log('wordsConcatenation(str, wordsArr): ', wordsConcatenation("catfoxcat", ["cat", "fox"]));
// console.log('wordsConcatenation(str, wordsArr): ', wordsConcatenation("catcatfoxfox", ["cat", "fox"]));
// console.log('wordsConcatenation(str, wordsArr): ', wordsConcatenation("adaffadpingpingpongpingsdfdpongpingsdf", ["ping", "pong"]));
// console.log('wordsConcatenation(str, wordsArr): ', wordsConcatenation("wordgoodgoodgoodbestword", ["word", "good", "best", "word"]));