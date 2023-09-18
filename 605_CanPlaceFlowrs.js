/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 * You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
 */
var canPlaceFlowers = function (flowerbed, n) {
  let flowers = flowerbed;
  let numFlowers = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    let previous = flowers[i - 1] || 0;
    let current = flowers[i];
    let next = flowers[i + 1] || 0;

    if (isFlowersAdjacent(previous, current, next) === false) {
      flowers[i] = 1;
      numFlowers++;
    }
  }
  return numFlowers >= n;
};

var isFlowersAdjacent = function (previous, current, next) {
  if (previous === 0 && current === 0 && next === 0) {
    return false;
  }
  return true;
};
