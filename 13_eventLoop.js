setTimeout(() => console.log(1), 500); //7
console.log(2) //1
setTimeout(() => console.log(3)); //5
Promise.resolve(6).then((response) => console.log(response)) //4
Promise.resolve(new Promise(() => console.log(7))) //2
console.log(4) //3
setTimeout(() => console.log(5), 200); //6


//2 4 6 7 3  5 1
//right 2 7 4 6 3 5 1