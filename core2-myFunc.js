// myFunc('!', 4, -10, 34, 0) -> '4!-10!34!0`. How to implement?

function myFunc (...args) {
  const [symbol, ...arr] = args;
  let result = '';

  for (let i = 0; i < arr.length; i++) {
    /*if (i === arr.length - 1) {
      result += `${arr[i]}`
    } else {
      result += `${arr[i]}${symbol}`;
    }*/

    result += (i === arr.length - 1) ? `${arr[i]}` : `${arr[i]}${symbol}`;
    
  }

  console.log(result);
}

myFunc('!', 4, -10, 34, 0);