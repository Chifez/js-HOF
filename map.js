/*
map is an higher order funtion that accepts a callback and returns a modified array of the same length
*/

const animals = [
  { name: 'Flukkykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' },
];

const names = animals.map((animal) => animal.name);

// let names = [];

// for (let i = 0; i < animals.length; i++) {
//   names.push(animals[i].name);
// }

// QUIZ CHALLENGES ON MAP FROM CURSOR

const students = [
  { id: 's1', firstName: 'John', lastName: 'Doe', scores: [85, 92, 78, 90] },
  { id: 's2', firstName: 'Jane', lastName: 'Smith', scores: [95, 87, 93, 89] },
  {
    id: 's3',
    firstName: 'Mike',
    lastName: 'Johnson',
    scores: [78, 85, 82, 86],
  },
  {
    id: 's4',
    firstName: 'Sarah',
    lastName: 'Williams',
    scores: [92, 94, 88, 91],
  },
];

//   ADVANCED

//1. Transform the students array to add an average property
//2. Calculate the average of their scores array

// first we need a function to get the average score
const averageScore = (scores) =>
  scores.reduce((avgScore, score) => avgScore + score, 0) / scores.length;

// now we can just transform the array using the average score function
const transformedData = students.map((item) => {
  return {
    ...item,
    average: averageScore(item.scores),
  };
});

// EXPERT

// Transform the students array to convert each score to a grade object
// Each score becomes: { score: 85, grade: 'B', passed: true }
// Grading: A(90+), B(80-89), C(70-79), D(60-69), F(<60)

// first i need a function to get the grade
const getGrade = (score) => {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
};

// now i can use the function to score the grade
const gradeScore = (scores) =>
  scores.map((score) => {
    const failed = score < 60;

    return {
      score: score,
      grade: getGrade(score),
      passed: !failed,
    };
  });

// now we can just transform the entire students array
const gradedData = students.map((student) => {
  return {
    ...student,
    scores: gradeScore(student.scores),
  };
});

//1. transform the students array using map with other array methods:
//2. Calculate highest score for each student
//3. Determine if they're an honor student (average > 90)
//4. Create a summary string: "John Doe: Top Score 92, Honor Student: false"

// transforming the array and getting the student summary and adding the max score and honor student is as simple as this
const studentSummary = students.map((student) => {
  const highestScore = Math.max(...student.scores);
  const isHonorStudent = averageScore(student.scores) >= 90;
  const summary = `${student.firstName} ${student.lastName}: top score ${highestScore}, Honor Student : ${isHonorStudent}`;
  return {
    ...student,
    maxScore: highestScore,
    honorStudent: isHonorStudent,
    summary,
  };
});
