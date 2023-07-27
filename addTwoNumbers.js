var twoSum = function (nums, target) {
  // We know that target - nums[i] is a value that we are looking for
  let numIndex = {};
  for (let i = 0; i < nums.length; i++) {
    // Go through and collect info about values and indices
    let value = nums[i];
    let remainder = (target - value).toString();

    if (numIndex.hasOwnProperty(remainder)) {
      // If we find a value in numIndex that would satisfy numIndex Key + nums[i], return numIndex Value and i;
      return [i, numIndex[remainder]];
    } else {
      // Else set place value/index into numIndex
      numIndex[value] = i;
    }
  }
};
