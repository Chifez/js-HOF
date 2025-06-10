/*
Currying is when functions are chained, and the arguments are incrementally passed to the next function 
*/

let dragon = (name) => (size) => (element) =>
  name + 'is a ' + size + 'dragon that breathes ' + element;

console.log(dragon('fluffy')('small')('lightning'));
