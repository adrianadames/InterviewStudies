// Merge Sort Notes 

// References
// -Corbin 2.3
// -Goodrich 12.2
// -Necaise 12.1

// runtime:O(n*log(n)) = best case =worst case b/c n comparisons * height of binary tree due to recursion
// spacetime: O(n)

/*
TD: merge sort for linked list. 
*/

/* 
-basic implementation
1) divide list of values into smaller and smaller sublists 
2) merge the sublists back together to create a sorted list

-to merge, create a temp array where you will store the sorted
sublist that you create as you compare the values of the two sublists
you're comparing
-after the tmp array done, you copy those value back into the sublist

ex: 
[2, 1, 5, 9, 6]

split sublist
[2, 1, 5], [9, 6]

first half of sublist 
[2]

second half of sublist
[1, 5]

create tmp array and fill comparing elements of each half of the sublist
 |        |        
 v        v                 tmpArr
[2]      [1, 5]             [1]


 |           |        
 v           v              tmpArr
[2]      [1, 5]             [1, 2]

    |           |        
    v           v              tmpArr
[2]         [1, 5]             [1, 2, 5]

    |              |        
    v              v               
[2]         [1, 5]              

-then copy those into the input sequence starting and ending at the first and last indices
of the sublist you're examining at that point (above we're looking at indices 0 to 2)
=>  for (let i = 0; i <= right-left; i++) {
        seq[i+left] = tmpArray[i];
    }

=> seq = [1, 2, 5, 9, 6] at this point in the alg


*/

// Implementation 1: Not in place. New arrays created throughout because of slice...
function jsMergeSort(arr) {
    console.log('arr.length: ', arr.length)
    if (arr.length <= 1) {
        return arr
    } else {
        // compute midpoint: 
        let midpoint = Math.floor(arr.length/ 2);
        let leftHalf = jsMergeSort(arr.slice(0,midpoint));
        let rightHalf = jsMergeSort(arr.slice(midpoint));

        let newList = mergeSortedLists(leftHalf, rightHalf);
        console.log('newList: ', newList)
        return newList
    }
}

function mergeSortedLists(listA, listB) {
    let newList = [];
    let a = 0, b = 0;

    while( a < listA.length && b < listB.length) {
        if (listA[a] < listB[b]) {
            newList.push(listA[a]);
            a += 1;
        } else {
            newList.push(listB[b]);
            b +=1;
        }
    }

    while (a < listA.length) {
        newList.push(listA[a]);
        a+=1;
    }

    while (b < listB.length) {
        newList.push(listB[b]);
        b+=1;
    }
    
    return newList
}

// console.log('jsMergeSort: ', jsMergeSort([2, 1, 5, 9, 3]));


// Implementation 2: In place plus temporary array size n => O(n)
function mergeSort(seq) {
    let n = seq.length;
    let tmpArray = new Array(n);
    recMergeSort(seq, 0, n-1, tmpArray);

    return seq
}

function recMergeSort(seq, first, last, tmpArray) {
    if (first === last) {
        return
    } else {
        let midpoint = Math.floor((first+last)/2);
        recMergeSort(seq, first, midpoint, tmpArray);
        recMergeSort(seq, midpoint + 1, last, tmpArray);
        mergeVirtualSeq(seq, first, midpoint, last, tmpArray);
    }
}

/*
[2, 5, 1, 9, 6]

recMergeSort(seq, 0, 4)
midpoint = floor(4/2) = 2

    recMergeSort(seq, 0, 2)
        midpoint = floor(2/2) = 1
        recMergeSort(seq, 0, 1)
            midPoint = floor(1/2) = 0
            recMergeSort(seq, 0, 0)
            recMergeSort(seq, 1, 1)

            mergeVirtualSeq(seq, 0, 0, 1)
            tmpArray = [2,5, n, n, n]
            seq = [2,5, 1, 9, 6]

        recMergeSort(seq, 2, 2)

        mergeVirtualSeq(seq, 0, 1, 2)
        tmpArray = [1, 2,5, n,n]
        seq = [1,2,5, 9, 6]


    recMergeSort(seq, 3, 4)
        midpoint = floor(7/2) = 3
        recMergeSort(seq, 3,3)
        recMergeSort(seq, 4,4)

        mergeVirtualSeq(seq, 3, 3, 4)
        tmpArray = [6, 9, ...]
*/
 

function mergeVirtualSeq(seq, left, middle, right, tmpArray) {
    let a = left;
    let b = middle+1;

    let k = 0;
    // console.log('a: ', a, ': ',  'b: ', b);

    while (a <= middle && b <= right) {
        if (seq[a] < seq[b]) {
            tmpArray[k] = seq[a];
            a++;
        } else {
            tmpArray[k] = seq[b];
            b++;
        }
        k++;
    }

    while (a <= middle) {
        tmpArray[k] = seq[a];
        a++;
        k++;
    }
    while (b <= right) {
        tmpArray[k] = seq[b];
        b++;
        k++;
    }

    for (let i = 0; i <= right-left; i++) {
        seq[i+left] = tmpArray[i];
    }
    // console.log('tmpArray: ', tmpArray);
    // console.log('seq: ', seq);
}

// console.log('mergeSort: ', mergeSort([1, 13, 5, 8, 11, 2, 18, 9]));
// console.log('mergeSort: ', mergeSort([2, 5, 1, 9, 6]));