/*const a = Number('45f');
const b = 25/NaN;

console.log(a === b);*/

/*const randomNumber = () => (Math.random() < 0.1 ? null : undefined);

function init() {
  if (randomNumber()) { //null и undefined выдают false
    console.log(null);
  } else {
    console.log('Bad value');
  }
}

init();*/

/*const a = { c: 5};
const b = { c: 5};

function compare(obj1, obj2) {
  console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

}

compare(a, b);*/

/*function parseString(str) {
  const arr = str.split('&');
  console.log(arr);
}

parseString('http://rrss.app?studentId=5&mentor=tester&isNewStudent=true');*/

/*console.log('toString: ' + 255..toString(2));
console.log('parseInt: ' + parseInt("11111111", 2));*/

//const obj = null;
/*const obj = {};
obj.prototype = null;*/  //false

//let obj = Object.create(null);

//let obj = Object.create();

/*const exp = {};
exp.prototype = null;

console.log(exp);*/

const url = 'https://app.rs.school?mentorId=5&studentName=ivanivanov&hasPassed=true'

const parseQuery = (url) => {
  const obj = {};
	const arr = url.split('?')[1].split('&');
  
  //const arr2 = arr //[mentorId=5, studentName=ivanivanov...]
  
  for (item of arr) {
    let key = item.split('=');
    obj[key[0]] = key[1];
  }
  
  return obj;
}

console.log(parseQuery(url))

