/*
(hard)

Problem Statement:
- Given a word, write a function to generate 
all of its unique generalized abbreviations.

Generalized abbreviation of a word can be generated 
by replacing each substring of the word by the count 
of characters in the substring. Take the example of 
“ab” which has four substrings: “”, “a”, “b”, and “ab”. 
After replacing these substrings in the actual word by 
the count of characters we get all the generalized 
abbreviations: “ab”, “1b”, “a1”, and “2”.

Example 1:
Input: "BAT"
Output: "BAT", "BA1", "B1T", "B2", "1AT", "1A1", "2T", "3"

Example 2:
Input: "code"
Output: "code", "cod1", "co1e", "co2", "c1de", "c1d1", 
"c2e", "c3", "1ode", "1od1", "1o1e", "1o2", "2de", 
"2d1", "3e", "4"
*/

// 

function uniqueGeneralAbbreviationsRecursive(str) {
    let allAbbrevs = [];

    // - count represents the number of letters we have replaced with their integer count
    function generateAbbrevs(index, abbrevInProgress, count) {
        if (index === str.length) {
            if (count !== 0) {
                abbrevInProgress += count; 
            }
            allAbbrevs.push(abbrevInProgress); 
        } else {
            // two options: replace letter with integer count or add letter and restart the count

            // 1) replace letter with integer count
            generateAbbrevs(index + 1, abbrevInProgress, count + 1);

            // 2) add letter and restart the count
            generateAbbrevs(index + 1, abbrevInProgress + str[index], 0);
        }
    }
    generateAbbrevs(0, '', 0);
    return allAbbrevs
};
console.log('uniqueGeneralAbbreviationsRecursive: ', uniqueGeneralAbbreviationsRecursive('BAT'));
console.log('uniqueGeneralAbbreviationsRecursive: ', uniqueGeneralAbbreviationsRecursive('code'));


function uniqueGeneralAbbreviationsIterative(str) {
    let allAbbrevs = [];
    let abbrevsInProgress = [];
    abbrevsInProgress.push({abbrev: '', count: 0, index: 0});

    while (abbrevsInProgress.length > 0) {
        let abbrevInProgress = abbrevsInProgress.shift();

        if (abbrevInProgress['index'] === str.length) {
            let finalAbbrev = abbrevInProgress['abbrev'];
            if (abbrevInProgress['count'] !== 0) {
                finalAbbrev += abbrevInProgress['count'];
            };
            allAbbrevs.push(finalAbbrev);
        } else {
            // two options: replace letter with integer count or add letter and restart the count
            // console.log('abbrevInProgress: ', abbrevInProgress)

            // 1) replace letter with integer count
            let abbrevInProgress1 = {...abbrevInProgress, count: abbrevInProgress['count'] + 1, index: abbrevInProgress['index'] + 1};

            // 2) add letter and restart count
            let abbrevInProgress2 = {abbrev: abbrevInProgress['abbrev'] + str[abbrevInProgress['index']], count: 0, index: abbrevInProgress['index'] + 1};

            abbrevsInProgress.push(abbrevInProgress1);
            abbrevsInProgress.push(abbrevInProgress2);
        };  
    };
    return allAbbrevs;
};
console.log('uniqueGeneralAbbreviationsIterative: ', uniqueGeneralAbbreviationsIterative('BAT'));
console.log('uniqueGeneralAbbreviationsIterative: ', uniqueGeneralAbbreviationsIterative('code'));