/* 
Greatest Common Divisor

the greatest common divisor (gcd) of two or more integers, 
which are not all zero, is the largest positive integer that divides each of the integers.
For example, the gcd of 8 and 12 is 4.
*/

console.log(gcd(12, 8));

function gcd(p, q) {
  if (q === 0) {
    return p;
  } else {
    return gcd(q, p % q);
  }
}

