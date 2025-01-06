const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let object = {};
  let maxLength = 0;
  let indexArrayWithMaxLength = 0;
  let newDomains = domains.map((val, index) => {
    newValue = val.split('.');
    if (newValue.length > maxLength) {
      maxLength = newValue.length;
      indexArrayWithMaxLength = index;
    }
    return newValue;
  });

  let prevKey = '';
  for (let i = 0; i < maxLength; i += 1) {
    const domain = newDomains[indexArrayWithMaxLength][newDomains[indexArrayWithMaxLength].length - 1];
    prevKey += '.' + domain;
    let numberOfDomain = 0;
    newDomains.forEach((val) => {
      const index = val.indexOf(domain);
      if (index >= 0 ) {
        numberOfDomain += 1;
        val.splice(index, 1);
      }
    });
    object[prevKey] = numberOfDomain;
  }
  return object;
}

module.exports = {
  getDNSStats
};
