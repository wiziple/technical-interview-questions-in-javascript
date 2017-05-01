// Write a recursive function that performs a binary search (data must be sorted)

const arr = [1,3,6,9,15,18,24,32,63]; 

console.log(recursiveBinarySearch(arr, 8, 0, arr.length));

function recursiveBinarySearch(array, value, left, right) {
  if(left > right) return -1;

  let mid = Math.floor((left + right) / 2);
  // console.log(left, right, mid);

  if(array[mid] === value) {
    return mid;
  } else if( array[mid] > value) {
    return recursiveBinarySearch(array, value, left, mid-1);
  } else if (array[mid] < value) {
    return recursiveBinarySearch(array, value, mid+1, right);
  }

}