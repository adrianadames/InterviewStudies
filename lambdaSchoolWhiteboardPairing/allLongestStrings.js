//1) All Longest Strings: Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.string inputArray

// A non-empty array.

// Guaranteed constraints:
// 1 ≤ inputArray.length ≤ 10,
// 1 ≤ inputArray[i].length ≤ 10.

// [output] array.string

// Array of the longest strings, stored in the same order as in the inputArray.




inputArray = ["aba", "aa", "ad", "vcd", "aba"]

function allLongestStrings(arr) {
  let sortedStrings = arr.slice();
  let longestStrings = [];

  let compareFunction = (a,b) => {
  return a.length-b.length
}
  sortedStrings.sort(compareFunction).reverse();
  console.log(sortedStrings)

  let longestStringLength = sortedStrings[0].length
  console.log(longestStringLength)
  for (let i = 0; i< sortedStrings.length;i++) {
    if (sortedStrings[i].length === longestStringLength) {
      longestStrings.push(sortedStrings[i])
    } else {continue}
  }
  // console.log(longestStrings)
  return longestStrings
}

console.log(allLongestStrings(inputArray))
//time complexity is O(n*log(n)) because I used sort method