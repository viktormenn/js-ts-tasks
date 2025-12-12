/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  const seen = {};
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (!(num in seen)) {
      seen[num] = true;
      count++;
    }
  }
  return count;
};
