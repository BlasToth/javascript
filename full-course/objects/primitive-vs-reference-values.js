// primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values

const userOne = { name: 'pepi', age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40;
userTwo.name = 'grillo';
console.log(userOne, userTwo);