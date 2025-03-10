// Array.prototype.indexOf()
const scores = [10, 20, 30, 10, 40, 20];
const index = scores.indexOf(20);
console.log({ index });
// Using the fromIndex argument
const index2 = scores.indexOf(20, 2);
console.log({ index2 });

// Using negative fromIndex argument
const index3 = scores.indexOf(20, -6);
console.log({ index3 });

// Finding indices of all occurrences;

const numbers = [10, 20, 30, 10, 40, 20];
const results = [];
let position;
let fromPosition = 0;

do {
  position = numbers.indexOf(20, fromPosition);
  if (position !== -1) {
    results.push(position);
    fromPosition = position + 1;
  }
} while (position !== -1);

console.log({ index: results });

// Using the indexOf() method with a negative fromIndex argument;
const series = [10, 20, 30, 10, 40, 20];
const findSeries = series.indexOf(20, -1);
console.log({ findSeries });

function allIndexOf(needle, heyStack) {
  const results = [];
  let index = heyStack.indexOf(needle);
  while (index != -1) {
    results.push(index);
    index = heyStack.indexOf(needle, index + 1);
  }
  return results;
}

console.log(allIndexOf(10, series));

// Locating an object in an array;

const guests = [
  { name: "John Doe", age: 30 },
  { name: "Lily Bush", age: 20 },
  { name: "William Gate", age: 25 },
];

const found = guests.indexOf({ name: "John Doe", age: 30 });
console.log(found);

const guestIndex = guests.findIndex(
  (index) => index.name === "John Doe" && index.age === 30
);
console.log(guestIndex);

// Array.prototype.lastIndexOf()

const scoresLast = [10, 20, 30, 10, 40, 20];
const indexLast = scoresLast.lastIndexOf(20);
console.log({ indexLast });

// Using the fromIndex argument
const indexWithArgument = scoresLast.lastIndexOf(20, 2);
console.log({ indexWithArgument });

// Using a negative fromIndex argument
const indexWithNegative = scoresLast.lastIndexOf(20, -3);
console.log({ indexWithNegative });

// Array.prototype.includes();

// 1) Basic Array includes() method examples

const numberInclude = [1, 2, 3, 4, 5, 6];
const isIncludeOne = numberInclude.includes(1);
console.log({ isIncludeOne });

// 2) Using the fromIndex argument;
const isIncludeTwo = numberInclude.includes(2, 1);
console.log({ isIncludeTwo });

// 3) Using Array includes() method with arrays of objects

const bmw = { name: "BMW" };
const toyota = { name: "Toyota" };
const ford = { name: "Ford" };

const cars = [ford, toyota];
console.log(cars.includes(ford));
console.log(cars.includes(bmw));

// includes vs. indexOf
let result = NaN === NaN;
console.log({ result });

result = NaN === NaN;
console.log({ result });

const arr = [1, NaN, 2, 3];
let resultIndex = arr.indexOf(NaN);
console.log({ resultIndex });

resultInclude = arr.includes(NaN);
console.log(resultInclude);

// Array.prototype.find();

// Basic Array find() method example

const numberFind = [1, 2, 3, 4, 5, 6];
const x = numberFind.find((num) => num % 2 === 0);
console.log({ x });

// Using the find() method with an array of strings;

const names = ["Joe", "Paul", "George", "Paulia"];
const match = names.find((name) => name.includes("au"));
console.log({ match });

// Using the find() method with an array of object;
const todos = [
  {
    id: 1,
    text: "Learn Javascript",
    isCompleted: false,
  },
  {
    id: 2,
    text: "Master Javascript",
    isCompleted: false,
  },

  {
    id: 3,
    text: "Build an App",
    isCompleted: false,
  },
];

const todo = todos.find((todo) => todo.id === 2);
console.log({ todo });

// Array.prototype.findIndex()

// 1) Basic findIndex() method example

let numbersFind = [1, 5, 7, 8, 10, 7];
let findNumber = numbersFind.findIndex((num) => num === 7);
console.log({ findNumber });

// 2) Using the findIndex() method with complex conditions

let findNumberComplex = numbersFind.findIndex(
  (num, index) => num === 7 && index > 2
);
console.log({ findNumberComplex });

// 3) Using the Array findIndex() method with an array of objects
const products = [
  { name: "Phone", price: 999 },
  { name: "Computer", price: 1999 },
  { name: "Tablet", price: 1255 },
];

const productIndex = products.findIndex((product) => product["price"] > 1000);
console.log({ productIndex });
