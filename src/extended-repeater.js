const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const string = String(str);
  const opt = {};
  opt.addition = String(options.addition) === 'undefined' ? '' : String(options.addition);
  opt.additionRepeatTimes = options.additionRepeatTimes || 1;
  opt.repeatTimes = options.repeatTimes || 1;
  opt.separator = options.separator || '+';
  opt.additionSeparator = options.additionSeparator || '|';

  const addition = (opt.addition + opt.additionSeparator).repeat(opt.additionRepeatTimes);  
  const finalAddition = addition.slice(0, addition.length - opt.additionSeparator.length);
  const s = (string + finalAddition + opt.separator).repeat(opt.repeatTimes);
  return s.slice(0, s.length - opt.separator.length);
}

module.exports = {
  repeater
};
