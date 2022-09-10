/* В ПОСЛЕДОВАТЕЛЬНОСТИ ЗАПИСАНЫ ЦЕЛЫЕ ЧИСЛА. оДНО ВСТРЕАЕТСЯ РОВНО ОДИН РАЗ, ОСТАЛЬНЫЕ - ПО 2. нАЙТИ ТО, ЧТО ВСТРЕЧАЕТСЯ 1 РАЗ*/

const array = [1, 2, 2, 1 , 3, 4, 3];
//const array = [1,1,2,9,10,9,2];


//мое решение
/*function findOne(arr) {
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
    if (obj[key] === 1) {
      console.log(key);
    }
  }
}*/

function findOne(arr) {
 let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num ^= arr[i];
  }

  console.log(num);

}

findOne(array)