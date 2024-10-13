/*
(medium)

Problem Statement

Given two lists of closed intervals, each list of intervals is pairwise 
disjoint and in sorted order.

Return the intersection of these two interval lists.

(Formally, a closed interval [a, b] (with a <= b) denotes the set of real 
numbers x with a <= x <= b.  The intersection of two closed intervals is 
a set of real numbers that is either empty, or can be represented as a 
closed interval.  For example, the intersection of [1, 3] and [2, 4] is 
[2, 3].) 

Example 1:

Input: 
    A = [[0,2],[5,10],[13,23],[24,25]], 
    B = [[1,5],[8,12],[15,24],[25,26]]
Output: 
    [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

Note:
    0 <= A.length < 1000
    0 <= B.length < 1000
    0 <= A[i].start, A[i].end, B[i].start, B[i].end < 10^9
*/

// NOTE: THE FOLLOWING WORKS, BUT I THINK THERE'S A BETTER APPROACH
let intervalListIntersections = (listA, listB) => {
    let intersectingIntervals = [];
    let a = 0; 
    let b = 0; 

    while (a < listA.length && b < listB.length) {
        let intervalA = listA[a]; 
        let intervalB = listB[b]; 

        let intersectionStart;
        let intersectionEnd;

        // if interval A starts before interval B 
            // A  ____
            // B    _____
        if (intervalA[0] < intervalB[0]) {
            
            // we have intersection if A ends at or after interval B starts            
                // A ___ _ _ _
                // B    _____
            if (intervalA[1] >= intervalB[0]) {
                intersectionStart= intervalB[0]; 

                // if A ends before B ends, move to next interval in A
                    // A _____   ____
                    // B    _____
                if (intervalA[1] < intervalB[1]) {
                    intersectionEnd = intervalA[1];
                    intersectingIntervals.push([intersectionStart, intersectionEnd]);
                    a++; 
                } else { 
                    // if A ends at the same time or after B ends, move to next interval in B
                    // A ________ _ _ _
                    // B    _____   ___
                    intersectionEnd = intervalB[1];
                    intersectingIntervals.push([intersectionStart, intersectionEnd]);
                    b++;
                }
            } else { 
                // no intersection if interval A ends before interval B starts            
                // A ___          ___
                // B      _____// no intersection
                a++; 
            }
        } else {
            // if interval A starts at the same time or after interval B 
            // A    _ _ _ _ _ _ _
            // B    ______

            // we have intersection if A starts before or at interval B ending         
                // A    _ _ _ ______
                // B    ______
            if (intervalA[0] <= intervalB[1]) {
                intersectionStart = intervalA[0];

                // if A ends before B ends, move to next interval in A
                    // A     __ ___
                    // B    _____
                    if (intervalA[1] < intervalB[1]) {
                        intersectionEnd = intervalA[1];
                        intersectingIntervals.push([intersectionStart, intersectionEnd]);
                        a++; 
                    } else { 
                        // if A ends at the same time or after B ends, move to next interval in B
                        // A     ____ _ _ _
                        // B    _____   ___
                        intersectionEnd = intervalB[1];
                        intersectingIntervals.push([intersectionStart, intersectionEnd]);
                        b++;
                    }
            } else {
                b++;
            }
        }
    }
    return intersectingIntervals
}

let l1 = [[0,2],[5,10],[13,23],[24,25]]; 
let l2 = [[1,5],[8,12],[15,24],[25,26]];

console.log('intervalListIntersections: ', intervalListIntersections(l1,l2));


let intervalListIntersections2 = (intervalsA, intervalsB) => {
    let intersectingIntervals = [];
    let indexA = 0, indexB = 0; 
    while (indexA < intervalsA.length && indexB < intervalsB.length) {
        // identify interval sections that intersect
        // intervals in intervalsA and intervalsB sorted, disjoint
        let intersectionStart = Math.max(intervalsA[indexA][0], intervalsB[indexB][0]);
        let intersectionEnd = Math.min(intervalsA[indexA][1], intervalsB[indexB][1]);

        if (intersectionEnd < intersectionStart) { 
        // implies that there isn't an intersection because the end of 
        // the intersection interval can't be less than its beginning
            // A ___
            // B     ___ 
            // if intervalA started earlier, move to next interval in A
            if (intervalsA[indexA][0] < intervalsB[indexB][0]) {
                indexA += 1;
            } else {
                indexB += 1;
            }
        } else {
            // -there is overlap
            // A ________
            // B         ___
            intersectingIntervals.push([intersectionStart, intersectionEnd]);
            if (intervalsA[indexA][1] < intervalsB[indexB][1]) {
                indexA += 1;
            } else if (intervalsA[indexA][1] > intervalsB[indexB][1]) {
                indexB +=1;
            } else {
                indexA +=1;
                indexB +=1;
            }
        }
    }
};

console.log('intervalListIntersections2: ', intervalListIntersections(l1,l2));
