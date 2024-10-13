/*
(medium)

Problem Statement: 
-Given two lists of intervals, find the intersection of these two lists. 
Each list consists of disjoint intervals sorted on their start time.

Example 1:
    Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
    Output: [2, 3], [5, 6], [7, 7]
    Explanation: The output list contains the common intervals 
    between the two lists.
Example 2:
    Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
    Output: [5, 7], [9, 10]
    Explanation: The output list contains the common intervals 
    between the two lists.
*/




function intervalsSection(listA, listB) {
    let a = 0; 
    let b = 0;
    let intersectingIntervals = []

    while (a < listA.length && b < listB.length) {
        let intervalA = listA[a];
        let intervalB = listB[b];

        // - to check if there's overlap, get the later of the two start times for the start time, 
        // and the earlier of the two end times for the end time;
        let start = Math.max(intervalA[0], intervalB[0]);
        let end = Math.min(intervalA[1], intervalB[1]);

        // - if there's overlap, add the intersection to the intersectingIntervals arr; 
        if (start <= end) {
            intersectingIntervals.push([start,end]);
        }

        // - if intervalA ends before intervalB ends, increment a; 
        if (intervalA[1] < intervalB[1]) {
            a++
        } else {
            b++;
        }
    }
    return intersectingIntervals
}

// let arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]] // returns [ [ 2, 3 ], [ 5, 6 ], [ 7, 7 ] ] 
// let arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]] // returns [ [ 5, 7 ], [ 9, 10 ] ] 
// let arr1 = [[1,3], [5,6]], arr2 = [[6,10]] // returns [ [ 6, 6 ] ]
// let arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[2, 4], [6, 8], [10, 11]] // returns [ [ 2, 3 ], [ 6, 7 ], [ 10, 11 ] ] 
// let arr1=[[1, 3], [5, 6]], arr2=[[3, 4], [6, 7]] // returns  [ [ 3, 3 ], [ 6, 6 ] ] 
// let arr1=[[1, 3]], arr2=[ [6, 7]] // returns  [ ] 

console.log('intervalsSection(arr1, arr2): ', intervalsSection3(arr1, arr2));





function intervalsSection2(listA, listB) {
    let a = 0; 
    let b = 0;

    let intersectingIntervals = []

    while (a < listA.length && b < listB.length) {
        let intervalA = listA[a];
        let intervalB = listB[b];

        // - if intervalB starts after intervalA ends, there's no overlap; increment
        // a because we're looking for interval with later end time
        if (intervalB[0] > intervalA[1]) {
            a++;

            // - if intervalA starts after intervalB ends, there's no overlap; increment
            // b because we're looking for interval with later end time
        } else if (intervalA[0] > intervalB[1]) {
            b++;

            // - if intervalA starts before intervalB starts, 
        } else if (intervalA[0] <= intervalB[0]) {
            let mergedInterval = [Math.min(intervalA[1], intervalB[0]), Math.min(intervalA[1], intervalB[1])];
            intersectingIntervals.push(mergedInterval);

            if (intervalA[1] < intervalB[1]) {
                a++
            } else {
                b++;
            }

            // - if intervalB starts before intervalA starts, 
        } else if (intervalB[0] <= intervalA[0]) {
            let mergedInterval = [Math.min(intervalB[1], intervalA[0]), Math.min(intervalA[1], intervalB[1])];
            intersectingIntervals.push(mergedInterval);

            if (intervalA[1] < intervalB[1]) {
                a++
            } else {
                b++;
            }
        }
    }
    return intersectingIntervals
}