let x;
let num = new Number(123); // num = 123
console.log(num, typeof num); // object

x = num.toString(); // x = "123"

x = num.toString().length; // x = 3

x = num.toFixed(2); // x = "123.00"

x = num.toPrecision(3); // x = "1.2e+2"

x = num.valueOf(); // x = 123
console.log(x, typeof x); // number

x = num.toExponential(2); // x = "1.23e+2"

x = num.toLocaleString("hi-IN"); // x = "१२३"
console.log(x, typeof x); // string


// +++++++++++++++++++++++++++++++++++++++
x = Number.MAX_VALUE; // x = 1.7976931348623157e+308

x = Number.MIN_VALUE; // x = 5e-324

x = Number.POSITIVE_INFINITY; // x = Infinity

x = Number.NEGATIVE_INFINITY; // x = -Infinity

x = Number.NaN; // x = NaN

x = Number.EPSILON; // x = 2.220446049250313e-16

x = Number.MAX_SAFE_INTEGER; // x = 9007199254740991

x = Number.MIN_SAFE_INTEGER; // x = -9007199254740991

x = Number.isFinite(Infinity); // x = false

x = Number.isInteger(123); // x = true

x = Number.isNaN(NaN); // x = true

x = Number.isSafeInteger(123); // x = true

x = Number.parseFloat("123.45"); // x = 123.45

x = Number.parseInt("123.45"); // x = 123

x = Number.isInteger(123.45); // x = false


// +++++++++++++++++++++++++++++++++++++++
// Math object

x = Math.PI; // x = 3.141592653589793

x = Math.sqrt(25); // x = 5

x = Math.cbrt(27); // x = 3

x = Math.pow(2, 3); // x = 8

x = Math.abs(-123); // x = 123

x = Math.ceil(123.45); // x = 124

x = Math.floor(123.45); // x = 123

x = Math.round(123.45); // x = 123

x = Math.round(123.55); // x = 124

x = Math.max(1, 2, 3, 4, 5); // x = 5

x = Math.min(1, 2, 3, 4, 5); // x = 1

x = Math.random(); // x = 0.123456789

x = Math.random() * 10 + 1; // x = 1.123456789

x = Math.floor(Math.random() * 10 + 1); // x = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10









