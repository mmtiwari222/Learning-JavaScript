// Nested if-else statement
// when at a time we need to check more then 1 condition then we use nested if else

let score = 60;

if (score > 50) {
  console.log("Result is Good");

  if (score < 70) {
    console.log("You are Pass");
    if (score < 80) {
      console.log("Your score is more than 75");
    } else {
      console.log("Your Score is less than 75");
    }
  }
}

// if-else-if ladder statement

// here, user can decide among multiple options
//The if statement executed from the top down
// As soon as one of the condition controlling the if is true the statement associated with that if is executed, and the rest of the ladder is bypassed.
// if none of the condition is true , tehn the final else statement will be executed.

let age = 25;

if (age == 30) {
  console.log("You are not eligible for UPSC");
} else if (age == 25) {
  console.log("You are eligible for UPSC ");
} else {
  ("Please enter your age");
}
