/*
(easy)

Given an array of integers temperatures represents the daily 
temperatures, return an array answer such that answer[i] is 
the number of days you have to wait after the ith day to get 
a warmer temperature. If there is no future day for which this 
is possible, keep answer[i] == 0 instead.

Example 1:
Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:
Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

Example 3:
Input: temperatures = [30,60,90]
Output: [1,1,0] 

Constraints:
1 <= temperatures.length <= 105
30 <= temperatures[i] <= 100
*/

function dailyTemps(arr) {
    let stack = []; // - here we will store the days for which we are looking for the next greater temp day
    let result = new Array(arr.length).fill(0);

    for (let i = 0; i < arr.length; i++) {
        // - while we have found a daily temp arr[i] greater than previous days
        while (stack.length > 0 && arr[i] > arr[stack[stack.length -1]]){
            let current = stack.pop();
            result[current] = i - current; 
        }
        stack.push(i);
    }
    return result;
}

console.log('dailyTemps(arr): ', dailyTemps([73,74,75,71,69,72,76,73]));
console.log('dailyTemps(arr): ', dailyTemps([30,40,50,60]));
console.log('dailyTemps(arr): ', dailyTemps([30,60,90]));