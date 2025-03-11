// Array.prototype.map()

// 1) Basic JavaScript Array map() method example;
const numbers = [1, 2, 3];
const results = numbers.map((number) => number * 3);
console.log({ results });

// 2) Using Array map() method to generate HTML elements

const goals = [
  {
    name: "Learn HTML",
    date: "2025-10-03",
  },
  {
    name: "Learn CSS",
    date: "2025-10-04",
  },
  {
    name: "Learn Javascript",
    date: "2025-10-05",
  },
];

const renderGoal = (goal) => {
  return `
  <div class="goal">
  <p class="goal__name"> 🎯 ${goal.name}</p>
  <span class="goal__date"> 📆 ${new Date(
    goal.date
  ).toLocaleDateString()}</span>
  </div> 
  `;
};

const goalElement = document.querySelector(".goals");
goalElement.innerHTML = goals.map(renderGoal).join("");

// Array.prototype.filter()

// 1) Basic JavaScript array filter() example

const filterNumber = [1, 3, 2, 7];
const resultFilter = filterNumber.filter((num) => num > 2);
console.log({ resultFilter });

// 2) Using the filter() method with an array objects

const cities = [
  { name: "Los Angeles", population: 3_792_621 },
  { name: "New York", population: 8_175_133 },
  { name: "Chicago", population: 2_695_598 },
  { name: "Houston", population: 2_099_451 },
  { name: "Philadelphia", population: 1_526_006 },
];

const bigCities = cities.filter((city) => city.population > 3_000_000);
console.log({ bigCities });

// 3) Chaining the filter() method with other array methods;

cities
  .filter((city) => city.population < 3_000_000)
  .map((city) => city.name)
  .forEach((city) => console.log(city));

// 4) Using the thisArg argument

function isInRange(value) {
  if (typeof value !== "number") {
    return false;
  }
  return value >= this.lower && value <= this.upper;
}

let range = {
  lower: 1,
  upper: 10,
};

let date = [10, 20, "30", 1, 5, "JS", undefined];

let resultThisArg = date.filter(isInRange, range);
console.log(resultThisArg);

// Array.prototype.reduce();

// 1) Basic Array reduce() method example

const numberReduce = [1, 2, 3];
const total = numberReduce.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log({ total });

// 2) Using reduce() method with an initial value

const cart = [
  {
    product: "phone",
    qty: 1,
    price: 500,
  },
  {
    product: "Screen Protector",
    qty: 1,
    price: 10,
  },
  {
    product: "Memory Card",
    qty: 2,
    price: 20,
  },
];

const reducer = (acc, item) => acc + item.qty * item.price;
const totalCost = cart.reduce(reducer, 0);
console.log({ totalCost });

// Array.prototype.reduceRight()

const numberRight = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const totalRight = numberRight.reduceRight((sum, num) => sum + num, 0);
console.log(totalRight);

// JavaScript reduceRight vs. reduce() example
const charsRight = ["E", "C", "M", "A"];
const resultReduceRight = charsRight.reduceRight((a, c) => a + c, "");

console.log({ resultReduceRight });

const charsReduce = ["E", "C", "M", "A"];
const resultReduce = charsReduce.reduce((a, c) => a + c, "");
console.log({ resultReduce });

// Array.prototype.every();

const numberEvery = [1, 3, 5, 7, 9];
const resultEvery = numberEvery.every((num) => num > 0);
console.log({ resultEvery });
const resultFalse = numberEvery.every((num) => num % 2 === 0);
console.log({ resultFalse });

// Using the thisArg argument

const numbers2 = [2, 4, 7];
const range2 = {
  min: 0,
  max: 10,
};

const isInRange2 = function (num) {
  return num >= this.min && num <= this.max;
};
const result2 = numbers2.every(isInRange2, range2);
console.log({ result2 });

// Array.prototype.some();

let marks = [4, 5, 7, 9, 10, 3];
let lessThanFive = false;
for (let index = 0; index < marks.length; index++) {
  if (marks[index] < 5) {
    lessThanFive = true;
    break;
  }
}
console.log(lessThanFive);

