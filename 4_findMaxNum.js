/* В ПОСЛЕДОВАТЕЛЬНОСТИ ЗАПИСАНЫ ЦЕЛЫЕ ЧИСЛА ОТ 1 ДО К В ПРОИЗВОЛЬНОМ ПОРЯДКЕ, НАЙТИ МАКСИМАЛЬНОЕ*/

const arr1 = [1, 6, 5, 4, 3]; //6
const arr2 = [1, 4, 3, 2]; //4

//если положительные числа в массиве
/*function getMax(arr) {
  let maxElem = 0;

  for (let i = 0; i < arr.length; i++) {
    if (maxElem < arr[i]) {
      maxElem = arr[i];
    }
  }

  console.log( maxElem);
};*/

function getMax(arr) {
  const copy = [...arr];

  console.log(copy.sort().reverse()[0]);
}

getMax(arr1);
getMax(arr2);