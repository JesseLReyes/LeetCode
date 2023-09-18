/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let total = nums.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  let runningTotal = 0;
  for (let i = 0; i <= nums.length - 1; i++) {
    let indexlessTotal = total - nums[i];
    if (i === 0 && indexlessTotal === 0) {
      return 0;
    }

    if (
      indexlessTotal / runningTotal === 2 ||
      total - runningTotal - nums[i] === runningTotal
    ) {
      return i;
    }
    if (i === nums.length - 1 && indexlessTotal === 0) {
      return i;
    }
    runningTotal += nums[i];
  }
  return -1;
};
