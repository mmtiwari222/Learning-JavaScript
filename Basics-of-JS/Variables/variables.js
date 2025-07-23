//* Keywords in JS-
// reserved words that have predefined meaning.
// ex.- let, var, this, for, if, else, etc.

//* Identifiers in JS -
// the names you give to various elements like variables, functions, classes, parameters, and properties.
// can include A-Z, a-z, 0-9, 4, _, unicode character.
// cannot use keywords , cannot start with digit, case sensitive.


//* Variables in JS
// Variables are used to store data in JS
// Basically variables are containers which are use for contain the data

//Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't starts with a number
// - Can't use predefined word or keywords for naming a variable

//? Steps to define a variable
// 1. declare a variable - Declaration
// 2. assign a value to the variable - Initialization
// 3. use the variable

// there are 3 types to declare a variable in js
//? var, let, const

//! 1. using var keyword (Old way)
var userName = "mmtiwari";
console.log(userName);
// now we do not use this var keyword in our projects
// can be redeclared and updated (reassign)

//! 2. using const keyword (New & Modern way) - constant - unchangeable
// const need to be decalre and initialize in the same line
const userEmailId = "mm@gmail.com";
console.log(userEmailId);
// means, we can't reassign
// we can't redeclare

//! 3. using let keyword (New & Modern way)
let userAge = 20;
console.log(userAge);
// we can reassign
// we can not redeclare same variable in the same scope

// Example
let studentName = "Madanmohan";
console.log(studentName);
{
  let studentName = "Shiya";
  console.log(studentName);
}
// let studentName = "Vivek"; // SyntaxError: Identifier 'studentName' has already been declared
console.log(studentName);


// Declaration - This is when you create a variable by telling JavaScript it exists

// Initialization - This is when you give the variable a value for the first time.