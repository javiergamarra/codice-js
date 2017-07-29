// "use strict";

function printName() {
  console.log(this.name);
}

// default call, undefined in non strict mode, crash in strict mode
printName();


let person = {
  name: 'javier',
  printName: printName,
};

// implicit call by using an object before the function
person.printName();

// implicit call does not work with functions we pass as reference and don't call ourselves
setTimeout(person.printName, 500);

// explicit call, bind to the rescue!
setTimeout(printName.bind(person), 500);

let self = person;
let newPrintName = function () {
  console.log(self.name)
};

// we don't need bind if we don't use this
setTimeout(newPrintName, 500);

