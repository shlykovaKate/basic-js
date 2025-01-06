const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str) {
    const arr = str.split('');
    let element = arr[0];
    let countOfChars = 1;
    let encodedLine = [];
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i] === arr[i - 1]) {
        countOfChars += 1;
      } else {
        encodedLine.push(`${countOfChars > 1 ? countOfChars : ''}${element}`);
        element = arr[i];
        countOfChars = 1;      
      }    
    }
    encodedLine.push(`${countOfChars > 1 ? countOfChars : ''}${element}`);
    return encodedLine.join('');
  }
  return str;
}

module.exports = {
  encodeLine
};
