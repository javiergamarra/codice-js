// more real example

let app = (function myApp() {
  this.name = 'nhpatt';
  let self = this;
  this.selfPrintName = function () {
    console.log('printing again with self: ' + self.name);
  };
  this.printName = function () {
    console.log('printing again: ' + this.name);
  };
  return this;
}());

app.printName();
app.selfPrintName();

setTimeout(app.printName, 500);
setTimeout(app.selfPrintName, 500);
