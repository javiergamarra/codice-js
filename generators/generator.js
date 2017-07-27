function* fibonacci() {
  let oldValue = 1;
  let currentValue = 1;
  yield oldValue;
  yield currentValue;
  for (; ;) {
    let newValue = oldValue + currentValue;
    yield newValue;
    oldValue = currentValue;
    currentValue = newValue
  }
}

let generator = fibonacci();

for (let i = 0; i < 10; i++) {
  console.log(generator.next())
}
