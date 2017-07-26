var obj = {
  a: 2,
  foo: foo,
};

function foo() {
  console.log(this.a);
}

obj.foo(); // 2