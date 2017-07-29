function scope() {

  this.name = 'javier';

  setTimeout(() => console.log(this.name), 500);
  setTimeout(function () {
    console.log(this.name)
  }, 500);
}

scope();


