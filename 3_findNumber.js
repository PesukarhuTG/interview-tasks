/* В ПОСЛЕДОВАТЕЛЬНОСТИ ЗАПИСАНЫ ЦЕЛЫЕ ЧИСЛА ОТ 1 ДО К В ПРОИЗВОЛЬНОМ ПОРЯДКЕ, НО ОДНО ИЗ ЧИСЕЛ ПРОПУЩЕНО (ОСТАЛЬНЫЕ ВСТРЕЧАЮТСЯ РОВНО ПО ОДНОМУ РАЗУ). 
НАЙТИ ПРОПУЩЕННОЕ ЧИСЛО*/

const nums = [5, 1, 2, 7, 4, 6];

/*function getLostNum(arr) {
  let copyArr = [...arr];
  let result = 0;

  for (let i = 0; i < copyArr.length; i++) { //проходимся по всему массиву
    for (let j = 0; j < copyArr.length; j++) {
      if (copyArr[i] < copyArr[j]) { //сравниваем тек элемент со следующим
        let currentProp = copyArr[i];
        copyArr[i] =  copyArr[j];
        copyArr[j] = currentProp;
      }
    }
  }

  console.log(copyArr);

  for (let i = 0; i < copyArr.length - 1; i++) {
    if ((copyArr[i] + 1) !== copyArr[i + 1]) {
      result = copyArr[i] + 1;
    }
  }

 console.log(result);
  
}*/

//https://habr.com/ru/post/243819/
/*function getLostNum(arr) {
  const k =  arr.length; //количество элементов
  const fullNumAmount = k + 1; //длина массива + 1 как элемент который ищем

  let sum = 0; //сумма элементов 

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; //сумма элементов 
  }

  //пропущенное число равно (K+1)*(K+2)/2-S
  console.log(fullNumAmount * (k + 2) / 2 - sum);
}*/

function getLostNum(arr) {
  const maxNum = Math.max(...arr);
  const fullLength = arr.length + 1; // учитывая пропущенное число

  if (maxNum ===  arr.length) {
    maxNum += 1;
  }

  //находим сумму массива
  let sum = 0; //сумма элементов 
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; //сумма элементов 
  }

  //сумма через арифм прогрессию
  let sum2 = (maxNum + 1) * fullLength / 2;
  console.log(sum2 - sum);
}

getLostNum(nums);