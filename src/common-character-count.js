const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let commonChars = 0;
  const arr1 = s1.split('');
  let arr2 = s2.split('');

  arr1.forEach((val) => {
    let index = arr2.indexOf(val);
    if (index >= 0) {
      commonChars += 1;
      arr2.splice(index, 1);
    }
  });

  return commonChars;
}

module.exports = {
  getCommonCharacterCount
};
