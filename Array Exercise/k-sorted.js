// Find common elements in k-sorted arrays;

function common(kArray) {
  let map = new Map();

  // Traverse each array;
  for (let i = 0; i < kArray.length; i++) {
    let uniqueElements = new Set(kArray[i]); // Remove duplicates within the array;

    uniqueElements.forEach((element) => {
      // Increment the count in the map
      if (map.has(element)) {
        map.set(element, map.get(element) + 1);
      } else {
        map.set(element, 1);
      }
    });
  }

  let commonElements = [];
  for (let [element, count] of map) {
    if (count === kArray.length) {
      commonElements.push(element);
    }
  }
  return commonElements;
}
let arrays = [
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [1, 2, 3, 6],
];

console.log(common(arrays));
