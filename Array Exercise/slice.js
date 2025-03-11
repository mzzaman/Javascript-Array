// TODO: Implement the array.slcie() function ;

function arraySlice(array, beginIndex = 0, endIndex = array.length) {
  let partArray = [];

  // Loop from beginIndex to endIndex (excluding endIndex)
  for (let i = beginIndex; i < endIndex; i++) {
    partArray.push(array[i]);
  }
  return partArray;
}

console.log(arraySlice([1, 2, 3, 4, 5, 6, 7])); // [1, 2, 3, 4, 5, 6, 7]

console.log(arraySlice([1, 2, 3, 4, 5, 6, 7], 3)); // [ 4, 5,6,7]

console.log(arraySlice([1, 2, 3, 4, 5, 6, 7], 3, 5)); // [ 4, 5,6,]
