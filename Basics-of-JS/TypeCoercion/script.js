// Type Coercion

// Type coercion happens implicitly when JavaScript automatically converts one type to another during operations.

// JavaScript is a dynamically-typed language, which means we do not explicitly define the type of a variable. The type of a variable is determined by the value it holds.

let result = "Hello" + 5; // "Hello5" (number coerced to string)
console.log(result, typeof result);

let score = 5 + true; // 6 (true coerced to 1)
console.log(score, typeof score);

let value = 5 + null; // 5 (null coerced to 0)
console.log(value, typeof value);

let age = 5 * "5"; // 25 ("5" coerced to number)
console.log(age, typeof age);
