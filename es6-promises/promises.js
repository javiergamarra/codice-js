let createPromise = function (milliseconds) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      try {
        console.log(`finished! after ${milliseconds} milliseconds`);
        resolve('Hola!');
      } catch (e) {
        reject(new Error());
      }
    }, milliseconds)
  });
};

Promise.all([createPromise(2000), createPromise(4000)])
  .then(x => {
    console.log('we enter after both finish');
    return createPromise(3000)
  })
  .then(x => console.log(x))
  .catch(err => console.log(err));
