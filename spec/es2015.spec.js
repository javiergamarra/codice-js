describe('typescript tests', () => {

  const _ = '';

  it('true is true', () => expect(true).toEqual(true));

  it('null is not the same thing as undefined',
    () => expect(null).not.toEqual(undefined)
  );

  it('template strings allow ${variables}',
    () => {
      const hola = 'nhpatt';
      expect(`hola, ${hola}!`).toEqual('hola, _!');
    }
  );

  it('let are equals to var with block support',
    () => {

      {
        var hola = 'hi!';
        expect(hola).toEqual(_);
      }
      expect(hola).toEqual(_);

      {
        const adios = 'hi!';
        expect(adios).toEqual(_);
      }
      // expect(adios).toEqual(_);
    }
  );

  it('fat arrows have implicit returns',
    () => {

      const fun = x => x + 1;
      const add = function (x) {
        return x + 1;
      };

      expect(fun(2)).toEqual(add(_));
    }
  );

  it('for of is great for iterables',
    () => {

      const iterable = [3, 5, 7];
      iterable['foo'] = 'hello';

      let for_props = 0;
      let for_of_props = 0;

      for (const prop in iterable) {
        for_props++;
      }

      for (const prop of iterable) {
        for_of_props++;
      }

      expect(for_props).toEqual(_);
      expect(for_of_props).toEqual(_);
    }
  );

  it('we have sets now',
    () => {

      const example = new Set([2, 2, 3]);

      expect(example.size).toEqual(_);
    }
  );

  it('short syntax for objs',
    () => {

      function createMonster(name, power) {
        return { name, power };
      }

      expect(createMonster('Soraya', 1000)).toEqual(_);
    }
  );

  it('rest syntax',
    () => {

      function createMonster(name, power, ...rest) {
        return rest;
      }

      expect(createMonster('Soraya', 1000, 'tordesillas', 'toros')).toEqual(_);
    }
  );

  it('spread syntax',
    () => {

      function createMonster(name, power) {
        return { name, power };
      }

      const values = ['Soraya', 1000];

      expect(createMonster(...values)).toEqual(_);
    }
  );

  it('destructuring',
    () => {

      const { name, power } = { name: 'Soraya', power: 1000 };

      expect(name).toEqual(_);
    }
  );

  it('destructuring with arrays',
    () => {

      let x = 1, y = 2;
      [x, y] = [y, x];

      expect(x).toEqual(_);
    }
  );

  it('static methods',
    () => {

      class Calculator {

        static add(x) {
          return x + 1;
        }
      }

      expect(Calculator.add(1)).toEqual(_);
    }
  );

});
