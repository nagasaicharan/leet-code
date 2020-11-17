/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let mostFrequent = 1;
  let temp_mostfrequent = 0;
  let element = nums[0];

  for (var k = 0; k < nums.length; k++) {
    for (var j = k; j < nums.length; j++) {
      if (nums[k] == nums[j]) {
        temp_mostfrequent++;
      }
      if (mostFrequent < temp_mostfrequent) {
        mostFrequent = temp_mostfrequent;
        element = nums[k];
      }
    }
    temp_mostfrequent = 0;
  }
  return element;
};

var answer = majorityElement([2, 2, 1, 1, 1, 2, 2]);
console.log("answer: ", answer);
