let objA = {a: 1 , b: 2};

// копия по ссылке
//let objB = objA;

// 1)через  spread оператор
//let objB = {...objA};

// 2) через JSON формат
//let objB = JSON.parse(JSON.stringify(objA));

// 3) через assign
/*const objB = {};
Object.assign(objB, objA);*/

// 4) через цикл
/*const objB = {};

for (item in objA) {
  objB[item] =  objA[item];
}*/

objB.c = 3;

console.log(JSON.stringify(objA) + ' / ' + JSON.stringify(objB));