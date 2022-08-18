// /*
// (medium)
// Problem Statement:

// Given a list of intervals, merge all the overlapping intervals to 
// produce a list that has only mutually exclusive intervals.

// ex1: 
// Intervals: [[1,4], [2,5], [7,9]]
// Output: [[1,5], [7,9]]
// Explanation: Since the first two intervals [1,4] and [2,5] overlap, we merged them into 
// one [1,5].

// ex2:
// Intervals: [[6,7], [2,4], [5,9]]
// Output: [[2,4], [5,9]]
// Explanation: Since the intervals [6,7] and [5,9] overlap, we merged them into one [5,9].

// ex3:
// Intervals: [[1,4], [2,6], [3,5]]
// Output: [[1,6]]
// Explanation: Since all the given intervals overlap, we merged them into one.
// */

// // i think the big O of this function is O(n*log(n))

// function mergeIntervals(arr) {
//     let intervals = arr;
//     let mergedIntervals = [];
    
//     if (intervals.length < 2) {
//         return intervals
//     }

//     let sortFunction = (a,b) => b[0]-a[0];

//     // bigO = O(n*log(n))
//     intervals.sort(sortFunction);

//     // bigO = O(n)
//     while (intervals.length > 1) {
//         let intervalA = intervals[intervals.length-1];
//         let intervalB = intervals[intervals.length-2];

//         // if end time of intervalA is greater than the start time of interval B, 
//         // we have overlap
//         if (intervalB[0] < intervalA[1]) {
//             // get the endTime of new merged interval
//             let endTime = Math.max(intervalA[1], intervalB[1]);

//             // replace intervalB value with the value of the new merged interval
//             intervalB = [intervalA[0], endTime];

//             // replace the old value of intervalB in the intervals array with the 
//             // new interval B 
//             intervals[intervals.length-2] = intervalB;

//             // pop off intervalA from the intervals array
//             intervals.pop();
//         } else {
//             // we do not have overlap, so we pop off the end value in intervals 
//             // and push it into mergedIntervals
//             mergedIntervals.push(intervals.pop())
//         }
//     }

//     // at this point the length of the intervals array is just one, so we just pop
//     // it into the merged intervals array 
//     mergedIntervals.push(intervals.pop());

//     return mergedIntervals
// }

// intervals1 = [[6,7], [2,4], [5,9], [1,3]];
// intervals2 = [[1,4], [2,6], [3,5]]; 
// intervals3 = [[1,4], [2,5], [7,9]];
// intervals4 = [[6,7], [2,4], [5,9]];

// console.log(mergeIntervals(intervals1));
// console.log(mergeIntervals(intervals2));
// console.log(mergeIntervals(intervals3));
// console.log(mergeIntervals(intervals4));



// DO OVER FOR PRACTICE
/*
(medium)

Problem Statement:
-Given a list of intervals, merge all the overlapping intervals to 
produce a list that has only mutually exclusive intervals.

ex1: 
    Intervals: [[1,4], [2,5], [7,9]]
    Output: [[1,5], [7,9]]
    Explanation: Since the first two intervals [1,4] and [2,5] overlap, 
    we merged them into one [1,5].
ex2:
    Intervals: [[6,7], [2,4], [5,9]]
    Output: [[2,4], [5,9]]
    Explanation: Since the intervals [6,7] and [5,9] overlap, we merged 
    them into one [5,9].
ex3:
    Intervals: [[1,4], [2,6], [3,5]]
    Output: [[1,6]]
    Explanation: Since all the given intervals overlap, we merged them 
    into one.
*/

let mergeIntervals = (intervals) => {
    
}