var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];

console.log(intersection(firstArray, secondArray)); // [2, 1]

function intersection(firstArray, secondArray) {
  let map = {};
  let set = new Set();
  firstArray.forEach(n => map[n] = true);
  secondArray.forEach(n => {
    if(map[n]) {
      set.add(n);
    }
  })

  return [...set];
}