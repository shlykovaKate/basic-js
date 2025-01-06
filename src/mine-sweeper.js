const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resultingMatrix = matrix.slice();

  return resultingMatrix.map((subResultingMatrix, resultingMatrixIndex) => {
    return subResultingMatrix.map((val, subResultingMatrixIndex) => {
      if (val === true) {
        return 1;
      } else {
        let count = 0;
        matrix.forEach((subMatrix, matrixIndex) => {
          subMatrix.forEach((elem, subMatrixIndex) => {
            if (elem === true && (
              (resultingMatrixIndex === matrixIndex && (subResultingMatrixIndex === subMatrixIndex + 1 || subResultingMatrixIndex === subMatrixIndex - 1))
              || (subResultingMatrixIndex === subMatrixIndex && (resultingMatrixIndex === matrixIndex + 1 || resultingMatrixIndex === matrixIndex - 1))
              || ((subResultingMatrixIndex === subMatrixIndex + 1 || subResultingMatrixIndex === subMatrixIndex - 1) && (resultingMatrixIndex === matrixIndex + 1 || resultingMatrixIndex === matrixIndex - 1))
            )) {
              count += 1;
            }
          });
        });
        return count;
      }      
    });
  });
}

module.exports = {
  minesweeper
};
