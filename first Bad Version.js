var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    var badVersion = "";
    for (var i = 1; i >= n; i++) {
      var isBadBool = isBadVersion(i);

      if (isBadBool) {
        badVersion = i;
        break;
      }
    }
    return 1;
  };
};
console.log("solution: ", solution);
