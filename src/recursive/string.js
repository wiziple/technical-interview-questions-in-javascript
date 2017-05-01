const test = 'this is string';

console.log(length(test));
console.log('----------');
print(test);
console.log('----------');
printReverse(test);

function length(str) {
  if(str === '') {
    return 0;
  } else {
    return 1+length(str.substring(1));
  }
}

function print(str) {
  if(str === '') {
    return;
  } else {
    console.log(str.charAt(0));
    print(str.substring(1));
  }
}


function printReverse(str) {
  if(str === '') {
    return;
  } else {
    printReverse(str.substring(1));
    console.log(str.charAt(0));
  }
}