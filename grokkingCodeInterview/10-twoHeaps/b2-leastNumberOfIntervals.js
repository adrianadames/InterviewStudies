/*
Given a list of intervals A and one interval B, find 
the least number of intervals from A that can fully 
cover B. If cannot find any result, just return 0.

Example 1:
    Input: A = [[0, 3], [3, 4], [4, 6], [2, 7]] B = [0,6]
    Output: 2

Explanation: We can use [0, 3] [2, 7] to cover the B
*/

let startTimeSort = (intervalA, intervalB) => {
    // if start times are equal, sort the one with the later end time first
    if (intervalA[0] === intervalB[0]) {
        // if b ends later than a, b will be sorted before a
        return  intervalB[1] - intervalA[1] 
    } else {
        // if a starts later than b, b will be sorted before a
        return intervalA[0] - intervalB[0]
    }
}

let leastNumberOfIntervals = (intervals, targetInterval) => {
    intervals.sort(startTimeSort); // first sort intervals by start time
    let intervalsStack = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let prevInterval = null;

        // -when examining an interval, it qualifies if it starts before the previous ends
        // and it finishes after the previous finishes; 
        while (
            intervalsStack.length > 0 && 
            intervals[i][0] <= intervalsStack[intervalsStack.length -1][1] && 
            intervals[i][1] > intervalsStack[intervalsStack.length -1][1]
        ) {
            // -if interval qualifies, then need to find the earliest interval for 
            // which the end time is greater than or equal to the current interval start time 
            // -by the end of the while loop, the prevInterval variable will be equal 
            // to the the earliest interval in the stack that satisfies the conditions in the 
            // while statement
            prevInterval = intervalsStack.pop();
        }

        if (prevInterval) {
            intervalsStack.push(prevInterval);
            intervalsStack.push(intervals[i]);
        }

        if (intervalsStack[intervalsStack.length -1][1] >= targetInterval[1]) {
            console.log('final intervalsStack: ', intervalsStack);
            return intervalsStack.length;
        }
    }

    console.log('no solution');
    return 0
}

console.log('leastNumberOfIntervals: ', leastNumberOfIntervals([[0, 3], [3, 4], [4, 6], [2, 7]], [0,6])); // 2 intervals: [ [ 0, 3 ], [ 2, 7 ] ]