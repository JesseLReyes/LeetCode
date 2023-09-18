/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let highestAlt = 0;
  let cumulativeAlt = 0;
  for (let i = 0; i <= gain.length - 1; i++) {
    cumulativeAlt += gain[i];
    if (cumulativeAlt > highestAlt) {
      highestAlt = cumulativeAlt;
    }
  }
  return highestAlt;
};
