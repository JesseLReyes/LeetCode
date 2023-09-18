/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  let num1Obj = {};
  let num2Obj = {};

  let missItemsFrom1Arr = [];
  let missItemsFrom2Arr = [];
  nums1.forEach((item) => {
    num1Obj[item] = true;
  });
  nums2.forEach((item) => {
    num2Obj[item] = true;
  });

  for (key in num1Obj) {
    if (!num2Obj.hasOwnProperty(key)) {
      missItemsFrom1Arr.push(key);
    }
  }

  for (key in num2Obj) {
    if (!num1Obj.hasOwnProperty(key)) {
      missItemsFrom2Arr.push(key);
    }
  }
  return [missItemsFrom1Arr, missItemsFrom2Arr];
};
