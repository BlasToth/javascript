// Create a new Set
const mySet = new Set();

// Add value
mySet.add(23);
mySet.add(29);
mySet.add(40);
mySet.add(23); // this will be ignored since no repetition is allowed in a Set
mySet.add(true);
mySet.add({
    name: "Tim",
    age: 23
});
mySet.add("Heroes of Might and Magic");
mySet.add(23.23);

// Size of the Set
console.log("Size of the set is : " + mySet.size);

// Check for value
console.log("Does the set contain number 23? " + mySet.has(23));

// Delete item
mySet.delete(40);
mySet.delete(29);
console.log(mySet);

// Loop through Aets
for (let item of mySet) {
    console.log(item);
}

// Convert to Array
const myArray = Array.from(mySet);

console.log("This is an Array from a Set: " + myArray);

// When to use Sets?
// Filter repetition
const missedCalls = ["Rodrigo", "Miguel", "Elena", "Blas", "Rodrigo", "Rodrigo", "Miguel", "Elena", "Blas", "Blas"];

console.log(new Set(missedCalls));
console.log([...new Set(missedCalls)]);

// Dice game

function isItFullHouse(dice) {
    return dice.length === 5 && new Set(dice).size === 2;
}

function isItFiveOfAKind(dice) {
    return dice.length === 5 && new Set(dice).size === 1;
}

console.log(isItFiveOfAKind([2,2,2,2,2]));
console.log(isItFullHouse([2,3,2,3,3]));