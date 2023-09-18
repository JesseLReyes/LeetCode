// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

var canJump = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == 0) {
      let canJump = false;
      for (let j = i - 1; j >= 0; j--) {
        if (nums[j] + j > i) {
          canJump = true;
        }
      }
      if (!canJump) {
        return false;
      }
    }
  }
  return true;
};
