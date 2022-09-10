const arr = [1, 2, 3];

//console.log(arr.map(item => item + 10));

//каждый элемент будет преобразован согласно функции callback
Array.prototype.mapping = function(callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  console.log(result);
  return result;
}

arr.mapping((item) => item + 10);