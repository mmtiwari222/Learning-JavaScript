// ========================================
// CHALLENGE: Compare BMI of Two People
// ========================================
// BMI Formula: mass (kg) / (height (m))^2
// Purpose: Calculate and compare BMI between Mark and John using two test datasets

// ========================================
// TEST DATA 1
// ========================================

// Store mass value for Mark in kilograms
const massMark = 78;

// Store height value for Mark in meters
const heightMark = 1.69;

// Store mass value for John in kilograms
const massJohn = 92;

// Store height value for John in meters
const heightJohn = 1.95;

// Calculate BMI for Mark using the formula: mass / (height * height)
const bmiMark = massMark / (heightMark * heightMark);

// Calculate BMI for John using the formula: mass / (height * height)
const bmiJohn = massJohn / (heightJohn * heightJohn);

// Compare BMI values: returns true if Mark's BMI is greater than John's BMI
const markHigherBMI = bmiMark > bmiJohn;

// Display results for Test Data 1
console.log(bmiMark, bmiJohn, markHigherBMI);

// ========================================
// TEST DATA 2
// ========================================

// Store mass value for Mark (Test Data 2) in kilograms
const massmark2 = 95;

// Store height value for Mark (Test Data 2) in meters
const heightmark2 = 1.88;

// Store mass value for John (Test Data 2) in kilograms
const massjohn2 = 85;

// Store height value for John (Test Data 2) in meters
const heightjohn2 = 1.76;

// Calculate BMI for Mark (Test Data 2)
const bmiMark2 = massmark2 / (heightmark2 * heightmark2);

// Calculate BMI for John (Test Data 2)
const bmiJohn2 = massjohn2 / (heightjohn2 * heightjohn2);

// Compare BMI values for Test Data 2: returns true if Mark's BMI is greater
const markHigherBMI2 = bmiMark2 > bmiJohn2;

// Display results for Test Data 2
console.log(bmiMark2, bmiJohn2, markHigherBMI2);