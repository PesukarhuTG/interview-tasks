let arr = new Array(100).fill(callB());

function callB() {
  return Math.floor(Math.random() * 2);
}

console.log(arr);