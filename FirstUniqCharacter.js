/**
 * @param {string}
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (var i = 0; i < s.length; i++) {
    var character = s.charAt(i);
    if (s.indexOf(character) == i && s.indexOf(character, i + 1) == -1) {
      return s.indexOf(character);
    }
  }
  return -1;
};
firstUniqChar("loveleetcode");
function firstNonRepeatedCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    var c = string.charAt(i);
    if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
      return c;
    }
  }
  return -1;
}
const answer = firstNonRepeatedCharacter("cc");
console.log("answer: ", answer);
