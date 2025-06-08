// Primitive Data Types - holds single value, immutable, store by value
// 1. String - Sequence of characters. Must be in quotes and backticks
// 2. Number - Integers as well as floating-point numbers
// 3. Boolean - Logical entity / true or false
// 4. Null - Intentional absence of value
// 5. Undefined - A variable that has not yet been assigned
// 6. Symbol - Built-in object whose constructor returns a unique symbol (ES6)
// 7. BigInt - Numbers that are greater than the "Number" type can handle

// Static typed vs Dynamic Typed
// JavaScript is a dynamically-typed language. This means, we do not explicitly defines the type for our variables.
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

// BigInt - Large integers
const population = 9876987654321n;
console.log(population, typeof population);

// Null - Intentional absence of value
const intialValue = null;
console.log(intialValue, typeof intialValue);

// Undefined - declared but not initialized (assigned)
let score;
const highScore = undefined;
console.log(score, typeof score, highScore, typeof highScore);

// Symbol - Unique value
const symbol = Symbol("id");
console.log(symbol, typeof symbol);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Reference Types(Objects) - Non-primitive
// Reference types or "objects" are non-primitive value and when assigned to a variable, the variable is given a reference to that value
// Object literals, arrays and functions are all reference types.

// Object Literals - store multiple values in key-value pairs
const userDetails = {
  userName: "mmtiwari",
  userAge: 30,
};
console.log(userDetails, typeof userDetails);

// Arrays - store multiple values
const studentScores = [34, 36, 39, 69];
console.log(studentScores, typeof studentScores);

// Functions - 
function myDetails(params) {
  console.log("Hello Users!");
}

console.log(myDetails, typeof myDetails);
