console.log(decimalToBinary(3)); // 11
//console.log(decimalToBinary(8)); // 1000
//console.log(decimalToBinary(1000)); // 1111101000

function decimalToBinary(digit) {
  if(digit === 1) return 1;
  let current = digit % 2;
  console.log(current);
  let next = digit / 2;
  if(next > 1) return decimalToBinary(next);
}