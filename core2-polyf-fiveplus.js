// five(plus(seven(minus(three())))) -> 9. How to implement?

function makeNum(num, func) {
  return (func === undefined) ? num : func(num);
}

function three(func) {
	return makeNum(3, func);
}

function five(func) {
	return makeNum(5, func);
}

function seven(func) {
	return makeNum(7, func);
}

function plus(right) {
  return function(left) { return left + right; };
}

function minus(right) {
  return function(left) { return left - right;};
}

console.log(five(plus(seven(minus(three()))))); // must return 9



