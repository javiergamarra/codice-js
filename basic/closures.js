function sum(x) {
  var count = 0;

  function add() {
    count += x;
    return count;
  }

  return add;
}

let sumaDos = sum(2);
console.log(sumaDos());
console.log(sumaDos());

var sumaTres = sum(3);
console.log(sumaTres());
console.log(sumaTres());

console.log(sumaDos());
console.log(sumaTres());
