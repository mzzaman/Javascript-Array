// Array.prototype.at()
const result = [5, 6, 7];
console.log(result[1]);

// ES2022
console.log(result.at(1));

console.log(result.at(-1) === result[result.length - 1]);

// Array.prototype.reverse()

const colors = ["red", "green", "blue"];
colors.reverse();

console.log(colors);

const scores = [1, 3, 5, 7];
scores.reverse();

console.log(scores);

// 3) Reversing arrays of objects
const books = [
  { title: "Eloquent JavaScript", author: "Marijn Haverbeke" },
  { title: "JavaScript: The Good Parts", author: "Douglas Crockford" },
  { title: "JavaScript: The Definitive Guide", author: "David Flanagan" },
];

books.reverse();

console.log(books);

// 4) Using reverse() on sparse arrays
const scores2 = [1, , 7, 5];
scores2.reverse();

console.log(scores2);

// 5) Using JavaScript array reverse() on non-array objects

const arrayLike = {
  length: 3,
  unrelated: "bar",
  2: 2,
  3: 3, // ignored by reverse() since length is 3
};
console.log(Array.prototype.reverse.call(arrayLike));

// Array.prototype.toReversed()

// 1) Using Array toReversed() method on string arrays

const colors2 = ["red", "green", "blue"];
const reversedColor = colors2.toReversed();
console.log(colors2);
console.log(reversedColor);

// 2) Reversing arrays of numbers

const scores3 = [1, 3, 5, 7];
const reversedScores = scores3.toReversed();

console.log(scores3);
console.log(reversedScores);

// 3) Reversing arrays of objects
const contacts = [{ name: "John" }, { name: "Alice" }, { name: "Bob" }];
const reversedContacts = contacts.toReversed();

console.log(contacts);
console.log(reversedContacts);

// 4) Reversing sparse arrays
const scores4 = [1, , 7, 5];
const reversedScores2 = scores4.toReversed();

console.log(scores4);
console.log(reversedScores2);

// 5) Using toReversed() method with non-array objects
const arrayLike2 = {
  length: 3,
  unrelated: "bar",
  2: 2,
  3: 3, // ignored because the length is 3
};

const result4 = Array.prototype.reverse.call(arrayLike2);

console.log(result4);
