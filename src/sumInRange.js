/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  const a = Number(String(start).replace(/\s+/g, ''));
  const b = Number(String(end).replace(/\s+/g, ''));
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  const count = max - min + 1;
  const sum = (count * (min + max)) / 2;

  return sum;
};
