//из строки 'aaabbc' получить '3a2b1c'

function countSymbols(str) {
  const obj = {};
  const result = [];

  const arr = str.split('');

  for (item of arr) {
    if (item in obj) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  }

  for (item in obj) {
    result.push(`${ obj[item]}${item}`);
  }

  console.log(result.join(''));
}

/*function countSymbols(str) {
  const result = [];
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      count++;
    } else {
      result.push(`${count}${str[i]}`);
      count = 1;
    }
  }

  console.log(result.join(''));
}*/

countSymbols('aaabbcaa');