const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const getSum = (number) => {
    const arr = String(number).split('');
    const digit = arr.reduce((sum, item) => sum + +item, 0);
    
    if (digit > 9) {
      return getSum(digit);
    }    
    return digit;
  };
  return getSum(n);
}

module.exports = {
  getSumOfDigits
};
