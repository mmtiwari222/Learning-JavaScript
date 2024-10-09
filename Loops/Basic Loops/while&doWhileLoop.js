// while loop  --Entry control loop
// flow of while loop => start > condition check{if true} > statement ( again condition check) and repeat till the condition is true { if condition false loop ends}

// let i = 1;
// while (i <= 10) {
//   console.log(`Value of i ${i}`);
//   i += 2;
// }

// while loop on array
// myArray = ["Hulk", "Thor", "Flash"];
// let index = 0;
// while (index < myArray.length) {
//   console.log(myArray[index]);
//   index = index + 1;
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// do while loop -exit control loop
// flow of do-while loop => start > statement > condition checking (if true) > statement and {if false} > loop ends

// print number from 1 to 10 of do while loop
// let i = 1;
// do {
//   console.log(`Value of i: ${i}`);
//   i++;
// } while (i <= 10);

// do while loop on array

const MyArray = ["Flash", "Superman", "Batman"];
let index = 0;
do {
  let bestHeros = index;
  console.log(`Dc Best Superhero: ${MyArray[bestHeros]}`);
  index++;
} while (index < MyArray.length);
