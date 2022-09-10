//add(5)(9)(-4)(1) --> 11

/*function sum(a,b,c,d) {
  return a+b+c+d;
}

function curry(f) {
  return function(a) {
    return function(b) {
      return function(c) {
        return function(d) {
         console.log(f(a,b,c,d));
        }
      }
    }
  }
}

let add = curry(sum);*/

function add(a) {
  return function(b) {
    return function(c) {
      return function(d) {
        console.log(a+b+c+d);
      }
    }
  }
}

add(5)(9)(4)(1);