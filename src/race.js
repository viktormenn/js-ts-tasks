/**
 * Write a function that will work similar to standard Promise.race
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.race = function race(promisesArray) {
  return new Promise((resolve, reject) => {
    for (const value of promisesArray) {
      let p;

      if (typeof value?.then === 'function') {
        p = value;
      } else {
        p = new Promise(resolveItem => {
          resolveItem(value);
        });
      }

      p.then(resolve).catch(reject);
    }
  });
};
