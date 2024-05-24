// /*
// (medium)

// Problem Statement: 

// Given a list of non-overlapping intervals sorted by their start time, 
// insert a given interval at the correct position and merge all necessary 
// intervals to produce a list that has only mutually exclusive intervals.

// Example 1:

// Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
// Output: [[1,3], [4,7], [8,12]]
// Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].

// Example 2:

// Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,10]
// Output: [[1,3], [4,12]]
// Explanation: After insertion, since [4,10] overlaps with [5,7] & [8,12], we merged them into [4,12].

// Example 3:

// Input: Intervals=[[2,3],[5,7]], New Interval=[1,4]
// Output: [[1,4], [5,7]]
// Explanation: After insertion, since [1,4] overlaps with [2,3], we merged them into one [1,4].
// */


// // my first thought is that we can simply push in the new interval, and then use the function 
// // in the previous problem (i.e. the mergeIntervals problem); the problem with this approach, 
// // however, is the big O is larger than it has to be (O(n*log(n))); instead, I use the fact
// // that the intervals array is already sorted to have a big O of O(n)

// function insertInterval(arr, newInterval) {
//     let intervals = arr; 
//     let reverseSortedIntervals = [];
//     let newInt = newInterval; 

//     if (intervals.length < 1) {
//         return [newInterval]
//     }

//     if (intervals.length === 1) {
//         if (newInterval[0] < intervals[0][0]) {
//             let newSecondInterval = intervals[0];
//             intervals.pop();
//             intervals.push(newInterval);
//             intervals.push(newSecondInterval);
//         } else {
//             intervals.push(newInterval);
//         }
//     }

//     // we sort the intervals array from latest end time to earliest end time, 
//     // inserting the new interval whenever appropriate.
//     // big O of this part is O(n) due to us having to push into the 
//     // reverseSortedIntervals arr n times.
//     while (intervals.length> 0) {
//         if (newInt !== null) {
//             // if the new interval start time is less than the 1st entry in the
//             // intervals array, it is pushed into the reverseSortedIntervals 
//             // array first
//             if (newInt[0]>=intervals[intervals.length-1][0]) {
//                 reverseSortedIntervals.push(newInt);
//                 newInt = null;
//             } else {
//                 reverseSortedIntervals.push(intervals.pop());
//             }
//         } else {
//             reverseSortedIntervals.push(intervals.pop());
//         }
//     }

//     intervals = reverseSortedIntervals;
//     let mergedIntervals = [];

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

// let intervals1 = [[1,3], [5,7], [8,12]];
// let newInterval1 = [4,6];

// let intervals2 = [[1,3], [5,7], [8,12]];
// let newInterval2 = [4,10];

// let intervals3 = [[2,3],[5,7]];
// let newInterval3 = [1,4];

// console.log(insertInterval(intervals1, newInterval1));
// console.log(insertInterval(intervals2, newInterval2));
// console.log(insertInterval(intervals3, newInterval3));



// DO OVER FOR PRACTICE
/*
(medium)

Problem Statement: 
-Given a list of non-overlapping intervals sorted by their start time, 
insert a given interval at the correct position and merge all necessary 
intervals to produce a list that has only mutually exclusive intervals.

Example 1:
    Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
    Output: [[1,3], [4,7], [8,12]]
    Explanation: After insertion, since [4,6] overlaps with [5,7], we 
    merged them into one [4,7].
Example 2:
    Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,10]
    Output: [[1,3], [4,12]]
    Explanation: After insertion, since [4,10] overlaps with [5,7] & 
    [8,12], we merged them into [4,12].
Example 3:
    Input: Intervals=[[2,3],[5,7]], New Interval=[1,4]
    Output: [[1,4], [5,7]]
    Explanation: After insertion, since [1,4] overlaps with [2,3], we 
    merged them into one [1,4].
*/