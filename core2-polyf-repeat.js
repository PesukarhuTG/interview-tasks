let str = 'hello';

//console.log(str.repeat(3));

/*String.prototype.repeating = function(x) {
  let result = [];
  let count = x;

  while (count > 0) {
    result.push(this);
    count--;
  }

  return result.join('');
}

console.log(str.repeating(5));*/

String.prototype.repeating = function(x) {
  let result = '';
  let count = x;

  while (count > 0) {
    result += this;
    count--;
  }

  return result;
}

console.log(str.repeating(3));
