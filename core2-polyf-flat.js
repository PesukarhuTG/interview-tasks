const arr = [4, 5, [5, [8,9]]];

//console.log(arr.flat());

Array.prototype.flatting = function() {
  return this.reduce((a, b) => Array.isArray(b) ? a.concat(b.flatting()) : a.concat(b), []);
}

console.log(arr.flatting());