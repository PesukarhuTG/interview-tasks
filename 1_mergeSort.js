const arr = [4, -6, 12, 100, 2, 7, 3, 5, -2];

function mergeSort(arr) {

  if (arr.length < 2) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  mergeSort(left);
  mergeSort(right);

 let i = 0; //отсевачает за левую часть
 let j = 0; //отвечает за правую часть
 let k = 0; //отвечать за основной массив arr

 //пока счетчики не вышли за границы своих списков
 while (i < left.length && j < right.length) {
  //сравниваем элементы частей
  if (left[i] < right[j]) {
    arr[k] = left[i];
    i++;
  } else {
    arr[k] = right[j];
    j++;
  }

  k++;
 }

 //добивка оставшимися элементами
 //если i не вышел за пределы списка
 while (i < left.length) {
  arr[k] = left[i];
  i++;
  k++;
 }

  //если j не вышел за пределы списка
  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
   }
}

mergeSort(arr);