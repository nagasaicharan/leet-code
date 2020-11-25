// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

// Example 1:

// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]

// Constraints:

// 1 <= arr.length <= 10^4
// 1 <= arr[i] <= 10^5

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (j === i + 1) {
        arr[i] = arr[j];
      } else if (arr[i] < arr[j]) {
        arr[i] = arr[j];
      }
    }
    if (i === arr.length - 1) {
      arr[i] = -1;
    }
  }
  return arr;
};

replaceElements([17, 18, 5, 4, 6, 1]);
