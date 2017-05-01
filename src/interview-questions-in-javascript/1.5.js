var firstArray = [2, 2, 4, 1];
var secondArray = [0, 0, 0, 2];
var thirdArray = [-2, -2, -3, 2];

console.log(productExceptSelf(firstArray)); // [8, 8, 4, 16]

function productExceptSelf(numArray) {
  let product = 1;
  numArray.forEach(num => {
    product *= num;
  });

  let output = [];
  numArray.forEach(num => {
    if(num === 0) {
      return output.push(0);
    }
    output.push(product / num);
  });

  return output;
}