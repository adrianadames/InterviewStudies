/*
QUICKSORT

References
-Goodrich 12.3
-Necaise 12.2
-Corbin Ch. 7

Performance: 
-runtime: 
-spacetime: 

TDs: 
-off the top implementation
-revise what I have now
-quicksort for linked list

------------------- Description -----------------------

"3 step divide and conquer process: 

Divide: Partion (rearrange) the array A[p..r] into two (possibly empty) 
subarrays A[p..q-1] and A[q+1..r] s.t. each element of A[p..q-1] is less
than or equal to A[q], which is, in turn, less than or equal to each 
element of A[q+1..r]. Compute the index q as part of the partitioning 
procedure. 

Conquer: Sort the two subarrays A[p..q-1] and A[q+1..r] by recursive calls
to quicksort.

Combine: Because subarrays already sorted, no work needed to combine them: 
the entire array A[p..r] is now sorted." (Corbin Ch. 7)
*/

// fep = first-element-pivot
// lep = last-element-pivot

function fepQuickSort(arr, a, b) {
    if (a >= b) {
        return
    }

    let pivot = arr[a];
    let left = a+1;
    let right = b;

    while (left <= right) {
        // -we find first value in array that's greater than the pivot
        while (left <= right && arr[left] <= pivot) {
            left++;
        }
        // -we find first value in array coming from right side that's less than the pivot
        while (left <= right && arr[right] >= pivot) {
            right--;
        }

        if (left <= right && arr[left] >= arr[right]) {
            // -we swap the values so that the values at arr[left] and to the left
            // are less than the pivot, and the values at arr[right] and to the right
            // are greater than the pivot
            [arr[left], arr[right]] = [arr[right], arr[left]];

            // -if we're at the point, where the markers will cross one another, we 
            // know that the values to the left of arr[right] are less than the pivot
            left++;
            right--;
        }
    }
    

    // -at this point, we know that the index left is equal to or greater than the index right
    // -we swap the pivot with the value at index right; we know all the values at the 
    // leftmost marker (the right marker after they cross) and to the left are smaller than 
    // the pivot, so when we do the swap, all the values to the left of the pivot will be smaller
    // and all of the values to the right will be greater than the pivot

    //  p    l                       r   
    // [85, 24, 63, 45, 17, 31, 96, 50]

    //  p                        l   r   
    // [85, 24, 63, 45, 17, 31, 96, 50] 

    //  p                        r   l   
    // [85, 24, 63, 45, 17, 31, 50, 96]


    [arr[a], arr[right]] = [arr[right], arr[a]];

    fepQuickSort(arr, a, right-1);
    fepQuickSort(arr, right+1, b);
}

function lepQuickSort(arr, a, b) {
    if (a >= b) {
        return
    }
    let pivot = arr[b];
    let left = a;
    let right = b-1;

    while (left <= right) {
        // -we increment the left marker until we find value 
        //  greater than the pivot at arr[left]
        // -this value should be in the section of the array 
        // with values greater than the pivot (i.e. to the right of index left)
        while (left <= right && arr[left] <= pivot) {
            left++;
        }

        // -we decrement the right marker until we find value 
        //  less than the pivot at arr[right]
        // -this value should be in the section of the array 
        // with values less than the pivot (i.e. to the left of index left)
        while (left <= right && arr[right] >= pivot) {
            right--;
        }
        if (left <= right && arr[left] >= arr[right]) {

            // -by this time in the code, we have a value at arr[left] that is greater than 
            // (or equal to) pivot, and a value at arr[right] that is less than (or equal to)
            // pivot. 
            // -we swap these values; after the swap all values at index left and to the left
            // are smaller than pivot, and all values at index right and to the right are larger
            // than pivot; 
            [arr[left], arr[right]] = [arr[right], arr[left]];

            // - we increment the left marker and decrement the right marker to continue
            // checking if the values towards the middle of the array (where the left and right
            // markers are moving towards) are in the proper sections of the array (i.e. the 
            // sections with values less than or greater than the pivot)
            left++;
            right--;
        }
    }

    // -once we've reached this part of the code, we know the index left is equal to or 
    // larger than index right; at this point, we know that all the values to the left of
    // index left are smaller than the pivot, and all the values at index left and to the right
    // of it (up to the pivot's index) are larger than the pivot; we swap the value at 
    // index left with the pivot value to split up the array in the desired way

    //  l                        r   p
    // [85, 24, 63, 45, 17, 31, 96, 50]
    
    //  l                    r       p  
    // [85, 24, 63, 45, 17, 31, 96, 50]

    //       l               r       p  
    // [31, 24, 63, 45, 17, 85, 96, 50]

    //           l       r           p  
    // [31, 24, 63, 45, 17, 85, 96, 50]

    //              l,r              p  
    // [31, 24, 17, 45, 63, 85, 96, 50]

    //               r   l           p  
    // [31, 24, 17, 45, 63, 85, 96, 50]
    [arr[b], arr[left]] = [arr[left], arr[b]];

    lepQuickSort(arr, a, left-1);
    lepQuickSort(arr, left+1, b);
}

function corbinQuickSort(arr, a, b) {
    if (a >= b) {
        return
    }
    let pivot = arr[b];
    let left = a-1;
    let right = a;

    while (right < b) {
        if (arr[right] <= pivot) { 
            // -we have found a value smaller than the pivot at index right;
            // -this value will need to be put in the section of the array where all 
            //  values are less than the pivot
            // -the section of the array where all values are less than the pivot is 
            // at index left and to the left of it, so we increment left by one thereby
            // increasing its size to accomodate the smaller than pivot value at arr[right]
            left++;
            
            //-we now swap the value at arr[left] with the value at arr[right], guaranteeing
            // that all values at index left and to the left of it are smaller than the pivot
            [arr[right], arr[left]] = [arr[left], arr[right]];

            //-we increment the index right by one to examine if the next value in the array 
            // is smaller than the pivot
            right++;
        } else {
            // -if value at index right isn't smaller than the pivot, then that value
            // should be in the section of the array where all values are greater 
            // than the pivot; these are the values to the right of the index left 
            // up to the value at index right;
            // -we increment right by 1, increasing the size of the section of the array 
            // with values greater than the pivot without doing any swapping
            right++;
        }
    }

    // -when the index right reaches the end of the array, we have determined the 
    // sections of the array with values less than the pivot (arr[a] to arr[left])
    // and the section with values greater than the pivot (arr[left+1] to arr[right])

    // -we swap the pivot with the value at left+1, guaranteeing that all the values
    // to the left of the pivot are less than the pivot, and all the values to the 
    // right of the pivot are greater than the pivot
    [arr[left+1], arr[b]] = [arr[b], arr[left+1]];

    corbinQuickSort(arr, a, left);
    corbinQuickSort(arr, left+2, b);
}

function test1(arr) {
    let arrCopy = arr.slice();
    corbinQuickSort(arrCopy, 0, arrCopy.length-1);
    // fepQuickSort(arrCopy, 0, arrCopy.length-1);
    // lepQuickSort(arrCopy, 0, arrCopy.length-1);
    return arrCopy
}

console.log('test1: ', test1([85, 24, 63, 45, 17, 31, 96, 50]));

// console.log('test2: ', test1([50, 85, 24, 63, 50, 50, 24]));