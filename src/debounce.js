/**
 * Write a function that receive 2 parameters function {fn} and delay {delay} (in milliseconds)
 * and returns another function which will pass invocation of {fn} only once during the delay period
 * @fn {function}
 * @delay {number}
 * @return {function}
 */
module.exports.debounce = function debounce(fn, delay) {
  let lastCallTime = Date.now() - delay;

  return function (...args) {
    const now = Date.now();

    if (now - lastCallTime >= delay) {
      fn.apply(this, args);
      lastCallTime = now;
    }
  };
};
