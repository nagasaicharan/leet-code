var numJewelsInStones = function (J, S) {
  var stonesArray = S.split("");
  var count = 0;
  for (var stone in stonesArray) {
    if (J.includes(stonesArray[stone])) {
      count++;
    }
  }
  return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
