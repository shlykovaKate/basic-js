const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  matrix.forEach((subMatrix, matrixIndex) => {
    subMatrix.forEach((val, subMatrixIndex) => {
      if (matrixIndex - 1 < 0 || matrix[matrixIndex-1][subMatrixIndex] !== 0) {
        sum += val;
      }
    });
  });
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
