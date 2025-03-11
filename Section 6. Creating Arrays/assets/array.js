// JavaScript Array.of()

let numbers = Array.of(10);
console.log({ numbers });
console.log({ length: numbers });

let chars = Array.of("A", "B", "C");
console.log({ chars });

const listItems = document.getElementsByTagName("li");
Array.of(...listItems).forEach((listItem) => (listItem.style.color = "red"));

// Array.of() method vs. Array constructor

const arr = new Array(3);
console.log({ arr }); // {arr: [<3 empty items]}
console.log({ length: arr.length }); // {length: 3}

const arr2 = new Array("3");
console.log({ arr2 });
console.log({ length: arr2.length });

// Solve Array problem;

const arr3 = Array.of(3);
console.log({ arr3 });
console.log({ length: arr3.length });

// JavaScript Array.from()
function arrayFromArgs() {
  let result = [];
  for (let i = 0; i < arguments.length; i++) {
    result.push(arguments[i]);
  }
  return result;
}

let fruits = arrayFromArgs("Apple", "Orange", "Banana");
console.log(fruits);

function arrayFromArgs2() {
  return Array.prototype.slice.call(arguments);
}

let fruits2 = arrayFromArgs("Apple", "Orange", "Banana");
console.log(fruits2);

// ES6

// 1) Creating an array from an array-like object
function arrayFromArgs3() {
  return Array.from(arguments);
}
console.log(arrayFromArgs3(1, "A"));

// 2) Using JavaScript Array.from() method with a mapping function
function addOne() {
  return Array.from(arguments, (x) => x + 1);
}
console.log(addOne(1, 2, 3));

// 3) Using Array.from() method with the this value

let double = {
  factor: 2,
  double(x) {
    return x * this.factor;
  },
};

let scores = [5, 6, 7];
let newScores = Array.from(scores, double.double, double);
console.log(newScores);

// 4) Creating an array from an iterable object
let even = {
  *[Symbol.iterator]() {
    for (let i = 0; i < 10; i++) {
      yield i;
    }
  },
};

let evenNumber = Array.from(even);
console.log(evenNumber);
