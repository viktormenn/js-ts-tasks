/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  if (arr.length === 0) return [];

  let bestStart = 0;
  let bestLength = 1;
  let currentStart = 0;
  let currentLength = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentLength++;
    } else {
      if (currentLength > bestLength) {
        bestLength = currentLength;
        bestStart = currentStart;
      }
      currentStart = i;
      currentLength = 1;
    }
  }

  if (currentLength > bestLength) {
    bestLength = currentLength;
    bestStart = currentStart;
  }

  return arr.slice(bestStart, bestStart + bestLength); /////

  return prop in object;
};
