var canConstruct = function (ransomNote, magazine) {
  var splitString = ransomNote.split("");

  var found = true;

  splitString.forEach((item) => {
    if (magazine.includes(item)) {
      magazine = magazine.replace(item, "");
    } else {
      found = false;
    }
  });
  return found;
};

console.log(canConstruct("aa", "ab"));
