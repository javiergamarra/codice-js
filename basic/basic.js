if (true) {
  var x = 'In javascript scope in based on functions, not blocks';
  console.log(x)
}
console.log(x);

function mutatingLoopVariable() {
  for (var i = 0; i < 10; i++) {
    i = 12
  }
  console.log('We can change i value: ' + i);
}
mutatingLoopVariable();
