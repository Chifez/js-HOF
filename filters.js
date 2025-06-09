/*
filters are higher orders functions, that transforms an array and return a new array based on a condition 
*/

// const animals = [
//   { name: 'Flukkykins', species: 'rabbit' },
//   { name: 'Caro', species: 'dog' },
//   { name: 'Hamilton', species: 'dog' },
//   { name: 'Harold', species: 'fish' },
//   { name: 'Ursula', species: 'cat' },
//   { name: 'Jimmy', species: 'fish' },
// ];

// let dogs = animals.filter((animal) => animal.species === 'dog');

// let dogs = []

// for (let i = 0; i< animals.length; i++){
//     if(animas[i].species === 'dog')
//         dogs.push(animals[i])
// }

// quiz challenges from cursor on filter and my solutions

const students = [
  {
    name: 'Alice',
    age: 20,
    grade: 'A',
    subjects: ['Math', 'Physics', 'Chemistry'],
    gpa: 3.8,
  },
  {
    name: 'Bob',
    age: 19,
    grade: 'B',
    subjects: ['English', 'History', 'Art'],
    gpa: 3.2,
  },
  {
    name: 'Charlie',
    age: 21,
    grade: 'A',
    subjects: ['Math', 'Computer Science', 'Physics'],
    gpa: 3.9,
  },
  {
    name: 'Diana',
    age: 18,
    grade: 'C',
    subjects: ['Biology', 'Chemistry', 'Math'],
    gpa: 2.8,
  },
  {
    name: 'Eve',
    age: 20,
    grade: 'B',
    subjects: ['English', 'Psychology', 'Sociology'],
    gpa: 3.5,
  },
  {
    name: 'Frank',
    age: 22,
    grade: 'A',
    subjects: ['Computer Science', 'Math', 'Statistics'],
    gpa: 3.7,
  },
];

// INTERMEDIATE QUESTION
// getting students who take mathematics with a gpa greater than 3.5

const isMathStudent = (subjects) => subjects.includes('Math');

const mathScholars = students.filter((student) => {
  return isMathStudent(student.subjects) && student.gpa > 3.5;
});

// EXPERT QUESTION
//1. return students who have above average GPA
//2. study both math and one science subject
//3. name length is greater than 5 characters

// first i need to find the average GPA
const averageGPA =
  students.reduce((avgGPA, student) => avgGPA + student.gpa, 0) /
  students.length;

// Secondly I need to find students who study at least one science subjects alongside math
const SCIENCE_SUBJECTS = ['Physics', 'Chemistry', 'Biology'];
const isScienceStudent = (subjects) =>
  subjects.some((subject) => SCIENCE_SUBJECTS.includes(subject));

// now i need to declare the result condition
const result = (student) => {
  return (
    student.gpa > averageGPA &&
    student.name.length > 5 &&
    isMathStudent(student.subjects) &&
    isScienceStudent(student.subjects)
  );
};

// finally lets get the result
const allBrilliantScienceStudents = students.filter((student) =>
  result(student)
);

// my solution ensures modularity and reusabilty by using functions as values
