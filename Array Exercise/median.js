// Problem : Find the median of two sorted arrays of the same size;

// function medianOfArray(array) {
//   // Sort the array first;
//   //   array.sort((a, b) => a - b);

//   let length = array.length;
//   let mid = Math.floor(length / 2);

//   // Check if the length is odd or even;
//   return length % 2 === 1
//     ? // odd length: return the middle element;
//       array[mid]
//     : // Even length: return the average of the two middle numbers;
//       (array[mid] + array[mid - 1]) / 2;
// }

// array2 is the bigger array;

// function medianOfTwoSortedArrays(arr1, arr2, n) {
//   if (n <= 0) return -1;
//   if (n === 1) return (arr1[0] + arr2[0]) / 2;
//   if (n === 2)
//     return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2;

//   let mid = Math.floor(n / 2);
//   let median1 = arr1[mid];
//   let median2 = arr2[mid];

//   if (median1 === median2) return median1;

//   if (median1 < median2) {
//     return medianOfTwoSortedArrays(
//       arr1.slice(mid),
//       arr2.slice(0, n - mid),
//       n - mid
//     );
//   } else {
//     return medianOfTwoSortedArrays(
//       arr1.slice(mid),
//       arr2.slice(0, n - mid),
//       n - mid
//     );
//   }
// }

// let first = [1, 12, 15, 26, 38];
// let last = [2, 13, 17, 30, 45];
// console.log(medianOfTwoSortedArrays(first, last, first.length));

function medianOfTwoSortedArrays(arr1, arr2, n) {
  if (n <= 0) return -1;
  if (n === 1) return (arr1[0] + arr2[0]) / 2;
  if (n === 2)
    return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2;

  let mid = Math.floor(n / 2);
  let median1 = arr1[mid];
  let median2 = arr2[mid];

  if (median1 === median2) return median1;

  if (median1 < median2) {
    return medianOfTwoSortedArrays(
      arr1.slice(mid), // Take right half of arr1
      arr2.slice(0, n - mid), // Take left half of arr2
      n - mid
    );
  } else {
    return medianOfTwoSortedArrays(
      arr2.slice(mid), // Take right half of arr2
      arr1.slice(0, n - mid), // Take left half of arr1
      n - mid
    );
  }
}

let first = [1, 12, 15, 26, 38];
let last = [2, 13, 17, 30, 45];

console.log(medianOfTwoSortedArrays(first, last, first.length)); // Output: 16
