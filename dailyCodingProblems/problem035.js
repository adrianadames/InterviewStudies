/*
This problem was asked by Google.

Given an array of strictly the characters 'R', 'G', and 'B', segregate the 
values of the array so that all the Rs come first, the Gs come second, and 
the Bs come last. You can only swap elements of the array.

Do this in linear time and in-place.

For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should 
become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].
*/


// first set start equal to the first index and then move the end pointer one by one from the end
// once they match, we move the start index to the second index and then move the end pointer one by one


function orderIntoRGBs(arr) {
    let startIndex =-1;

    let RGBVals = {
        'R':0,
        'G':1,
        'B':2
    };

    while (startIndex !== arr.length - 1) {
        startIndex += 1;
        let endIndex = arr.length-1;

        while (startIndex !== endIndex) {
            let startVal = arr[startIndex];
            let endVal = arr[endIndex];

            if (RGBVals[startVal] > RGBVals[endVal]) {
                arr[startIndex] = endVal;
                arr[endIndex] = startVal;
            }
            endIndex -= 1;
        }
    }
    
    console.log(arr)
    return arr
}

const arr1 = ['G', 'B', 'R', 'R', 'B', 'R', 'G'];

orderIntoRGBs(arr1)