//Input: "Mr John Smith ", 13
//Output: "Mr%20John%20Smith"

console.log(replaceSpace('Mr John Smith'.split(''), 13));

function replaceSpace(arr, length) {
  let space = 0;
  for(let i=0; i<length; i++) {
    if(arr[i] === ' ') {
      space++;
    }
  }
  let newLength = length + space * 2;
  let newArr = new Array(newLength);

  for(let i=0,j=0; j<newLength; j++,i++) {
    if(arr[i] === ' ') {
      newArr[j] = '%';
      newArr[++j] = '2';
      newArr[++j] = '0';
    } else {
      newArr[j] = arr[i];
    }
  }

  return newArr.join('');

}