// Primitive Data Types
// 1. String - Sequence of characters. Must be in quotes and backticks
// 2. Number - Integers as well as folating-point numbers
// 3. Booloen - Logical entity / true or false
// 4. Null - Intentional absence of any object value
// 5. Undefined - A variable that has not yet been defined / assigned
// 6. Symbol - Buil-in object whose constructor returns a unique symbol (ES6)
// 7. BigInt - Numbers that are greater than the "Number" type can handle

// Reference Types(Objects)
// Reference types or "objects" are non-primitive value and when assigned to a variable, the variable is given a refrence to that value
// Object literals, arrays and functions are all refrence types.

// Static typed vs Dynamic Typed
// JavaScript is a dynamically-typed language. This menas, we do not explicitly defines the type for our variables.
// TypeScript is a superset of JavaScript, which allows static-typing. This can make your code more verbose and less prone to errors.

// String
const firstName = "Madanmohan";
console.log(firstName, typeof firstName);

// Number
const age = 22;
console.log(age, typeof age);

// Boolean
const isLoggedIn = true;
console.log(isLoggedIn, typeof isLoggedIn);

// BigInt
const population = 9876987654321n;
console.log(population, typeof population);

// Null
const intialValue = null;
console.log(intialValue, typeof intialValue);

// Undefined
let score;
const highScore = undefined;
console.log(score, typeof score, highScore, typeof highScore);

// Symbol
const symbol = Symbol("id");
console.log(symbol, typeof symbol);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Object Literlas
const userDetails = {
  userName: "mmtiwari",
  userAge: 30,
};
console.log(userDetails, typeof userDetails);

// Arrays
const studentScores = [34, 36, 39, 69];
console.log(studentScores, typeof studentScores);

// Functions
function myDetails(params) {
  console.log("Hello Users!");
}

myDetails();
console.log(myDetails, typeof myDetails);
