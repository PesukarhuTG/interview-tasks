//задача на реализацию функций one(plus(two())) // 3

function makeNum(num, func) {
  return func ? func(num) : num;
}

function one(func) {
  return makeNum(1, func);
}

function two(func) {
  return makeNum(2, func);
}

function three(func) {
  return makeNum(3, func);
}

function plus(right) {
  return function(left) {
    console.log(left + right);
    return left + right;
  };
}

one(plus(two()));
three(plus(two()));