const arr = [1, 2, -4, 3];

//console.log(arr.sort((a,b) => a - b));
function quickSort(arr) {

  //условие выхода из рекурсии, когда массив части мал
  if (arr.length < 2) {
    return arr;
  }

  let ind = Math.floor(arr.length / 2);
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

  return [...quickSort(less), currentItem, ...quickSort(more)]
}

//console.log(quickSort(arr));

Array.prototype.sorting = quickSort;

console.log(arr.sorting(arr));