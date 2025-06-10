/*
closures is a phenomenon that occurs when a function has access to a value that is outside of it.
closures are functions that have access to the parent scope even after the parent function has closed
*/

let me = 'Bruce wayne';

function greetMe() {
  console.log(`Hello ${me}`);
}
me = 'Clark kent';
greetMe();

// QUIZ CHALLENGES ON FILTER FROM CURSOR

// BEGINNER

//1. Create a function that checks a password
//2. Should only allow 3 attempts total
// Example:
// const checkPassword = createPasswordChecker("secret123");
// checkPassword("wrong"); // "Wrong password, 2 attempts left"
// checkPassword("wrong"); // "Wrong password, 1 attempt left"
// checkPassword("wrong"); // "Account locked!"

function createPasswordChecker(correctPassword) {
  let attempts = 3;
  let isAccountLocked = false;

  return function checkPassword(attempt) {
    if (isAccountLocked) return 'Account Locked';

    if (attempt === correctPassword) {
      attempts = 3;
      return 'Correct Password';
    }
    attempts--;

    if (attempts === 0) {
      isAccountLocked = true;
      return 'Account Locked';
    }

    return `Wrong Password ${attempts} attempt${
      attempts === 1 ? '' : 's'
    } left`;
  };
}

// INTERMEDIATE

//1. Create a simple state manager with get/set methods
//2. Should notify subscribers of changes
// Example:
// const state = createState({ count: 0 });
// state.subscribe(console.log);
// state.set("count", 1); // logs { count: 1 }

function createState(initialState) {
  let state = initialState;
  let subscribers = [];

  function getState(key) {
    return key ? state[key] : state;
  }

  function setState(key, value) {
    state = {
      ...state,
      [key]: value,
    };
    subscribers.forEach((subscriber) => subscriber(state));
  }
  function subscribe(callback) {
    subscribers.push(callback);

    return () => {
      subscribers = subscribers.filter((subscriber) => subscriber != callback);
    };
  }
  return {
    get: getState,
    set: setState,
    subscribe: subscribe,
  };
}

//1. Create a function that caches results of expensive calculations
// Example:
//const calculateWithCache = createCache((x, y) => {
//  console.log("Calculating...");
//  return x * y;
// });
//calculateWithCache(2, 3); // logs "Calculating..." returns 6
//calculateWithCache(2, 3); // returns 6 (no log, uses cache)

// ADVANCED

//1. Create an event emitter with on/emit methods
// Example:
//const emitter = createEventEmitter();
//emitter.on("test", (data) => console.log(data));
//emitter.emit("test", "hello"); // logs "hello"

function createEventEmitter() {
  // Logic here
}

// EXPERT

//1. Create a system for managing transactions with rollback
// Example:
//const tm = createTransactionManager();
//tm.start();
//tm.set("a", 1);
//tm.set("b", 2);
//tm.rollback(); // Reverts all changes

function createTransactionManager(initialState = {}) {
  let state = initialState;
  let openingTransaction = null;
  let isActiveTransaction = false;

  function start() {
    if (isActiveTransaction) return;
    openingTransaction = { ...state };
    isActiveTransaction = true;
  }

  function setState(key, value) {
    if (!isActiveTransaction) return;
    state = {
      ...state,
      [key]: value,
    };
  }

  function getState(key) {
    return key ? state[key] : { ...state };
  }

  function rollback() {
    if (!isActiveTransaction) return;
    state = { ...openingTransaction };
    isActiveTransaction = false;
    openingTransaction = null;
  }

  return {
    set: setState,
    get: getState,
    rollback: rollback,
    start: start,
  };
}
