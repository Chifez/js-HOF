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

// QUIZ CHALLENGES ON FILTER FROM CURSOR

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

// Transform the students array to add an average property
// Calculate the average of their scores array

const averageScore = (scores) =>
  scores.reduce((avgScore, score) => avgScore + score, 0) / scores.length;

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

const getGrade = (score) => {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
};

const gradeScore = (scores) =>
  scores.map((score) => {
    const failed = score < 60;

    return {
      score: score,
      grade: getGrade(score),
      passed: !failed,
    };
  });

const gradedData = students.map((item) => {
  return {
    ...item,
    scores: gradeScore(item.scores),
  };
});

// transform the students array using map with other array methods:
// Calculate highest score for each student
// Determine if they're an honor student (average > 90)
// Create a summary string: "John Doe: Top Score 92, Honor Student: false"
