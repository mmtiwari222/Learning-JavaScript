// Declare country as a constant (cannot be changed after initialization)
const country = "INDIA";

// Declare continent as a constant
const continent = "Asia";

// Declare population as a variable using let (can be reassigned)
let population = 1500000000;

// Declare isIsLand as a constant with boolean value
const isIsLand = false;
// Attempting to reassign a const variable will throw TypeError
// isIsLand = true; - TypeError: Assignment to constant variable.

// Declare language as a variable using let
let language = "Hindi";
// Reassign language to a new value (let allows reassignment)
language = "English";

// Print all variables to the console
console.log(country, continent, population, language);

// Print the data types of each variable using the typeof operator
console.log(typeof(isIsLand), typeof(population), typeof(country), typeof(language))