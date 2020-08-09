/*
(medium)
Problem Statement:

Given a list of intervals, merge all the overlapping intervals to 
produce a list that has only mutually exclusive intervals.

ex1: 
Intervals: [[1,4], [2,5], [7,9]]
Output: [[1,5], [7,9]]
Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into 
one [1,5].

ex2:
Intervals: [[6,7], [2,4], [5,9]]
Output: [[2,4], [5,9]]
Explanation: Since the intervals [6,7] and [5,9] overlap, we merged them into one [5,9].

ex3:
Intervals: [[1,4], [2,6], [3,5]]
Output: [[1,6]]
Explanation: Since all the given intervals overlap, we merged them into one.
*/

// function mergeIntervals(arr) {
//     let intervalsArr = arr;

//     for (let i = 0; i< intervalsArr.length; i++) {
//         let intervalA = intervalsArr[i];
//         let intervalB = intervalsArr[i+1];

//         // console.log('intervalB = ', intervalB)

//         if (intervalA[0] <= intervalB[0]) {
//             //check if the end of interval A ends after the start of interval B

//             if (intervalA[1] >= intervalB[1]) {
//                 intervalsArr.splice(intervalsArr.indexOf(intervalB), 1);
//             } else {
//                 intervalA[1] = intervalB[1];
//                 intervalsArr.splice(intervalsArr.indexOf(intervalB), 1);
//             }
//         }

//         if (intervalB[0] < intervalA[0]) {
//             //check if the end of interval B ends after the start of interval A

//             if (intervalB[1] >= intervalA[1]) {
//                 intervalsArr.splice(intervalsArr.indexOf(intervalA), 1);
//             } else {
//                 intervalB[1] = intervalA[1];
//                 intervalsArr.splice(intervalsArr.indexOf(intervalA), 1);
//             }
//         }

//         console.log('intervalsArr = ', intervalsArr);
//     }
// }

function mergeIntervals(arr) {
    let intervalsArr = arr;

    if (intervalsArr.length < 2) {
        return intervalsArr
    } 

    for (let i = 0; i < intervalsArr.length; i++) {
        let intervalA = intervalsArr[0]; 

        for (let j = 1; j < intervalsArr.length; j++) {
            let intervalB = intervalsArr[j]; 



        }
    }

    for (let i = 0; i< intervalsArr.length; i++) {
        let intervalA = intervalsArr[i];
        let intervalB = intervalsArr[i+1];

        // console.log('intervalB = ', intervalB)

        if (intervalA[0] <= intervalB[0]) {
            //check if the end of interval A ends after the start of interval B

            if (intervalA[1] >= intervalB[1]) {
                intervalsArr.splice(intervalsArr.indexOf(intervalB), 1);
            } else {
                intervalA[1] = intervalB[1];
                intervalsArr.splice(intervalsArr.indexOf(intervalB), 1);
            }
        }

        if (intervalB[0] < intervalA[0]) {
            //check if the end of interval B ends after the start of interval A

            if (intervalB[1] >= intervalA[1]) {
                intervalsArr.splice(intervalsArr.indexOf(intervalA), 1);
            } else {
                intervalB[1] = intervalA[1];
                intervalsArr.splice(intervalsArr.indexOf(intervalA), 1);
            }
        }

        console.log('intervalsArr = ', intervalsArr);
    }
}

mergeIntervals([[2,6], [1,4]])