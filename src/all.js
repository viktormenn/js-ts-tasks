/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  return new Promise((resolve, reject) => {
    const results = new Array(promisesArray.length);
    let completed = 0;

    for (let i = 0; i < promisesArray.length; i++) {
      Promise.resolve(promisesArray[i])
        .then(value => {
          results[i] = value;
          completed++;
          if (completed == results.length) {
            resolve(results);
          }
        })
        .catch(err => reject(err));
    }
  });
};
