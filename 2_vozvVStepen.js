//пример рекурсии
function getPower(base, exp) {
  return (exp === 0) ? 1 : base * getPower(base, exp - 1);
}

console.log('getPower(2, 3);: ', getPower(2, 6));