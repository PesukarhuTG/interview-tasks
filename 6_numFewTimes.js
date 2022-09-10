/* В ПОСЛЕДОВАТЕЛЬНОСТИ ЗАПИСАНЫ ЦЕЛЫЕ ЧИСЛА.
ЧИСЛО х ВСТРЕЧАЕТСЯ 1 ИЛИ 2 РАЗА, ОСТАЛЬНЫЕ - ПО 3 РАЗА.
НАЙТИ х И КОЛИЧЕСТВО ЕГО ВСТРЕЧ*/
//const array = [1, 2, 2, 1 , 2, 1, 3]; //3, 1
const array = [1,2,10,10,10,1,1,4]; //2, 1   4, 1


//мое решение
function findNum(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }

  console.log(obj);

  for (key in obj) {
    if (obj[key] < 3) {
      console.log(key + ', ' + obj[key]);
    }
  }
}

findNum(array);