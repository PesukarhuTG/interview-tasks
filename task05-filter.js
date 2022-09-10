const arr = [1, 2, -4, 3];

//console.log(arr.filter(item => item > 0));

Array.prototype.filtering = function(callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    //если наше условие callback выполняется
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  console.log(result);
  return result;
}

arr.filtering((item) => item % 2 === 0);