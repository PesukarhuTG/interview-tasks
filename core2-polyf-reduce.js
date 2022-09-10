const arr = [1, 2, 3];

//console.log(arr.reduce((acc, item) => acc + item));

Array.prototype.reducing = function(callback, initial) {
  let acc = initial ? initial : this[0];
  let start = initial ? 0 : 1;

  for (let i = start; i < this.length; i++) {
    acc = callback(acc, this[i]);
  }

  console.log(acc);
  return acc;
}

arr.reducing((acc, item) => acc * item, 2);