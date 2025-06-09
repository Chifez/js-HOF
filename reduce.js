/* reduce is a multitool for list transformation.
it can be used to produce any list transformation method
it accepts a callback and an initial value, which is usually the first value of the acumulator.

array.reduce((accumulator, item)=> some logic with the accumulator and item, initialvalue)
*/

const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];

let totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);

// let totalAmount = 0;

// for(let i=0;i<orders.length; i++){
//     totalAmount +=orders[i].amount
// }

// QUIZ CHALLENGES ON FILTER FROM CURSOR

const grades = [
  { student: 'Alice', subject: 'Math', score: 85 },
  { student: 'Alice', subject: 'Science', score: 92 },
  { student: 'Bob', subject: 'Math', score: 78 },
  { student: 'Bob', subject: 'Science', score: 88 },
  { student: 'Charlie', subject: 'Math', score: 95 },
  { student: 'Charlie', subject: 'Science', score: 90 },
];

//  ADVANCED LEVEL
// Create an object where keys are subjects and values are arrays of all scores for that subject

const groupedGradesBySubject = grades.reduce((grpGrades, grade) => {
  if (!grpGrades[grade.subject]) {
    grpGrades[grade.subject] = [];
  }
  grpGrades[grade.subject].push(grade.score);
  return grpGrades;
}, {});
