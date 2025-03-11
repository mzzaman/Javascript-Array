// Array.prototype.concat();
let odds = [1, 3, 5];
let evens = [2, 4, 6];

let results = odds.concat(evens);
console.log({ results });

// Merging three arrays

let upper = ["A", "B", "C"];
let lower = ["a", "b", "c"];
let digits = [1, 2, 3];
let alphanumerics = upper.concat(lower, digits);
console.log({ alphanumerics });

// Copying an array;

let colors = ["red", "green", "blue"];
let rgb = colors.concat();
console.log({ rgb });

let moreColors = rgb.concat("Yellow", "Magento");
console.log({ moreColors });

// Merging arrays using the spread operator

let odds2 = [1, 3, 5];
let evens2 = [2, 4, 6];

let results2 = [...odds2, ...evens2];
console.log(results2);
