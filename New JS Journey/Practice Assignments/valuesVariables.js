// Basic data variables
const country = "INDIA";
const continent = "Asia";
let population = 1500000000;
const isIsLand = false;
let language = "Hindi";
language = "English";

// Print values and data types
console.log(country, continent, population, language);
console.log(typeof(isIsLand), typeof(population), typeof(country), typeof(language));

// Practice arithmetic and comparison operators
const halfPopulation = population / 2;
console.log(halfPopulation);

const newPopulation = population++ ;
console.log(newPopulation);

const finlandPopulation = 6000000;
console.log(population > finlandPopulation);

const averagePopulation = 33000000;
console.log(population < averagePopulation);

// String concatenation and template literals
const description = country + " is in " + continent + ", and its " + population + " people speak " + language;
console.log(description);

const descriptionTemplate = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(descriptionTemplate);