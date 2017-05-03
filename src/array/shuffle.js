/*[a1,a2,a3...,an,b1,b2...bn] => [a1,b1,a2,b2.....an,bn]*/

let arr = ['a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'b5'];

console.log(shuffle(arr));

function shuffle(arr) {
  let mid = arr.length / 2;
  let newArr = [];

  for(let i=0; i<arr.length; i++) {
    if(i % 2 === 0) {
      newArr[i] = arr[i/2];
    } else {
      newArr[i] = arr[(i-1)/2 + mid];
    }
  }

  return newArr;
}