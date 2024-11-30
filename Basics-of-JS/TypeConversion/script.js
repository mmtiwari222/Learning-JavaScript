// Basic Type Conversions

// Convert String to Number
// let score = "58";
// console.log(score, typeof score); // 58 string
// score = Number(score); // Using Number() constructure
// console.log(score, typeof score); // 58 number
// score = parseInt(score); // using parseInt function
// console.log(score, typeof score); // 58 number
// score = +score; // using + operator
// console.log(score, typeof score); // 58 number

// let user = "MMT";
// userName = Number(user);
// console.log(userName, typeof userName); // NaN number
// if we convert a string in number, which is not a integer, then it returns value NaN but data type is number
// NaN - Not a Number

// Convert Number to String
// let amount = 48;
// console.log(amount, typeof amount);
// amount = amount.toString(); // Using tostring() method
// console.log(amount, typeof amount);
// amount = String(amount) // using String() constructure
// console.log(amount, typeof amount);

// convert Number to Boolean
// let score = 5;
// score = Boolean(score);
// console.log(score, typeof score); // true boolean
// only zero is a false value and other non-zero values are true, like - 1, 477, -5 etc.

// convert Boolean to Number
// let userLoggin = false;
// let adminLoggin = true;
// userLoggin = Number(userLoggin);
// adminLoggin = Number(adminLoggin);
// console.log(userLoggin, typeof userLoggin); // 0 boolean
// console.log(adminLoggin, typeof adminLoggin); // 1 boolean
// true return 1 and false return 0

// convert String to Boolean
// let user = "mmt";
// user = Boolean(user);
// console.log(user, typeof user); // true boolean
// let anotherUser = "";
// anotherUser = Boolean(anotherUser);
// console.log(anotherUser, typeof anotherUser); // false boolean
// only empty string return false all non-empty strings are return true

// convert Boolean to String
// let value = true;
// let anotherValue = false;
// value = String(value);
// anotherValue = String(anotherValue);
// console.log(value, typeof value); // true string
// console.log(anotherValue, typeof anotherValue); // false string

// convert null to Number
// let val = null;
// val = Number(val); // 0 number
// console.log(val, typeof val); // 0 number
// if we convert null to number it return 0 but if we compare 0 == null, it returns false
// console.log(null == 0); // false

// convert null to String
// let value = null;
// value = String(value);
// console.log(value, typeof value); // null string

//convert null to Boolean
// let val = null;
// val = Boolean(val);
// console.log(val, typeof val);// false boolean

// convert undefined tonumber
// let val = undefined;
// val = Number(val);
// console.log(val, typeof val); // NaN number

// convert undefined to string
// let value = undefined;
// value = String(value);
// console.log(value, typeof value); // undefined string

// convert undefined to boolean
// let value = undefined;
// value = Boolean(value);
// console.log(value, typeof value); // false boolean

// some output based questions
// console.log(null == undefined); // true
// console.log(null == null); // true
// console.log(null == 0); //false
// console.log(undefined == undefined); // true
// console.log(undefined == 0); // false
// console.log(NaN == 0); // false
// console.log(NaN == NaN); // false
// console.log(undefined == NaN); // false
// console.log(null == NaN); // false
