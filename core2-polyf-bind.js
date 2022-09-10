/* Метод bind() по простому принимает объект в качестве аргумента и возвращает новую функцию, которая ссылается на this переданного объекта */

const obj = {
  name: 'Tany',
  surname: 'Fox'
}

function foo() {
  console.log(this.name + ' ' + this.surname + arguments[0] + arguments[1]);
}

/*const myBind = foo.bind(obj, ' woman ', 33);
myBind();*/

Function.prototype.binding = function(contex, ...args) {
  const func = this;

  return function(...args1) {
    return func.apply(contex, [...args, ...args1]);
  }
}

const myBinding = foo.binding(obj, ' woman ');
myBinding(33);