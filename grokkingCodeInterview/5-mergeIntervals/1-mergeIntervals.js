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

// time: O(n*log(n))
// space: O(n);

function mergeIntervals(arr) {
    // - first sort intervals from earliest start time to the latest start time
    arr.sort((a, b) => a[0] - b[0]);
    // console.log('arr: ', arr);
    let currentInterval = arr[0];
    let mergedIntervals = [currentInterval];

    for (let i = 1; i < arr.length; i++) {
        let nextInterval = arr[i];
        // - if there's no overlap, we can push next interval to merged, and make next current
        if (nextInterval[0] > currentInterval[1]) {
            mergedIntervals.push(nextInterval);
            currentInterval = nextInterval;        
        } else { // - if there's overlap, merge the intervals
            currentInterval[1] = Math.max(nextInterval[1], currentInterval[1]);            
        }
    }
    return mergedIntervals
}

intervals1 = [[6,7], [2,4], [5,9], [1,3]];
intervals2 = [[1,4], [2,6], [3,5]]; 
intervals3 = [[1,4], [2,5], [7,9]];
intervals4 = [[6,7], [2,4], [5,9]];

console.log(mergeIntervals(intervals1)); // [ [ 1, 4 ], [ 5, 9 ] ]
console.log(mergeIntervals(intervals2)); // [ [ 1, 6 ] ]
console.log(mergeIntervals(intervals3)); // [ [ 1, 5 ], [ 7, 9 ] ]
console.log(mergeIntervals(intervals4)); // [ [ 2, 4 ], [ 5, 9 ] ]