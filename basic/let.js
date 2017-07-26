'use strict';

// var attack = function (x) {
//   console.log(this.name);
//   console.log('enemigo muerto, vida: ' + x);
// };

function scope() {

  // var self = this;
  var printName = function () {
    console.log(this.name)
  };

  Array.from()

  setTimeout(printName.bind(this), 500);
}

var myGame = { name: 'javier', scope: scope };

myGame.scope();
