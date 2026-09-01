// ============================================================
// BMI comparison challenge
// ============================================================
// Formula: BMI = weight (kg) / (height (m) * height (m))
// This script compares the BMI of Mark and John using two test datasets.

// ============================================================
// Test data set 1
// ============================================================

// Mark's measurements for dataset 1
const massMark = 78;
const heightMark = 1.69;

// John's measurements for dataset 1
const massJohn = 92;
const heightJohn = 1.95;

// Calculate BMI for both people in dataset 1
const bmiMark = massMark / (heightMark * heightMark);
const bmiJohn = massJohn / (heightJohn * heightJohn);

// Display which person has the higher BMI in dataset 1
if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI ${bmiMark} is higher than John's BMI ${bmiJohn}.`);
} else {
    console.log(`John's BMI ${bmiJohn} is higher than Mark's BMI ${bmiMark}.`);
}

// ============================================================
// Test data set 2
// ============================================================

// Mark's measurements for dataset 2
const massMark2 = 95;
const heightMark2 = 1.88;

// John's measurements for dataset 2
const massJohn2 = 85;
const heightJohn2 = 1.76;

// Calculate BMI for both people in dataset 2
const bmiMark2 = massMark2 / (heightMark2 * heightMark2);
const bmiJohn2 = massJohn2 / (heightJohn2 * heightJohn2);

// Display which person has the higher BMI in dataset 2
if (bmiMark2 > bmiJohn2) {
    console.log(`Mark's BMI ${bmiMark2} is higher than John's BMI ${bmiJohn2}.`);
} else {
    console.log(`John's BMI ${bmiJohn2} is higher than Mark's BMI ${bmiMark2}.`);
}