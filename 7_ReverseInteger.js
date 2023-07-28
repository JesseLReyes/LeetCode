var reverse = function (x) {
  let isNeg = x < 0 ? -1 : 1;
  x = x * isNeg;
  let reverse = parseInt(x.toString().split("").reverse().join(""));
  if (reverse > Math.pow(2, 31)) {
    return 0;
  }
  return isNeg * reverse;
};