let lessThanFive2 = marks.some((e) => e < 5);
console.log(lessThanFive2);

// 1) Check if an element exists in the array

function exists(value, array) {
  return array.some((e) => e === value);
}

let marks2 = [4, 5, 7, 9, 10, 2];
console.log(exists(4, marks2));
console.log(exists(7, marks2));

// 2) Check if an array has one element that is in a range

let marks3 = [4, 5, 7, 9, 10, 2];

const range3 = {
  min: 8,
  max: 10,
};

let result3 = marks3.some(function (e) {
  return e >= this.min && e <= this.max;
}, range3);

console.log({ result3 });

// Array.prototype.some()

let numberSort = [0, 2, 5, 3, 10];
numberSort.sort((a, b) => a - b);
console.log(numberSort);

// Sorting an array of strings;
let animals = ["cat", "dog", "elephant", "bee", "ant"];

animals.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
});
console.log(animals);

let mixedCaseAnimals = ["Cat", "dog", "Elephant", "bee", "ant"];

mixedCaseAnimals.sort(function (a, b) {
  let x = a.toUpperCase(),
    y = b.toUpperCase();
  return x == y ? 0 : x > y ? 1 : -1;
});
console.log(mixedCaseAnimals);

// Sorting objects by a numerical property;

let employees = [
  { name: "John", salary: 90000, hireDate: "July 1, 2010" },
  { name: "David", salary: 75000, hireDate: "August 15, 2009" },
  { name: "Ana", salary: 80000, hireDate: "December 12, 2011" },
];

// sort by salary
employees.sort((x, y) => x.salary - y.salary);

console.table(employees);

// sort by name

employees.sort((x, y) => {
  let a = x.name.toUpperCase(),
    b = y.name.toUpperCase();
  return a === b ? 0 : a > b ? 1 : -1;
});
console.table(employees);

// sort by date;

employees.sort((x, y) => {
  let a = new Date(x.hireDate),
    b = new Date(y.hireDate);
  return a - b;
});
console.table(employees);

// Optimizing JavaScript Array sort() method
let rivers2 = ["Nile", "Amazon", "Congo", "Mississippi", "Rio-Grande"];

rivers2.sort((a, b) => {
  console.log(a, b);
  return a.length - b.length;
});

let rivers = ["Nile", "Amazon", "Congo", "Mississippi", "Rio-Grande"];

// temporary array holds objects with position and length of element
const lengths = rivers.map(function (e, i) {
  return { index: i, value: e.length };
});

// sorting the lengths array containing the lengths of river names
lengths.sort(function (a, b) {
  return +(a.value > b.value) || +(a.value === b.value) - 1;
});

// copy element back to the array
const sortedRivers = lengths.map(function (e) {
  return rivers[e.index];
});

console.log(sortedRivers);

// Array.prototype.forEach()

let ranks = ["A", "B", "C"];
for (let i = 0; i < ranks.length; i++) {
  console.log(ranks[i]);
}

ranks.forEach((ele) => console.log(ele));

class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
  current() {
    return this.count;
  }
  reset() {
    this.count = 0;
  }
}

const counter = new Counter();

const nums = [1, 2, 3];
let sum = 0;
nums.forEach(function (num) {
  sum += num;
  this.increment();
}, counter);

console.log({ sum });
console.log({ counter });

// Array.prototype.with()

const numberWith = [1, 2, 3];
const newNumberWith = numberWith.with(1, 20);
console.log({ numberWith });
console.log({ newNumberWith });

// Using the Array with() method with an array of objects
const todosWith = [
  { id: 1, title: "Learn HTML", completed: true },
  { id: 2, title: "Learn CSS", completed: false },
  { id: 3, title: "Learn JavaScript", completed: false },
];

const newTodos = todosWith.with(1, { ...todosWith[1], completed: true });
console.log({ newTodos });
