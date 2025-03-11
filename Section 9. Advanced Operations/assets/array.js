// ES6 Destructuring Assignment;
function getScores() {
  return [70, 80, 90];
}

let scores = getScores();

let x = scores[0],
  y = scores[1],
  z = scores[2];
console.log({ x, y, z });

// Using Destructuring
const [x1, y1, z1] = getScores();
console.log({ x1, y1, z1 });

// Array Destructuring Assignment and Rest syntax

function getScores2() {
  return [70, 80, 90, 100];
}

let [a, b, ...args] = getScores2();
console.log({ a, b, args });

// Setting default values
function getItems() {
  return [10, 20];
}

let items = getItems();
let thirdItem = items[2] != undefined ? items[2] : 0;
console.log({ thirdItem });

// Nested array destructuring
function getProfile() {
  return ["Devil", "Doe", ["Red", "Green", "Blue"]];
}

let [firstName, lastName, [color1, color2, color3]] = getProfile();
console.log({ firstName });
console.log(color3);

// JavaScript Spread Operator

const add = [1, 3, 5];
const even = [2, 4, 6];

// using concat()
const number = add.concat(even);
console.log({ number });

// Using spread Operator;
const numberSpreed = [...add, ...even];
console.log(numberSpreed);

// JavaScript spread operator and apply() method
function compare(a, b) {
  return a - b;
}

let result = compare.apply(null, [1, 2]);
console.log(result);
let result2 = compare(...[1, 2]);
console.log(result2);

// A better way to use the Array’s push() method example

let rivers = ["Nile", "Ganges", "Yangte"];
let moreRivers = ["Danube", "Amazon"];

// Method concat
let method1 = rivers.concat(moreRivers);
console.log(method1);

// Method apply;

[].push.apply(rivers, moreRivers);
console.log(rivers);

// Method spread
rivers.push(...moreRivers);
console.log(rivers);

// JavaScript spread operator and array manipulation

// 1) Constructing array literal

let initialChars = ["A", "B"];
let chars = [...initialChars, "C", "D"];
console.log(chars);

// 2) Concatenating arrays
let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers);

// 3) Copying an array
let scores2 = [80, 70, 90];
let copiedScores = [...scores2];
console.log(copiedScores);
