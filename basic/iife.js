var car = (function car() {

  function drive() {
    console.log('driving')
  }

  function crash() {
    console.log('crashing')
  }

  return { 'conducir': drive }
})();

car.crash();
