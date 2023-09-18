/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let numOcc = {};
  arr.forEach((item) => {
    numOcc[item] = numOcc[item] + 1 || 1;
  });
  let uniqOcc = {};
  for (let key in numOcc) {
    if (uniqOcc.hasOwnProperty(numOcc[key])) {
      return false;
    }
    uniqOcc[numOcc[key]] = true;
  }
  return true;
};
