//Найти второй минимальный элемент массива

let arr = [5, 7, 1, 0, 4, -100];

function findMin(array, message) {

  let firstMin = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < firstMin) {
      firstMin = array[i];
    }
  }

  console.log(message + firstMin);
  return firstMin;
}

let idx = arr.indexOf(findMin(arr, 'первый минимум: '));
let copy = [...arr];

copy.splice(idx, 1);

findMin(copy, 'второй минимум: ');






