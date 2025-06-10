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

// QUIZ CHALLENGES ON REDUCE FROM CURSOR

const grades = [
  { student: 'Alice', subject: 'Math', score: 85 },
  { student: 'Alice', subject: 'Science', score: 92 },
  { student: 'Bob', subject: 'Math', score: 78 },
  { student: 'Bob', subject: 'Science', score: 88 },
  { student: 'Charlie', subject: 'Math', score: 95 },
  { student: 'Charlie', subject: 'Science', score: 90 },
];

//  ADVANCED LEVEL
//1. Create an object where keys are subjects and values are arrays of all scores for that subject

const groupedGradesBySubject = grades.reduce((grpGrades, grade) => {
  if (!grpGrades[grade.subject]) {
    grpGrades[grade.subject] = [];
  }
  grpGrades[grade.subject].push(grade.score);
  return grpGrades;
}, {});

// EXPERT LEVEL

const sales = [
  {
    id: 1,
    product: 'Laptop',
    amount: 1200,
    category: 'Electronics',
    month: 'January',
  },
  {
    id: 2,
    product: 'Phone',
    amount: 800,
    category: 'Electronics',
    month: 'January',
  },
  {
    id: 3,
    product: 'Book',
    amount: 25,
    category: 'Education',
    month: 'February',
  },
  {
    id: 4,
    product: 'Tablet',
    amount: 400,
    category: 'Electronics',
    month: 'February',
  },
  {
    id: 5,
    product: 'Desk',
    amount: 300,
    category: 'Furniture',
    month: 'March',
  },
  {
    id: 6,
    product: 'Chair',
    amount: 150,
    category: 'Furniture',
    month: 'March',
  },
];

//1. Create a statistics object for all sales with: total, average, min, max, count

// So i believe we would be creating this based on the category
// i believe the expected result should be as below

/*
{
Electronics:{
total: number,
average:number,
min:number,
max:number,
count:number
}
...
}

*/

const salesStats = sales.reduce((stats, item) => {
  if (!stats[item.category]) {
    stats[item.category] = {
      count: 0,
      average: 0,
      total: 0,
      min: item.amount,
      max: item.amount,
    };
  }

  const count = stats[item.category].count + 1;
  const total = stats[item.category].total + item.amount;
  const average = total / count;
  const min = Math.min(stats[item.category].min, item.amount);
  const max = Math.max(stats[item.category].max, item.amount);

  stats[item.category] = {
    count: count,
    total: total,
    average: average,
    min: min,
    max: max,
  };

  console.log(stats);
  return stats;
}, {});
