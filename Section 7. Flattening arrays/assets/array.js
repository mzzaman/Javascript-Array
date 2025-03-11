// Array.prototype.flat();

// Basic flat() method example
const numbers = [1, 2, [3, 4, 5]];
const flatNumber = numbers.flat();
console.log({ flatNumber });
console.log({ numbers });

// Using the depth argument;
const numberDepth = [1, 2, [3, 4, 5, [6, 7, 8, [9, 10]]]];
const flatNumber2 = numberDepth.flat(4);
console.log({ flatNumber2 });

const numberDepth2 = [1, 2, [3, 4, 5, [6, 7, 8, [9, 10]]]];
const flatNumber3 = numberDepth2.flat(Infinity);
console.log(flatNumber3);

// Flatting API response data
const data = [
  { id: 1, tags: ["javascript", "es6"] },
  { id: 2, tags: ["html", "css"] },
  { id: 3, tags: ["react", ["redux", "hooks"]] },
];

const allTags = data.map((item) => item.tags).flat(Infinity);
console.log(allTags);

// Array.prototype.flatMap()

// 1) Basic JavaScript Array flatMap() method example

const numberMap = [-2, 0, 4, 9];
const resultMap = numberMap.flatMap((number) =>
  number >= 0 ? Math.sqrt(number) : []
);
console.log(resultMap);

// 2) Extracting words from sentences

let sentences = [
  "JavaScript is good",
  "JavaScript is nice",
  "JavaScript is fun",
];

let words = sentences.flatMap((sentence) => sentence.split(" "));
console.log(words);

// 3) Using the flatMap() method to process API responses

const posts = [
  { id: 1, tags: ["javascript"] },
  { id: 2, tags: ["react", "react native"] },
  { id: 3, tags: ["redux", "zustand"] },
];

const allTags2 = posts.flatMap((post) => post.tags);
console.log(allTags2);
