/*
This problem was asked by Dropbox.

Conway's Game of Life takes place on an infinite two-dimensional 
board of square cells. Each cell is either dead or alive, and at 
each tick, the following rules apply:

1) Any live cell with less than two live neighbours dies.
2) Any live cell with two or three live neighbours remains living.
3) Any live cell with more than three live neighbours dies.
4) Any dead cell with exactly three live neighbours becomes a live cell.
5) A cell neighbours another cell if it is horizontally, vertically, 
   or diagonally adjacent.

Implement Conway's Game of Life. It should be able to be initialized 
with a starting list of live cell coordinates and the number of steps 
it should run for. Once initialized, it should print out the board 
state at each step. Since it's an infinite board, print out only 
the relevant coordinates, i.e. from the top-leftmost live cell to 
bottom-rightmost live cell.

You can represent a live cell with an asterisk (*) and a dead cell 
with a dot (.).
*/

/// // // // NOTE: HOLDING OFF ON WORKING ON THIS UNTIL AFTER I GO THROUGH COUPLE GAME OF LIFE
// // // // //     TUTORIALS. 

// NOTE: Solution here for reference: https://leetcode.com/problems/game-of-life/solution/


// function conwaysGame(xRange,yRange) {
//     let boardCoords = [];
//     for (let i = 0; i < xRange; i++) {
//         boardCoords.push([]);
//         for (let j = 0; j < yRange; j++) {
//             boardCoords[i].push([i,j]);
//         }
//     }
//     console.log(boardCoords)
//     // return board
//     let board = [];
//     for (let i = 0; i < xRange; i++) {
//         board.push([]);
//         for (let j = 0; j < yRange; j++) {
//             board[i].push('.');
//         }
//     }
//     console.log(board)
// }
// console.log(conwaysGame(4,4));


