const arr = [4, -6, 12, 100, 2, 7, 3, 5];

function quickSort(arr) {

  //условие выхода из рекурсии, когда массив части мал
  if (arr.length < 2) {
    return arr;
  }

  let ind = Math.floor(Math.random() * arr.length);
  let currentItem = arr[ind];

  const more = [];
  const less = [];

  for (let i = 0; i < arr.length; i++) {

    if (i === ind) {
      continue;
    }

    if (arr[i] > currentItem) {
      more.push(arr[i]);
    } else {
      less.push(arr[i]);
    }
  }

  

  return [
    ...quickSort(less),
    currentItem,
    ...quickSort(more),
  ]

}

quickSort(arr);