var expression = "{{}}{}{}"
var expressionFalse = "{}{{}";

console.log(isBalanced(expression)); // true
console.log(isBalanced(expressionFalse)); // false
console.log(isBalanced("")); // true

function isBalanced(expression) {
  let stack = [];

  for(let i=0; i<expression.length; i++) {
    let cursor = expression.charAt(i);
    if(cursor === '{') {
      stack.push(cursor);
    } else if(cursor === '}') {
      if(stack.length <= 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}