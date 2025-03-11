// Array.prototype.join()

// 1) Basic Array join() method example

const array = ["a", "b", "c"];
const str = array.join("-");
console.log(str);

// 2) Using the join() method to join CSS classes
const cssClasses = ["btn", "btn-primary", "btn-active"];
const btnClass = cssClasses.join(" ");
console.log(btnClass);

// 3) Generating HTML using the map() and join() methods

// const root = document.getElementsByClassName("root");

const todos = [
  { id: 1, text: "Learn HTML" },
  { id: 2, text: "Learn CSS" },
  { id: 3, text: "Learn JavaScript" },
];

const renderdTodos = todos.map((todo) => `<li>${todo.text}</li>`).join("");
document.querySelector(".root").innerHTML = renderdTodos;

// 3) Using the JavaScript Array join() method to replace all occurrences of a string

const title = "Javascript array join example";
const url = title.split(" ").join("-").toLowerCase();
console.log(url);
