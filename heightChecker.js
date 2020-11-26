/**
 * @param {number[]} heights
 * @return {number}
 */
// var heightChecker = function (heights) {
//   var numOfIterations = 0;
//   for (var i = 0; i < heights.length; i++) {
//     var greaterNumber = heights[i],
//       index = i;
//     for (var j = i + 1; j < heights.length; j++) {
//       console.log("greaterNumber: ", greaterNumber, i, heights[j]);
//       if (greaterNumber > heights[j]) {
//         greaterNumber = heights[j];
//         index = j;
//       }
//     }
//     if (greaterNumber !== heights[i]) {
//       console.log("greaterNumber inside: ", greaterNumber, i);
//       var temp = heights[i];
//       heights[i] = greaterNumber;
//       heights[index] = temp;
//       ++numOfIterations;
//     }
//   }
//   console.log("numOfIterations: ", numOfIterations, heights);
//   return numOfIterations;
// };
var heightChecker = function (heights) {
  var heightSorted = [...heights];
  heightSorted.sort(function (a, b) {
    return a - b;
  });
  var numOfIterations = 0;
  console.log("heightSorted: ", heightSorted);
  for (var i = 0; i < heights.length; i++) {
    console.log(
      "numOfIterationshh: ",
      numOfIterations,
      heights[i],
      heightSorted[i]
    );
    if (heights[i] != heightSorted[i]) {
      ++numOfIterations;
    }
  }
  console.log("numOfIterations: ", numOfIterations);
  return numOfIterations;
};

heightChecker([
  10,
  6,
  6,
  10,
  10,
  9,
  8,
  8,
  3,
  3,
  8,
  2,
  1,
  5,
  1,
  9,
  5,
  2,
  7,
  4,
  7,
  7,
]);
