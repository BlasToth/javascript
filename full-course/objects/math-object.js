// Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area)); // 8
console.log(Math.floor(area)); // 7
console.log(Math.ceil(area)); // 8
console.log(Math.trunc(area)); // 7 - removes the decimal

// random numbers

const random = Math.random();
console.log(random);
console.log(Math.round(random * 100));