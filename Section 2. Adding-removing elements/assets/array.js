// TODO: JavaScript Array push() method examples;

// 1) Append one element to an array;
let numbers = [10, 20, 30];
const length = numbers.push(40);
console.log({ numbers });
console.log({ length });

// 2) Add multiple elements to the end of an array;
const newLength = numbers.push(50, 60, 70);
console.log({ numbers });
console.log({ newLength });

// 3) Append elements of an array to another array;

let colors = ["red", "green", "blue"];
let cmyk = ["cyan", "magenta", "yellow", "back"];

// for (const color of cmyk) {
//   colors.push(color);
// }
// console.log(colors);

// ES6;

colors.push(...cmyk);
console.log(colors);

let greetings = {
  0: "hi",
  1: "hello",
  length: 2,
  append(message) {
    [].push.call(this, message);
  },
};

greetings.append("Howdy");

greetings.append("Devil");
console.log(greetings);

// TODO: Array.prototype.unshift();

// 1) Prepend an element to an array;
let numbers2 = [30, 40];
// const length2 = numbers2.unshift(20);
// console.log({ length2 });
// console.log({ numbers2 });

// 2) Prepend multiple elements to an array;
const length2 = numbers2.unshift(10, 20);
console.log({ length2 });
console.log({ numbers2 });

// 3) Prepend elements of an array to another array
const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const weekends = ["Sat", "Sun"];

for (const weekend of weekends) {
  days.unshift(weekend);
}
console.log(days);

// ES6
// const newDays = days.unshift(...weekends);
// console.log(days);

// Using the JavaScript Array unshift() method with array-like objects

// let greetings2 = {
//   0: "Devil",
//   1: "Doe",
//   2: "Hello",
//   length: 3,
//   append(message) {
//     [].unshift.call(this, message);
//     return this.length;
//   },
// };

// greetings2.append("Good Day");
// console.log(greetings2);

// ES6;

let es6Greeting = {
  0: "Devil",
  1: "Doe",
  2: "Hello",
  length: 3,
  prepend(...message) {
    [].unshift.call(this, ...message);
    return this.length;
  },
};

es6Greeting.prepend("Good Day", "World", "Bye", "Nice");
console.log(es6Greeting);

// Array.prototype.pop()
const numbers3 = [10, 20, 30];
const last = numbers3.pop();

console.log({ last });
console.log({ length: numbers3.length });

// Using the pop() method with array-like objects

const greeting3 = {
  0: "Hi",
  1: "Hello",
  2: "Howdy",
  length: 3,

  remove() {
    return [].pop.call(this);
  },
};

console.log({ length: greeting3.length });
console.log(greeting3.remove()); // Howdy
console.log({ length: greeting3.length });

// Array.prototype.shift()
const numbers4 = [10, 20, 30];
let number = numbers4.shift();

console.log({ number });
console.log({ numbers4 });
console.log({ length: numbers4.length });

// 2) Using the JavaScript array shift() method inside a loop
while ((number = numbers4.shift()) !== undefined) {
  console.log(number);
}

// Using the shift() method with an array-like object
let greeting4 = {
  0: "Hi",
  1: "Hello",
  2: "Bye",
  length: 3,
  removeFirst() {
    return [].shift.call(this);
  },
};

const firstRemove = greeting4.removeFirst();
console.log(firstRemove);

// Array.prototype.splice();

let scores = [1, 2, 3, 4, 5];
let removeIndex = scores.splice(0, 3);
console.log({ scores });
console.log({ removeIndex });

let colors2 = ["red", "blue", "green"];

colors2.splice(2, 0, "purple");
console.log({ colors2 });

// Replacing elements using the JavaScript Array splice() method;

let languages = ["php", "javascript", "go", "java"];
languages.splice(2, 0, "c++", "c");
console.log(languages);

// Introduction to JavaScript Array slice() method;

let colors3 = ["red", "green", "blue", "yellow", "purple"];
let rgb = colors.slice(0, 3);
console.log(rgb);

// Convert array-like objects into arrays

function toArray() {
  return Array.prototype.slice.call(arguments);
}

let classification = toArray("A", "B", "C");

console.log(classification);
