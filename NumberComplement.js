var findComplement = function (num) {
  var binaryArray = parseInt(
    num
      .toString(2)
      .replace(/1/g, "x") //convert '1' to temp char('x')
      .replace(/0/g, "1") //convert '0' to '1'
      .replace(/x/g, "0"),
    2
  ); //finally convert temp char to '0'
  console.log("binaryArray: ", binaryArray);
};

findComplement(5);
