const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');
  let maxNumber = 0;

  for (let i = 0; i < arr.length; i += 1) {
    let copyArr = arr.slice();
    copyArr.splice(i, 1);
    const gotNumber = Number(copyArr.join(''));
    if (gotNumber > maxNumber) {
      maxNumber = gotNumber;
    }
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};
