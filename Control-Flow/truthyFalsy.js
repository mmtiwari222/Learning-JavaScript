// falsy Values - Values that are not true are considered falsy values
// falsy - false, 0, -0, BigInt 0n, "", null, undefined, NaN

// ++++++++++++++++++++++++++++++++++
// truthy values -a value is cinsider truthy if, when coerced to a boolean it evaluates to true.
//truthy - "0", "false", " ", [], {}, function(){}

let studentScores = [];
if (studentScores.length === 0) {
  console.log("Array is Empty");
}
const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is Empty");
}

// Nullish Coalescing Operator(??): null & undefined

let val1;

val1 = 5 ?? 10;

console.log(val1);
