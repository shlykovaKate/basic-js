const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const copyArr = arr.slice();
  arr.forEach((val, index) => {
    switch (val) {
      case '--discard-next': {
        if (index === arr.length - 1) {
          copyArr.splice(index, 1, '');
        } else {
          copyArr.splice(index, 2, '', '');
        }        
        break;
      }
      case '--discard-prev': {
        if (index - 1 < 0) {
          copyArr.splice(index, 1, '');
        } else {
          copyArr.splice(index - 1, 2, '', '');
        }
        break;
      }
      case '--double-next': {
        if (index === arr.length - 1) {
          copyArr.splice(index, 1, '');
        } else {
          copyArr[index] = copyArr[index + 1];
        }        
        break;
      }
      case '--double-prev': {
        if (index - 1 < 0) {
          copyArr.splice(index, 1, '');
        } else {
          copyArr[index] = copyArr[index - 1];
        }
        break;
      }
    }
  });
  return copyArr.filter((val) => val);
}

module.exports = {
  transform
};
