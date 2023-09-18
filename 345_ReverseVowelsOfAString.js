/**
 * @param {string} s
 * @return {string}
 * Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 */
let vowels = ['a', 'e', 'i', 'o', 'u'];

var reverseVowels = function (s) {
  let rework = s;
  let leftIndex = findNextVowelRight(rework, 0, s.length);
  let rightIndex = findNextVowelLeft(rework, rework.length - 1, leftIndex);

  while (leftIndex < rightIndex) {
    rework =
      rework.substring(0, leftIndex) +
      rework[rightIndex] +
      rework.substring(leftIndex + 1, rightIndex) +
      rework[leftIndex] +
      rework.substring(rightIndex + 1);
    leftIndex = findNextVowelRight(rework, leftIndex + 1, rightIndex);
    rightIndex = findNextVowelLeft(rework, rightIndex - 1, leftIndex);
  }
  return rework;
};

var findNextVowelRight = (str, index, midPoint) => {
  for (let i = index; i < str.length && i <= midPoint + 1; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      return i;
    }
  }
  return str.length;
};

var findNextVowelLeft = (str, index, midPoint) => {
  for (let i = index; i > 0 && i >= midPoint - 1; i--) {
    if (vowels.includes(str[i].toLowerCase())) {
      return i;
    }
  }
  return -1;
};
