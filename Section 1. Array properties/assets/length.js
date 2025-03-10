// JavaScript Array Length;

// TODO: 1) Dense arrays;

let colors = ["red", "green", "blue"];
console.log(colors.length); // 3

colors.push("teal");
console.log(colors.length); // 4

colors = [];
console.log(colors.length); // 0

// TODO: 2) Sparse arrays

let numbers = [10, 20, 30];
console.log(numbers.length); // 3;

numbers = [10, , 20, 30];
console.log(numbers.length); // 4;
numbers[10] = 100;
console.log(numbers.length); // 11;

// TODO: Modifying JavaScript Array length property;

// 1) Empty an array;
let fruits = ["Apple", "Orange", "Strawberry"];
fruits.length = 0;
console.log(fruits); // [];

// 2) Removing elements;
let fruits2 = ["Apple", "Orange", "Strawberry"];
fruits2.length = 2;
console.log(fruits2);

// 3) Making the array sparse;
const fruits3 = ["Apple", "Orange", "Strawberry"];
fruits3.length = 5;
console.log(fruits3);
