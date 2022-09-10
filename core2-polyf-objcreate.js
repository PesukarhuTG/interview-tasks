//Метод Object.create() создаёт новый объект с указанным прототипом и свойствами.
function Shape() {
  this.x = 0;
  this.y = 0;
}
// если просто объект
  Object.creating = function(base) {
    function F() {};
    F.prototype = base;
    return new F();
  }

console.log(Object.creating(Shape.prototype));

// если с пропсами
Object.creating1 = function(base, props) {
  function F() {};
  F.prototype = base;

  if (typeof (props) === 'object') {
    for (let prop in props) {
      if (props.hasOwnProperty((prop))) {
        F[prop] = props[prop];
      }
    }
  }
  return new F();
}

console.log(Object.creating1(Object.prototype, {name: 'Tany', age: 33}));
