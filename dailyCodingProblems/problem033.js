/*
This problem was asked by Microsoft.

Compute the running median of a sequence of numbers. That is, given a stream of numbers, 
print out the median of the list so far on each new element.

Recall that the median of an even-numbered list is the average of the two middle numbers.

For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out:

2
1.5
2
3.5
2
2
2
*/

function runningMedian(arr) {
    let runningArr =[];
    let runningArrMedian = [];
    
    while (arr.length > 0) {
        runningArr.push(arr.shift());
        runningArr.sort();

        let middleIndex = (runningArr.length -1)/2;

        if (runningArr.length % 2 === 0) {
            runningArrMedian.push((runningArr[Math.floor(middleIndex)]+runningArr[Math.ceil(middleIndex)])/2);
            // console.log('runningArrMedian: ', runningArrMedian);
        } else {
            runningArrMedian.push(runningArr[middleIndex]);
            // console.log('runningArrMedian: ', runningArrMedian);
        }
    }
    return runningArrMedian
}


let arr1 = [2, 1, 5, 7, 2, 0, 5];

console.log(runningMedian(arr1));