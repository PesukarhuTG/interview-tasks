// add(5)(9)(-4)(1) -> 11. How to implement?

const add = function(x) {
  return function(y) { 
    return function(z) {
      return function(w) {
        return x + y + z + w;
      }
    }
  };
}


console.log(add(5)(9)(-4)(1));