//example : 0 1 1 2 3 5 8 13 21

// recursive way

function fibonacci(n) {
  const a = 0;
  const b = 1;

  if (n < 2) { 
    return n;
  } else {
    return fibonacci(n-1) + fibonacci(n-2);
  }
}

console.log(fibonacci(8));