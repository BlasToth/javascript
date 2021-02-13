// Array destructuring

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6'];

// const a = alphabet[0];
// const b = alphabet[1];
// const [z, u, v] = alphabet;
const [z,,v, ...rest] = alphabet;

const newArray = [...alphabet, ...numbers];

console.log(newArray);

// console.log(z);
// console.log(v);
// console.log(rest);

function sumAndMultiply(a,b) {
    return [a + b, a * b, a / b ];
}

// const array = sumAndMultiply(2, 3);

// console.log(array);

const [sum, multiply, division = "No division"] = sumAndMultiply(2, 3);

console.log(sum);
console.log(multiply);
console.log(division);

// Object destructuring

const personOne = {
    name: 'John',
    age: 23,
    address: {
        city: 'Nowhere',
        state: 'United'
    }
}

const personTwo = {
    name: 'Sally',
    age: 32,
    address: {
        city: 'Nowhere else',
        state: 'United again'
    }
}

const { name: firstName, age, favouriteFood = "Oats" } = personTwo;
console.log(firstName);
console.log(age);
console.log(favouriteFood);