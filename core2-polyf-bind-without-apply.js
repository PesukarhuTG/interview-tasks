const obj = {
  name: 'Tany',
  surname: 'Fox'
}

function foo() {
  console.log(this.name + ' ' + this.surname + arguments[0] + arguments[1]);
}

/*const myBind = foo.bind(obj, ' woman ', 33);
myBind();*/

Function.prototype.binding = function(context, ...args) {
  let object = {...context};
  let symbol = Symbol('target');
  object[symbol] = this;
  return function(...rest) {
    return object[symbol](...args, ...rest);
  };
};

const myBinding = foo.binding(obj, ' woman ');
myBinding(33);