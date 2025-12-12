/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i]);
    if (arr[i] % 2 !== 0) {
      res.push(100);
    }
  }
  return res;
};
