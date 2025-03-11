// JavaScript Multidimensional Array;

let activities = [
  ["Work", 9],
  ["Eat", 1],
  ["Commute", 2],
  ["Play Game", 1],
  ["Sleep", 7],
];

console.table(activities);

// Adding elements to the JavaScript
activities.push(["Study", 2]);
console.table(activities);

activities.splice(1, 0, ["Programming", 2]);
console.table(activities);

activities.forEach((activity) => {
  let percentage = ((activity[1] / 24) * 100).toFixed();
  activity[2] = percentage + "%";
});
console.table(activities);

// Iterating over elements of the multidimensional array;

// loop the outer array;
for (let i = 0; i < activities.length; i++) {
  // get the size of the inner array
  let innerArrayLength = activities.at(i).length;
  // loop the inner array;
  for (let j = 0; j < innerArrayLength; j++) {
    console.log("[" + i + ", " + j + "] = " + activities.at(i).at(j));
  }
}

activities.forEach((activity) => {
  activity.forEach((data) => {
    console.log(data);
  });
});
