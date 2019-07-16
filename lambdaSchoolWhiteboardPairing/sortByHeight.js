/*

Sort By Height: Some people are standing in a row in a park. There are trees between them which
cannot be moved. Your task is to rearrange the people by their heights in a non-descending order
without moving the trees. People can be very tall!

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.

Guaranteed constraints:
1 ≤ a.length ≤ 1000,
-1 ≤ a[i] ≤ 1000.

[output] array.integer

Sorted array a with all the trees untouched.

*/

// Off the top, my guess is to record the ith position of every tree. and push in negative 1 in the output array
// whenever that index comes up. 

// To record position of ith element in the array, I'll use an object with index as key and value as value. 

function sortByHeight(arr) {
    let arrCopy = arr.slice();
    let indexedValues = {};

    for (let i = 0; i < arrCopy.length; i++) {
        indexedValues[i] = arrCopy[i]
    }
    // console.log(indexedValues)
    function sortFunction(a,b) {
        return a-b
    }

    function checkIfNegative(element) {
        return element !== -1
    }
    arrCopyPositiveValues = arrCopy.filter(checkIfNegative).sort(sortFunction);
    // console.log(arrCopyPositiveValues);

    let outputArray = [];
    for (let i = 0; i < arr.length;i++) {
        if (indexedValues[i] === -1) {
            outputArray.push(-1);
        }
        else {
            outputArray.push(arrCopyPositiveValues.shift());
        }
    }
    console.log('inputArray: ', arr);
    console.log('outputArray: ', outputArray);
    return outputArray
}

// big O? n*log(n) (where n = inputArray.length) because of the use of the sort array method

arr1 = [-1, 150, 190, 170, -1, -1, 160, 180]

sortByHeight(arr1)