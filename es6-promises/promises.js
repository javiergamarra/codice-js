let promise = new Promise((resolve, reject) => {
  // try {
  //   let datos = database.executeQuery();
  //   resolve(datos);
  // } catch (e) {
  //   reject(new Error());
  // }
  for (var i = 0; i < 1000000; i++) {

  }
}, 2000);

Promise.race([promise, promise])
  .then(x => promiseNueva())
  .then(x => console.log(x))
  .then(x => console.log(x));


//
// promise
//   .then(x => {
//     console.log(1);
//     return promise
//   })
//   .then(x => console.log(2))
//   .catch(err => console.log(err));
