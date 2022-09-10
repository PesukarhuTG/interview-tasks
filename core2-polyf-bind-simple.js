const obj = {
  name: 'Tany',
  surname: 'Fox'
}

function foo() {
  console.log(this.name + ' ' + this.surname);
}

/*const myBind = foo.bind(obj);
myBind();*/

Function.prototype.binding = function(contex) {
  let fn = this;

  return function() {
    return fn.apply(contex);
  }
}

const myBinding = foo.binding(obj);
myBinding();