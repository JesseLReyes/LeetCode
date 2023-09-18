/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 * For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
 * Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 *
 */
var gcdOfStrings = function (str1, str2) {
  let index = 1;

  while (
    str1.slice(0, index) === str2.slice(0, index) &&
    index <= Math.max(str1.length, str2.length)
  ) {
    index++;
  }
  let possibleLongestString = str1.slice(0, index - 1);
  while (possibleLongestString.length > 0) {
    for (let i = 0; i < Math.max(str1.length, str2.length); ) {
      if (i < str1.length) {
        if (
          str1.slice(i, i + possibleLongestString.length) !==
          possibleLongestString
        ) {
          break;
        }
      }
      if (i < str2.length) {
        if (
          str2.slice(i, i + possibleLongestString.length) !==
          possibleLongestString
        ) {
          break;
        }
      }
      if (
        i + possibleLongestString.length >=
        Math.max(str1.length, str2.length)
      ) {
        return possibleLongestString;
      }
      i = i + possibleLongestString.length;
    }
    possibleLongestString = possibleLongestString.slice(
      0,
      possibleLongestString.length - 1
    );
  }
  return '';
};
