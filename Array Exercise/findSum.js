// Summary: Find two array elements in an array that add up to a number;

// Problem : Given the array arr, find and return two indices of the array that add up to weight or return -1 if there is no combination that adds up to weight.
// TODO: Method-1;

function findSum(arr, weight) {
  for (let index = 0; index < arr.length; index++) {
    for (let index2 = index + 1; index2 < arr.length; index2++) {
      if (arr[index] + arr[index2] == weight) {
        return [index, index2];
      }
    }
  }
  return -1;
}

const arr = [1, 6, 3, 4, 2];
const weight = 9;
console.log(findSum(arr, weight));

// TODO: Method - 2;

function findSumBetter(arr, weight) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let complement = weight - arr[i];
    console.log(complement);
    if (map.has(complement)) {
      return [map.get(complement), i]; // Return the indices
    }

    map.set(arr[i], i); // Store number and its index
  }
  return -1;
}

console.log(findSumBetter([1, 2, 3, 4, 5], 9));

console.log(findSumBetter([1, 2, 5, 6, 3, 4], 11));
