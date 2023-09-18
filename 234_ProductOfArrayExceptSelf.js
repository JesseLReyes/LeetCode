/**
 * @param {number[]} nums
 * @return {number[]}
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 */
var productExceptSelf = function (nums) {
  let zerosSeen = 0;
  let totalNoZeros = nums.reduce((accumulator, currentValue) => {
    if (currentValue === 0) {
      zerosSeen++;
      return accumulator;
    } else {
      return accumulator * currentValue;
    }
  }, 1);

  return nums.map((currentValue) => {
    if (currentValue === 0 && zerosSeen === 1) {
      return totalNoZeros;
    } else if (zerosSeen > 0) {
      return 0;
    } else {
      return totalNoZeros / currentValue;
    }
  });
};
