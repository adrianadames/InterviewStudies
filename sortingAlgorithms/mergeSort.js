// Merge Sort Notes 

// References
// -Corbin 2.3
// -Goodrich 12.2
// -Necaise 12.1


/* 

// -basic implementation

// -1) divide list of values into smaller and smaller sublists 
// -2) merge the sublists back together to create a sorted list

*/

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

// console.log('jsMergeSort: ', jsMergeSort([2, 1, 5, 9, 3]));

function recMergeSort(seq, first, last, tmpArray) {
    if (first === last) {
        return
    } else {
        let midpoint = Math.floor((first+last)/2);
        recMergeSort(seq, first, midpoint, tmpArray);
        recMergeSort(seq, midpoint + 1, last, tmpArray);

        mergeVirtualSeq(seq, first, midpoint+1, last+1, tmpArray);
    }
}


function mergeVirtualSeq(seq, left, middle, right, tmpArray) {
    let a = left;
    let b = middle;

    let k = 0;
    console.log('a: ', a, ': ',  'b: ', b);
    // console.log('tmpArray: ', tmpArray);

    while (a < middle && b < right) {
        if (seq[a] < seq[b]) {
            tmpArray[k] = seq[a];
            a++;
        } else {
            tmpArray[k] = seq[b];
            b++;
        }
        k++;
    }

    while (a < middle) {
        tmpArray[k] = seq[a];
        a++;
        k++;
    }
    while (b < right) {
        tmpArray[k] = seq[b];
        b++;
        k++;
    }

    for (let i = 0; i < right-left; i++) {
        seq[i+left] = tmpArray[i];
    }
    console.log('tmpArray: ', tmpArray);
}



function mergeSortImproved(seq) {
    let n = seq.length;

    let tmpArray = new Array(n);

    recMergeSort(seq, 0, n-1, tmpArray);

    return tmpArray
}

mergeSortImproved([1, 13, 5, 8, 11, 2, 18, 9]);
