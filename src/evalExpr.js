/**
 * Given k (number). Evaluate the expression: 4 * (2k - 1)
 * @param {number} k - number
 * @returns {number}
 */
module.exports.evalExpr = function evalExpr(k) {
  let res1 = 2 * k;
  let res2 = res1 - 1;
  let res3 = 4 * res2;
  return res3;
};
