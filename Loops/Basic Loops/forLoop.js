// for loop - entry control loop
// for loop contains initialization, condition and increment/decrement in one line.
// stntax- for(initialization; testing condition; increment/ decrement){
//statement (s)}

// flow of for loop => start > initialization > condition checking {if true} > statement > increment/ decrement (again same loop repeats if condition is true) if condition is false the loop is end

// print natural numbers 1 to 10
// for (let i = 0; i < 10; i++) {
//   const element = i;
//   console.log(`1 to 10 Natural Numbers: ${element}`);
// }

// print even numbers 1 to 10
// for (let i = 1; i <= 10; i++) {
//   const even = i;
//   if (even % 2 == 0) {
//     console.log(`Even Numbers: ${even}`);
//   }
// }

// print odd numbers 1 to 10

// for (let i = 0; i < 10; i++) {
//   const oddNumber = i;
//   if (oddNumber % 2 != 0) {
//     console.log(`Odd Number are: ${oddNumber}`);
//   }
// }

// 1 to 10 table
// for (let i = 1; i <= 10; i++) {
//   console.log(`Table of: ${i}`);

//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = `, i * j);
//   }
// }

// loop on array
// const myArray = ["Hulk", "Iron-Man", "Spider-Man", "Thor"];
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log(element);
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// break - used to terminate the execution of the loop when the condition is true

// for (let i = 1; i <= 20; i++) {
//   if (i == 10) {
//     console.log("10 Detected");
//     break;
//   }

//   console.log(`Value of i: ${i}`);
// }

// continue - used to break the iteration of the loop and with the next iteration

for (let i = 1; i <= 20; i++) {
  if (i == 10) {
    console.log("10 Detected");
    continue;
  }

  console.log(`Value of i: ${i}`);
}

// difference between break and continue
// the break statement breaks out of the loop completely while continue is used to break one statement and iterate to the next statement
