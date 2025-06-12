/*
functors are object that have a map method and have the following property
1.transformation of content
2.they data after transformation maintains the same data
3.they return a functor

examples of functors are Promises, map etc.
*/

const dragons = [
  { name: 'Fluffykins', health: 70 },
  { name: 'Deathlord', health: 65000 },
  { name: 'Little Pizza', health: 2 },
];

const names = dragons.map((dragon) => dragon.name);

console.log(names);

const whenDragonLoaded = new Promise((resolve, reject) => {
  setTimeout(() => resolve({ name: 'Fluffykin', health: 70 }, 2000));
});

const newName = whenDragonLoaded
  .map((dragon) => dragon.name)
  .then((name) => console.log(name));
