//const arr = [4, 6, 8, 1, 2, 7, 3, 5];
const arr = [4, -6, 12, 100, 2, 7, 3, 5];

//пузырьковая сортировка массива 1
/*function sortArr1(arr) {

  let copyArr = [...arr];

  let count = arr.length; //счетчик прохода (равен длине массива)

  while (count !== 0) { //пока счетчик не равен 0
    for (let i = 0; i < copyArr.length; i++) { //проходимся по всему массиву
      if (copyArr[i] > copyArr[i + 1]) { //сравниваем тек элемент со следующим
        let currentProp =copyArr[i];
        copyArr[i] =  copyArr[i + 1];
        copyArr[i + 1] = currentProp;
      }
    }
    count--;
  }

  console.log(copyArr);
}*/


//пузырьковая сортировка массива 2
/*function sortArr2(arr) {

  let copyArr = [...arr];
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
}*/

function sortArr(arr) {
  for (let k = 0; k < arr.length; k++) {
    for (let i = 0; i < arr.length - 1 - k; i++) { // - k, чтобы не проходить по уже отсортированным
      if (arr[i] > arr[i+1]) {
        let curr = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = curr;
      }
    }
  }
  
  console.log(arr);
}

sortArr(arr);
//sortArr1(arr);
//sortArr2(arr);