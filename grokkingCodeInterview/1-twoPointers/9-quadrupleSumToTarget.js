/*
(medium) 

Problem:  Quadruple Sum to Target 

Given an array of unsorted numbers and a target number, find all 
unique quadruplets in it, whose sum is equal to the target number.
*/

// time: O(n^3);
// space: O(n + k) where k the number of quads found, which goes to O(n)
function quadrupleSumToTarget(arr, target) {
    let uniqueQuads = [];
    arr.sort((a,b) => a-b); 

    for (let pointer1 = 0; pointer1 < arr.length - 3; pointer1++) {
        if (pointer1 > 0 && arr[pointer1] === arr[pointer1-1]) {
            continue;
        }
        for (let pointer2 = pointer1+ 1; pointer2 < arr.length - 2; pointer2++) {
            if (pointer2 > pointer1 + 1 && arr[pointer2] === arr[pointer2 - 1]) {
                continue; 
            }
            twoPairSumSearch(arr, pointer1, pointer2, target, uniqueQuads);
        }
    }
    return uniqueQuads;
}

function twoPairSumSearch(arr, pointer1, pointer2, target, uniqueQuads) {
    let pointer3 = pointer2 + 1; 
    let pointer4 = arr.length-1;

    while (pointer3 < pointer4) {
        let sum = arr[pointer1] + arr[pointer2] + arr[pointer3]+ arr[pointer4];
        if (sum === target) {
            uniqueQuads.push([arr[pointer1], arr[pointer2], arr[pointer3], arr[pointer4]]);
            
            pointer3++;
            pointer4--;

            while (pointer3 < pointer4 && arr[pointer3] === arr[pointer3-1]) {
                pointer3++;
            }
            while (pointer3 < pointer4 && arr[pointer4] === arr[pointer4+1]) {
                pointer4--;
            }
        } else if (sum < target) {
            pointer3++;
            while (arr[pointer3] === arr[pointer3-1]) {
                pointer3++;
            }
        } else if (sum > target) {
            pointer4--;
            while (arr[pointer4] === arr[pointer4+1]) {
                pointer4--;
            }
        }
    }
}

console.log('quadrupleSumToTarget: ', quadrupleSumToTarget([2,5,1,4,5, 9, 12, 8], 20)); 
// [
//     [ 1, 2, 5, 12 ],
//     [ 1, 2, 8, 9 ],
//     [ 1, 5, 5, 9 ],
//     [ 2, 4, 5, 9 ],
//     [ 2, 5, 5, 8 ]
//   ]
  
console.log('quadrupleSumToTarget: ', quadrupleSumToTarget([1, 1, 2, 2, 3, 3], 7));  // [ [ 1, 1, 2, 3 ] ]
console.log('quadrupleSumToTarget: ', quadrupleSumToTarget([1, 1, 1, 2,1,2], 5)); // [ [ 1, 1, 1, 2 ] ]