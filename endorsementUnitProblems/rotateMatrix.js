// rotate matrix counter-clockwise, n times

// 
let exMatrix = [
    [1,2,3], 
    [4,5,6], 
    [7,8,9], 
    [10,11,12]
];

function rotateMatrix(M, n) {
 let edgeArray = [];
 const rowLength = M.length;
 const colLength = M[0].length;

 let startRow = 0;
 let startCol = 0;



 for (let i =startRow; i < rowLength; i++) {
     for (let j = 0; j < colLength; j++) {
         edgeArray.push(M[i][j])
     }
 }
 console.log(edgeArray)
}

rotateMatrix(exMatrix,2)