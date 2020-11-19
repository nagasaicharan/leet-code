/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  var squares = A.map((item) => {
    return item * item;
  });
  return squares.sort(function (a, b) {
    return a - b;
  });
};

sortedSquares([-7, -3, 2, 3, 11]);
console.log(
  "sortedSquares([-7, -3, 2, 3, 11]): ",
  sortedSquares([-7, -3, 2, 3, 11])
);
