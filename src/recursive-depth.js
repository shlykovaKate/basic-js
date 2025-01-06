const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  
  calculateDepth(arr) {
    let depth = arr.some((val) => Array.isArray(val)) ? 1 : 0;

    const getDepth = (array) => {      
      let newArray = array.flat();      
      for (let i = 0; i < newArray.length; i += 1) {
        if (Array.isArray(newArray[i])) {
          depth += 1;
          getDepth(newArray);
          return;
        }
      };
      
    }

    getDepth(arr);
    return depth + 1;
  }
}

module.exports = {
  DepthCalculator
};
