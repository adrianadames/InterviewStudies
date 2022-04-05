/*
MERGE SORT

References
-Corbin 2.3
-Goodrich 12.2
-Necaise 12.1

Performance:
-runtime:O(n*log(n))=best case=worst case b/c n comparisons * height of recursive binary tree
-spacetime: O(n)

TDs: 
-merge sort for linked list. 
-after comparing my off the top implementation to the book implementation, 
I think I like my implementation more; revise my implementation deleting and adding
comments as needed etc and use that as the primary implementation/driver for this 
sorting algorithm instead of using book implementation; not sure what to do with book 
implementation. i'll keep somewhere at the bottom maybe the book implementation to 
compare to my implementation or to highlight salient differences in the approach taken 

---------------------- Description ---------------------------
-basic implementation
1) divide list of values into smaller and smaller sublists 
2) merge the sublists back together to create a sorted list

-to merge, use a temp array (created at beginning of algorithm in 
the wrapper) to store the sorted sublist that you create as you 
compare the values of the two sublists you're comparing;
-after you're done comparing the values in the two sublists, the tmp 
array is done (i.e. fully sorted (i.e. merged)); you copy those value 
back into the sublist at the appropriate indices 

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

-then copy those into the input sequence starting and ending at the first 
and last indices of the sublist you're examining at that point (above we're 
looking at indices 0 to 2)
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




/*

Off the top

Performance: 
-time:
    -splitting problem down into subproblems: O(n) = log(n) + 1 (height of bt)
    -merging function: O(n) = 2n = n (comparisons plus copying from temp to input seq)

    => O(n) = (log(n)+1)*n = n*log(n)

-space: O(n) = n because of the temporary array we make and use throughout. 

*/

function mergeSortOffTop(seq, a, b, tmpArr = []) {
    if (a >= b) {
      return
    } else {
      let splitIndex = Math.floor((b-a)/2) + a;
  
      console.log('a: ', a); 
      console.log('b: ', b);
      console.log('splitIndex: ', splitIndex);
      console.log('seq: ', seq); 
      console.log('seq[splitIndex] : ', seq[splitIndex]);
      
      mergeSortOffTop(seq, a, splitIndex, tmpArr);
      mergeSortOffTop(seq, splitIndex+1, b, tmpArr);
  
      mergeOffTop(seq, a, splitIndex, b, tmpArr);
    }
  }
  
  function mergeOffTop(seq, a, splitIndex, b, tmpArr) {
    let left = a; 
    let right = splitIndex+1; 
    let tmpIndex = a; 
  
    console.log('left: ', left); 
    console.log('right: ', right);
    console.log('tmpIndex: ', tmpIndex);
    console.log('tmpArr: ', tmpArr);
  
    while (left <= splitIndex && right <= b) {
      console.log('test');
      console.log('seq[left]: ', seq[left]);
      console.log('seq[right]: ', seq[right]);
      if (seq[left] <= seq[right]) {
        console.log('test2');
        tmpArr[tmpIndex] = seq[left];
        console.log('tmpIndex: ', tmpIndex);
        console.log('tmpArr[tmpIndex] = seq[left] = ', tmpArr)
        left++;
      } else {
        tmpArr[tmpIndex] = seq[right];
        console.log('tmpIndex: ', tmpIndex);
        console.log('tmpArr[tmpIndex] = seq[right] = ', tmpArr)
        right++;
      }
      tmpIndex++;
    }
  
    while (left <= splitIndex) {
      console.log('bloop: ');
      tmpArr[tmpIndex]= seq[left];
      tmpIndex++;
      left++;
      console.log('tmpArr[tmpIndex] = seq[left] = ', tmpArr);
      console.log('right: ', right); 
      console.log('b: ', b);
    }
  
    while (right <=b) {
      console.log('bleep: ');
      tmpArr[tmpIndex] = seq[right];
      tmpIndex++;
      right++;
      console.log('tmpArr[tmpIndex] = seq[right] = ', tmpArr)
    }
  
    for (let i = a; i < tmpIndex; i++) {
      seq[i] = tmpArr[i];
      console.log('seq: ', seq)
    }
  }
  
  let s1 = [5, 9, 1, 4, 13, 6];
  let s2 = [1, 13, 5, 8, 11, 2, 18, 9];
  
  mergeSortOffTop(s1, 0, s1.length-1);
  mergeSortOffTop(s2, 0, s2.length-1);
  
  console.log('s1: ', s1);
  console.log('s2: ', s2);