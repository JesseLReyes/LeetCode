/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 * You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
 * Return the merged string.
 */
var mergeAlternately = function (word1, word2) {
  let merged = '';
  let index = 0;
  while (merged.length < word1.length + word2.length) {
    if (index < word1.length) {
      merged += word1[index];
    }
    if (index < word2.length) {
      merged += word2[index];
    }
    index++;
  }
  return merged;
};
