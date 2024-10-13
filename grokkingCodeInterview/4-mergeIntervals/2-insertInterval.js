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

function insertInterval(intervals, newInterval) {
    let mergedIntervals = [];
    let i = 0;
    // - if currentInterval ends before newInterval starts, there's no overlap
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        mergedIntervals.push(intervals[i]);
        i++;
    }

    // - if newInterval ends after or at the start time of the current interval, 
    // merge it with current interval; keep doing so until there's no overlaps
    while (i < intervals.length && newInterval[1] >= intervals[i][0]) {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]); 
        i++;
    }

    // - add the merged interval
    mergedIntervals.push(newInterval);

    // - add remaining intervals
    while (i < intervals.length) {
        mergedIntervals.push(intervals[i]);
        i++;
    } 

    return mergedIntervals
}

let intervals1 = [[1,3], [5,7], [8,12]];
let newInterval1 = [4,6];

let intervals2 = [[1,3], [5,7], [8,12]];
let newInterval2 = [4,10];

let intervals3 = [[2,3],[5,7]];
let newInterval3 = [1,4];

let intervals4 = [[0,2], [5,7], [8,12]];
let newInterval4 = [3,4];

console.log(insertInterval(intervals1, newInterval1)); // [ [ 1, 3 ], [ 4, 7 ], [ 8, 12 ] ]
console.log(insertInterval(intervals2, newInterval2)); // [ [ 1, 3 ], [ 4, 12 ] ]
console.log(insertInterval(intervals3, newInterval3)); // [ [ 1, 4 ], [ 5, 7 ] ]
console.log(insertInterval(intervals4, newInterval4)); // [ [ 0, 2 ], [ 3, 4 ], [ 5, 7 ], [ 8, 12 ] ]
